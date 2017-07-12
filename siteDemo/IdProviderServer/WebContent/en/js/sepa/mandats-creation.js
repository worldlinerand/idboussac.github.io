
var sequenceTypeArray = window.top.sequenceTypeArray;
var periodicityArray = window.top.periodicityArray;
var infoArray = window.top.infoArray;
var creditorArray = window.top.creditorArray;
var debtorArray = window.top.debtorArray;
var accountArray = window.top.accountArray;
var paymentScheduleArray = window.top.paymentScheduleArray;
var mandatArray = window.top.mandatArray;
var blockedCreditor = window.top.blockedCreditor;
var userMandats = window.top.userMandats;

var currentDebtor = getItemById(debtorArray, 0); //let's say 0 is current user
var temporaryPaymentScheduleArray = new Array();

var createUnknownMandateAutorization = window.top.createUnknownMandateAutorization;
var createUnknownMandateFromSDDId = window.top.createUnknownMandateFromSDDId;
var sepaDirectDebitArray = window.top.sepaDirectDebitArray;

var callback_url = window.top.callback_url;

Ext.onReady(function(){

    document.getElementById('html.footer').innerHTML = lang.html_footer;
    document.getElementById('html_mandats_creation_title').innerHTML = lang.html_mandats_creation_title;
	
    document.getElementById('html_mandats_creation_autofill_form').innerHTML = lang.html_mandats_creation_autofill_form;
    
    window.top.currentPage = "Create-alert";
    var creationFieldSet = new Ext.form.FieldSet({
        id: 'creationFieldSet',
        title: lang.mandats_creation_form,
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
            text: lang.mandats_creation_button_cancel,
            handler: function(){
                Ext.MessageBox.confirm(lang.mandats_creation_popup_cancelation_title, lang.mandats_creation_popup_cancelation_desc, function(btn, text){
                    if (btn == "yes") {
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
            text: lang.mandats_creation_button_create,
            formBind: true,
            handler: function(){
                var creditor = Ext.ComponentMgr.get('creditorField').getValue();
                var found = false;
                for (var i = 0; i < blockedCreditor.length; i++) {
                    if (blockedCreditor[i] == creditor) {
                        found = true;
                    }
                }
                if (found) {
                    Ext.MessageBox.show({
                        title: lang.mandats_creation_popup_impossible_title,
                        msg: lang.mandats_creation_popup_impossible_desc,
                        buttons: Ext.MessageBox.OK
                    });
                }
                else {
                    if ((sequenceTypeField.getValue() != 'OOFF') &&
                    (periodField.getValue() == null ||
                    periodField.getValue() == "")) {
                        Ext.MessageBox.show({
                            title: lang.mandats_creation_popup_validation_title,
                            msg: lang.mandats_creation_popup_validation_desc,
                            buttons: Ext.MessageBox.OK
                        });
                    }
                    else {
                        Ext.MessageBox.confirm(lang.mandats_creation_popup_confirmation_title, lang.mandats_creation_popup_confirmation_desc, function(btn, text){
                            if (btn == "yes") {
                                //Creation
                                addCurrentMandat();
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
                }
            }
        }],
        
        baseCls: ''
    });
    
    var umrField = new Ext.form.TextField({
        id: 'umrField',
        fieldLabel: lang.mandats_creation_label_umr,
        name: 'umr',
        baseCls: '',
        allowBlank: false
    });
    creationFieldSet.add(umrField);
    
    var sciField = new Ext.form.TextField({
        id: 'sci',
        fieldLabel: lang.mandats_creation_label_sci,
        name: 'sci',
        baseCls: '',
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
        mode: 'local',
        forceSelection: true,
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
        triggerAction: 'all',
        emptyText: lang.combo_text,
        selectOnFocus: true,
        hidden: true,
        hideLabel: true
    });
    creationFieldSet.add(sequenceTypeField);
    
    
    var itemsType = new Array();
    var arrayRadio = getSequenceTypeStoreArrayForMandatCreation();
    for (var i = 0; i < arrayRadio.length; i++) {
        var radio = arrayRadio[i];
        itemsType.push({
            id: 'frequency-' + i,
            boxLabel: radio[1],
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
        columns: 2,
        lines: 1,
        items: itemsType
    });
    
    creationFieldSet.add(sequenceTypeGroup);
    
    var amountField = new Ext.form.TextField({
        id: 'amountField',
        fieldLabel: lang.mandats_creation_label_amount,
        labelSeparator: " " + lang.currency_euro,
        name: 'amount',
        baseCls: '',
        allowBlank: true
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
        forceSelection: false,
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
        minValue: new Date().format(lang.date_format),
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
        minValue: new Date().format(lang.date_format),
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
        allowBlank: false
    });
    creationFieldSet.add(dateSignatureField);
    
    var ultmtDebtorField = new Ext.form.TextField({
        id: 'ultmtDebtorField',
        fieldLabel: lang.mandats_creation_label_ultmtDebtorField,
        name: 'ultmtDebtor',
        baseCls: '',
        allowBlank: true
    });
    
    var commentField = new Ext.form.TextArea({
        id: 'comment',
        fieldLabel: lang.mandats_creation_label_comment,
        name: 'comment',
        width: 300,
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
        hidden: true,
        buttons: [{
            text: lang.mandats_creation_manuelSchedule_button_add,
            formBind: true,
            handler: function(){
                var date = nextDateSchedule.getValue();
                var amount = amountScheduleField.getValue();
                var store = scheduleGrid.getStore();
                temporaryPaymentScheduleArray = getArrayFromStore(store);
                
                if (date != "" && amount != "") {
                    temporaryPaymentScheduleArray.push([temporaryPaymentScheduleArray.length + 1, date.format('Y-m-d'), amount]);
                    store.loadData(temporaryPaymentScheduleArray);
                    store.setDefaultSort('date', 'ASC');
                }
                
                if (temporaryPaymentScheduleArray.length > 0) {
                    scheduleGrid.show();
                }
                
            }
        }]
    });
    
    
    var cm = new Ext.grid.ColumnModel([{
        header: lang.mandats_creation_scheduleGrid_date,
        sortable: false,
        renderer: Ext.util.Format.dateRenderer(lang.date_format),
        dataIndex: 'date',
        width: 130,
        editor: new Ext.form.DateField({
            format: lang.date_format,
            minValue: new Date().format(lang.date_format)
        })
    
    }, {
        header: lang.mandats_creation_label_amount,
        dataIndex: 'amount',
        align: 'right',
        width: 120,
        renderer: displayAsEuroMoney,
        editor: new Ext.form.NumberField({
            allowBlank: false,
            allowNegative: false
        })
    }, {
        header: lang.mandats_creation_scheduleGrid_delete,
        sortable: false,
        dataIndex: 'id',
        width: 100,
        renderer: deleteSchedule
    }]);
    
    var scheduleGrid = new Ext.grid.EditorGridPanel({
        id: 'scheduleGrid',
        border: true,
        cm: cm,
        width: 450,
        hidden: true,
        frame: true,
        autoHeight: true,
        //style: 'margin:10px 10px 30px 20px;',
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
    
    var nextDateSchedule = new Ext.form.DateField({
        id: 'nextDateSchedule',
        fieldLabel: lang.mandats_creation_label_nextDebit,
        name: 'nextDateSchedule',
        format: lang.date_format,
        minValue: new Date().format(lang.date_format),
        allowBlank: true
    });
    manualScheduleFieldSet.add(nextDateSchedule);
    
    var amountScheduleField = new Ext.form.TextField({
        id: 'amountScheduleField',
        fieldLabel: lang.mandats_creation_label_amount,
        labelSeparator: lang.currency_euro,
        name: 'amountScheduleField',
        baseCls: '',
        allowBlank: true
    });
    
    manualScheduleFieldSet.add(amountScheduleField);
    //Display form	
    mandatCreationForm.add(creationFieldSet);
    mandatCreationForm.add(paymentScheduleFieldSet);
    mandatCreationForm.add(paymentOOFFScheduleFieldSet);
    mandatCreationForm.add(manualScheduleFieldSet);
    
    
    mandatCreationForm.render('form');
    
    
    
    
    //Add all listeners
    Ext.get('autofill').on('mouseover', autoFillForm);
    
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
    
    scheduleGrid.on('cellclick', function(grid, rowIndex, colIndex){
        var id = scheduleGrid.store.data.items[rowIndex].data.id;
        switch (colIndex) {
            case 2: //Delete paymentSchedule
                var store = scheduleGrid.getStore();
                temporaryPaymentScheduleArray = getArrayFromStore(store);
                var newArray = new Array();
                for (var i = 0; i < temporaryPaymentScheduleArray.length; i++) {
                    if (temporaryPaymentScheduleArray[i][0] != id) {
                        newArray.push(temporaryPaymentScheduleArray[i]);
                    }
                }
                var store = scheduleGrid.getStore();
                temporaryPaymentScheduleArray = newArray;
                store.loadData(temporaryPaymentScheduleArray);
                break;
        }
    });
    
	//Init
	//Mandat(id, creationDate, status, uir, creditorAccount, debtorAcc, cancelDate, creditor, debtor, dateOfSignature, sequenceType, type, ultmtCreditor, ultmtDebtor, umr, underlyingContract, amount, comment){
    // Init if needed
    if (window.top.mandatToCreate != -1) {
        var currentMandat = getItemById(mandatArray, window.top.mandatToCreate);
        var currentSci = getItemById(creditorArray, currentMandat.creditor).sci;
        Ext.ComponentMgr.get('umrField').setValue(currentMandat.umr);
        Ext.ComponentMgr.get('umrField').disable();
        Ext.ComponentMgr.get('sci').setValue(currentSci);
        Ext.ComponentMgr.get('sci').disable();
        Ext.ComponentMgr.get('creditorField').setValue(currentMandat.creditor);
        Ext.ComponentMgr.get('creditorField').disable();
        Ext.ComponentMgr.get('debtorAccountField').setValue(currentMandat.debtorAcc);
        Ext.ComponentMgr.get('debtorAccountField').disable();
        Ext.ComponentMgr.get('sequenceTypeField').setValue(currentMandat.sequenceType); 
        Ext.ComponentMgr.get('sequenceTypeField').fireEvent("change");
        //DEBUG logger.log('Create Mandate unknown currentMandat.sequenceType : ' + currentMandat.sequenceType);       
        var paymentSchedule = getPaymentScheduleFromMandateId(currentMandat.id);
        if (currentMandat.sequenceType == 'OOFF') {					
            Ext.ComponentMgr.get('frequency-0').setValue(true);
            Ext.ComponentMgr.get('frequency-1').setValue(false);
            Ext.ComponentMgr.get('amountField').setValue(paymentSchedule.amount);
            Ext.ComponentMgr.get('date').setValue(paymentSchedule.dueDate);
            Ext.ComponentMgr.get('dateStartField').setValue(paymentSchedule.paymentStartDate);
            updateOperationDescription();
        }
        else if (currentMandat.sequenceType == 'RCUR') {
            Ext.ComponentMgr.get('frequency-1').setValue(true);
            Ext.ComponentMgr.get('frequency-0').setValue(false);
        }       
        Ext.ComponentMgr.get('frequency-0').disable();
        Ext.ComponentMgr.get('frequency-1').disable();
        Ext.ComponentMgr.get('comment').setValue(currentMandat.comment);
        Ext.ComponentMgr.get('comment').disable();
        Ext.ComponentMgr.get('dateSignatureField').setValue(currentMandat.dateOfSignature);
        Ext.ComponentMgr.get('dateSignatureField').disable();
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

function addCurrentMandat(){
    //DEBUG logger.log ('addCurrentMandat');
    if (window.top.mandatToCreate != -1) {
        //DEBUG logger.log('addCurrentMandat Ã  CrÃ©er avec Id SDD = ' + createUnknownMandateFromSDDId);
        var currentMandat = getItemById(mandatArray, window.top.mandatToCreate);
        userMandats.push(currentMandat.id);
        window.top.mandatToCreate = -1;
        createUnknownMandate = false;
        
        for (var i = 0; i < sepaDirectDebitArray.length; i++) {
            //DEBUG logger.log('sepaDirectDebitArray[i].id = ' + sepaDirectDebitArray[i].id);
            if (sepaDirectDebitArray[i].id == createUnknownMandateFromSDDId) {
                //DEBUG logger.log('sepaDirectDebitArray[i].id trouve ');
                //DEBUG logger.log('sepaDirectDebitArray - Avant [' + i + '] status = ' +  sepaDirectDebitArray[i].status + ', previousStatus = ' + sepaDirectDebitArray[i].previousStatus);
                sepaDirectDebitArray[i].status = sepaDirectDebitArray[i].previousStatus;
                sepaDirectDebitArray[i].previousStatus = '';
                //DEBUG logger.log('sepaDirectDebitArray - Aprï¿½s [' + i + '] status = ' +  sepaDirectDebitArray[i].status + ', previousStatus = ' + sepaDirectDebitArray[i].previousStatus);
            }
        }
        
        createUnknownMandateFromSDDId = -1;
    }
    else {
        var frequency = Ext.ComponentMgr.get('periodField').getValue();
        var creditor = Ext.ComponentMgr.get('creditorField').getValue();
        //var creditorAccount = Ext.ComponentMgr.get('creditorAccountField').getValue();
        creditorAccount = -1;
        var debtorAccount = Ext.ComponentMgr.get('debtorAccountField').getValue();
        var dateSignature = Ext.ComponentMgr.get('dateSignatureField').getValue();
        var sequenceType = Ext.ComponentMgr.get('sequenceTypeField').getValue();
        var dateStart;
        var amount;
        
        var dateEnd = Ext.ComponentMgr.get('dateEndField').getValue();
        
        if (sequenceType == 'OOFF') {
            dateStart = Ext.ComponentMgr.get('dateStartField').getValue();
            amount = Ext.ComponentMgr.get('amountField').getValue();
            dateEnd = Ext.ComponentMgr.get('date').getValue();
            frequency = -1;
        }
        else {
            dateStart = Ext.ComponentMgr.get('date').getValue();
            amount = Ext.ComponentMgr.get('amountFieldPlanned').getValue();
        }
        
        if (sequenceType != 'OOFF') {
            if (dateEnd == null || dateEnd == '') {
                dateEnd = dateStart;
            }
        }
        var umr = Ext.ComponentMgr.get('umrField').getValue();
        var ultmtDebtor = Ext.ComponentMgr.get('ultmtDebtorField').getValue();
        var type = "B";
        var ultmtCreditor = "";
        var status = 'ACTIVE_FIRST_USE';
        var uir = "";
        var underlyingContract = "";
        
        var id = getLastArrayId(mandatArray) + 1;
        var idPaymentSchedule = getLastArrayId(paymentScheduleArray) + 1;
        var nbPayment = getNbPayment(sequenceType, dateStart, dateEnd, frequency);
        var comment = Ext.ComponentMgr.get('comment').getValue();
        var mandat = new Mandat(id, new Date().format('Y-m-d'), status, uir, creditorAccount, debtorAccount, dateEnd.format('Y-m-d'), creditor, currentDebtor.id, dateSignature.format('Y-m-d'), sequenceType, type, ultmtCreditor, ultmtDebtor, umr, underlyingContract, amount, comment);
        var paymentSchedule;
        //Echeancier manuel
        var store = Ext.ComponentMgr.get('scheduleGrid').getStore();
        temporaryPaymentScheduleArray = getArrayFromStore(store);
        if (frequency == -1 && sequenceType == 'RCUR') {
            for (var i = 0; i < temporaryPaymentScheduleArray.length; i++) {
            
                dateStart = temporaryPaymentScheduleArray[i][1];
                dateEnd = temporaryPaymentScheduleArray[i][1];
                nbPayment = 1;
                amount = temporaryPaymentScheduleArray[i][2];
                idPaymentSchedule = getLastArrayId(paymentScheduleArray) + 1;
                paymentSchedule = new PaymentSchedule(idPaymentSchedule, frequency, sequenceType, dateStart.format('Y-m-d'), dateEnd.format('Y-m-d'), nbPayment, dateEnd.format('Y-m-d'), "Euros", '', mandat.id, amount);
                paymentScheduleArray.push(paymentSchedule);
            }
        }
        else {
            paymentSchedule = new PaymentSchedule(idPaymentSchedule, frequency, sequenceType, dateStart.format('Y-m-d'), dateEnd.format('Y-m-d'), nbPayment, dateEnd.format('Y-m-d'), "Euros", '', mandat.id, amount);
            paymentScheduleArray.push(paymentSchedule);
        }
        logger.log('new mandate : ');
        logger.log(mandat);
        mandatArray.push(mandat);
        userMandats.push(mandat.id);
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

function autoFillForm(){
    if (window.top.mandatToCreate == -1) {
        var today = new Date();
        Ext.ComponentMgr.get('umrField').setValue('30090608A24521245Z');
        Ext.ComponentMgr.get('sci').setValue('FR 65 ZZZ 351365135');
        Ext.ComponentMgr.get('sci').fireEvent("change");
        Ext.ComponentMgr.get('debtorAccountField').setValue('0');
        Ext.ComponentMgr.get('frequency-1').setValue(true);
        Ext.ComponentMgr.get('frequency-1').fireEvent("check");
        Ext.ComponentMgr.get('periodField').setValue(3);
        Ext.ComponentMgr.get('dateStartField').setValue(today);
        Ext.ComponentMgr.get('dateEndField').setValue(today.add(Date.MONTH, 6));
        Ext.ComponentMgr.get('dateEndField').fireEvent("change");
        Ext.ComponentMgr.get('fixAmount').setValue(false);
        Ext.ComponentMgr.get('variableAmount').setValue(true);
        Ext.ComponentMgr.get('variableAmount').fireEvent("check");
        Ext.ComponentMgr.get('comment').setValue('SEPA Demo ' + today.format('Y-m-d'));
        Ext.ComponentMgr.get('dateSignatureField').setValue(today);
    }
}

function getPaymentScheduleFromMandateId(mandateId){
	 for (var i = 0; i < paymentScheduleArray.length; i++) {
	 	if (paymentScheduleArray[i].mandatId == mandateId){
	 		return paymentScheduleArray[i];
	 	}
	 }
}