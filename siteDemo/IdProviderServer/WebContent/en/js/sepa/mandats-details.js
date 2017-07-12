var lang = window.top.lang;
var sequenceTypeArray = window.top.sequenceTypeArray;
var periodicityArray = window.top.periodicityArray;
var infoArray = window.top.infoArray;
var creditorArray = window.top.creditorArray;
var debtorArray = window.top.debtorArray;
var accountArray = window.top.accountArray;
var paymentScheduleArray = window.top.paymentScheduleArray;
var mandatArray = window.top.mandatArray;
var mandatStatusArray = window.top.mandatStatusArray;
var blockedCreditor = window.top.blockedCreditor;

var currentDebtor = getItemById(debtorArray, 0); //let's say 0 is current user
var temporaryPaymentScheduleArray = new Array();

var callback_url = window.top.callback_url;

Ext.onReady(function(){

    document.getElementById('html.footer').innerHTML = lang.html_footer;
    document.getElementById('html.mandats_details_title').innerHTML = lang.html_mandats_details_title;
    
    window.top.currentPage = "Details-mandate";
    
    
    if (window.top.mandatToModify != -1) {
        var currentMandat = getItemById(mandatArray, window.top.mandatToModify);
        
        var statusFieldSet = new Ext.form.FieldSet({
            id: 'statusFieldSet',
            title: lang.mandats_details_status,
            autoWidth: true,
            autoHeight: true,
            animCollapse: false,
            collapsible: false,
            draggable: false,
            collapsed: false,
            disabled: false,
            hidden: false
        });
        
        var creationFieldSet = new Ext.form.FieldSet({
            id: 'creationFieldSet',
            title: lang.mandats_details_form,
            autoWidth: true,
            autoHeight: true,
            animCollapse: false,
            collapsible: false,
            draggable: false,
            collapsed: false
            //cls:'mandatCreation'
        });
        
        var paymentScheduleFieldSet = new Ext.form.FieldSet({
            id: 'paymentScheduleFieldSet',
            title: lang.mandats_creation_label_planification,
            autoWidth: true,
            autoHeight: true,
            animCollapse: false,
            collapsible: true,
            draggable: false,
            collapsed: false,
            disabled: false,
            hidden: true
        });
        
        var paymentOOFFScheduleFieldSet = new Ext.form.FieldSet({
            id: 'paymentOOFFScheduleFieldSet',
            title: lang.mandats_creation_label_details,
            autoWidth: true,
            autoHeight: true,
            animCollapse: false,
            collapsible: true,
            draggable: false,
            collapsed: false,
            disabled: true,
            hidden: true
        });
        
        // Formulaire
        var mandatCreationForm = new Ext.form.FormPanel({
            id: 'mandatCreationForm',
            method: 'POST',
            url: "",
            labelWidth: 150,
            frame: true,
            bodyStyle: 'padding:5px 5px 0',
            width: 550,
            monitorValid: true,
            defaults: {
                width: 200
            },
            buttons: [{
                id: 'modifyButton',
                text: lang.mandats_details_button_modify,
                handler: function(){
                    window.top.mandatToModify = currentMandat.id;
                    parent.main.window.location = './mandats-modification.html';
                }
            }, {
                id: 'cancelButton',
                text: lang.mandats_details_button_cancel,
                handler: function(){
                    Ext.MessageBox.prompt(lang.mandats_details_popup_cancel_title, lang.mandats_details_popup_cancel_msg, function(button, text){
                        if (button == "ok") {
                            if (text == "") {
                                alert(lang.mandats_details_popup_cancel_mandatory);
                            }
                            else {
                                currentMandat.cancelDate = text;
                                //[0-9]{1,2}/[0-9]{1,2}/[0-9]{4}
                                blockSddByMandat(currentMandat.id, 'REJECTED');
                                modifyCurrentStatusMandat(currentMandat.id, 'CANCELLED');
                                if (window.top.callback_url != "") {
                                    var url = window.top.callback_url;
                                    window.top.callback_url = "";
                                    parent.main.window.location = url;
                                }
                                else {
                                    parent.main.window.location = './mandats-view.html';
                                }
                            }
                            
                        }
                    });
                }
            }, {
                id: 'blockMandateButton',
                text: lang.mandats_details_button_block,
                handler: function(){
                    Ext.MessageBox.confirm(lang.mandats_details_popup_block_title, lang.mandats_details_popup_block_desc, function(btn, text){
                        if (btn == "yes") {
                            blockSddByMandat(currentMandat.id, 'REJECTED');
                            modifyCurrentStatusMandat(currentMandat.id, 'SUSPENDED_CUSTOMER');
                            //Redirection
                            if (window.top.callback_url != "") {
                                var url = window.top.callback_url;
                                window.top.callback_url = "";
                                parent.main.window.location = url;
                            }
                            else {
                                parent.main.window.location = './mandats-view.html';
                            }
                        }
                    });
                }
            }, {
                id: 'unblockMandateButton',
                text: lang.mandats_details_button_unblock,
                hidden: true,
                handler: function(){
                    Ext.MessageBox.confirm(lang.mandats_details_popup_unblock_title, lang.mandats_details_popup_unblock_popup, function(btn, text){
                        if (btn == "yes") {
                            unblockSddByMandat(currentMandat.id);
                            modifyCurrentStatusMandat(currentMandat.id, 'ACTIVE');
                            //Redirection
                            if (window.top.callback_url != "") {
                                var url = window.top.callback_url;
                                window.top.callback_url = "";
                                parent.main.window.location = url;
                            }
                            else {
                                parent.main.window.location = './mandats-view.html';
                            }
                        }
                    });
                }
            }, {
                id: 'blockCreditorButton',
                text: lang.mandats_details_button_block_creditor,
                handler: function(){
                    Ext.MessageBox.confirm(lang.mandats_details_popup_block_creditor_title, lang.mandats_details_popup_block_creditor_desc, function(btn, text){
                        if (btn == "yes") {
                            blockCreditor(currentMandat.creditor, 'REJECTED_BY_BLOCK');
                            modifyCurrentStatusMandat(currentMandat.id, 'CREDITOR_SUSPENDED');
                            //Redirection
                            if (window.top.callback_url != "") {
                                var url = window.top.callback_url;
                                window.top.callback_url = "";
                                parent.main.window.location = url;
                            }
                            else {
                                parent.main.window.location = './mandats-view.html';
                            }
                        }
                    });
                }
            }, {
                id: 'unblockCreditorButton',
                text: lang.mandats_details_button_unblock_creditor,
                hidden: true,
                handler: function(){
                    Ext.MessageBox.confirm(lang.mandats_details_popup_unblock_creditor_title, lang.mandats_details_popup_unblock_creditor_desc, function(btn, text){
                        if (btn == "yes") {
                            unblockCreditor(currentMandat.creditor);
                            modifyCurrentStatusMandat(currentMandat.id, 'ACTIVE');
                            //Redirection
                            if (window.top.callback_url != "") {
                                var url = window.top.callback_url;
                                window.top.callback_url = "";
                                parent.main.window.location = url;
                            }
                            else {
                                parent.main.window.location = './mandats-view.html';
                            }
                        }
                    });
                }
            }, {
                text: 'OK',
                formBind: true,
                handler: function(){
                    //Redirection
                    if (window.top.callback_url != "") {
                        var url = window.top.callback_url;
                        window.top.callback_url = "";
                        parent.main.window.location = url;
                    }
                    else {
                        parent.main.window.location = './mandats-view.html';
                    }
                }
            }],
            
            baseCls: ''
        });
        
        var umrField = new Ext.form.TextField({
            id: 'umrField',
            fieldLabel: lang.mandats_creation_label_umr,
            name: 'urm',
            baseCls: '',
            readOnly: true,
            allowBlank: false
        });
        creationFieldSet.add(umrField);
        
        var sciField = new Ext.form.TextField({
            id: 'sci',
            fieldLabel: lang.mandats_creation_label_sci,
            name: 'sci',
            baseCls: '',
            readOnly: true,
            allowBlank: false
        });
        creationFieldSet.add(sciField);
        
        creditorStore = new Ext.data.SimpleStore({
            fields: ['id', 'name'],
            data: getCreditorStoreArray()
        });
        
        var creditorField = new Ext.form.ComboBox({
            id: 'creditorField',
            store: creditorStore,
            fieldLabel: lang.mandats_creation_label_creditor,
            displayField: 'name',
            valueField: 'id',
            typeAhead: true,
            readOnly: true,
            mode: 'local',
            forceSelection: true,
            disabled: true,
            triggerAction: 'all',
            emptyText: lang.combo_text,
            selectOnFocus: true
        })
        
        creationFieldSet.add(creditorField);
        
        var debtorAccountStore = new Ext.data.SimpleStore({
            fields: ['id', 'name'],
            data: getDebtorAccountStoreArray(currentDebtor.id)
        });
        var debtorAccountField = new Ext.form.ComboBox({
            id: 'debtorAccountField',
            store: debtorAccountStore,
            fieldLabel: lang.mandats_creation_label_debtorAccount,
            displayField: 'name',
            valueField: 'id',
            typeAhead: true,
            readOnly: true,
            disabled: true,
            mode: 'local',
            forceSelection: true,
            triggerAction: 'all',
            emptyText: lang.combo_text,
            selectOnFocus: true
        });
        creationFieldSet.add(debtorAccountField);
        
        var sequenceTypeStore = new Ext.data.SimpleStore({
            fields: ['id', 'name'],
            data: getSequenceTypeStoreArrayForMandatCreation()
        });
        //Keep it for retro-compatibility, but never displayed
        var sequenceTypeField = new Ext.form.ComboBox({
            id: 'sequenceTypeField',
            store: sequenceTypeStore,
            fieldLabel: lang.mandats_creation_label_paymentType,
            displayField: 'name',
            valueField: 'id',
            typeAhead: true,
            mode: 'local',
            forceSelection: true,
            readOnly: true,
            disabled: true,
            triggerAction: 'all',
            emptyText: lang.combo_text,
            selectOnFocus: true,
            hidden: true,
            hideLabel: true
        });
        creationFieldSet.add(sequenceTypeField);
        
        
        var items = new Array();
        var arrayRadio = getSequenceTypeStoreArrayForMandatCreation();
        for (var i = 0; i < arrayRadio.length; i++) {
            var radio = arrayRadio[i];
            items.push({
                id: 'frequency-' + i,
                boxLabel: radio[1],
                disabled: true,
                name: 'frequency',
                inputValue: radio[0],
                xtype: 'radio',
                listeners: {
                    'check': selectFrequency
                }
            
            });
        }
        
        var sequenceTypeGroup = new Ext.form.RadioGroup({
            id: 'sequenceTypeGroup',
            name: 'sequenceTypeGroup',
            fieldLabel: lang.mandats_creation_label_paymentType,
            horizontal: true,
            readOnly: true,
            disabled: true,
            columns: 2,
            lines: 1,
            items: items
        });
        
        creationFieldSet.add(sequenceTypeGroup);
        
        var amountField = new Ext.form.TextField({
            id: 'amountField',
            fieldLabel: lang.mandats_creation_label_amount,
            labelSeparator: " " + lang.currency_euro,
            name: 'amount',
            baseCls: '',
            allowBlank: true,
            disabled: true,
            readOnly: true
        });
        paymentOOFFScheduleFieldSet.add(amountField);
        
        var arrayStore = getPeriodicityStoreArray();
        arrayStore.push([-1, lang.mandats_creation_label_manuelSchedule_choice]);
        
        var periodStore = new Ext.data.SimpleStore({
            fields: ['id', 'name'],
            data: arrayStore
        });
        
        var periodField = new Ext.form.ComboBox({
            id: 'periodField',
            store: periodStore,
            fieldLabel: lang.mandats_creation_label_frequency,
            displayField: 'name',
            valueField: 'id',
            typeAhead: true,
            mode: 'local',
            readOnly: true,
            forceSelection: false,
            disabled: true,
            triggerAction: 'all',
            width: 250,
            emptyText: lang.combo_text,
            selectOnFocus: true
        });
        paymentScheduleFieldSet.add(periodField);
        
        var date = new Ext.form.DateField({
            id: 'date',
            fieldLabel: lang.mandats_creation_label_date_oof,
            name: 'dateField',
            width: 190,
            format: lang.date_format,
            readOnly: true,
            disabled: true,
            value: new Date(),
            minValue: new Date().format(lang.date_format),
            allowBlank: true
            /*hidden:true*/
        });
        paymentOOFFScheduleFieldSet.add(date);
        
        var dateStartField = new Ext.form.DateField({
            id: 'dateStartField',
            fieldLabel: lang.mandats_creation_label_start_date_rcur,
            name: 'dateField',
            width: 190,
            format: lang.date_format,
            value: new Date(),
            disabled: true,
            minValue: new Date().format(lang.date_format),
            readOnly: true,
            allowBlank: true
            /*hidden:true*/
        });
        paymentScheduleFieldSet.add(dateStartField);
        
        var dateEndField = new Ext.form.DateField({
            id: 'dateEndField',
            fieldLabel: lang.mandats_creation_label_end_date_rcur,
            name: 'dateField',
            width: 190,
            format: lang.date_format,
            disabled: true,
            minValue: new Date().format(lang.date_format),
            readOnly: true,
            allowBlank: true
        });
        paymentScheduleFieldSet.add(dateEndField);
        
        var amountTypeGroup = new Ext.form.RadioGroup({
            id: 'amountTypeGroup',
            name: 'amountTypeGroup',
            hideLabel: true,
            vertical: false,
            style: 'margin-left:150px;',
            items: [{
                id: 'fixAmount',
                boxLabel: lang.mandats_creation_label_fixAmount,
                name: 'amountType',
                style: 'margin:100px',
                xtype: 'radio',
                checked: true,
                disabled: true,
                readOnly: true,
                listeners: {
                    'check': function(obj, checked){
                        if (checked) {
                            amountFieldPlanned.getEl().setDisplayed(true);
                            amountFieldPlanned.getEl().up('.x-form-item').setDisplayed(true);
                        }
                    }
                }
            
            }, {
                id: 'variableAmount',
                boxLabel: lang.mandats_creation_label_variableAmount,
                name: 'amountType',
                xtype: 'radio',
                readOnly: true,
                disabled: true,
                listeners: {
                    'check': function(obj, checked){
                        if (checked) {
                            amountFieldPlanned.getEl().setDisplayed(false);
                            amountFieldPlanned.getEl().up('.x-form-item').setDisplayed(false);
                        }
                    }
                }
            
            }]
        });
        var amountFieldPlanned = new Ext.form.TextField({
            id: 'amountFieldPlanned',
            fieldLabel: lang.mandats_creation_label_amount,
            name: 'amountFieldPlanned',
            labelSeparator: lang.currency_euro,
            baseCls: '',
            allowBlank: true,
            hideLabel: false,
            readOnly: true,
            hidden: false
        });
        paymentScheduleFieldSet.add(amountTypeGroup);
        paymentScheduleFieldSet.add(amountFieldPlanned);
        
        var dateSignatureField = new Ext.form.DateField({
            id: 'dateSignatureField',
            fieldLabel: lang.mandats_creation_label_signatureDate,
            name: 'dateField',
            width: 190,
            format: lang.date_format,
            readOnly: true,
            disabled: true,
            allowBlank: false
        });
        creationFieldSet.add(dateSignatureField);
        
        var ultmtDebtorField = new Ext.form.TextField({
            id: 'ultmtDebtorField',
            fieldLabel: lang.mandats_creation_label_ultmtDebtorField,
            name: 'ultmtDebtor',
            readOnly: true,
            baseCls: '',
            allowBlank: true
        });
        
        var commentField = new Ext.form.TextArea({
            id: 'comment',
            fieldLabel: lang.mandats_creation_label_comment,
            name: 'comment',
            width: 300,
            readOnly: true,
            allowBlank: true
        });
        creationFieldSet.add(commentField);
        
        var manualScheduleFieldSet = new Ext.form.FieldSet({
            id: 'manualScheduleFieldSet',
            title: lang.mandats_creation_label_manuelSchedule,
            autoWidth: true,
            autoHeight: true,
            animCollapse: false,
            collapsible: true,
            draggable: false,
            collapsed: false,
            disabled: false,
            hidden: true
        });
        
        var cm = new Ext.grid.ColumnModel([{
            header: lang.mandats_creation_scheduleGrid_date,
            sortable: false,
            renderer: Ext.util.Format.dateRenderer(lang.date_format),
            dataIndex: 'date',
            width: 130
        
        }, {
            header: lang.mandats_creation_label_amount,
            dataIndex: 'amount',
            align: 'right',
            width: 120,
            renderer: displayAsEuroMoney
        }]);
        
        var scheduleGrid = new Ext.grid.EditorGridPanel({
            id: 'scheduleGrid',
            border: true,
            cm: cm,
            width: 200,
            hidden: true,
            frame: true,
            disable: true,
            autoHeight: true,
            autoExpandColumn: '1',
            store: new Ext.data.SimpleStore({
                fields: [{
                    name: 'id'
                }, {
                    name: 'date',
                    type: 'date',
                    dateFormat: 'Y-m-d'
                }, {
                    name: 'amount',
                    type: 'float'
                }],
                data: temporaryPaymentScheduleArray
            })
        })
        manualScheduleFieldSet.add(scheduleGrid);
        
        //Display form
        var statusField = new Ext.form.TextField({
            id: 'statusField',
            fieldLabel: lang.mandats_details_status_label_title,
            name: 'statusField',
            baseCls: '',
            readOnly: true,
            allowBlank: true
        });
        statusFieldSet.add(statusField);
        
        var statusDescField = new Ext.form.TextArea({
            id: 'statusDescField',
            fieldLabel: lang.mandats_details_status_label_desc,
            name: 'statusDescField',
            width: 250,
            height: 50,
            readOnly: true,
            allowBlank: true
        });
        statusFieldSet.add(statusDescField);
        
        var cancelDateField = new Ext.form.DateField({
            id: 'cancelDateField',
            fieldLabel: lang.mandats_details_label_cancelDate,
            name: 'cancelDateField',
            width: 190,
            format: lang.date_format,
            disabled: true,
            hideLabel: true,
            value: currentMandat.cancelDate,
            readOnly: true,
            allowBlank: true,
            hidden: true
        
        });
        statusFieldSet.add(cancelDateField);
        
        mandatCreationForm.add(statusFieldSet);
        
        //Display form	
        mandatCreationForm.add(creationFieldSet);
        mandatCreationForm.add(paymentScheduleFieldSet);
        mandatCreationForm.add(paymentOOFFScheduleFieldSet);
        mandatCreationForm.add(manualScheduleFieldSet);
        mandatCreationForm.render('form');
        
        //Add all listeners
        creditorField.on('change', function(){
            var chosenId = creditorField.getValue();
            if (chosenId == -1) {
                Ext.MessageBox.show({
                    title: lang.mandats_creation_popup_unavailableCreditor.title,
                    msg: lang.mandats_creation_popup_unavailableCreditor_desc,
                    buttons: Ext.MessageBox.OK
                });
                creditorField.clearValue();
                sciField.setValue('');
            }
            else {
                var creditor = getItemById(creditorArray, chosenId);
                sciField.setValue(creditor.sci);
            }
            
        });
        sciField.on('change', function(){
            var sci = sciField.getValue();
            var found = false;
            for (var i = 0; i < creditorArray.length; i++) {
                if (creditorArray[i].sci == sci) {
                    var id = creditorArray[i].id;
                    creditorField.setValue(id);
                    found = true;
                }
            }
            if (!found) {
                Ext.MessageBox.show({
                    title: lang.mandats_creation_popup_unavailableSci_title,
                    msg: lang.mandats_creation_popup_unavailableSci_desc,
                    buttons: Ext.MessageBox.OK,
                    fn: function(){
                        creditorField.clearValue();
                        sciField.setValue('');
                    }
                });
            }
        });
        sequenceTypeField.on('change', function(){
            var id = sequenceTypeField.getValue();
            var labelDate = Ext.DomQuery.selectNode('label[for="date"]');
            if (id == 'OOFF') {
                paymentOOFFScheduleFieldSet.setDisabled(false);
                paymentOOFFScheduleFieldSet.show();
                paymentScheduleFieldSet.setDisabled(true);
                paymentScheduleFieldSet.hide();
                updateOperationDescription();
            }
            else {
                paymentOOFFScheduleFieldSet.setDisabled(true);
                paymentOOFFScheduleFieldSet.hide();
                paymentScheduleFieldSet.setDisabled(false);
                paymentScheduleFieldSet.show();
                updateOperationDescription();
            }
        });
        
        periodField.on('change', function(){
            var period = periodField.getValue();
            if (period == -1) {
                dateEndField.hide();
                dateEndField.getEl().up('.x-form-item').setDisplayed(false);
                dateStartField.hide();
                dateStartField.getEl().up('.x-form-item').setDisplayed(false);
                amountTypeGroup.hide();
                amountTypeGroup.getEl().up('.x-form-item').setDisplayed(false);
                amountFieldPlanned.hide();
                amountFieldPlanned.getEl().up('.x-form-item').setDisplayed(false);
                updateOperationDescription();
                manualScheduleFieldSet.show();
                
            }
            else {
                dateEndField.setDisabled(false);
                checkEndDate();
                updateOperationDescription();
                dateEndField.show();
                dateEndField.getEl().up('.x-form-item').setDisplayed(true);
                dateStartField.show();
                dateStartField.getEl().up('.x-form-item').setDisplayed(true);
                amountTypeGroup.show();
                amountTypeGroup.getEl().up('.x-form-item').setDisplayed(true);
                amountFieldPlanned.show();
                amountFieldPlanned.getEl().up('.x-form-item').setDisplayed(true);
                manualScheduleFieldSet.hide();
            }
            
        });
        date.on('change', function(){
            updateOperationDescription();
        });
        dateStartField.on('change', function(){
            checkEndDate();
            updateOperationDescription();
        });
        dateEndField.on('enable', function(){
            dateEndField.setValue(dateStartField.getValue().add(Date.DAY, 1));
        });
        dateEndField.on('change', function(){
            checkEndDate();
            updateOperationDescription();
        });
        
    }
    
    //Initialization of field's form
    var currentCreditor = getItemById(creditorArray, currentMandat.creditor);
    var status = getItemById(mandatStatusArray, currentMandat.status);
    statusField.setValue(status.name);
    statusDescField.setValue(status.desc);
    umrField.setValue(currentMandat.umr);
    sciField.setValue(currentCreditor.sci);
    creditorField.setValue(currentCreditor.id);
    debtorAccountField.setValue(currentMandat.debtorAcc);
    
    sequenceTypeField.setValue(currentMandat.sequenceType);
    sequenceTypeField.fireEvent("change");
    
    if (currentMandat.sequenceType == 'OOFF') {
        Ext.ComponentMgr.get('frequency-0').setValue(true);
        Ext.ComponentMgr.get('frequency-1').setValue(false);
    }
    else 
        if (currentMandat.sequenceType == 'RCUR') {
            Ext.ComponentMgr.get('frequency-1').setValue(true);
            Ext.ComponentMgr.get('frequency-0').setValue(false);
        }
    
    var currentPaymentScheduleArray = new Array();
    for (var i = 0; i < paymentScheduleArray.length; i++) {
        if (paymentScheduleArray[i].mandatId == currentMandat.id) {
            currentPaymentScheduleArray.push(paymentScheduleArray[i]);
        }
    }
    
    dateSignatureField.setValue(currentMandat.dateOfSignature);
    if (currentMandat.comment != '') {
        commentField.setValue(currentMandat.comment);
    }
    
    //Cas d'un Ã©chÃ©ancier OOFF ou RCUR planifiÃ©
    if (currentPaymentScheduleArray.length == 1) {
        currentPaymentScheduleArray = currentPaymentScheduleArray[0];
        if (currentMandat.sequenceType == 'OOFF') {
            date.setValue(currentPaymentScheduleArray.paymentStartDate);
            if (currentPaymentScheduleArray.amount != '') {
                amountField.setValue(currentPaymentScheduleArray.amount);
            }
        }
        if (currentMandat.sequenceType == 'RCUR') {
            periodField.setValue(currentPaymentScheduleArray.schedulingPeriod);
            dateStartField.setValue(currentPaymentScheduleArray.paymentStartDate);
            dateEndField.setValue(currentPaymentScheduleArray.paymentEndDate);
            if (currentPaymentScheduleArray.amount != '') {
                amountFieldPlanned.setValue(currentPaymentScheduleArray.amount);
                Ext.ComponentMgr.get('fixAmount').setValue(true);
                Ext.ComponentMgr.get('variableAmount').setValue(false);
                Ext.getCmp('fixAmount').fireEvent("check");
            }
            else {
                amountFieldPlanned.setValue(currentPaymentScheduleArray.amount);
                Ext.ComponentMgr.get('fixAmount').setValue(false);
                Ext.ComponentMgr.get('variableAmount').setValue(true);
                Ext.getCmp('variableAmount').fireEvent("check");
            }
        }
        
    }
    //Cas d'un Ã©chÃ©ancier spÃ©cifique
    else 
        if (currentPaymentScheduleArray.length > 1) {
            periodField.setValue(-1);
            var store = scheduleGrid.getStore();
            temporaryPaymentScheduleArray = toSchedulingGridArray(currentPaymentScheduleArray);
            store.loadData(temporaryPaymentScheduleArray);
            store.setDefaultSort('date', 'ASC');
            scheduleGrid.show();
            periodField.fireEvent("change");
            
        }
    updateOperationDescription();
    
    if (currentMandat.status == "CANCELLED") {
        Ext.ComponentMgr.get('cancelButton').hide();
        Ext.ComponentMgr.get('cancelDateField').show();
        Ext.ComponentMgr.get('blockMandateButton').hide();
        Ext.ComponentMgr.get('modifyButton').hide();
        Ext.get('recap').hide();
        Ext.ComponentMgr.get('cancelDateField').getEl().up('.x-form-item').setDisplayed(true);
    }
    if (currentMandat.status == "SUSPENDED_CUSTOMER") {
        Ext.ComponentMgr.get('unblockMandateButton').show();
        Ext.ComponentMgr.get('blockMandateButton').hide();
        Ext.get('recap').hide();
    }
    
    if (currentMandat.status == "CREDITOR_SUSPENDED") {
        Ext.ComponentMgr.get('unblockCreditorButton').show();
        Ext.ComponentMgr.get('blockCreditorButton').hide();
        Ext.get('recap').hide();
    }
    
    
    
    
});
function checkEndDate(){
    var frequency = Ext.ComponentMgr.get('periodField').getValue();
    var dateStart = Ext.ComponentMgr.get('dateStartField').getValue();
    var dateEnd = Ext.ComponentMgr.get('dateEndField').getValue();
    
    //Check if date is correct
    if (frequency != null && frequency != '' && dateEnd != null && dateEnd != "" && dateStart != null && dateStart != '') {
        if (dateEnd <= dateStart) {
            Ext.ComponentMgr.get('dateEndField').setValue('');
        }
        else {
            var interval = '';
            if (frequency == "2") {
                //Represents 1 week in seconds
                interval = 3600 * 24 * 7;
            }
            if (frequency == "3") {
                //Represents 1 month in seconds
                interval = 3600 * 24 * 30;
            }
            if (frequency == "4") {
                //Represents 1 year in seconds
                interval = 3600 * 24 * 365;
            }
            var timeElapsed = dateEnd.getElapsed(dateStart);
            var timeElapsed = timeElapsed / 1000;
            
            if (timeElapsed < interval) {
                //Fix the min date
                Ext.ComponentMgr.get('dateEndField').setValue(dateStart.add(Date.SECOND, interval));
            }
        }
    }
    
}

