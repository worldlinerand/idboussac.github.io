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
 
 function supprimer(index)
 {
	// On supprime le lien dans la table
 }
 
 function showAlertes(bouton,index)
 {
	var tip = new Ext.ux.SliderTip({
        getText: function(slider){
            return String.format('<b>{0} jours avant la date limite</b>', slider.getValue());
        }
    });
	
	 
	// Window de gestion des alertes
	 var win = new Ext.Window({
            title    : 'Mes Alertes pour les bills de '+window.top.fournisseur.records[index].name,
            closable : true,
            width    : 600,
            height   : 400,
            //border : false,
            plain    : false,
            layout   : 'fit',
			bodyStyle:'padding:5px 5px 0;',
			labelWidth: 75,
            items: [{
            xtype:'fieldset',
            title: 'Recevoir mes alertes par email',
			checkboxToggle:true,
            collapsed: true,
            autoHeight:true,
            defaults: {width: 210},
            defaultType: 'textfield',
            items :[{
                    fieldLabel: 'Email',
					width: '200',
                    name: 'email',
					msgTarget:'under',
					validationDelay: 500,
					emptyText:"Votre email",
					labelStyle: 'font-weight:bold;width:200px;',
                    vtype:'email'
                }, {
					xtype: 'label',
                    text: "DÃ©lai pour l'alerte",
					style: 'width:200px;',
					name: 'delai'
                },new Ext.Slider({
        width: 214,
        increment: 1,
        minValue: 1,
        maxValue: 8,
		value:4,
        plugins: tip
    })
            ]
        },{
            xtype:'fieldset',
            title: 'Recevoir mes alertes par SMS',
			checkboxToggle:true,
            collapsed: true,
            autoHeight:true,
            defaults: {width: 210},
            defaultType: 'textfield',
            items :[{
					allowBlank: 'false',
					fieldLabel: 'NumÃ©ro de tÃ©lÃ©phone portable',
					emptyText:"Votre numÃ©ro",
					minLengthText:"NumÃ©ro de tÃ©lÃ©phone sur 10 chiffres",
					maxLength:10,
					minLength:10,
					msgTarget:'under',
					validationDelay: 350,
					maskRe:new RegExp('[0-9]*'),
					labelStyle: 'font-weight:bold;width:200px;',
					style:'width:100px',
                    name: 'port'
                }, {
					xtype: 'label',
                    text: "DÃ©lai pour l'alerte",
					style: 'width:200px;',
					name: 'delai'
                },new Ext.Slider({
        width: 214,
        increment: 1,
        minValue: 1,
        maxValue: 8,
		value:4,
        plugins: tip
    })
            ]
        },{
            xtype:'fieldset',
            title: 'Recevoir mes alertes par Appel TÃ©lÃ©phonique',
			checkboxToggle:true,
            collapsed: true,
            autoHeight:true,
            defaults: {width: 210},
            defaultType: 'textfield',
            items :[{
					allowBlank: 'false',
                    fieldLabel: 'NumÃ©ro de tÃ©lÃ©phone',
					labelStyle: 'font-weight:bold;width:200px;',
					style:'width:100px',
					emptyText:"Votre numÃ©ro",
					minLengthText:"NumÃ©ro de tÃ©lÃ©phone sur 10 chiffres",
					maxLength:10,
					minLength:10,
					msgTarget:'under',
					validationDelay: 350,
					maskRe:new RegExp('[0-9]*'),
                    name: 'numtel'
                }, {
					xtype: 'label',
                    text: "DÃ©lai pour l'alerte",
					style: 'width:200px;',
					name: 'delai'
                },new Ext.Slider({
        width: 214,
        increment: 1,
        minValue: 1,
        maxValue: 8,
		value:4,
        plugins: tip
    })
            ]
        }],

        buttons: [{
            text: 'Sauvegarder',
			handler: function(){
			win.close();
			}
        },{
            text: 'Cancel',
			handler: function(){
			win.close();
			}
        }]
        });

        win.show(bouton);
 }

