var lang = window.top.lang;

var sepaDirectDebitArray = window.top.sepaDirectDebitArray;
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
var debtorArray = window.top.debtorArray;
var alertingMediaArray = window.top.alertingMediaArray;
var alertingGeneralAlertArray = window.top.alertingGeneralAlertArray;
var alertingSpecificAlertArray = window.top.alertingSpecificAlertArray;
var alertingReasonArray = window.top.alertingReasonArray;
var alertingActionArray = window.top.alertingActionArray;
var alertingRuleArray = window.top.alertingRuleArray;
var alertingGeneralRuleObject = window.top.alertingGeneralRuleObject;
var alertingGeneralActionArray = window.top.alertingGeneralActionArray;
var alerteArray = window.top.alerteArray;

var createUnknownMandateAutorization = window.top.createUnknownMandateAutorization;
var createUnknownMandateFromSDDId = window.top.createUnknownMandateFromSDDId;
var userMandats = window.top.userMandats;

var currentDebtor = getItemById(debtorArray, 0);

var selectedNextSDDid = window.top.selectedNextSDDid;
var selectedLastSDDid = window.top.selectedLastSDDid;
var selectedNextSDDindex = window.top.selectedNextSDDindex;
var selectedLastSDDindex = window.top.selectedLastSDDindex;