function toSchedulingGridArray(paymentScheduleTempArray){
    var array = new Array();
    for (var i = 0; i < paymentScheduleTempArray.length; i++) {
        var item = new Array();
        item[0] = array.length + 1;
        item[1] = paymentScheduleTempArray[i].paymentStartDate;
        item[2] = paymentScheduleTempArray[i].amount;
        array.push(item);
    }
    return array;
    
}

function updateOperationDescription(){
    var frequency = Ext.ComponentMgr.get('periodField').getValue();
    var sequenceType = Ext.ComponentMgr.get('sequenceTypeField').getValue();
    var dateStart = Ext.ComponentMgr.get('dateStartField').getValue();
    var dateEnd = Ext.ComponentMgr.get('dateEndField').getValue();
    
    document.getElementById('recap').innerHTML = '';
    
    var str = lang.mandats_creation_summary_intro;
    
    if (sequenceType == "OOFF") {
        dateStart = Ext.ComponentMgr.get('date').getValue();
    }
    var nbPaiements = 0;
    if (frequency != null && frequency != '') {
        nbPaiements = getNbPayment(sequenceType, dateStart, dateEnd, frequency);
    }
    
    if (dateStart != null && dateStart != '' && frequency != -1) {
        if (sequenceType == "OOFF") {
            str += '<span class="bold green">' + lang.mandats_creation_summary_oof + '</span> ';
            str += lang.mandats_creation_summary_on;
            str += '<span class="bold blue">' + dateStart.format(lang.date_format) + '</span> ';
        }
        else 
            //Daily
            if (sequenceType != "OOFF" && frequency == "1") {
                str += '<span class="bold green">' + lang.mandats_creation_summary_everyDay + '</span> ';
            }
            //Weekly
            else 
                if (sequenceType != "OOFF" && frequency == "2") {
                    var dayNumber = dateStart.format('w');
                    var day = '';
                    switch (dayNumber) {
                        case 0:
                            day = lang.mandats_creation_sundays;
                            break;
                        case 1:
                            day = lang.mandats_creation_mondays;
                            break;
                        case 2:
                            day = lang.mandats_creation_thuesdays;
                            break;
                        case 3:
                            day = lang.mandats_creation_wednesday;
                            break;
                        case 4:
                            day = lang.mandats_creation_thurdays;
                            break;
                        case 5:
                            day = lang.mandats_creation_fridays;
                            break;
                        case 6:
                            day = lang.mandats_creation_saturdays;
                            break;
                    }
                    str += '<span class="bold green">' + lang.mandats_creation_summary_everyWeek + ' ' + day + '</span> ';
                }
                //Monthly
                else 
                    if (sequenceType != "OOFF" && frequency == "3") {
                        var dayNumber = dateStart.format('j');
                        str += '<span class="bold green">' + lang.mandats_creation_summary_everyMonth_intro + ' ' + dayNumber + ' ' + lang.mandats_creation_summary_everyMonth_end + '</span> ';
                    }
                    //Yearly
                    else 
                        if (sequenceType != "OOFF" && frequency == "4") {
                            var dayNumber = dateStart.format('d/m');
                            str += '<span class="bold green">' + lang.mandats_creation_summary_everyYear + ' ' + dayNumber + '</span> ';
                        }
        //From
        if (sequenceType != "OOFF" && dateStart != null && dateStart != "") {
            str += lang.mandats_creation_summary_startDate + ' ';
            str += '<span class="bold blue">' + dateStart.format(lang.date_format) + '</span> ';
        }
        
        //To
        if (sequenceType != "OOFF" && dateEnd != null && dateEnd != "") {
            str += lang.mandats_creation_summary_endDate + ' ';
            str += '<span class="bold">' + dateEnd.format(lang.date_format) + '</span> ';
        }
        
        if (sequenceType != 'OOFF' && nbPaiements > 0) {
            if (nbPaiements > 1) {
                str += '(<span class="bold red">' + nbPaiements + '</span> ' + lang.mandats_creation_summary_onePayment + ')';
            }
            else {
                str += '(<span class="bold red">' + nbPaiements + '</span> ' + lang.mandats_creation_summary_manyPayments + ')';
            }
            
        }
        str += '. ';
        document.getElementById('recap').innerHTML = str;
    }
}


