var alertingMediaArray = window.top.alertingMediaArray;
var alertingGeneralAlertArray = window.top.alertingGeneralAlertArray;
var alertingSpecificAlertArray = window.top.alertingSpecificAlertArray;
var alertingReasonArray = window.top.alertingReasonArray;
var alertingActionArray = window.top.alertingActionArray;
var alertingRuleArray = window.top.alertingRuleArray;

var callback_url =  window.top.callback_url;

var alertingGeneral = window.top.alertingGeneral;

Ext.onReady(function(){

    document.getElementById('html.footer').innerHTML = lang.html_footer;
    document.getElementById('html.alertes_config_title').innerHTML = lang.html_alertes_config_title;
    
    window.top.currentPage = "Config-alert";
    
    Ext.QuickTips.init();
    
    Ext.MessageBox.buttonText.yes = "Oui";
    Ext.MessageBox.buttonText.no = "Non";
    
    
    document.getElementById('alertes_config_general_intro').innerHTML = lang.alertes_config_general_intro;
    document.getElementById('action_accept').innerHTML = lang.alertes_config_label_accept;
    document.getElementById('action_reject').innerHTML = lang.alertes_config_label_reject;
    document.getElementById('notification').innerHTML = lang.alertes_config_label_notification;
    
    document.getElementById('reason_0').innerHTML = lang.alertes_config_label_general_reason_0;
    
    var accept_0 = new Ext.form.Radio({
        id: "accept_0",
        hideLabel: true,
        disabled: true,
        hidden: true,
        name: "action_0"
    });
    accept_0.render('accept_0');
    
    var reject_0 = new Ext.form.Radio({
        id: "reject_0",
        hideLabel: true,
        name: "action_0",
        disabled: true,
        checked: true
    });
    reject_0.render('reject_0');
    
    var sms_0 = new Ext.form.Checkbox({
        id: "sms_0",
        boxLabel: lang.data_alerting_media_0,
        name: "notify_0"
    });
    sms_0.render('sms_0');
    
    var call_0 = new Ext.form.Checkbox({
        id: "call_0",
        boxLabel: lang.data_alerting_media_1,
        name: "notify_0"
    });
    call_0.render('call_0');
    
    var mail_0 = new Ext.form.Checkbox({
        id: "mail_0",
        boxLabel: lang.data_alerting_media_2,
        name: "notify_0"
    });
    mail_0.render('mail_0');
    
    document.getElementById('reason_1').innerHTML = lang.alertes_config_label_general_reason_1;
    
    var accept_1 = new Ext.form.Radio({
        id: "accept_1",
        hideLabel: true,
        name: "action_1"
    });
    accept_1.render('accept_1');
    
    var reject_1 = new Ext.form.Radio({
        id: "reject_1",
        hideLabel: true,
        name: "action_1"
    });
    reject_1.render('reject_1');
    
    var sms_1 = new Ext.form.Checkbox({
        id: "sms_1",
        boxLabel: lang.data_alerting_media_0,
        name: "notify_1"
    });
    sms_1.render('sms_1');
    
    var call_1 = new Ext.form.Checkbox({
        id: "call_1",
        boxLabel: lang.data_alerting_media_1,
        name: "notify_1"
    });
    call_1.render('call_1');
    
    var mail_1 = new Ext.form.Checkbox({
        id: "mail_1",
        boxLabel: lang.data_alerting_media_2,
        name: "notify_1"
    });
    mail_1.render('mail_1');
    
    document.getElementById('reason_2').innerHTML = lang.alertes_config_label_general_reason_2;
    
    var accept_2 = new Ext.form.Radio({
        id: "accept_2",
        hideLabel: true,
        name: "action_2"
    });
    accept_2.render('accept_2');
    
    var reject_2 = new Ext.form.Radio({
        id: "reject_2",
        hideLabel: true,
        name: "action_2"
    });
    reject_2.render('reject_2');
    
    var sms_2 = new Ext.form.Checkbox({
        id: "sms_2",
        boxLabel: lang.data_alerting_media_0,
        name: "notify_2"
    });
    sms_2.render('sms_2');
    
    var call_2 = new Ext.form.Checkbox({
        id: "call_2",
        boxLabel: lang.data_alerting_media_1,
        name: "notify_2"
    });
    call_2.render('call_2');
    
    var mail_2 = new Ext.form.Checkbox({
        id: "mail_2",
        boxLabel: lang.data_alerting_media_2,
        name: "notify_2"
    });
    mail_2.render('mail_2');
    
    document.getElementById('reason_3').innerHTML = lang.alertes_config_label_general_reason_3;
    
    var accept_3 = new Ext.form.Radio({
        id: "accept_3",
        hideLabel: true,
        name: "action_3"
    });
    accept_3.render('accept_3');
    
    var reject_3 = new Ext.form.Radio({
        id: "reject_3",
        hideLabel: true,
        name: "action_3"
    });
    reject_3.render('reject_3');
    
    var sms_3 = new Ext.form.Checkbox({
        id: "sms_3",
        boxLabel: lang.data_alerting_media_0,
        name: "notify_3"
    });
    sms_3.render('sms_3');
    
    var call_3 = new Ext.form.Checkbox({
        id: "call_3",
        boxLabel: lang.data_alerting_media_1,
        name: "notify_3"
    });
    call_3.render('call_3');
    
    var mail_3 = new Ext.form.Checkbox({
        id: "mail_3",
        boxLabel: lang.data_alerting_media_2,
        name: "notify_3"
    });
    mail_3.render('mail_3');
	
	document.getElementById('reason_4').innerHTML = lang.alertes_config_label_general_reason_4;
    
    var accept_4 = new Ext.form.Radio({
        id: "accept_4",
        hideLabel: true,
        name: "action_4"
    });
    accept_4.render('accept_4');
    
    var reject_4 = new Ext.form.Radio({
        id: "reject_4",
        hideLabel: true,
        name: "action_4"
    });
    reject_4.render('reject_4');
    
    var sms_4 = new Ext.form.Checkbox({
        id: "sms_4",
        boxLabel: lang.data_alerting_media_0,
        name: "notify_4"
    });
    sms_4.render('sms_4');
    
    var call_4 = new Ext.form.Checkbox({
        id: "call_4",
        boxLabel: lang.data_alerting_media_1,
        name: "notify_4"
    });
    call_4.render('call_4');
    
    var mail_4 = new Ext.form.Checkbox({
        id: "mail_4",
        boxLabel: lang.data_alerting_media_2,
        name: "notify_4"
    });
    mail_4.render('mail_4');
    
    var generalAlertsFieldSet = new Ext.form.FieldSet({
        id: 'generalAlertsFieldSet',
        autoWidth: true,
        autoHeight: true,
        animCollapse: false,
        collapsible: true,
        draggable: false,
        collapsed: false,
        applyTo: 'alerteConfigGeneral'
    });
    
    var prefsAlertsFieldSet = new Ext.form.FieldSet({
        id: 'prefsAlertsFieldSet',
        title: lang.alertes_config_prefs,
        autoWidth: true,
        autoHeight: true,
        animCollapse: false,
        collapsible: true,
        draggable: false,
        collapsed: false,
        buttons: [{
            text: lang.alertes_config_prefs_mandat_button_save,
            formBind: true,
            handler: function(){
                saveGeneralRulePrefs();
            }
        }, {
            text: lang.alertes_config_prefs_mandat_button_reset,
            formBind: true,
            handler: function(){
                resetGeneralAlertsConf();
            }
        }]
    });
    
    var pref_0 = new Ext.form.Checkbox({
        id: "pref_0",
        fieldLabel: lang.alertes_config_prefs_mandat_unknown_title,
        boxLabel: lang.alertes_config_prefs_mandat_unknown_desc,
        name: "pref_0",
        autoWidth: true
    });
    prefsAlertsFieldSet.add(pref_0);
    
    var pref_1 = new Ext.form.Checkbox({
        id: "pref_1",
        fieldLabel: lang.alertes_config_prefs_mandat_modified_title,
        boxLabel: lang.alertes_config_prefs_mandat_modified_desc,
        name: "pref_1",
        autoWidth: true
    });
    prefsAlertsFieldSet.add(pref_1);
    
    // Formulaire
    var prefsAlertsForm = new Ext.form.FormPanel({
        id: 'prefsAlertsForm',
        method: 'POST',
        url: "",
        labelWidth: 300,
        frame: true,
        baseCls: ''
    });
    prefsAlertsForm.add(prefsAlertsFieldSet);
    prefsAlertsForm.render('prefConfigGeneral');
    
    loadSavedPrefs();
    
    //Partie affichage des rÃ¨gles existantes ----------------------------------------------------------
    var dataStore = getRulesStoreArray();
    
    var rulesStore = new Ext.data.SimpleStore({
        data: dataStore,
        fields: [{
            name: 'deletion'
        }, {
            name: 'modify'
        }, {
            name: 'reason'
        }, {
            name: 'target'
        }, {
            name: 'action'
        }, {
            name: 'media'
        }, {
            name: 'status'
        }]
    
    });
    var colModel = [{
        header: lang.alertes_config_grid_reason,
        dataIndex: 'reason',
        width: 250,
        sortable: true
    }, {
        header: lang.alertes_config_grid_target,
        sortable: false,
        dataIndex: 'target',
        width: 50
    }, {
        header: lang.alertes_config_grid_action,
        dataIndex: 'action',
        width: 200,
        sortable: true
    }, {
        header: lang.alertes_config_grid_media,
        dataIndex: 'media',
        width: 50,
        sortable: true
    }, {
        header: lang.alertes_config_grid_status,
        dataIndex: 'status',
        width: 30,
        renderer: modifyStatus,
        sortable: true
    }, {
        header: lang.alertes_config_grid_delete,
        sortable: false,
        renderer: deleteRule,
        dataIndex: 'deletion',
        width: 30
    }, {
        header: lang.alertes_config_grid_modify,
        sortable: false,
        renderer: modifyRule,
        dataIndex: 'modify',
        width: 30
    }];
    
    var rulesGrid = new Ext.grid.GridPanel({
        title: lang.alertes_config_grid_title,
        store: rulesStore,
        columns: colModel,
        frame: true,
        collapsible: true,
        stripeRows: false,
        autoWidth: true,
        autoHeight: true,
        enableColumnHide: true,
        enableColumnMove: true
    });
    rulesGrid.render('rulesList');
    
    
    
    //Partie crÃ©ation d'une alerte ----------------------------------------------------------
    var ruleForm = new Ext.form.FormPanel({
        id: 'ruleForm',
        method: 'POST',
        url: "",
        frame: true,
        bodyStyle: 'padding:5px 5px 0',
        labelWidth: 180,
        width: 650,
        monitorValid: true,
        defaults: {
            width: 450
        },
        baseCls: '',
        monitorValid: true
    });
    
    var ruleFieldSet = new Ext.form.FieldSet({
        id: 'ruleFieldSet',
        title: lang.alertes_config_form_rule,
        autoWidth: true,
        autoHeight: true,
        animCollapse: false,
        collapsible: true,
        draggable: false,
        collapsed: false,
        buttons: [{
            text: lang.alertes_config_form_rule_button_validate,
            formBind: true,
            handler: function(){
                if (ruleReasonField.getValue() == "" || ruleActionField.getValue() == "") {
                    Ext.Msg.show({
                        title: lang.alertes_config_form_rule_popup_error_title,
                        msg: lang.alertes_config_form_rule_popup_error_desc,
                        buttons: Ext.Msg.OK,
                        animEl: 'elId',
                        icon: Ext.MessageBox.ERROR
                    });
                }
                else {
                    var media = -1;
                    if (ruleMediaField.getValue() != null && ruleMediaField.getValue() != "") {
                        media = ruleMediaField.getValue();
                    }
                    var target = '';
                    if (targetField.isVisible()) {
                        target = targetField.getValue();
                    }
                    var rule = new AlertingRule(alertingRuleArray.length + 1, ruleReasonField.getValue(), target, ruleActionField.getValue(), media, true);
                    window.top.alertingRuleArray.push(rule);
                    Ext.Msg.show({
                        title: lang.alertes_config_form_rule_popup_ok_title,
                        msg: lang.alertes_config_form_rule_popup_ok_desc,
                        buttons: Ext.Msg.OK,
                        animEl: 'elId',
                        icon: Ext.MessageBox.INFO,
                        modal: true,
                        fn: function(){
                            parent.main.window.location = './alertes-config.html';
                        }
                    });
                }
            }
        }]
    });
    //DÃ©finition des store des combobox 
    var ruleActionStore = new Ext.data.SimpleStore({
        fields: ['id', 'name'],
        data: getRulesActionStoreArray()
    });
    
    var ruleReasonStore = new Ext.data.SimpleStore({
        fields: ['id', 'name'],
        data: getRulesReasonStoreArray(true)
    });
    var ruleReasonField = new Ext.form.ComboBox({
        id: 'ruleReasonField',
        store: ruleReasonStore,
        displayField: 'name',
        valueField: 'id',
        typeAhead: true,
        mode: 'local',
        hideLabel: false,
        fieldLabel: lang.alertes_config_form_rule_label_reason,
        forceSelection: true,
        triggerAction: 'all',
        emptyText: lang.combo_text,
        selectOnFocus: true,
        allowBlank: false,
        width: 460
    });
    ruleFieldSet.add(ruleReasonField);
    
    var targetField = new Ext.form.TextField({
        id: 'targetField',
        name: 'targetField',
        baseCls: '',
        allowBlank: true,
        hidden: false,
        hideLabel: false,
        fieldLabel: lang.alertes_config_form_rule_label_target,
        width: 100
    });
    ruleFieldSet.add(targetField);
    
    var ruleActionField = new Ext.form.ComboBox({
        id: 'ruleActionField',
        store: ruleActionStore,
        displayField: 'name',
        valueField: 'id',
        typeAhead: true,
        mode: 'local',
        hideLabel: false,
        fieldLabel: lang.alertes_config_form_rule_label_action,
        forceSelection: true,
        triggerAction: 'all',
        emptyText: lang.combo_text,
        selectOnFocus: true,
        allowBlank: false,
        width: 400
    });
    ruleFieldSet.add(ruleActionField);
    
    var ruleMediaStore = new Ext.data.SimpleStore({
        fields: ['id', 'name'],
        data: getRulesMediaStoreArray()
    });
    var ruleMediaField = new Ext.form.ComboBox({
        id: 'ruleMediaField',
        store: ruleMediaStore,
        displayField: 'name',
        valueField: 'id',
        typeAhead: true,
        mode: 'local',
        hideLabel: false,
        hidden: true,
        fieldLabel: lang.alertes_config_form_rule_label_media,
        forceSelection: true,
        triggerAction: 'all',
        emptyText: lang.combo_text,
        selectOnFocus: true,
        autoWidth: false,
        allowBlank: true,
        width: 300
    });
    ruleFieldSet.add(ruleMediaField);
    
    ruleForm.add(ruleFieldSet);
    ruleForm.render('ruleCreation');
    
    targetField.getEl().up('.x-form-item').setDisplayed(false);
    ruleMediaField.getEl().up('.x-form-item').setDisplayed(false);
    
    ruleActionField.on('select', function(){
        var chosenId = ruleActionField.getValue();
        
        if (chosenId == 1 || chosenId == 3 || chosenId == 4) {
            ruleMediaField.show();
            ruleMediaField.getEl().up('.x-form-item').setDisplayed(true);
        }
        else {
            ruleMediaField.hide();
            ruleMediaField.getEl().up('.x-form-item').setDisplayed(false);
        }
    });
    
    ruleReasonField.on('select', function(){
        var chosenId = ruleReasonField.getValue();
        reason = getItemById(alertingReasonArray, chosenId);
        if (reason.hasTarget) {
            targetField.show();
            if (Ext.get('targetUnit') != null) {
                Ext.get('targetUnit').remove();
            }
            
            targetField.getEl().up('.x-form-item').setDisplayed(true);
            Ext.get('targetField').insertHtml('afterEnd', '   <span id="targetUnit">' + reason.unit + '</span>');
        }
        else {
            targetField.hide();
            targetField.getEl().up('.x-form-item').setDisplayed(false);
            if (Ext.get('targetUnit') != null) {
                Ext.get('targetUnit').remove();
            }
            
        }
    });
    
    rulesGrid.on('cellclick', function(grid, rowIndex, colIndex){
        var idSelectedRule = grid.store.data.items[rowIndex].data.deletion;
        switch (colIndex) {
            case 4:
                for (var i = 0; i < window.top.alertingRuleArray.length; i++) {
                    if (window.top.alertingRuleArray[i].id == idSelectedRule) {
                        if (window.top.alertingRuleArray[i].status == true) {
                            window.top.alertingRuleArray[i].status = false;
                        }
                        else {
                            window.top.alertingRuleArray[i].status = true;
                        }
                    }
                }
                alertingRuleArray = window.top.alertingRuleArray;
                rulesGrid.hide(true);
                var store = getRulesStoreArray();
                rulesStore.loadData(store);
                rulesGrid.show(true);
                break;
            case 5: //Delete
                Ext.MessageBox.confirm(lang.alertes_config_form_rule_popup_confirm_title, lang.alertes_config_form_rule_popup_confirm_desc, function(btn, text){
                    if (btn == "yes") {
                        window.top.alertingRuleArray = removeFromArray(window.top.alertingRuleArray, idSelectedRule);
                        alertingRuleArray = window.top.alertingRuleArray;
                        rulesGrid.hide(true);
                        var store = getRulesStoreArray();
                        rulesStore.loadData(store);
                        rulesGrid.show(true);
                    }
                });
                break;
            case 6: //Modify
                //grid.disable();//Avoids multiples click
                //window.top.mandatToModify = idSelectedMandat;
                //parent.main.window.location = './mandats-modification.html';
                break;
        }
    });
});


