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
	           title: 'Chargement des nouveaux messages',
	           msg: 'Vous avez <b>2</b> nouveaux messages',
	           buttons: Ext.MessageBox.OK,
	           animEl: monBouton,
	           icon: Ext.MessageBox.INFO
	       });
		
		var myData = window.top.myData;
		myData.push([true,false,false,false,'','','','<b>Michel Dupont</b>','<b>Re: Demande de ch&eacute;quier</b>','20/10/2007',3,
		"Bonjour,<br><br>Suite &agrave; votre demande, je vous informe que les ch&eacute;quiers que vous avez command&eacute;s ont &eacute;t&eacute; envoy&eacute;s ce jour &agrave; votre adresse &agrave; Londres.<br>N'h&eacute;sitez pas &agrave; me contacter pour toute question.<br><br>Cordialement<br><br>"]);
		myData.push([true,false,true,false,'','','','<b>Sophie Durand</b>','<b>Re: Demande de rendez-vous</b>','22/10/2007',7,
		"Monsieur,<br><br>Vous avez demand&eacute; un rendez-vous t&eacute;l&eacute;phonique avec votre conseiller habituel Monsieur Dupont il y a 2 jours.<br>Ce dernier &eacute;tant absent pour 2 semaines, je vous propose de le remplacer pour servir au plus vite votre demande.<br>Si cela vous convient, je vous rappelerai <b>Jeudi 25 Octobre &agrave; 15h</b> au +33 (1) 78 44 55 11<br><br>Cordialement<br><br>"]);
		
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
		//On r&eacute;cupère nos valeurs
		var record = grid.getStore().getAt(rowIndex);
		var texte = record.get('texte');
		var sujet = record.get('sujet');
		var dateTemp = record.get('dateEnvoi');
		var daterender= Ext.util.Format.dateRenderer('d/m/Y');
		var dateEnvoi= daterender(dateTemp);
		var auteur = record.get('de');
		var taille = record.get('taille');
		
		
		//On traite la pièce jointe si elle y est
		var textePj="";
		var pj1 = record.get('pj');
		if (pj1){
			var pj2 = record.get('nomPj');
			var pj3 = record.get('taillePj');
			var pj4 = record.get('adressePj');
			textePj="<img src=../imgs/iconeMail/trombone.gif /> Pi&egrave;ces jointes : <a href="+window.document.domain+pj4+">"+pj2+"</a> ("+pj3+")";
			if(pj2=='2007-09-releve-01234-031567K.pdf'){
				textePj=textePj+" <a href=\'#\' onClick=\'addDocumentToVault();\'> <img src=\'../imgs/picto-coffre.gif\' /></a>";
			}
		}
		
		//On affiche le message		
		document.getElementById('pj_message').innerHTML=textePj;
		document.getElementById('auteur_message').innerHTML='De la part de : '+auteur;
		document.getElementById('date_message').innerHTML='Envoy&eacute; le : <b>'+dateEnvoi+'</b>';
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
            {id:'de',header: "De", width: 100, sortable: true, dataIndex: 'de'},
            {header: "Sujet", width: 200, sortable: true, dataIndex: 'sujet'},
            {header: "Date", width: 50, sortable: true, renderer: Ext.util.Format.dateRenderer('d/m/Y'), dataIndex: 'dateEnvoi'},
            {header: "Taille", width: 50, sortable: true, renderer: taille, dataIndex: 'taille'}                     
        ],
        stripeRows: true,
        autoExpandColumn: 'de',
        height:250,
        width:686,
        title:'Mes Messages',
        tbar: new Ext.PagingToolbar({
            pageSize: 5,
            store: store,
            displayInfo: true,
            displayMsg: 'RECU [Messages {0} - {1} sur {2}]',
            emptyMsg: "Pas de messages"
        })
    });
	
	grid.getTopToolbar().onRender=noRefresh;
    grid.render('grid');
	grid.addListener("cellclick", traiterClick);
	
});
