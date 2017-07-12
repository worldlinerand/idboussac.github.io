/*
 * Ext JS Library 2.0.2
 * Copyright(c) 2006-2008, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */
	
Ext.onReady(function(){
	

    Ext.state.Manager.setProvider(new Ext.state.CookieProvider());

    var myBills = window.top.myBillsPayed;

    // create the data store
    var storeFacture = new Ext.data.SimpleStore({
		id:'storeFacture',
        fields: [
           {name: 'organisme'},
		   {name: 'montantFacture'},
		   {name: 'description'},
		   {name: 'numeroFacture'},
		   {name: 'dateDePaiement'},
		   {name: 'ordre'},
           {name: 'facture'}
		   ]
    });
	storeFacture.loadData(myBills);
	
	//fonction de rendu organisme
	function organisme(val){
        return '<span class="organisme"><a id="'+val+'" target="_blank" href ="#">'+val+'</a></span>';
    }
	
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
	
	//fonction de rendu sauveCoffre
	function sauveCoffre(val,cell,record,row,col,store){
        return '<a href=\'#\' onClick=\'addDocumentToVault("'+record.data.organisme+'","'+val+'");\'> <img img height="20px" src=\'../imgs/picto-coffre.gif\' /></a>';
    }
	
	//fonction de rendu courbes
	function courbes(val,cell,record,row,col,store){
        return '<a href=\'#\' onClick=\'seeCharts("'+val+'");\'> <img height="20px" src=\'../imgs/stats.gif\' /></a>';
    }
	   
	// create the column model
	
	var colFacture = new Ext.grid.ColumnModel([
            {header: "&eacute;metteur = Issuer", sortable: true, renderer: organisme, width : 80, dataIndex:'organisme'},
			{header: "Amount", width: 60, sortable: true, renderer: montant, dataIndex: 'montantFacture'},
			{header: "Description", width: 120, sortable: false, renderer: description, dataIndex: 'description'},
			{id:'numeroFacture',header: "Num&eacute;ro <br/>de Facture", width : 100, sortable: true},
			{header: "Date <br/>de Paiement", width: 80, sortable: true, dataIndex: 'dateDePaiement'},
			{header: "Order number<br/>de Paiement", width: 90, sortable: true, dataIndex: 'ordre'},
            {header: "Facture", width: 50, renderer: lien, dataIndex: 'facture'},
			{header: "", width: 30, renderer: sauveCoffre, dataIndex: 'facture'},
			{header: "", width: 30, renderer: courbes, dataIndex: 'organisme'}
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
        title:'Historique de mes Factures',
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

// On ajoute les tooltips
	function setToolTip(item,index,all)
	{
		var organisme = getFournisseur(item.data.organisme);
		new Ext.ToolTip({
			target: organisme.name,
			html: 'Acc&eacute;der at  mon espace en ligne <br/>s&eacute;curis&eacute; ' + organisme.name+'<br/><img src="'+organisme.logo+'"/>',
			trackMouse:true
			});
	}

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
			winT = Ext.getCmp('newFile2');
			winT.close();
			$("#envoiFichier").css({
						opacity: 1,
						left: "780px",
						top: "250px"
					});
			$("#envoiFichier").fadeIn("slow");
			$("#envoiFichier").animate({
				opacity: 0,
				left: "5px",
				top: "50px"
			}, 2000);
		}
	}
	
function seeCharts(organismeName)
{
	// On ouvre une nouvelle fenêtre ou on affiche le graph et le logo du fournisseur
	var organisme = getFournisseur(organismeName);
	var message = 'Courbe d\'historique des montants de facture de '+organisme.name+'<br/>'+
	'<div style="float:left"><div id="placeholder" style="width:500px;height:300px"></div></div>'+
    '<div id="miniature" style="float:left;margin-left:20px;margin-top:50px"><div id="overview" style="width:166px;height:100px"></div>'+
    '<p id="overviewLegend" style="margin-left:10px;margin-top:20px"></p></div>';
	win = new Ext.Window({
				id:'charts',
				width: 700,
				height:450,
				maxHeight: 500,
				closeAction: 'close',
				plain: true,
				layout:'absolute',
				html:message,
				buttons: [ {
					text: 'Fermer',
					handler: function(){
						win.close();
					}
				}]
			});
	var options = {
        legend: { show: false},
        lines: { show: true},
		colors: ["#d18b2c"],
        points: { show: true },
        //yaxis: { ticks: 10 },
		xaxis : {mode:"time",
				 monthNames: Date.monthNames,
				 timeformat: "%b %y",},
		yaxis : {min:0,max:200},
        selection: { mode: "x" }
    };
	win.show();
	// On construit les données dynamiquement
	var data = buildData(135,organisme.name);
	var plot = $.plot($("#placeholder"), data, options);
	// setup overview
    var overview = $.plot($("#overview"), data, {
        legend: { show: true, container: $("#overviewLegend") },
        lines: { show: true, lineWidth: 1 },
        shadowSize: 0,
        xaxis : {mode:"time",
				 timeformat: "%b %y",
				 monthNames: Date.monthNames
		},
        yaxis: { min: 0,max:200},
        grid: { color: "#999" },
        selection: { mode: "x"}
    });

    // now connect the two
    var internalSelection = false;
    
    $("#placeholder").bind("selected", function (event, area) {
        // clamp the zooming to prevent eternal zoom
        if (area.x2 - area.x1 < 0.00001)
            area.x2 = area.x1 + 0.00001;
        if (area.y2 - area.y1 < 0.00001)
            area.y2 = area.y1 + 0.00001;
        
        // do the zooming
        plot = $.plot($("#placeholder"), getData(data,area.x1, area.x2),
                      $.extend(true, {}, options, {
                          xaxis: { min: area.x1, max: area.x2 },
                          yaxis: { min: area.y1, max: area.y2 }
                      }));
        
        if (internalSelection)
            return; // prevent eternal loop
        internalSelection = true;
        overview.setSelection(area);
        internalSelection = false;
    });
	
    $("#overview").bind("selected", function (event, area) {
        if (internalSelection)
            return;
        internalSelection = true;
        plot.setSelection(area);
        internalSelection = false;
    });

}
function addDocumentToVault(organisme,facture){
		pbar = new Ext.ProgressBar({
		    text:'0%',
		    id:'pbar',
			x:150,
			y:70,
			width:200
		});
		
		var message = "<span style=\"font-size:10pt;\">Upload files</span><hr /><br />"
		+"Votre facture va &ecirc;tre d&eacute;pos&eacute;e dans votre coffre<br />"
		+"Please confirm this request?";
			
		win = new Ext.Window({
				id:'newFile2',
				width: 500,
				height:150,
				maxHeight: 200,
				closeAction: 'close',
				plain: true,
				layout:'absolute',
				html:message,
				buttons: [{
					text: 'Accept',
					handler: function(){
							updateAvancement();
							myLocalFiles = window.top.myFiles;
		    				myLocalFiles.push([false,'pdf','Facture '+organisme,facture,datecoffre,150,true,true,true,'Dupont','12/05/2008','JKHKJS54556DS']);
						}
					}, {
					text: 'Cancel',
					handler: function(){
						win.close();
					}
				}]
			});
		win.add(pbar);
		win.show();
	}