Ext.onReady(function(){

    document.getElementById('html.footer').innerHTML = lang.html_footer;
    document.getElementById('html_welcome_last_alerts').innerHTML = lang.html_welcome_last_alerts;
    document.getElementById('html_welcome_next_sdd').innerHTML = lang.html_welcome_next_sdd;
    document.getElementById('html_welcome_last_sdd').innerHTML = lang.html_welcome_last_sdd;
    
    window.top.currentPage = "Home";
    
    Ext.QuickTips.init();
    
    /*--------------------------------------*/
    /*				5 LAST ALERT			*/
    /*--------------------------------------*/
    var alert5lasDataStore = getAlerteStoreArray();
    
    var alert5lastStore = new Ext.data.SimpleStore({
        data: alert5lasDataStore,
		sortInfo: {
            field: 'date',
            direction: "DESC"
        },
        fields: [{
            name: 'delete'
        }, {
            name: 'date',
            type: 'date',
            dateFormat: 'Y-m-d'
        }, {
            name: 'name'
        }, {
            name: 'action'
        }, {
            name: 'media'
        }]
    
    });
    
    var col5lastAlertModel = [{
        header: lang.sepa_welcome_alerts_grid_date,
        sortable: false,
        renderer: Ext.util.Format.dateRenderer(lang.date_format),
        dataIndex: 'date',
        width: 65,
        sortable: true
    }, {
        header: lang.sepa_welcome_alerts_grid_label,
        dataIndex: 'name',
        width: 360,
        sortable: true
    }, {
        header: lang.sepa_welcome_alerts_grid_action,
        dataIndex: 'action',
        width: 80,
        sortable: true
    }, {
        header: lang.sepa_welcome_alerts_grid_media,
        sortable: true,
        dataIndex: 'media',
        width: 60
    }, {
        header: lang.sepa_welcome_alerts_grid_delete,
        sortable: false,
        renderer: deleteAlert,
        dataIndex: 'delete',
        width: 40
    }, {
        header: lang.sepa_welcome_alerts_grid_rule,
        sortable: false,
        renderer: showRuleConfigAlert,
        dataIndex: 'delete',
        width: 40
    }];
    // Creer le GridPanel des 5 derniÃ¨res alertes
    var grid5lastAlert = new Ext.grid.GridPanel({
        store: alert5lastStore,
        columns: col5lastAlertModel,
        title: lang.sepa_welcome_alerts_grid_title,
        frame: false,
        stripeRows: true,
        autoWidth: true,
        autoHeight: true,
        enableColumnHide: false,
        enableColumnMove: false
    });
    grid5lastAlert.render('grid5LastAlerts');
    grid5lastAlert.on('cellclick', onAlertGridClick);
    /*--------------------------------------*/
    /*				SDD COMMON				*/
    /*--------------------------------------*/
    
    var sddFields = [{
        name: 'id'
    }, {
        name: 'umr'
    }, {
        name: 'reference'
    }, {
        name: 'dueDate',
        type: 'date',
        dateFormat: 'Y-m-d'
    }, {
        name: 'amount',
        type: 'float'
    }, {
        name: 'sequenceType'
    }, {
        name: 'bic'
    }, {
        name: 'status'
    }, {
        name: 'creditor'
    }, {
        name: 'debtorAccount'
    }];
    
    var colSDDModel = [{
        header: lang.sepa_welcome_sdd_grid_creditor,
        dataIndex: 'creditor',
        width: 120,
        sortable: true
    }, {
        header: lang.sepa_welcome_sdd_grid_account,
        width: 60,
        sortable: true,
        dataIndex: 'debtorAccount',
        renderer: displayDebtorAccount
    }, {
        header: lang.sepa_welcome_sdd_grid_dueDate,
        width: 80,
        sortable: true,
        dataIndex: 'dueDate',
        renderer: Ext.util.Format.dateRenderer(lang.date_format)
    }, {
        header: lang.sepa_welcome_sdd_grid_amount,
        width: 80,
        sortable: true,
        dataIndex: 'amount',
        renderer: displayAsEuroMoney
    }, {
        header: lang.sepa_welcome_sdd_grid_type,
        width: 80,
        sortable: true,
        dataIndex: 'sequenceType'
    }, {
        header: lang.sepa_welcome_sdd_grid_status,
        width: 100,
        sortable: true,
        dataIndex: 'status',
        renderer: displayStatusName
    }, {
        header: lang.sepa_welcome_sdd_grid_details,
        width: 50,
        sortable: false,
        dataIndex: 'id',
        renderer: viewSdd
    }, {
        header: lang.sepa_welcome_sdd_grid_mandate,
        width: 50,
        sortable: false,
        dataIndex: 'mandat',
        renderer: modifyMandat
    }];
    
    /*--------------------------------------*/
    /*				5 LAST SDD				*/
    /*--------------------------------------*/
    
    var sdd5LastdataStore = get5LastSDDStoreArray();
    
    var sdd5LastStore = new Ext.data.SimpleStore({
        fields: sddFields,
        data: sdd5LastdataStore
    });
    
    var grid5lastSdd = new Ext.grid.GridPanel({
        id: 'grid5lastSdd',
        store: sdd5LastStore,
        columns: colSDDModel,
        sm: new Ext.grid.RowSelectionModel({singleSelect:true}),
        title: lang.sepa_welcome_sdd_grid_last_title,
        frame: false,
        stripeRows: true,
        width: 650,
        autoHeight: true,
        enableColumnHide: false,
        enableColumnMove: false,
        viewConfig: {
            forceFit: true,
            // Return CSS class to apply to rows depending upon data values
            getRowClass: function(record, index){
            	var rId = record.get('id');
            	if (rId == selectedLastSDDid){
            		return 'select-blue';
            	}
            }
        }
    });
    grid5lastSdd.render('grid5LastSDD');
    
    // DEBUG logger.log('After grid5LastSdd render - selectedLastSDDid = ' + selectedLastSDDid);
    // Ajout presï¿½lection selectedNextSDDid
    if (window.top.selectedLastSDDid != -1){    	
		var store = grid5lastSdd.getStore();
		var idx = store.find('id', window.top.selectedLastSDDid);
		if(-1 !== idx) {
			// DEBUG logger.log("After grid5LastSdd render - idx found : " + idx)
			selectedLastSDDindex = idx;
		    grid5lastSdd.getSelectionModel().selectRow(idx);
		    grid5lastSdd.getView().focusRow(idx);
		}
    }
        
    grid5lastSdd.on('cellclick', onGridClick);
    
    var dateStart = sdd5LastdataStore[sdd5LastdataStore.length - 1][3];
    var dateEnd = sdd5LastdataStore[0][3];
    
    var filter = new Filter('', '', '', '', '', '', '', Date.parseDate(dateStart, 'Y-m-d'), Date.parseDate(dateEnd, 'Y-m-d'));
    
    var options = {
        bars: {
            show: true,
            barWidth: 3600 * 24 * 1000 * 1,
            align: "center"
        },
        points: {
            show: true
        },
        grid: {
            hoverable: true,
            clickable: true,
            selectable: false
        },
        xaxis: {
            mode: "time",
            timeformat: lang.date_format_chart,
            min: filter.dateStart.add(Date.DAY, -2).format('U') * 1000,
            max: filter.dateEnd.add(Date.DAY, 2).format('U') * 1000
        }
    };
    
    var d = getChartDataBar(sdd5LastdataStore, 3);
    var lastChartPlot = $.plot($("#lastSddChart"), d, options);
    
    grid5lastSdd.on('rowclick', function(grid, rowIndex, eventObject){
        var idSelectedSdd = grid.store.data.items[rowIndex].data.id;
        var sdd = getItemById(sepaDirectDebitArray, idSelectedSdd);
        var allData = lastChartPlot.getData();
        var found = false;
        var index = -1;
        var i = 0;
        allData = allData[0].data;
        while (i < allData.length && !found) {
            if (Date.parseDate(sdd.dueDate, 'Y-m-d').format('U') * 1000 == allData[i][0]) {
                index = i;
                found = true;
            }
            i++;
        }
        unhighlightAllBar(lastChartPlot, allData);
        if (index != -1 && (sdd.status == 'PLANNED' || sdd.status == 'ACCEPTED' || sdd.status == 'SENT')) {
            lastChartPlot.highlight(0, index);
        }
    });
        
    /*--------------------------------------*/
    /*				5 NEXT SDD				*/
    /*--------------------------------------*/
    
    var sdd5NextdataStore = get5NextSDDStoreArray();
    
    var sdd5NextStore = new Ext.data.SimpleStore({
        fields: sddFields,
        data: sdd5NextdataStore
    });
    
    var grid5NextSdd = new Ext.grid.GridPanel({
        id: 'grid5NextSdd',
        store: sdd5NextStore,
        columns: colSDDModel,
        sm: new Ext.grid.RowSelectionModel({singleSelect:true}),
        title: lang.sepa_welcome_sdd_grid_next_title,
        frame: false,
        stripeRows: true,
        autoWidth: true,
        autoHeight: true,
        enableColumnHide: false,
        enableColumnMove: false,
        viewConfig: {
            forceFit: true,
            // Return CSS class to apply to rows depending upon data values
            getRowClass: function(record, index){
            	var rId = record.get('id');
            	if (rId == selectedNextSDDid){
            		return 'select-blue';
            	}
                var rStatus = record.get('status');
                if (rStatus == 'MANDATE_UNKNOWN') {
                    return 'alerte-red';
                }
                else if (rStatus == 'MANDATE_MODIFIED') {
                    return 'alerte-yellow';
                }
            }
        }
    });

    grid5NextSdd.render('grid5NextSDD');
        
    // logger.log('After grid5NextSdd render - selectedNextSDDid = ' + selectedNextSDDid);
    // Ajout presï¿½lection selectedNextSDDid
    if (window.top.selectedNextSDDid != -1){    	
		var store = grid5NextSdd.getStore();
		var idx = store.find('id', selectedNextSDDid);
		if(-1 !== idx) {
			// logger.log("After grid5NextSdd render - idx found : " + idx)
			selectedNextSDDindex = idx;
		    grid5NextSdd.getSelectionModel().selectRow(idx);
		    grid5NextSdd.getView().focusRow(idx);
		}
    }
    
    grid5NextSdd.on('cellclick', onGridClick);
            
    var dateStart = sdd5NextdataStore[0][3];
    var dateEnd = sdd5NextdataStore[sdd5NextdataStore.length - 1][3];
    
    var filter = new Filter('', '', '', '', '', '', '', Date.parseDate(dateStart, 'Y-m-d'), Date.parseDate(dateEnd, 'Y-m-d'));
    
    var options = {
        bars: {
            show: true,
            barWidth: 3600 * 24 * 1000 * 1,
            align: "center"
        },
        points: {
            show: true
        },
        grid: {
            hoverable: true,
            clickable: true,
            selectable: false
        },
        xaxis: {
            mode: "time",
            timeformat: lang.date_format_chart,
            min: filter.dateStart.add(Date.DAY, -2).format('U') * 1000,
            max: filter.dateEnd.add(Date.DAY, 2).format('U') * 1000
        }
    };
    
    var d = getChartDataBar(sdd5NextdataStore);
    var nextChartPlot = $.plot($("#nextSddChart"), d, options);
    
    grid5NextSdd.on('rowclick', function(grid, rowIndex, eventObject){
        var idSelectedSdd = grid.store.data.items[rowIndex].data.id;
        var sdd = getItemById(sepaDirectDebitArray, idSelectedSdd);
        var allData = nextChartPlot.getData();
        var found = false;
        var index = -1;
        var i = 0;
        allData = allData[0].data;
        while (i < allData.length && !found) {
            if (Date.parseDate(sdd.dueDate, 'Y-m-d').format('U') * 1000 == allData[i][0]) {
                index = i;
                found = true;
            }
            i++;
        }
        unhighlightAllBar(nextChartPlot, allData);
        if (index != -1 && (sdd.status == 'PLANNED' || sdd.status == 'ACCEPTED' || sdd.status == 'SENT')) {
            nextChartPlot.highlight(0, index);
        }
    });
    
});