function selectFrequency(object, checked){
    if (checked) {
        Ext.getCmp('sequenceTypeField').setValue(object.inputValue);
    }
    //Force to fire event
    Ext.getCmp('sequenceTypeField').fireEvent("change");
}

function deleteSchedule(){
    return '<img src="../../imgs/mess_bin.png"  align="center" />';
}

function getArrayFromStore(store){
    var array = new Array();
    var items = store.data.items;
    for (var i = 0; i < items.length; i++) {
        var data = items[i].data;
        var item = new Array();
        item[0] = data.id;
        item[1] = data.date;
        item[2] = data.amount;
        array.push(item);
    }
    return array;
}


function isMandateStillValid(mandat){
    var bool = true;
    var today = new Date();
    if (mandat.cancelDate != null && today > Date.parseDate(mandat.cancelDate, 'Y-m-d')) {
        bool = false;
    }
    return bool;
}


function modifyCurrentStatusMandat(idMandat, status){
    for (var i = 0; i < window.top.mandatArray.length; i++) {
        if (window.top.mandatArray[i].id == idMandat) {
            window.top.mandatArray[i].status = status;
        }
    }
}

function blockCreditor(creditorId){
    var found = false;
    for (var i = 0; i < blockedCreditor.length; i++) {
        if (blockedCreditor[i] == creditorId) {
            found = true;
        }
    }
    if (!found) {
        blockedCreditor.push(creditorId);
    }
    
    //Update other mandates and SDD
    for (var i = 0; i < mandatArray.length; i++) {
        if (mandatArray[i].creditor == creditorId) {
            mandatArray[i].status = 'CREDITOR_SUSPENDED';
            blockSddByMandat(mandatArray[i].id, 'REJECTED_BY_BLOCK');
        }
    }
}