Ext.onReady(function(){
  
  
  var fournisseurAChoisir = window.top.fournisseurAChoisir;
  var fournisseur = window.top.fournisseur;
  
  // Generic fields array to use in both store defs.
	var fields = [
	   {name: 'name'},
	   {name: 'logo'},
	   {name:'num'},
	   {name:'exemple'},
	   {name:'libelle'}
	];
	
    // create the data store
    var firstGridStore = new Ext.data.JsonStore({
        fields : fields,
		data   : fournisseur,
		root   : 'records'
    });
	
	//fonction de rendu img
	function img(val){
        return '<img width="80" src="'+val+'"></img>';
    }
	
	//fonction de rendu suppr
	function suppr(val,cell,record,row,col,store){
        return '<img src="../imgs/tools-supprimer.png" onClick:"supprimer('+store.indexOf(record)+')"></img>';
    }
	
	//fonction de rendu alertes
	function alertes(val,cell,record,row,col,store){
        return "<a  class='mesalertes' onclick='javascript:showAlertes(this,"+store.indexOf(record)+");'>G&eacute;rer mes <br/>alertes</a>";
		//<img src="../imgs/tools-supprimer.png" onClick:"supprimer('+store.indexOf(record)+')"></img>';
    }
	
	// Column Model shortcut array
	var cols1 = [
		{ id : 'name', header: "Fournisseur", width: 120, sortable: true, dataIndex: 'name'},
		{header: "", width: 100, sortable: true, renderer : img, dataIndex: 'logo'},
		{header: "N&deg; Client", width: 80, sortable: false, dataIndex: 'num'},
		{header: "Alertes", width: 70, renderer : alertes, sortable: false, dataIndex: 'name'},
		{header: "Cancel", width: 70, renderer : suppr, sortable: false, dataIndex: 'name'}
	];
	
	// Column Model shortcut array
	var cols2 = [
		{ id : 'name', header: "Fournisseur", width: 150, sortable: true, dataIndex: 'name'},
		{header: "", width: 120, sortable: true, renderer : img, dataIndex: 'logo'}
	];
    
	// declare the source Grid
    var firstGrid = new Ext.grid.GridPanel({
		ddGroup          : 'secondGridDDGroup',
		ddText 			 : '',
        store            : firstGridStore,
        columns          : cols1,
		enableDragDrop   : false,
        stripeRows       : true,
        autoExpandColumn : 'name',
        width            : 440,
		region           : 'west',
        title            : 'My contracts',
		selModel         : new Ext.grid.RowSelectionModel({singleSelect : true})
    });

    var secondGridStore = new Ext.data.JsonStore({
        fields : fields,
		data   : fournisseurAChoisir,
		root   : 'records'
    });
	
    // create the destination Grid
    var secondGrid = new Ext.grid.GridPanel({
		ddGroup          : 'firstGridDDGroup',
		ddText 			 : '',
        store            : secondGridStore,
        columns          : cols2,
		enableDragDrop   : true,
        stripeRows       : true,
        autoExpandColumn : 'name',
        width            : 240,
		region           : 'center',
        title            : 'Fournisseurs references',
		selModel         : new Ext.grid.RowSelectionModel({singleSelect : true})
    });

	
	//Simple 'border layout' panel to house both grids
	var displayPanel = new Ext.Panel({
		width    : 686,
		height   : 450,
		layout   : 'border',
		renderTo : 'gridfournisseur',
		items    : [
			firstGrid,
			secondGrid
		]
	});

	// used to add records to the destination stores
	//var blankRecord =  Ext.data.Record.create(fields);

	/****
	* Setup Drop Targets
	***/
	
	var saveRecord = undefined;
	
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
				
				if (foundItem  == -1) 
				{
					firstGridStore.add(record);
					
					// Call a sort dynamically
					//firstGridStore.sort('name', 'ASC');
					
					var message = new Ext.Window({
					title: "Demande d'information",
					closable : false,
					width : 500,
					x:'100',
					y:'100',
					//prompt:true,
					modal:true,
					plain    : false,
					layout   : 'fit',
					bodyStyle:'padding:5px 5px 0;',
					labelWidth: 75,
					items: [{
					xtype: 'label',
					html: 'Merci de renseigner '+ record.data.libelle+' '+record.data.name+'. Vous trouverez un exemple <a class="lienFacture" onClick=\'javascript:jQuery("#imgExemple").slideDown("slow");\'>ici</a><div id="imgExemple" style="display:none;"><img src="'+record.data.exemple+'"/></div>',
					name:'message'},{
					xtype:'textfield',
					allowBlank:false,
					emptyText:html_entity_decode(record.data.libelle),
					hideLabel:true,
					width:'100px',
					length:'50',
					name:'text',
					id:'text'
					},{
					xtype:'progress',
					name:'pbar',
					id:'pbar',
					hidden:true,}],
					buttons: [{
						text: 'Save',
						handler: function(){
						this.iconCls='x-status-busy';
						var pbar = message.findById('pbar');
						pbar.show();
						Runner.run(pbar, 10, function(){
							var text = message.findById('text').getValue();
				            //Ext.fly('p1text').update('Done.').show();
							var foundItem = firstGridStore.find('name', saveRecord.data.name);
							firstGridStore.getAt(foundItem).data.num=text;
							// On ajoute a la reference
							window.top.fournisseur.records.push(firstGridStore.getAt(foundItem).data);
							// On trie pour rafraichir
							firstGridStore.sort('name', 'ASC');
							message.close();
				        });
						
						}
					},{
						text: 'Cancel',
						handler: function(){
						// On annule le dÃ©placement
						firstGridStore.remove(saveRecord);
						ddSource.grid.store.add(saveRecord);
						message.close();
						}
					}],
					icon: Ext.MessageBox.QUESTION
					});
					message.show();
					// On stocke l'Ã©lÃ©ment
					saveRecord=record;
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
	
/*	var destGridDropTarget = new Ext.dd.DropTarget(secondGridDropTargetEl, {
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
	}); */
});
var Runner = function(){
    var f = function(v, pbar, count, cb){
        return function(){
            if(v > count){
                //btn.dom.disabled = false;
                cb();
            }else{
                pbar.updateProgress(v/count, 'VÃ©rification en cours...');
            }
       };
    };
    return {
        run : function(pbar,count, cb){
            //btn.dom.disabled = true;
            var ms = 5000/count;
            for(var i = 1; i < (count+2); i++){
               setTimeout(f(i, pbar, count, cb), i*ms);
            }
        }
    }
}();

//DÃ©code une chaÃ®ne
function html_entity_decode(texte) {
	texte = texte.replace(/&quot;/g,'"'); // 34 22
	texte = texte.replace(/&amp;/g,'&'); // 38 26	
	texte = texte.replace(/&#39;/g,"'"); // 39 27
	texte = texte.replace(/&lt;/g,'<'); // 60 3C
	texte = texte.replace(/&gt;/g,'>'); // 62 3E
	texte = texte.replace(/&circ;/g,'^'); // 94 5E
	texte = texte.replace(/&lsquo;/g,'â'); // 145 91
	texte = texte.replace(/&rsquo;/g,'â'); // 146 92
	texte = texte.replace(/&ldquo;/g,'â'); // 147 93
	texte = texte.replace(/&rdquo;/g,'â'); // 148 94
	texte = texte.replace(/&bull;/g,'â¢'); // 149 95
	texte = texte.replace(/&ndash;/g,'â'); // 150 96
	texte = texte.replace(/&mdash;/g,'â'); // 151 97
	texte = texte.replace(/&tilde;/g,'Ë'); // 152 98
	texte = texte.replace(/&trade;/g,'â¢'); // 153 99
	texte = texte.replace(/&scaron;/g,'Å¡'); // 154 9A
	texte = texte.replace(/&rsaquo;/g,'âº'); // 155 9B
	texte = texte.replace(/&oelig;/g,'Å'); // 156 9C
	texte = texte.replace(/&#357;/g,'Â'); // 157 9D
	texte = texte.replace(/&#382;/g,'Å¾'); // 158 9E
	texte = texte.replace(/&Yuml;/g,'Å¸'); // 159 9F
	texte = texte.replace(/&nbsp;/g,' '); // 160 A0
	texte = texte.replace(/&iexcl;/g,'Â¡'); // 161 A1
	texte = texte.replace(/&cent;/g,'Â¢'); // 162 A2
	texte = texte.replace(/&pound;/g,'Â£'); // 163 A3
	texte = texte.replace(/&curren;/g,' '); // 164 A4
	texte = texte.replace(/&yen;/g,'Â¥'); // 165 A5
	texte = texte.replace(/&brvbar;/g,'Â¦'); // 166 A6
	texte = texte.replace(/&sect;/g,'Â§'); // 167 A7
	texte = texte.replace(/&uml;/g,'Â¨'); // 168 A8
	texte = texte.replace(/&copy;/g,'Â©'); // 169 A9
	texte = texte.replace(/&ordf;/g,'Âª'); // 170 AA
	texte = texte.replace(/&laquo;/g,'Â«'); // 171 AB
	texte = texte.replace(/&not;/g,'Â¬'); // 172 AC
	texte = texte.replace(/&shy;/g,'Â­'); // 173 AD
	texte = texte.replace(/&reg;/g,'Â®'); // 174 AE
	texte = texte.replace(/&macr;/g,'Â¯'); // 175 AF
	texte = texte.replace(/&deg;/g,'Â°'); // 176 B0
	texte = texte.replace(/&plusmn;/g,'Â±'); // 177 B1
	texte = texte.replace(/&sup2;/g,'Â²'); // 178 B2
	texte = texte.replace(/&sup3;/g,'Â³'); // 179 B3
	texte = texte.replace(/&acute;/g,'Â´'); // 180 B4
	texte = texte.replace(/&micro;/g,'Âµ'); // 181 B5
	texte = texte.replace(/&para/g,'Â¶'); // 182 B6
	texte = texte.replace(/&middot;/g,'Â·'); // 183 B7
	texte = texte.replace(/&cedil;/g,'Â¸'); // 184 B8
	texte = texte.replace(/&sup1;/g,'Â¹'); // 185 B9
	texte = texte.replace(/&ordm;/g,'Âº'); // 186 BA
	texte = texte.replace(/&raquo;/g,'Â»'); // 187 BB
	texte = texte.replace(/&frac14;/g,'Â¼'); // 188 BC
	texte = texte.replace(/&frac12;/g,'Â½'); // 189 BD
	texte = texte.replace(/&frac34;/g,'Â¾'); // 190 BE
	texte = texte.replace(/&iquest;/g,'Â¿'); // 191 BF
	texte = texte.replace(/&Agrave;/g,'Ã'); // 192 C0
	texte = texte.replace(/&Aacute;/g,'Ã'); // 193 C1
	texte = texte.replace(/&Acirc;/g,'Ã'); // 194 C2
	texte = texte.replace(/&Atilde;/g,'Ã'); // 195 C3
	texte = texte.replace(/&Auml;/g,'Ã'); // 196 C4
	texte = texte.replace(/&Aring;/g,'Ã'); // 197 C5
	texte = texte.replace(/&AElig;/g,'Ã'); // 198 C6
	texte = texte.replace(/&Ccedil;/g,'Ã'); // 199 C7
	texte = texte.replace(/&Egrave;/g,'Ã'); // 200 C8
	texte = texte.replace(/&Eacute;/g,'Ã'); // 201 C9
	texte = texte.replace(/&Ecirc;/g,'Ã'); // 202 CA
	texte = texte.replace(/&Euml;/g,'Ã'); // 203 CB
	texte = texte.replace(/&Igrave;/g,'Ã'); // 204 CC
	texte = texte.replace(/&Iacute;/g,'Ã'); // 205 CD
	texte = texte.replace(/&Icirc;/g,'Ã'); // 206 CE
	texte = texte.replace(/&Iuml;/g,'Ã'); // 207 CF
	texte = texte.replace(/&ETH;/g,'Ã'); // 208 D0
	texte = texte.replace(/&Ntilde;/g,'Ã'); // 209 D1
	texte = texte.replace(/&Ograve;/g,'Ã'); // 210 D2
	texte = texte.replace(/&Oacute;/g,'Ã'); // 211 D3
	texte = texte.replace(/&Ocirc;/g,'Ã'); // 212 D4
	texte = texte.replace(/&Otilde;/g,'Ã'); // 213 D5
	texte = texte.replace(/&Ouml;/g,'Ã'); // 214 D6
	texte = texte.replace(/&times;/g,'Ã'); // 215 D7
	texte = texte.replace(/&Oslash;/g,'Ã'); // 216 D8
	texte = texte.replace(/&Ugrave;/g,'Ã'); // 217 D9
	texte = texte.replace(/&Uacute;/g,'Ã'); // 218 DA
	texte = texte.replace(/&Ucirc;/g,'Ã'); // 219 DB
	texte = texte.replace(/&Uuml;/g,'Ã'); // 220 DC
	texte = texte.replace(/&Yacute;/g,'Ã'); // 221 DD
	texte = texte.replace(/&THORN;/g,'Ã'); // 222 DE
	texte = texte.replace(/&szlig;/g,'Ã'); // 223 DF
	texte = texte.replace(/at /g,'Ã '); // 224 E0
	texte = texte.replace(/&aacute;/g,'Ã¡'); // 225 E1
	texte = texte.replace(/&acirc;/g,'Ã¢'); // 226 E2
	texte = texte.replace(/&atilde;/g,'Ã£'); // 227 E3
	texte = texte.replace(/&auml;/g,'Ã¤'); // 228 E4
	texte = texte.replace(/&aring;/g,'Ã¥'); // 229 E5
	texte = texte.replace(/&aelig;/g,'Ã¦'); // 230 E6
	texte = texte.replace(/&ccedil;/g,'Ã§'); // 231 E7
	texte = texte.replace(/&egrave;/g,'Ã¨'); // 232 E8
	texte = texte.replace(/&eacute;/g,'Ã©'); // 233 E9
	texte = texte.replace(/&ecirc;/g,'Ãª'); // 234 EA
	texte = texte.replace(/&euml;/g,'Ã«'); // 235 EB
	texte = texte.replace(/&igrave;/g,'Ã¬'); // 236 EC
	texte = texte.replace(/&iacute;/g,'Ã­'); // 237 ED
	texte = texte.replace(/&icirc;/g,'Ã®'); // 238 EE
	texte = texte.replace(/&iuml;/g,'Ã¯'); // 239 EF
	texte = texte.replace(/&eth;/g,'Ã°'); // 240 F0
	texte = texte.replace(/&ntilde;/g,'Ã±'); // 241 F1
	texte = texte.replace(/&ograve;/g,'Ã²'); // 242 F2
	texte = texte.replace(/&oacute;/g,'Ã³'); // 243 F3
	texte = texte.replace(/&ocirc;/g,'Ã´'); // 244 F4
	texte = texte.replace(/&otilde;/g,'Ãµ'); // 245 F5
	texte = texte.replace(/&ouml;/g,'Ã¶'); // 246 F6
	texte = texte.replace(/&divide;/g,'Ã·'); // 247 F7
	texte = texte.replace(/&oslash;/g,'Ã¸'); // 248 F8
	texte = texte.replace(/&ugrave;/g,'Ã¹'); // 249 F9
	texte = texte.replace(/&uacute;/g,'Ãº'); // 250 FA
	texte = texte.replace(/&ucirc;/g,'Ã»'); // 251 FB
	texte = texte.replace(/&uuml;/g,'Ã¼'); // 252 FC
	texte = texte.replace(/&yacute;/g,'Ã½'); // 253 FD
	texte = texte.replace(/&thorn;/g,'Ã¾'); // 254 FE
	texte = texte.replace(/&yuml;/g,'Ã¿'); // 255 FF
	return texte;
}