function unhighlightAllBar(plot, dataArray){
    var i = 0;
    while (i < dataArray.length) {
        plot.unhighlight(0, i);
        i++;
    }
}

function onGridClick(grid, rowIndex, colIndex){
    var idSelectedSdd = grid.store.data.items[rowIndex].data.id;
    //logger.log('onGridClick ! grid.id = ' + grid.id + ', colIndex = ' + colIndex + ', idSelectedSdd = ' + idSelectedSdd);
	if (grid.id == "grid5lastSdd"){
		//logger.log('onGridClick grid5lastSdd');
		window.top.selectedLastSDDid = idSelectedSdd;
		window.top.selectedNextSDDid = -1;
		//logger.log('onGridClick grid5lastSdd selectedLastSDDid = ' + idSelectedSdd);
	} 
	
	if (grid.id == "grid5NextSdd"){
		//logger.log('onGridClick grid5nextSdd');
		window.top.selectedNextSDDid = idSelectedSdd;
		window.top.selectedLastSDDid = -1;
		//logger.log('onGridClick grid5nextSdd selectedNextSDDid = ' + idSelectedSdd);
	}   
        	
    switch (colIndex) {
        case 6: //View sdd
            grid.disable();
            window.top.sddToView = idSelectedSdd;
            window.top.callback_url = "./sepa-welcome.html";
            parent.main.window.location = './sdd-details.html';
            break;
        case 7: //View mandat
            /*var sddStatus = grid.store.data.items[rowIndex].data.status;
         // Mandat inconnu
         if (sddStatus == 'MANDATE_UNKNOWN'){
         if (createUnknownMandate){
         grid.disable();
         var sdd = getItemById(sepaDirectDebitArray, idSelectedSdd);
         window.top.mandatToCreate = sdd.mandat;
         parent.main.window.location = './mandats-creation.html';
         }
         else {
         
         }
         }
         // Mandat connu
         else {*/         
            grid.disable();
            var sdd = getItemById(sepaDirectDebitArray, idSelectedSdd);
            window.top.mandatToModify = sdd.mandat;
            window.top.callback_url = "./sepa-welcome.html";
            parent.main.window.location = './mandats-details.html';
            //}
            break;
    }
}

