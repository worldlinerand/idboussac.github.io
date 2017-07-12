var sequenceTypeArray = window.top.sequenceTypeArray;
var periodicityArray = window.top.periodicityArray;
var infoArray = window.top.infoArray;
var creditorArray = window.top.creditorArray;
var debtorArray = window.top.debtorArray;
var accountArray = window.top.accountArray;
var paymentScheduleArray = window.top.paymentScheduleArray;
var mandatArray = window.top.mandatArray;
var sddStatusArray = window.top.sddStatusArray;
var mandatStatusArray = window.top.mandatStatusArray;
var sepaDirectDebitArray = window.top.sepaDirectDebitArray;
var mandatToViewSDD = window.top.mandatToViewSDD;
var userMandats = window.top.userMandats;

var currentDebtor = getItemById(debtorArray, 0);

var callback_url =  window.top.callback_url;

Ext.onReady(function(){
	window.top.currentPage = "View-mandate";
	
	document.getElementById('html.footer').innerHTML = lang.html_footer;
	document.getElementById('html.mandats_view_title').innerHTML = lang.html_mandats_view_title;


	Ext.QuickTips.init();
	
    Ext.MessageBox.buttonText.yes = "Oui";
    Ext.MessageBox.buttonText.no = "Non";
    
    // Formulaire
    var filterList = new Ext.form.FormPanel({
        id: 'filterList',
        method: 'POST',
        url: "",
        labelWidth: 150,
        frame: true,
        bodyStyle: 'padding:5px 5px 0',
        width: 400,
        baseCls: ''
    });
    
    var filterListFieldSet = new Ext.form.FieldSet({
        id: 'filterListFieldSet',
        title: lang.mandats_view_filter_title,
        autoWidth: true,
        autoHeight: true,
        animCollapse: false,
        collapsible: true,
        draggable: false,
        collapsed: true,
        disabled: false,
        buttons: [{
            text: lang.mandats_view_filter_display_all,
            handler: function(){
                mandatStore.loadData(getMandatStoreArray(''));
            }
            
        }, {
            text: lang.mandats_view_filter_validate,
            formBind: true,
            handler: function(){
        		var filter = new Filter(umrField.getValue(), '', '', '', '', '','','','',debtorAccountField.getValue());
            	mandatStore.loadData(getMandatStoreArray(filter));
            }
        }]
    });
    var debtorAccountStore = new Ext.data.SimpleStore({
        fields: ['id', 'name'],
        data: getDebtorAccountStoreArray(currentDebtor.id)
    });
    //logger.log('debtor store : ');
    //logger.log(debtorAccountStore);
    var debtorAccountField = new Ext.form.ComboBox({
        id: 'debtorAccountField',
        store: debtorAccountStore,
        fieldLabel: lang.mandats_view_filter_account,
        displayField: 'name',
        valueField: 'id',
        typeAhead: true,
        mode: 'local',
        forceSelection: true,
        triggerAction: 'all',
        emptyText: 'Choisissez dans la liste',
        selectOnFocus: true,
        width: 450
    });
    filterListFieldSet.add(debtorAccountField);
    
    var umrField = new Ext.form.TextField({
        id: 'umrField',
        fieldLabel: lang.mandats_view_filter_umr,
        name: 'umrField',
        baseCls: '',
        allowBlank: true
    });
    filterListFieldSet.add(umrField);
    
    var minAmountField = new Ext.form.TextField({
        id: 'minAmountField',
        fieldLabel: lang.mandats_view_filter_min_amount,
        name: 'minAmountField',
        baseCls: '',
        allowBlank: true
    });
    
    var maxAmountField = new Ext.form.TextField({
        id: 'maxAmountField',
        fieldLabel: lang.mandats_view_filter_max_amount,
        name: 'maxAmountField',
        baseCls: '',
        allowBlank: true
    });
    
    filterList.add(filterListFieldSet);
    filterList.render('filterGrid');
    
    var dataStore = getMandatStoreArray('');
    
    var mandatStore = new Ext.data.SimpleStore({
        data: dataStore,
        fields: [{
            name: 'delete'
        }, {
            name: 'modify'
        }, {
            name: 'umr'
        }, {
            name: 'creationDate',
            type: 'date',
            dateFormat: 'Y-m-d'
        }, {
            name: 'amount'
        }, {
            name: 'creditor'
        }, {
            name: 'sequenceType'
        }, {
            name: 'status'
        }, {
            name: 'debtorAccount'
        }]
    
    });
    var colModel = [{
		id:'creditor',
        header: lang.mandats_view_grid_creditor,
        dataIndex: 'creditor',
        width: 200,
        sortable: true,
		renderer: modifyCreditor
    },{
        header: lang.mandats_view_grid_creationDate,
        sortable: false,
        renderer: Ext.util.Format.dateRenderer(lang.date_format),
        dataIndex: 'creationDate',
        width: 65,
        sortable: true
    }, {
        header: lang.mandats_view_grid_type,
        dataIndex: 'sequenceType',
        width: 70,
        sortable: true
    }, {
        header:lang.mandats_view_grid_account,
        dataIndex: 'debtorAccount',
        width: 80,
		renderer: displayDebtorAccount,
        sortable: true
    }, {
        header: lang.mandats_view_grid_status,
        sortable: false,
        dataIndex: 'status',
        renderer: displayStatus,
        width: 40
    }, {
        header: lang.mandats_view_grid_statusInfos,
        sortable: false,
        dataIndex: 'status',
        renderer: displayStatusInfo,
        width: 160
    },/*, {
        header: "Action",
        sortable: false,
        renderer: actionOnMandat,
        dataIndex: 'delete',
        width: 60
    }, {
        header: "Modifier",
        sortable: false,
        renderer: modifyMandat,
        dataIndex: 'modify',
        width: 60
    }*/ {
        header: lang.mandats_view_grid_details,
        sortable: false,
        renderer: viewSdd,
        dataIndex: 'modify'
    }];
    
    // create the Grid
    var grid = new Ext.grid.GridPanel({
        store: mandatStore,
        columns: colModel,
        title: lang.mandats_view_grid_title,
        frame: false,
        stripeRows: true,
        autoWidth: true,
        autoHeight: true,
        enableColumnHide: false,
        enableColumnMove: false,
		autoExpandColumn: 'creditor'
    });
    grid.render('gridMandats');
    grid.on('cellclick', function(grid, rowIndex, colIndex){
        var idSelectedMandat = grid.store.data.items[rowIndex].data.modify;
        switch (colIndex) {
            /*case 5: //Cancel
                //Ext.MessageBox.confirm('Confirmation', 'Etes-vous sÃ»r de vouloir annuler ce mandat ?', function(btn, text){
                    //if (btn == "yes") {
                        var mandatToRemove = getItemById(mandatArray, idSelectedMandat);
                        for(var i=0; i<mandatArray.length; i++){
                        	if(mandatArray[i].id == idSelectedMandat){
                        		//Change status
                        		if(mandatArray[i].status == "ACTIVE" || mandatArray[i].status == "ACTIVE_FIRST_USE"){
                        			mandatArray[i].status = "CANCELLED";
                        		}
                        		else if(mandatArray[i].status == "CANCELLED"){
                        			mandatArray[i].status = "ACTIVE";
                        		}
                        	}
                        }
                        window.top.mandatArray = mandatArray;
                        
                        var filter = new Filter(umrField.getValue(), '', '', '', '', '','','','',debtorAccountField.getValue());
                        
                        grid.hide(true);
                        var store = getMandatStoreArray(filter);
                        mandatStore.loadData(store);
                        grid.show(true);
						var sddToRemove = getSDDFromMandat(idSelectedMandat);
						for(var i=0; i<sddToRemove.length ; i++ ){
							window.top.sepaDirectDebitArray = removeFromArray(window.top.sepaDirectDebitArray, sddToRemove[i].id)
						}
                   // }
                //});
                break;*/
            /*case 6: //Modify
                grid.disable();//Avoids multiples click
                window.top.mandatToModify = idSelectedMandat;
                parent.main.window.location = './mandats-modification.html';
                break;*/
			case 6: //View
                grid.disable();//Avoids multiples click
                window.top.mandatToViewSDD = idSelectedMandat;
                parent.main.window.location = './sdd-view.html';
                break;
                
        }
    });
    
});