function unblockCreditor(creditorId){
    var newArray = new Array();
    
    for (var i = 0; i < blockedCreditor.length; i++) {
        if (blockedCreditor[i] != creditorId) {
            newArray.push(blockedCreditor[i]);
        }
    }
    blockedCreditor = newArray;
    window.top.blockedCreditor = newArray;
    
    //Update other mandates
    for (var i = 0; i < mandatArray.length; i++) {
        if (mandatArray[i].creditor == creditorId) {
            mandatArray[i].status = 'ACTIVE';
            unblockSddByMandat(mandatArray[i].id);
        }
    }
}

function blockSddByMandat(mandatId, status){
    for (var j = 0; j < sepaDirectDebitArray.length; j++) {
        if (sepaDirectDebitArray[j].mandat == mandatId) {
            if (sepaDirectDebitArray[j].status == 'PLANNED') {
                sepaDirectDebitArray[j].status = status;
            }
        }
    }
}

function unblockSddByMandat(mandatId){
    for (var j = 0; j < sepaDirectDebitArray.length; j++) {
        if (sepaDirectDebitArray[j].mandat == mandatId) {
            if (sepaDirectDebitArray[j].status == 'REJECTED_BY_BLOCK') {
                sepaDirectDebitArray[j].status = 'PLANNED';
            }
        }
    }
}