function onAlertGridClick(grid, rowIndex, colIndex){
    var idSelectedSdd = grid.store.data.items[rowIndex].data.id;
    switch (colIndex) {
        /*case 4: //Delete sdd
         
         break;*/
        case 5: //View rule
            parent.main.window.location = './alertes-config.html';
            break;
    }
}

function get5LastSDDStoreArray(){
    var sddStoreArray = new Ext.util.MixedCollection();
    
    for (var i = 0; i < sepaDirectDebitArray.length; i++) {
    
        var sddStoreItem = new Array();
        
        sddStoreItem[0] = sepaDirectDebitArray[i].id;
        sddStoreItem[1] = sepaDirectDebitArray[i].umr;
        sddStoreItem[2] = sepaDirectDebitArray[i].reference;
        sddStoreItem[3] = sepaDirectDebitArray[i].dueDate;
        sddStoreItem[4] = sepaDirectDebitArray[i].amount;
        sddStoreItem[5] = getItemById(sequenceTypeArray, sepaDirectDebitArray[i].sequenceType).name;
        sddStoreItem[6] = sepaDirectDebitArray[i].bicDestination;
        sddStoreItem[7] = sepaDirectDebitArray[i].status;
        
        var mandat = getItemById(mandatArray, sepaDirectDebitArray[i].mandat);
        var creditor = getItemById(creditorArray, mandat.creditor);
        var debtorAccount = getItemById(accountArray, mandat.debtorAcc);
        
        //sddStoreItem[8] = creditor.name + '[' + creditor.acronym + ']';
        sddStoreItem[8] = creditor.name;
        //sddStoreItem[9] = debtorAccount.bic+'-'+debtorAccount.iban;
        sddStoreItem[9] = mandat.debtorAcc;
        
        //Store if the date is before or equal the D-day date
        if (sepaDirectDebitArray[i].dueDate <= new Date().format('Y-m-d')) {
            sddStoreArray.add(sddStoreItem.id, sddStoreItem);
        }
    }
    fnSortDescSDD = function(sddStoreItem1, sddStoreItem2){
        if (sddStoreItem1[3] > sddStoreItem2[3]) {
            return 1;
        }
        else 
            return -1;
    }
    sddStoreArray.sort('DESC', fnSortDescSDD);
    var sdd5LastStoreArray = new Array();
    for (var i = 0; i < sddStoreArray.getCount() && sdd5LastStoreArray.length < 5; i++) {
        sdd5LastStoreArray.push(sddStoreArray.itemAt(i));
    }
    
    return sdd5LastStoreArray;
}

