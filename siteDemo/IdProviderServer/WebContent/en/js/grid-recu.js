/*
 * Ext JS Library 2.0.2
 * Copyright(c) 2006-2008, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

Ext.onReady(function(){

    Ext.state.Manager.setProvider(new Ext.state.CookieProvider());
	var monBouton = window.top.frames[1].getBoutonRefresh();
	
	monBouton.on('click', function(){
	        Ext.MessageBox.show({
	           title: 'Load of the new messages',
	           msg: 'You have <b>2</b> New messages',
	           buttons: Ext.MessageBox.OK,
	           animEl: monBouton,
	           icon: Ext.MessageBox.INFO
	       });
		
		var myData = window.top.myData;
		myData.push([true,false,false,false,'','','','<b>Michel Dupont</b>','<b>Re: Chequebook request</b>','20/10/2007',3,
		"Hello,<br><br>I inform you that the chequebooks you ordered were sent this day to your address in London.<br>Do not hesitate to contact me for further information.<br><br>Yours sincerely<br><br>"]);
		myData.push([true,false,true,false,'','','','<b>Sophie Durand</b>','<b>Re: Meeting request</b>','22/10/2007',7,
		"Sir,<br><br>You asked for a phone meeting with your usual adviser Mr Dupont 2 days ago.<br>Unfortunately, Mr Dupont is absent for 2 weeks, I will substitute him in order to deal with your request.<br>If it is convenient for you, I shall call you back <b>on Thursday, October 25th at 3 pm</b> at this number +33  (1) 78 44 55 11<br><br>Yours sincerely<br><br>"]);
		
		window.top.frames[1].refreshMail();
		store.loadData(myData);
	});
	

    //var myData = window.top.myData;
	var myDataAssurance = window.top.myDataAssurance;
	var myDataEchange = window.top.myDataEchange;
	var myDataNouveau = window.top.myDataNouveau;
	var myDataSent = window.top.myDataSent;

    // example of custom renderer function
    function taille(val){
        return val+' ko';
    }
    
    function maselection(val){
        if (val){
          return '<input type="checkbox" checked />';
        }
        else{
          return '<input type="checkbox" />';
        }
    }
	
	function contientPJ(val){
        if (val){
          return '<img src="../imgs/iconeMail/trombone.gif"/>';
        }
        else{
          return '';
        }
    }
	
	function estUrgent(val){
        if (val){
          return '<img src="../imgs/iconeMail/important.gif"/>';
        }
        else{
          return '';
        }
    }

    // create the data store
    var store = new Ext.data.SimpleStore({
		id:'MailStore',
        fields: [
		   {name: 'nouveau', type:'bool'},
           {name: 'coche', type: 'bool'},
   		   {name: 'urgent', type: 'bool'},
		   {name: 'pj', type: 'bool'},
		   {name: 'nomPj'},
		   {name: 'taillePj'},
		   {name: 'adressePj'},
           {name: 'de'},
           {name: 'sujet'},
           {name: 'dateEnvoi', type: 'date', dateFormat: 'j/n/Y'},
           {name: 'taille', type: 'float'},
		   {name: 'texte'}
        ]
    });
	if(window.top.mailAafficher=="Pret"){
	    store.loadData(window.top.myData);
	}
	else if(window.top.mailAafficher=="Assurance"){
		store.loadData(myDataAssurance);
	}
	else if(window.top.mailAafficher=="Echange"){
		store.loadData(myDataEchange);
	}
	else if(window.top.mailAafficher=="Nouveau"){
		store.loadData(myDataNouveau);
	}
	else if(window.top.mailAafficher=="Envoye"){
		store.loadData(myDataSent);
	}
	else{
		store.loadData(window.top.myData);
	}
	
	function traiterClick(grid, rowIndex, columnIndex, e){
		//On r&eacute;cupÃ¨re nos valeurs
		var record = grid.getStore().getAt(rowIndex);
		var texte = record.get('texte');
		var sujet = record.get('sujet');
		var dateTemp = record.get('dateEnvoi');
		var daterender= Ext.util.Format.dateRenderer('d/m/Y');
		var dateEnvoi= daterender(dateTemp);
		var auteur = record.get('de');
		var taille = record.get('taille');
		
		
		//On traite la piÃ¨ce jointe si elle y est
		var textePj="";
		var pj1 = record.get('pj');
		if (pj1){
			var pj2 = record.get('nomPj');
			var pj3 = record.get('taillePj');
			var pj4 = record.get('adressePj');
			textePj="<img src=../imgs/iconeMail/trombone.gif /> Enclosed documents : <a href="+window.document.domain+pj4+">"+pj2+"</a> ("+pj3+")";
			if(pj2=='2007-09-bank_report-01234-031567K.pdf'){
				textePj=textePj+" <a href=\'#\' onClick=\'addDocumentToVault();\'> <img src=\'../imgs/picto-coffre.gif\' /></a>";
			}
		}
		
		//On affiche le message		
		document.getElementById('pj_message').innerHTML=textePj;
		document.getElementById('auteur_message').innerHTML='From : '+auteur;
		document.getElementById('date_message').innerHTML='Date : <b>'+dateEnvoi+'</b>';
		document.getElementById('sujet_message').innerHTML=sujet;
		document.getElementById('texte_message').innerHTML=texte;
		document.getElementById('contenu').style.visibility='visible';
	
	}
    
    // create the Grid
    var grid = new Ext.grid.GridPanel({
		id:'grilleMail',
        store: store,
        columns: [
            {header: "<input type=\"checkbox\" />", width : 25, renderer: maselection, dataIndex:'coche'},
			{header: "<img src=\"../imgs/iconeMail/important.gif\" />", width : 15, renderer: estUrgent, dataIndex:'urgent'},
			{header: "<img src=\"../imgs/iconeMail/trombone.gif\" />", width : 15, renderer: contientPJ, dataIndex:'pj'},
            {id:'de',header: "From", width: 100, sortable: true, dataIndex: 'de'},
            {header: "Subject", width: 200, sortable: true, dataIndex: 'sujet'},
            {header: "Date", width: 50, sortable: true, renderer: Ext.util.Format.dateRenderer('d/m/Y'), dataIndex: 'dateEnvoi'},
            {header: "Size", width: 50, sortable: true, renderer: taille, dataIndex: 'taille'}                     
        ],
        stripeRows: true,
        autoExpandColumn: 'de',
        height:250,
        width:686,
        title:'My Messages',
        tbar: new Ext.PagingToolbar({
            pageSize: 5,
            store: store,
            displayInfo: true,
            displayMsg: 'RECEIVED [Messages {0} - {1} on {2}]',
            emptyMsg: "No message"
        })
    });
	
	grid.getTopToolbar().onRender=noRefresh;
    grid.render('grid');
	grid.addListener("cellclick", traiterClick);
	
});