function modifyCreditor(mandatId){
	var mandat = getItemById(mandatArray, mandatId);
	var creditor = getItemById(creditorArray, mandat.creditor);
    return '<a href="javascript:void(0)" onclick="redirectToMandatDetails('+mandat.id+')" class="action_grid">'+creditor.name+'</a>';
}

function redirectToMandatDetails(id){
	window.top.mandatToModify = id;
	parent.main.window.location = './mandats-details.html';
}
function displayStatus(value){
	var status = getItemById(mandatStatusArray, value);
	var img = '../../imgs/sepa/ruleOn-mini.png';
	if(value == "CANCELLED" || value == "SUSPENDED_CUSTOMER" || value == "CREDITOR_SUSPENDED"){
		img = '../../imgs/sepa/ruleOff-mini.png';
	}
	if(value == 'INACTIVE'){
		img = '../../imgs/sepa/ruleInactif-mini.png';
	}
	return '<img src="'+img+'" ext:qtitle="'+status.name+'" ext:qtip="'+status.desc+'"  align="center" />';
}
function displayStatusInfo(value){
	var status = getItemById(mandatStatusArray, value);
	return status.desc;
}
function viewSdd(){
    return '<img src="../../imgs/sepa/sdd.png" width="30" ext:qtitle="'+lang.mandats_view_tooltip_viewSdd_title+'" ext:qtip="'+lang.mandats_view_tooltip_viewSdd_desc+'" align="center" />';
}