function get5NextSDDStoreArray(filter){
    var sddStoreArray = new Ext.util.MixedCollection();
    
    for (var i = 0; i < sepaDirectDebitArray.length; i++) {
    
        var sddStoreItem = new Array();
        
        sddStoreItem[0] = sepaDirectDebitArray[i].id;
        sddStoreItem[1] = sepaDirectDebitArray[i].umr;
        sddStoreItem[2] = sepaDirectDebitArray[i].reference;
        sddStoreItem[3] = sepaDirectDebitArray[i].dueDate;
        sddStoreItem[4] = sepaDirectDebitArray[i].amount;
        sddStoreItem[5] = getItemById(sequenceTypeArray, sepaDirectDebitArray[i].sequenceType).name;
        sddStoreItem[6] = sepaDirectDebitArray[i].bicDestination;
        //sddStoreItem[7] = getItemById(sddStatusArray, sepaDirectDebitArray[i].status).name;
        //sddStoreItem[7] = sepaDirectDebitArray[i].status;
        
        var mandat = getItemById(mandatArray, sepaDirectDebitArray[i].mandat);
        
        // Check if the mandate is known on the debtor's side
        if (!isMandateKnownByDebtor(mandat) && sepaDirectDebitArray[i].status == "PLANNED") {
            sepaDirectDebitArray[i].previousStatus = sepaDirectDebitArray[i].status;
            sepaDirectDebitArray[i].status = "MANDATE_UNKNOWN";
            logger.log ('get5NextSDDStoreArray - sepaDirectDebitArray[' + i + ']' + ' previousStatus = ' + sepaDirectDebitArray[i].previousStatus + ', status = ' + sepaDirectDebitArray[i].status);
            window.top.createUnknownMandateFromSDDId = sepaDirectDebitArray[i].id;
        }
        
        sddStoreItem[7] = sepaDirectDebitArray[i].status;
        
        //DEUBG logger.log('sepaDirectDebitArray[' + i + '] : status = ' + sepaDirectDebitArray[i].status + ", previous Status = " + sepaDirectDebitArray[i].previousStatus);
        
        var creditor = getItemById(creditorArray, mandat.creditor);
        var debtorAccount = getItemById(accountArray, mandat.debtorAcc);
        
        //sddStoreItem[8] = creditor.name + '[' + creditor.acronym + ']';
        sddStoreItem[8] = creditor.name;
        //sddStoreItem[9] = debtorAccount.bic+'-'+debtorAccount.iban;
        sddStoreItem[9] = mandat.debtorAcc;
        
        //Store if the date is after the D-day date
        if (sepaDirectDebitArray[i].dueDate > new Date().format('Y-m-d')) {
            sddStoreArray.add(sddStoreItem.id, sddStoreItem);
        }
    }
    
    
    fnSortDescSDD = function(sddStoreItem1, sddStoreItem2){
        if (sddStoreItem1[3] > sddStoreItem2[3]) {
            return 1;
        }
        else 
            return -1;
    }
    sddStoreArray.sort('ASC', fnSortDescSDD);
    var sdd5NextStoreArray = new Array();
    for (var i = 0; i < sddStoreArray.getCount() && sdd5NextStoreArray.length < 5; i++) {
        sdd5NextStoreArray.push(sddStoreArray.itemAt(i));
    }
    
    return sdd5NextStoreArray;
}