function getRulesStoreArray(){
    var array = new Array();
    for (var j = 0; j < alertingRuleArray.length; j++) {
        if (alertingRuleArray[j].target != null && alertingRuleArray[j].target != '') {
            var item = new Array();
            var reason = getItemById(alertingReasonArray, alertingRuleArray[j].reason);
            var action = getItemById(alertingActionArray, alertingRuleArray[j].action);
            var media = '';
            if (alertingRuleArray[j].alertingMedia != -1) {
                media = getItemById(alertingMediaArray, alertingRuleArray[j].alertingMedia).name;
            }
            item[0] = alertingRuleArray[j].id;
            item[1] = alertingRuleArray[j].id;
            item[2] = initialCap(reason.name);
            item[3] = alertingRuleArray[j].target;
            item[4] = initialCap(action.name);
            item[5] = media;
            item[6] = alertingRuleArray[j].status;
            array.push(item);
        }
        
    }
    return array;
}


function saveGeneralRulePrefs(){
	alertingGeneral = new Array();
	window.top.alertingGeneral = alertingGeneral;
    for (var i = 0; i < 5; i++) {
        var value = Ext.ComponentMgr.get("reject_" + i).getValue();
        var action = new Array();
        if (Ext.ComponentMgr.get("sms_" + i).getValue()) {
            action.push(true);
        }
        else {
            action.push(false);
        }
        if (Ext.ComponentMgr.get("call_" + i).getValue()) {
            action.push(true);
        }
        else {
            action.push(false);
        }
        if (Ext.ComponentMgr.get("mail_" + i).getValue()) {
            action.push(true);
        }
        else {
            action.push(false);
        }
        alertingGeneral.push(['reason_' + i, value, action]);
        
    }
    
    alertingGeneral.push(['pref_0', Ext.ComponentMgr.get("pref_0").getValue()]);
    alertingGeneral.push(['pref_1', Ext.ComponentMgr.get("pref_0").getValue()]);
    
    Ext.Msg.show({
        title: lang.alertes_config_general_popup_title,
        msg: lang.alertes_config_general_popup_desc,
        buttons: Ext.Msg.OK,
        animEl: 'elId',
        icon: Ext.MessageBox.INFO,
        modal: true
    });
    
}

