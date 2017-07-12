/*
 * Ext JS Library 2.0.2
 * Copyright(c) 2006-2008, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */
	
Ext.onReady(function(){
	

    Ext.state.Manager.setProvider(new Ext.state.CookieProvider());

    
    // create the data store
    var storeDetail = new Ext.data.SimpleStore({
		id:'storeDetail',
        fields: [
       {name: 'date'},
		   {name: 'libelle'},
		   {name: 'debit'},
		   {name: 'credit'},
        ]
    });
   
	var operations = new Array();
		
	jQuery.get("/eBankCashServer/application.app?compteEBankCashOperations&lang=en",{},	        
	       function(xml) {
	           jQuery(xml).find('operation').each(function(){
	                var date = jQuery(this).find('date').text();
	                var libelle = jQuery(this).find('libelle').text();
	                var debit = jQuery(this).find('debit').text();
	                var credit = jQuery(this).find('credit').text();
	                var operation = new Array();
	                operation.push(date);
	                operation.push(libelle);
	                operation.push(debit);
	                operation.push(credit);
	                operations.push(operation);
	            }); //close each(
	            storeDetail.loadData(operations);        
     });	
	
	
	//fonction de rendu montant
	function montant(val){
	     if (val == ''){
          return '';
       } else {
        return '<b>'+val+',00 &euro;</b/>';
        }
    }
	//fonction de rendu description
	function description(val){
        return val;
    }
	//fonction de rendu lien
	function lien(val){
        return '<p><span class="lienFacture"><a target="_blank" href ="'+val+'">> Facture&nbsp;</a></span></p>';
    }
	//fonction de rendu paiement
	function paiement(val,cell,record,row,col,store){
		return '<p><span class="btnPayer"><a href="paiement-facture.html?idFacture='+store.indexOf(record)+'"><strong>> Payer </strong></a></span></p>';
    }
    
	// create the column model
	
	var colDetail = new Ext.grid.ColumnModel([
      {header: "Date", width : 130, sortable: true, dataIndex:'date'},
      {header: "Label", width: 200, sortable: true, dataIndex: 'libelle'},
      {header: "Debit", width: 100, sortable: true, renderer: montant, dataIndex: 'debit'},
      {header: "Credit", width: 100, sortable: true, renderer: montant, dataIndex: 'credit'},
    ]);
    // create the Grid
    var gridDetail = new Ext.grid.GridPanel({
		id:'GridDetail',
        store: storeDetail,
		colModel: colDetail,
        stripeRows: true,
        height:250,
        width:550,
        title:'List of operations',
        tbar: new Ext.PagingToolbar({
            pageSize: 10,
            store: storeDetail,
            displayInfo: true,
            displayMsg: "[Page {0} - {1} of {2}]",
            emptyMsg: "No operations"
        })
    });
	gridDetail.getTopToolbar().onRender=noRefresh;
	gridDetail.render('gridwlbank');
});