/**
 * Returns true if the mandate is known by the debtor
 * Check if the mandate's Id is in the userMandats Array
 * @param {Object} the mandate to check
 */
function isMandateKnownByDebtor(mandate){
    for (var i = 0; i < userMandats.length; i++) {
        if (userMandats[i] == mandate.id) {
            return true;
        }
    }
    return false;
}


/**
 * Returns SDD amount/time series for building a chart with jquery.flot
 * @param {Object} mandatId or -1 for all SDD
 * @param {Object} filter Filter object
 */
function getChartDataBar(storeArray, color){
    if (color == '') {
        color = 0;
    }
    var finalArray = new Array();
    
    for (var i = 0; i < storeArray.length; i++) {
        //if (storeArray[i][7] != 'CANCELED' && storeArray[i][7] != 'REJECTED' && storeArray[i][7] != 'REJECTED_BY_BLOCK' && storeArray[i][7] != 'MANDATE_UNKNOWN') {
		if ( storeArray[i][7] == "PLANNED" || storeArray[i][7] == "SENT"){
            var timestamp = Date.parseDate(storeArray[i][3], 'Y-m-d').format('U') * 1000;
            var chartDataIndex = getChartDataIndex(finalArray, timestamp);
            if (chartDataIndex != -1) {
                finalArray[chartDataIndex][1] = finalArray[chartDataIndex][1] + storeArray[i][4];
            }
            else {
                finalArray.push([timestamp, storeArray[i][4]]);
            }
        }
    }
    return new Array({
        data: finalArray,
        label: lang.sepa_welcome_sdd_chart_label,
        color: color
    });
}

function displayStatusName(value){
    if (value != '') {
        var sddStatus = getItemById(sddStatusArray, value);
        return sddStatus.name;
    }
    return value;
}

function deleteAlert(){
    //return '<img src="../../imgs/mess_bin.png" ext:qwidth="100" ext:qtip="Cancel cette alerte" align="center" />';
    return '<img src="../../imgs/mess_bin.png" align="center" />';
}

function showRuleConfigAlert(){
    //return '<img src="../../imgs/sepa/outil-mini.png" ext:qwidth="100" ext:qtip="Voir la rÃ¨gle qui a gÃ©nÃ©rÃ©e cette alerte" align="center" width="25" />';
    return '<img src="../../imgs/sepa/outil-mini.png" align="center" width="25" />';
}

function getAlerteStoreArray(){
    var array = new Array();
    for (var j = 0; j < alerteArray.length; j++) {
        var item = new Array();
        item[0] = alerteArray[j].id;
        item[1] = alerteArray[j].date;
        item[2] = alerteArray[j].name;
        var mediaName = 'Aucun';
        if (alerteArray[j].rule != -1) {
            var rule = getItemById(alertingRuleArray, alerteArray[j].rule);
            if (rule != null) {
                var action = getItemById(alertingActionArray, rule.action);
                var media = getItemById(alertingMediaArray, rule.alertingMedia);
                
                if (action != -1) {
                    action = action.desc;
                }
                else {
                    action = 'N/A';
                }
                if (media && media.id != -1) {
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

function modifyMandat(value, p, r){
    var sddStatus = r.data['status'];
    if (sddStatus == "MANDATE_UNKNOWN") {
        return '';
    }
    else 
        if (sddStatus == "MANDATE_MODIFIED") {
            //return '<img src="../../imgs/sepa/mandatCreation.png" width="30" ext:qwidth="150" ext:qtip="Modifier le mandat associÃ© Ã  ce SDD"  align="center" />';
            return '<img src="../../imgs/sepa/mandatCreation.png" width="30 align="center" />';
        }
        //else return '<img src="../../imgs/sepa/mandatCreation.png" width="30" ext:qwidth="150" ext:qtip="Voir/Modifier le mandat associÃ© Ã  ce SDD"  align="center" />';
        else 
            return '<img src="../../imgs/sepa/mandatCreation.png" width="30" align="center" />';
}

/*function findIndexFromId(grid,id){
	logger.log('findIndexFromId - start');
	for (var i=0; i<grid.store.data.items.length; i++){
		if (grid.store.data.items[rowIndex].data.id == id){
			return rowIndex;
		}
	}
	logger.log('findIndexFromId - end');
	return -1;
}*/