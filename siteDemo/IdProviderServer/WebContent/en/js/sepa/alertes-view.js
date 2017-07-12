var lang = window.top.lang;

var alertingMediaArray = window.top.alertingMediaArray;
var alertingGeneralAlertArray = window.top.alertingGeneralAlertArray;
var alertingSpecificAlertArray = window.top.alertingSpecificAlertArray;
var alertingReasonArray = window.top.alertingReasonArray;
var alertingActionArray = window.top.alertingActionArray;
var alertingRuleArray = window.top.alertingRuleArray;
var alertingGeneralRuleObject = window.top.alertingGeneralRuleObject;
var alertingGeneralActionArray = window.top.alertingGeneralActionArray;
var alerteArray = window.top.alerteArray;

var callback_url =  window.top.callback_url;

Ext.onReady(function(){
	window.top.currentPage = "View-alerts";
	
	document.getElementById('html.footer').innerHTML = lang.html_footer;
	document.getElementById('html.alertes-view.title').innerHTML = lang.html_alertes_view_title;
	
	
    var dataStore = getAlerteStoreArray();
    
    var alerteStore = new Ext.data.SimpleStore({
        data: dataStore,
        fields: [{
            name: 'delete'
        }, {
            name: 'date',
            type: 'date',
            dateFormat: 'Y-m-d'
        }, {
            name: 'name'
        }
        , {
            name: 'action'
        }
		, {
            name: 'media'
        }]
    
    });
    
    var colModel = [{
        header: lang.alerts_view_grid_date,
        sortable: false,
        renderer: Ext.util.Format.dateRenderer(lang.date_format),
        dataIndex: 'date',
        width: 65,
        sortable: true
    }, {
        header: lang.alerts_view_grid_label,
        dataIndex: 'name',
        width: 360,
        sortable: true
    },{
        header: lang.alerts_view_grid_action,
        dataIndex: 'action',
        width: 130,
        sortable: true
    }, {
        header: lang.alerts_view_grid_media,
        sortable: true,
        dataIndex: 'media',
        width: 50
    }, {
        header: lang.alerts_view_grid_delete,
        sortable: false,
        renderer: deleteAlert,
        dataIndex: 'delete',
        width: 50
    }];
    
    // create the Grid
    var grid = new Ext.grid.GridPanel({
        store: alerteStore,
        columns: colModel,
        title: 'Liste de mes alertes',
        frame: false,
        stripeRows: true,
        autoWidth: true,
        autoHeight: true,
        enableColumnHide: false,
        enableColumnMove: false
    });
    grid.render('gridAlertes');
    grid.on('cellclick', function(grid, rowIndex, colIndex){
        var idSelectedAlerte = grid.store.data.items[rowIndex].data.delete;
        switch (colIndex) {
            case 3: //Delete
	            Ext.MessageBox.confirm(lang.alerts_view_popup_confirm_title, lang.alerts_view_popup_confirm_desc, function(btn, text){
	                if (btn == "yes") {
	                	window.top.alerteArray = removeFromArray(window.top.alerteArray, idSelectedAlerte);
	                	alerteArray = window.top.alerteArray;
	                	grid.hide(true);
	                    var store = getAlerteStoreArray();
	                    alerteStore.loadData(store);
	                    grid.show(true);
	                }
	            });
                break;
        }
    });
});

function deleteAlert(){
    return '<img src="../../imgs/mess_bin.png" ext:qwidth="100" ext:qtip="'+lang.alerts_view_tooltip_delete+'" align="center" />';
}
function getAlerteStoreArray(){
	var array = new Array();
    for (var j = 0; j < alerteArray.length; j++) {
        var item = new Array();
    	item[0] = alerteArray[j].id;
        item[1] = alerteArray[j].date;
        item[2] = alerteArray[j].name;

        var action = 'Aucune';
		var mediaName = 'Aucun';
        if(alerteArray[j].rule != -1){
        	var rule = getItemById(alertingRuleArray, alerteArray[j].rule);
        	if(rule != null){
            	var action = getItemById(alertingActionArray, rule.action);
				var media = getItemById(alertingMediaArray, rule.alertingMedia);
				
            	if(action != -1){
                	action = action.desc;
                }
                else{
                	action = 'Aucune';
                }
				if(media.id != -1){
					mediaName = media.name;
					
				}
            }
        }
        item[3] = action;
		item[4] = mediaName;
        array.push(item);
    }
    return array;
}

