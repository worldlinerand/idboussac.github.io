/*
 * Ext JS Library 2.0.2
 * Copyright(c) 2006-2008, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

var avancement=0;

function updateAvancement(){
	 	if (avancement <0.95) {
			pbarT = Ext.getCmp('pbar');
	 		if (avancement==0){
				pbarT.updateProgress(0.21, "21%");
				avancement=0.21;
			}
			else if (avancement==0.21){
				pbarT.updateProgress(0.315, "31.5%");
				avancement=0.315;
			}
			else if (avancement==0.315){
				pbarT.updateProgress(0.473, "47.3%");
				avancement=0.473;
			}
			else if (avancement==0.473){
				pbarT.updateProgress(0.95, "95%");
				avancement=0.95;
			}
			window.setTimeout("updateAvancement()",500);
		}
		else{
			winT = Ext.getCmp('newFile');
			winT.hide();
		}
	}
	
Ext.onReady(function(){
	
	var win;
	var monDelai = new Ext.util.DelayedTask(updateAvancement);
	var button = Ext.get('show-btn');
	pbar = new Ext.ProgressBar({
	    text:'0%',
	    id:'pbar',
		x:150,
		y:200,
		width:200
	});
	var message = "<span style=\"font-size:10pt;\">D&eacute;poser des documents</span><hr /><br />"
	+"Les documents que vous allez pr&eacute;ciser seront t&eacute;l&eacute;charg&eacute;s depuis votre PC dans le dossier actuellement selectionn&eacute;: Mon Coffre<br />"
	+"S&eacute;lectionnez maintenant les documents que vous souhaitez d&eacute;poser:"
	+"<input type=\"file\" name=\"fichier\" size=\"30\">";
		
	button.on('click', function(){
		// create the window on the first click and reuse on subsequent clicks
		if (!win) {
			win = new Ext.Window({
				id:'newFile',
				el: 'hello-win',
				width: 500,
				height: 300,
				closeAction: 'hide',
				plain: true,
				layout:'absolute',
				html:message,
				buttons: [{
					text: 'Valider',
					handler: function(){
						updateAvancement();
						var myFiles = window.top.myFiles;
						myFiles.push([false,'doc','Test2.doc','Test.doc',datecoffre,35,true,true,true,'Dupont','12/05/2008','JKHKJS54556DS']);
						storeCoffre.loadData(myFiles);
						}
					}, {
					text: 'Annuler',
					handler: function(){
						win.hide();
					}
				}]
			});
		}
		win.add(pbar);
		win.show(this);
	});	
	
	
	
	
	
	
	
	

    Ext.state.Manager.setProvider(new Ext.state.CookieProvider());
    
 

    var myFiles = window.top.myFiles;
	var myFilesNouveau = window.top.myFilesNouveau;
	var myFilesProfessionel = window.top.myFilesProfessionel;
	var myFilesContrats = window.top.myFilesContrats;

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
	
	function mesInfos(val){
        if (val){
          return '<img src="../imgs/coffre/picto_info.gif"/>';
        }
        else{
          return '';
        }
    }
	
	function mesFichiers(val,cell,record){
        return '<a href="'+record.data.file+'" style="color:#000000;">'+val+'</a>';
    }
	
	function monHistorique(val){
        if (val){
          return '<img src="../imgs/coffre/picto_histo.gif"/>';
        }
        else{
          return '';
        }
    }
	
	function verifFile(val){
        if (val){
          return '<img src="../imgs/coffre/picto_certif.gif"/>';
        }
        else{
          return '';
        }
    }
	
	function determineType(val){
        if (val=='pdf'){
          return '<img src="../imgs/coffre/picto_fichier_pdf.gif"/>';
        }
        else {
          return '<img src="../imgs/coffre/picto_fichier_word.gif"/>';
        }
    }
	
	function traiterClick(grid, rowIndex, columnIndex, e){
		//on r&eacute;cupère le nom du champ sur lequel on a cliqu&eacute;
		var fieldName = grid.getColumnModel().getDataIndex(columnIndex);
		if(fieldName=='info'){
			var record = grid.getStore().getAt(rowIndex);  // Get the Record
    	    var nom = record.get('fileName');
			var type = record.get('fileType');
			var deposeLe = record.get('sentDate');
			var auteur = record.get('auteur');
			var taille = record.get('taille');
			var monMessage = "<b>"+nom+"</b><hr />Type : "+type+"<br />D&eacute;pos&eacute; le : "+deposeLe+"<br />D&eacute;pos&eacute; par : "+auteur+"<br />Taille :"+taille+" Ko";
			Ext.MessageBox.show({
			   closable:false,
			   msg: monMessage,
			   width: 300,
			   buttons: Ext.MessageBox.OK,
			   icon: Ext.MessageBox.INFO
			});
		}
		else if(fieldName=='verif'){
			var record = grid.getStore().getAt(rowIndex);  // Get the Record
			var nom = record.get('fileName');
    	    var dateC = record.get('dateCert');
    	    var numC = record.get('numCert');
			var monMessage= "<b>"+nom+"</b><hr />Date de certification : "+dateC+"<br />Num&eacute;ro de certification : "+numC;
			Ext.MessageBox.show({
			   closable:false,
			   msg: monMessage,
			   width: 300,
			   buttons: Ext.MessageBox.OK
			});
		}
		else{
			
		}
	}

    // create the data store
    var storeCoffre = new Ext.data.SimpleStore({
		id:'storeCoffre',
        fields: [
           {name: 'coche', type: 'bool'},
		   {name: 'fileType'},
		   {name: 'fileName'},
		   {name: 'file'},
		   {name: 'sentDate'},
		   {name: 'taille'},
           {name: 'info', type: 'bool'},
           {name: 'horloge', type: 'bool'},
           {name: 'verif', type: 'bool'},
           {name: 'taille', type: 'float'},
		   {name: 'auteur'},
		   {name: 'dateCert'},
		   {name: 'numCert'}
        ]
    });
	if(window.top.coffreAafficher=="Personnel"){
	    storeCoffre.loadData(myFiles);
	}
	else if(window.top.coffreAafficher=="Professionel"){
		storeCoffre.loadData(myFilesProfessionel);
	}
	else if(window.top.coffreAafficher=="Contrats"){
		storeCoffre.loadData(myFilesContrats);
	}
	else if(window.top.coffreAafficher=="Nouveau"){
		storeCoffre.loadData(myFilesNouveau);
	}
	else{
		storeCoffre.loadData(myFiles);
	}
    
    // create the Grid
    var gridCoffre = new Ext.grid.GridPanel({
        store: storeCoffre,
        columns: [
            {header: "<input type=\"checkbox\" />", width : 25, renderer: maselection, dataIndex:'coche'},
			{header: "<img src=\"../imgs/iconeMail/icMail.gif\" />", width : 25, renderer: determineType, dataIndex:'fileType'},
            {id:'fileName',header: "Nom", width: 270, sortable: true, renderer: mesFichiers, dataIndex: 'fileName'},
            {header: "D&eacute;pos&eacute; le", width: 170, sortable: true, dataIndex: 'sentDate'},
            {header: "Taille", width: 100, sortable: true, renderer: taille, dataIndex: 'taille'},
			{header: "", width: 30, sortable: false, renderer: mesInfos, dataIndex: 'info'},
			{header: "", width: 30, sortable: false, renderer: monHistorique, dataIndex: 'horloge'},
			{header: "", width: 30, sortable: false, renderer: verifFile, dataIndex: 'verif'}
        ],
        stripeRows: true,
        autoExpandColumn: 'fileName',
        height:250,
        width:686,
        title:'Mon Coffre ('+window.top.coffreAafficher+')',
        tbar: new Ext.PagingToolbar({
            pageSize: 10,
            store: storeCoffre,
            displayInfo: true,
            displayMsg: "[Fichiers {0} - {1} sur {2}]",
            emptyMsg: "Pas de fichiers"
        })
    });
	
	gridCoffre.getTopToolbar().onRender=noRefresh;
		
	gridCoffre.addListener("cellclick", traiterClick);
    gridCoffre.render('gridwlbank');
	

});
