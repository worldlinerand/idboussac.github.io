var lang = window.top.lang;
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
var sddToView = window.top.sddToView;
var currentDebtor = getItemById(debtorArray, 0);

var createUnknownMandateAutorization = window.top.createUnknownMandateAutorization;

Ext.onReady(function(){

    document.getElementById('html.footer').innerHTML = lang.html_footer;
    document.getElementById('html.sdd_details_title').innerHTML = lang.html_sdd_details_title;
    
    window.top.currentPage = "Sdd-details";
    
    if (window.top.sddToView != -1) {
        var currentSdd = getItemById(sepaDirectDebitArray, sddToView);
        var mandat = getItemById(mandatArray, currentSdd.mandat);
        
        var sddFieldSet = new Ext.form.FieldSet({
            id: 'sddFieldSet',
            title: lang.sdd_details_form,
            autoWidth: true,
            autoHeight: true,
            animCollapse: false,
            collapsible: false,
            draggable: false
        });
        
        // Formulaire
        var sddForm = new Ext.form.FormPanel({
            id: 'sddForm',
            method: 'POST',
            url: "",
            labelWidth: 150,
            frame: true,
            bodyStyle: 'padding:5px 5px 0',
            //width: 400,
            monitorValid: true,
            defaults: {
                width: 300
            },
            buttons: getButtons(currentSdd),
            baseCls: ''
        });
        var status = new Ext.form.TextField({
            id: 'status',
            fieldLabel: lang.sdd_details_label_status,
            name: 'status',
            allowBlank: true,
            readOnly: true,
            value: getItemById(sddStatusArray, currentSdd.status).name
        });
        
        var amount = new Ext.form.TextField({
            id: 'amount',
            fieldLabel: lang.sdd_details_label_amount,
            name: 'amount',
            allowBlank: true,
            readOnly: true,
            value: currentSdd.amount + ' â¬'
        });
        var debtorAccount = new Ext.form.TextField({
            id: 'debtorAccount',
            fieldLabel: lang.sdd_details_label_account,
            name: 'bicDestination',
            width: 300,
            allowBlank: true,
            readOnly: true,
            value: displayDebtorAccount(mandat.debtorAcc)
        });
        
        var creditor = getItemById(creditorArray, currentSdd.creditor);
        var credAccount = new Ext.form.TextField({
            id: 'credAccount',
            fieldLabel: lang.sdd_details_label_creditor,
            name: 'credAccount',
            width: 300,
            allowBlank: true,
            readOnly: true,
            value: creditor.name + ' [' + creditor.acronym + ']'
        });
        
        var credSci = new Ext.form.TextField({
            id: 'credSci',
            fieldLabel: lang.sdd_details_label_sci,
            name: 'credSci',
            width: 300,
            allowBlank: true,
            readOnly: true,
            value: creditor.sci
        });
        
        var creditor = getItemById(creditorArray, currentSdd.creditor);
        var infos = creditor.currentInfo;
        var address = infos.bldgNb + ' ' + infos.strtNm + '\n';
        address += infos.pstCd + ' ' + infos.twnNm + '\n';
        address += infos.ctry;
        
        var addressCreditor = new Ext.form.TextArea({
            id: 'infosCreditor',
            fieldLabel: lang.sdd_details_label_creditor_address,
            name: 'infosCreditor',
            width: 300,
            allowBlank: true,
            readOnly: true,
            value: address
        });
        
        var dueDate = new Ext.form.TextField({
            id: 'dueDate',
            fieldLabel: lang.sdd_details_label_dueDate,
            name: 'dueDate',
            allowBlank: true,
            readOnly: true,
            value: Date.parseDate(currentSdd.dueDate, 'Y-m-d').format(lang.date_format)
        });
        
        var reference = new Ext.form.TextField({
            id: 'reference',
            fieldLabel: lang.sdd_details_label_reference,
            name: 'reference',
            width: 300,
            allowBlank: true,
            readOnly: true,
            value: currentSdd.reference
        });
        
        var comment = new Ext.form.TextArea({
            id: 'comment',
            fieldLabel: lang.sdd_details_label_comment,
            name: 'comment',
            width: 300,
            allowBlank: true,
            readOnly: true,
            value: currentSdd.remittanceInfo
        });
        
        var sequence = new Ext.form.TextField({
            id: 'sequence',
            fieldLabel: lang.sdd_details_label_type,
            name: 'sequence',
            allowBlank: true,
            readOnly: true,
            value: getItemById(sequenceTypeArray, currentSdd.sequenceType).name
        });
        
        sddFieldSet.add(status);
        sddFieldSet.add(amount);
        //sddFieldSet.add(bicDestination);
        sddFieldSet.add(debtorAccount);
        sddFieldSet.add(credAccount);
        sddFieldSet.add(credSci);
        sddFieldSet.add(addressCreditor);
        sddFieldSet.add(dueDate);
        sddFieldSet.add(reference);
        sddFieldSet.add(comment);
        sddFieldSet.add(sequence);
        
        sddForm.add(sddFieldSet);
        sddForm.render('sddDetails');
    }
});

function getButtons(currentSdd){

    var buttons = new Array();
    var currentDate = Date.parseDate(currentSdd.dueDate, 'Y-m-d');
    if (currentDate > new Date() && currentSdd.status != "CANCELED" && currentSdd.status != "REJECTED" && currentSdd.status != "REJECTED_BY_BLOCK" && currentSdd.status != "ACCEPTED") {
        buttons.push({
            text: lang.sdd_details_button_reject,
            handler: function(){
                Ext.MessageBox.show({
                    title: lang.sdd_details_popup_reject_title,
                    msg: lang.sdd_details_popup_reject_desc,
                    width: 300,
                    buttons: Ext.MessageBox.OKCANCEL,
                    multiline: true,
                    fn: function(button, text){
                        if (button == "ok") {
                            currentSdd.status = 'REJECTED';
                            currentSdd.remittanceInfo = text;
                            
                            if (window.top.callback_url != "") {
                                var url = window.top.callback_url;
                                window.top.callback_url = "";
                                parent.main.window.location = url;
                            }
                            else {
                                parent.main.window.location = './sdd-view.html';
                            }
                            
                        }
                    }
                });
            }
        });
    }
    if (currentSdd.status == "SENT") {
        buttons.push({
            text: lang.sdd_details_button_refund,
            disabled: true
        });
    }
    if (currentSdd.status == "MANDATE_UNKNOWN") {
        if (createUnknownMandateAutorization) {
            buttons.push({
                text: lang.sdd_details_button_create_mandate,
                handler: function(){
                    window.top.mandatToCreate = currentSdd.mandat;
                    parent.main.window.location = './mandats-creation.html';
                }
            })
        }
    }
    else {
        buttons.push({
            text: lang.sdd_details_button_mandate,
            handler: function(){
                window.top.mandatToModify = currentSdd.mandat;
                parent.main.window.location = './mandats-details.html';
            }
        });
    }
    
    return buttons;
    
}