function modifyRule(){
    return '<img src="../../imgs/mess_brouillon.png" ext:qwidth="100" ext:qtip="' + lang.alertes_config_grid_tooltip_modify_title + '"  align="center" />';
}

function modifyStatus(value){
    if (value == true) {
        return '<img src="../../imgs/sepa/ruleOn-mini.png" ext:qwidth="100" ext:qtitle="' + lang.alertes_config_grid_tooltip_modify_status_active_title + '" ext:qtip="' + lang.alertes_config_grid_tooltip_modify_status_active_desc + '"  align="center" />';
    }
    if (value == false) {
        return '<img src="../../imgs/sepa/ruleOff-mini.png" ext:qwidth="100" ext:qtitle="' + lang.alertes_config_grid_tooltip_modify_status_inactive_title + '" ext:qtip="' + lang.alertes_config_grid_tooltip_modify_status_inactive_desc + '"  align="center" />';
        
    }
}

function deleteRule(){
    return '<img src="../../imgs/mess_bin.png" ext:qwidth="100" ext:qtip="' + lang.alertes_config_grid_tooltip_delete_title + '" align="center" />';
}

function initialCap(text){
    text = text.substr(0, 1).toUpperCase() + text.substr(1);
    return text;
}

function getRulesActionStoreArray(){
    var array = new Array();
    for (var j = 0; j < alertingActionArray.length; j++) {
        var item = new Array();
        item[0] = alertingActionArray[j].id;
        item[1] = alertingActionArray[j].name;
        array.push(item);
    }
    return array;
}

