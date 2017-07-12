/*
 * Ext JS Library 2.2
 * Copyright(c) 2006-2008, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/*
 * Ext JS Library 2.1
 * Copyright(c) 2006-2008, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

Ext.onReady(function(){
  
  
	var fournisseur= {
			records : [
			{name:"WL Energie",logo:'../imgs/paiementFacture/EDF.png'},
			{name:"WL Telecom",logo:'../imgs/paiementFacture/FT.png'}
			]};
	
	var fournisseurAChoisir= {
			records : [
			{name:"EDF",logo:'../imgs/paiementFacture/EDF.png'},
			{name:"GDF",logo:'../imgs/paiementFacture/GDF.png'},
			{name:"France Telecom",logo:'../imgs/paiementFacture/FT.png'},
			{name:"MACIF",logo:'../imgs/paiementFacture/MACIF.png'}
			]};
	
	
	// Generic fields array to use in both store defs.
	var fields = [
	   {name: 'name'},
	   {name: 'logo'}
	];
	
    // create the data store
    var firstGridStore = new Ext.data.JsonStore({
        fields : fields,
		data   : fournisseur,
		root   : 'records'
    });
	
	//fonction de rendu lien
	function img(val){
        return '<img src="'+val+'"></img>';
    }
	
	// Column Model shortcut array
	var cols = [
		{ id : 'name', header: "Fournisseur", width: 160, sortable: true, dataIndex: 'name'},
		{header: "", width: 50, sortable: true, renderer : img, dataIndex: 'logo'}
	];
    
	// declare the source Grid
    var firstGrid = new Ext.grid.GridPanel({
		ddGroup          : 'secondGridDDGroup',
        store            : firstGridStore,
        columns          : cols,
		enableDragDrop   : true,
        stripeRows       : true,
        autoExpandColumn : 'name',
        width            : 325,
		region           : 'west',
        title            : 'First Grid'
    });

    var secondGridStore = new Ext.data.JsonStore({
        fields : fields,
		data   : fournisseurAChoisir,
		root   : 'records'
    });
	
    // create the destination Grid
    var secondGrid = new Ext.grid.GridPanel({
		ddGroup          : 'firstGridDDGroup',
        store            : secondGridStore,
        columns          : cols,
		enableDragDrop   : true,
        stripeRows       : true,
        autoExpandColumn : 'name',
        width            : 325,
		region           : 'center',
        title            : 'Second Grid'
    });

	
	//Simple 'border layout' panel to house both grids
	var displayPanel = new Ext.Panel({
		width    : 650,
		height   : 300,
		layout   : 'border',
		renderTo : 'panel',
		items    : [
			firstGrid,
			secondGrid
		]
	});

	// used to add records to the destination stores
	var blankRecord =  Ext.data.Record.create(fields);

	/****
	* Setup Drop Targets
	***/
	// This will make sure we only drop to the view container
	var firstGridDropTargetEl =  firstGrid.getView().el.dom.childNodes[0].childNodes[1];
	var firstGridDropTarget = new Ext.dd.DropTarget(firstGridDropTargetEl, {
		ddGroup    : 'firstGridDDGroup',
		copy       : true,
		notifyDrop : function(ddSource, e, data){
			
			// Generic function to add records.
			function addRow(record, index, allItems) {
				
				// Search for duplicates
				var foundItem = firstGridStore.find('name', record.data.name);
				// if not found
				if (foundItem  == -1) {
					firstGridStore.add(record);
					
					// Call a sort dynamically
					firstGridStore.sort('name', 'ASC');
					
					//Remove Record from the source
					ddSource.grid.store.remove(record);
				}
			}

			// Loop through the selections
			Ext.each(ddSource.dragData.selections ,addRow);
			return(true);
		}
	}); 	

	
	// This will make sure we only drop to the view container
	var secondGridDropTargetEl = secondGrid.getView().el.dom.childNodes[0].childNodes[1]
	
	var destGridDropTarget = new Ext.dd.DropTarget(secondGridDropTargetEl, {
		ddGroup    : 'secondGridDDGroup',
		copy       : false,
		notifyDrop : function(ddSource, e, data){
			
			// Generic function to add records.
			function addRow(record, index, allItems) {
				
				// Search for duplicates
				var foundItem = secondGridStore.find('name', record.data.name);
				// if not found
				if (foundItem  == -1) {
					secondGridStore.add(record);
					// Call a sort dynamically
					secondGridStore.sort('name', 'ASC');
			
					//Remove Record from the source
					ddSource.grid.store.remove(record);
				}
			}
			// Loop through the selections
			Ext.each(ddSource.dragData.selections ,addRow);
			return(true);
		}
	}); 
});