function getMandatStoreArray(filter){
    var mandatStoreArray = new Array();
    
    for (var i = 0; i < userMandats.length; i++) {
    	
		var mandat = getItemById(mandatArray, userMandats[i]);
        var mandatStoreItem = new Array();
        mandatStoreItem[0] = mandat.id;
        mandatStoreItem[1] = mandat.id;
        mandatStoreItem[2] = mandat.umr;
        mandatStoreItem[3] = mandat.creationDate;
        mandatStoreItem[4] = mandat.amount;
        
        //var creditor = getItemById(creditorArray, mandatArray[i].creditor);
        //mandatStoreItem[5] = creditor.name + '[' + creditor.acronym + ']';
		mandatStoreItem[5] = mandat.id;
        mandatStoreItem[6] = mandat.sequenceType;
        mandatStoreItem[7] = mandat.status;
        //var debtorAccount = getItemById(accountArray, mandatArray[i].debtorAcc);
        //mandatStoreItem[8] = debtorAccount.bic;
		mandatStoreItem[8] = mandat.debtorAcc;
        
        var sequence = '';
        if (mandat.sequenceType != null && mandat.sequenceType != "") {
            sequence = getItemById(sequenceTypeArray, mandat.sequenceType).name
        }
        mandatStoreItem[6] = sequence;
        if (filter == null || filter.length == 0 || filter.length == "undefined") {
            mandatStoreArray.push(mandatStoreItem);
        }
        else {
            var nbSatisfiedConditions = filter.length;
            if (filter.umr != '' && mandatStoreItem[2].indexOf(filter.umr) == -1) {
                nbSatisfiedConditions--;
            }
            if (filter.name != '' && mandatStoreItem[5].indexOf(filter.name) == -1) {
                nbSatisfiedConditions--;
            }
            if (filter.minAmount != '' && mandatStoreItem[4] < parseFloat(filter.minAmount)) {
                nbSatisfiedConditions--;
            }
            if (filter.maxAmount != '' && mandatStoreItem[4] > parseFloat(filter.maxAmount)) {
                nbSatisfiedConditions--;
            }
            filter.debtorAccount = filter.debtorAccount+"";
            if (filter.debtorAccount != '' && (mandat.debtorAcc+"") != (filter.debtorAccount)) {
                nbSatisfiedConditions--;
            }
            if (nbSatisfiedConditions == filter.length) {
                mandatStoreArray.push(mandatStoreItem);
            }
        }
        
    }
    
    return mandatStoreArray;
}