function getRulesReasonStoreArray(hasTarget){
    var array = new Array();
    for (var j = 0; j < alertingReasonArray.length; j++) {
        if (alertingReasonArray[j].hasTarget == hasTarget) {
            var item = new Array();
            item[0] = alertingReasonArray[j].id;
            item[1] = alertingReasonArray[j].name;
            array.push(item);
        }
    }
    return array;
}

function getRulesMediaStoreArray(){
    var array = new Array();
    for (var j = 0; j < alertingMediaArray.length; j++) {
        var item = new Array();
        item[0] = alertingMediaArray[j].id;
        item[1] = alertingMediaArray[j].name;
        array.push(item);
    }
    return array;
}

function loadSavedPrefs(){
    if (alertingGeneral.length == 0) {
        resetGeneralAlertsConf();
    }
    else {
        for (var i = 0; i < alertingGeneral.length; i++) {
            var key = alertingGeneral[i][0];
            if (key.indexOf('pref') == -1) {
                if (alertingGeneral[i][1]) {
                    Ext.ComponentMgr.get("reject_" + i).setValue(true);
                    Ext.ComponentMgr.get("accept_" + i).setValue(false);
                }
                else {
                    Ext.ComponentMgr.get("reject_" + i).setValue(false);
                    Ext.ComponentMgr.get("accept_" + i).setValue(true);
                }
                var array = alertingGeneral[i][2];
                Ext.ComponentMgr.get("sms_" + i).setValue(array[0]);
                Ext.ComponentMgr.get("call_" + i).setValue(array[1]);
                Ext.ComponentMgr.get("mail_" + i).setValue(array[2]);
            }
			else{
				Ext.ComponentMgr.get(key).setValue(alertingGeneral[i][1]);
			}
        }
    }
}

function resetGeneralAlertsConf(){
    for (var i = 0; i < 5; i++) {
        Ext.ComponentMgr.get("reject_" + i).setValue(true);
        Ext.ComponentMgr.get("accept_" + i).setValue(false);
        Ext.ComponentMgr.get("mail_" + i).setValue(true);
        Ext.ComponentMgr.get("sms_" + i).setValue(false);
        Ext.ComponentMgr.get("call_" + i).setValue(false);
    }
    Ext.ComponentMgr.get("pref_0").setValue(true);
    Ext.ComponentMgr.get("pref_1").setValue(true);
}
