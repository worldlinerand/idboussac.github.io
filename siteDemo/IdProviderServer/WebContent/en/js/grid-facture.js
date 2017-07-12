/*
 * Ext JS Library 2.0.2
 * Copyright(c) 2006-2008, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */
	
Ext.onReady(function(){
	

    Ext.state.Manager.setProvider(new Ext.state.CookieProvider());

    var myBills = window.top.myBills;

    // create the data store
    var storeFacture = new Ext.data.SimpleStore({
		id:'storeFacture',
        fields: [
           {name: 'organisme'},
		   {name: 'montantFacture'},
		   {name: 'description'},
		   {name: 'numeroFacture'},
		   {name: 'dateLimite'},
           {name: 'facture'},
		   {name: 'paiement'}
        ]
    });
	storeFacture.loadData(myBills);
	
	//fonction de rendu montant
	function montant(val){
        return '<b>'+val+' &euro;</b/>';
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
	
	var colFacture = new Ext.grid.ColumnModel([
            {header: "&eacute;metteur = Issuer", width : 100, dataIndex:'organisme'},
			{header: "Amount", width: 60, sortable: true, renderer: montant, dataIndex: 'montantFacture'},
			{header: "Description", width: 150, sortable: false, renderer: description, dataIndex: 'description'},
			{id:'numeroFacture',header: "Num&eacute;ro <br/>de Facture", width : 150, sortable: true},
            {header: "Date Limite <br/>de Paiement", width: 80, sortable: true, dataIndex: 'dateLimite'},
            {header: "Facture", width: 80, renderer: lien, dataIndex: 'facture'},
			{header: "Payer", width: 80, renderer: paiement, dataIndex: 'paiement'}
        ]);
    // create the Grid
    var gridFacture = new Ext.grid.GridPanel({
		id:'GridFacture',
        store: storeFacture,
		colModel: colFacture,
        stripeRows: true,
        height:250,
        width:686,
		autoExpandColumn: 'numeroFacture',
        title:'Mes Factures to pay',
        tbar: new Ext.PagingToolbar({
            pageSize: 10,
            store: storeFacture,
            displayInfo: true,
            displayMsg: "[Factures {0} - {1} on {2}]",
            emptyMsg: "Pas de bills"
        })
    });
	gridFacture.getTopToolbar().onRender=noRefresh;
    gridFacture.render('gridwlbank');
});
