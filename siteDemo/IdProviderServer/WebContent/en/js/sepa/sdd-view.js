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
var mandatToViewSDD = window.top.mandatToViewSDD;
var currentDebtor = getItemById(debtorArray, 0);
var userMandats = window.top.userMandats;
var callback_url =  window.top.callback_url;

Ext.onReady(function(){
	
	document.getElementById('html.footer').innerHTML = lang.html_footer;
	document.getElementById('html.sdd_view_title').innerHTML = lang.html_sdd_view_title;


	window.top.currentPage = "Sdd-view";
	
    Ext.QuickTips.init();
    
    var currentMandatId = -1;
    var currentMandat = -1;
    if (mandatToViewSDD != -1) {
        currentMandat = getItemById(mandatArray, mandatToViewSDD);
        currentMandatId = currentMandat.id;
    }
    
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
        title: lang.sdd_view_filter_title,
        autoWidth: true,
        autoHeight: true,
        animCollapse: false,
        collapsible: true,
        draggable: false,
        collapsed: true,
        disabled: false,
        buttons: [{
            text: lang.sdd_view_filter_button_display_all,
            handler: function(){
                //sddStore.loadData(getSDDStoreArray(sepaDirectDebitArray, currentMandatId, ''));
				sddStore.loadData(getSDDStoreArray(getSDDFromUserMandats(), currentMandatId, ''));
                //Update graph
                plot.setData(getChartData(currentMandatId, filter));
                plot.draw();
                //updateSummary(sepaDirectDebitArray, currentMandatId, filter);
				updateSummary(getSDDFromUserMandats(), currentMandatId, filter);
            }
            
        }, {
            text: lang.sdd_view_filter_validate,
            formBind: true,
            handler: function(){
                var filter = new Filter(umrField.getValue(), '', minAmountField.getValue(), maxAmountField.getValue(), sequenceTypeField.getValue(), sddStatusTypeField.getValue(), referenceField.getValue(), dateStartField.getValue(), dateEndField.getValue());
                //sddStore.loadData(getSDDStoreArray(sepaDirectDebitArray, currentMandatId, filter));
				sddStore.loadData(getSDDStoreArray(getSDDFromUserMandats(), currentMandatId, filter));
                //Update graph
                plot.setData(getChartData(currentMandatId, filter));
                plot.draw();
                //updateSummary(sepaDirectDebitArray, currentMandatId, filter);
				updateSummary(getSDDFromUserMandats(), currentMandatId, filter);
            }
        }]
    });
    
    var umrField = new Ext.form.TextField({
        id: 'umrField',
        fieldLabel: lang.sdd_view_filter_umr,
        name: 'umrField',
        baseCls: '',
        allowBlank: true,
		hidden:true
    });
    
    filterListFieldSet.add(umrField);
   
    var referenceField = new Ext.form.TextField({
        id: 'referenceField',
        fieldLabel: lang.sdd_view_filter_reference,
        name: 'referenceField',
        baseCls: '',
        allowBlank: true,
		hidden:true
    });
    filterListFieldSet.add(referenceField);
	
    
    var minAmountField = new Ext.form.TextField({
        id: 'minAmountField',
        fieldLabel: lang.sdd_view_filter_min_amount,
        name: 'minAmountField',
        baseCls: '',
        allowBlank: true
    });
    filterListFieldSet.add(minAmountField);
    
    var maxAmountField = new Ext.form.TextField({
        id: 'maxAmountField',
        fieldLabel: lang.sdd_view_filter_max_amount,
        name: 'maxAmountField',
        baseCls: '',
        allowBlank: true
    });
    filterListFieldSet.add(maxAmountField);
    
    var sequenceTypeStore = new Ext.data.SimpleStore({
        fields: ['id', 'name'],
        data: getSequenceTypeStoreArray()
    });
    var sequenceTypeField = new Ext.form.ComboBox({
        id: 'sequenceTypeField',
        store: sequenceTypeStore,
        fieldLabel: lang.sdd_view_filter_sequence_type,
        displayField: 'name',
        valueField: 'id',
        typeAhead: true,
        mode: 'local',
        forceSelection: true,
        triggerAction: 'all',
        emptyText: 'Choisissez dans la liste',
        selectOnFocus: true
    });
    filterListFieldSet.add(sequenceTypeField);
    
    var sddStatusTypeStore = new Ext.data.SimpleStore({
        fields: ['id', 'name'],
        data: getSddStatusArrayStoreArray()
    });
    var sddStatusTypeField = new Ext.form.ComboBox({
        id: 'sddStatusTypeField',
        store: sddStatusTypeStore,
        fieldLabel: lang.sdd_view_filter_status,
        displayField: 'name',
        valueField: 'id',
        typeAhead: true,
        mode: 'local',
        forceSelection: true,
        triggerAction: 'all',
        emptyText: 'Choisissez dans la liste',
        selectOnFocus: true
    });
    filterListFieldSet.add(sddStatusTypeField);
    
    var dateStartField = new Ext.form.DateField({
        id: 'dateStartField',
        fieldLabel: lang.sdd_view_filter_date_start,
        name: 'dateStartField',
        width: 190,
        format: lang.date_format,
        value: new Date().add(Date.MONTH, -3),
        allowBlank: false
    });
    filterListFieldSet.add(dateStartField);
    
    var dateEndField = new Ext.form.DateField({
        id: 'dateEndField',
        fieldLabel: lang.sdd_view_filter_date_end,
        name: 'dateEndField',
        width: 190,
        format: lang.date_format,
        value: new Date().add(Date.DAY, 15),
        allowBlank: false
    });
    filterListFieldSet.add(dateEndField);
    
    filterList.add(filterListFieldSet);
    filterList.render('filterGrid');
    
    var currentMandatId = window.top.mandatToViewSDD;
    var reader = new Ext.data.ArrayReader({}, [{
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
        name: 'mandat'
    }, {
        name: 'sequenceType'
    }, {
        name: 'bic'
    }, {
        name: 'status'
    }, {
        name: 'mandatId'
    }, {
        name: 'debtorAccount'
    }]);
    
    var filter = new Filter(umrField.getValue(), '', minAmountField.getValue(), maxAmountField.getValue(), sequenceTypeField.getValue(), sddStatusTypeField.getValue(), referenceField.getValue(), dateStartField.getValue(), dateEndField.getValue());
    //var dataStore = getSDDStoreArray(sepaDirectDebitArray, currentMandatId, filter);
	var dataStore = getSDDStoreArray(getSDDFromUserMandats(), currentMandatId, filter);
    
    var sddStore = new Ext.data.GroupingStore({
        reader: reader,
        data: dataStore,
        groupField: 'mandat',
        sortInfo: {
            field: 'dueDate',
            direction: "ASC"
        }
    });
    var grid = new Ext.grid.GridPanel({
        store: sddStore,
        columns: [{
            header:lang.sdd_view_grid_account,
            width: 150,
            sortable: true,
            dataIndex: 'debtorAccount',
            renderer: displayDebtorAccount
        }, {
            header: lang.sdd_view_grid_due_date,
            width: 100,
            sortable: true,
            dataIndex: 'dueDate',
            renderer: Ext.util.Format.dateRenderer(lang.date_format)
        }, {
            header: lang.sdd_view_grid_amount,
            width: 80,
            sortable: true,
            dataIndex: 'amount',
            renderer: displayAsEuroMoney
        }, {
            header: lang.sdd_view_grid_type,
            width: 60,
            sortable: true,
            dataIndex: 'sequenceType'
        }, {
            header: lang.sdd_view_grid_mandates,
            width: 80,
            sortable: true,
            dataIndex: 'mandat',
            hidden: true
        }, {
            header: lang.sdd_view_grid_status,
            width: 80,
            sortable: true,
            dataIndex: 'status',
            renderer: displayStatusName
        }, {
            header: lang.sdd_view_grid_display,
            width: 50,
            sortable: false,
            dataIndex: 'id',
            renderer: viewSdd
        }],
        
        view: new Ext.grid.GroupingView({
            forceFit: true,
            groupTextTpl: '{gvalue} ({[values.rs.length]} {[values.rs.length > 1 ? "'+lang.sdd_view_grid_debits+'" : "'+lang.sdd_view_grid_debit+'"]})'
        }),
        
        frame: true,
        collapsible: false,
        animCollapse: false,
        autoHeight: true,
        title: lang.sdd_view_grid_title,
        iconCls: 'icon-grid'
    });
    grid.render('gridSdd');
    
    grid.on('cellclick', function(grid, rowIndex, colIndex){
        var idSelectedSdd = grid.store.data.items[rowIndex].data.id;
        var idCol = grid.colModel.config[colIndex].id;
        switch (idCol) {
            case 6: //View sdd
                grid.disable();
                window.top.sddToView = idSelectedSdd;
                parent.main.window.location = './sdd-details.html';
                break;
        }
    });
    
    
    //updateSummary(sepaDirectDebitArray, currentMandatId, filter);
	updateSummary(getSDDFromUserMandats(), currentMandatId, filter);
    
    var options = {
        legend: {
            show: true,
            container: $("#legend")
        },
        lines: {
            show: true
        },
        points: {
            show: true
        },
        grid: {
            hoverable: true
        },
        xaxis: {
            mode: "time",
            timeformat: lang.date_format_chart,
            min: dateStartField.getValue().format('U') * 1000,
            max: dateEndField.getValue().format('U') * 1000
        },
        yaxis: {
            ticks: 10
        },
        selection: {
            mode: "x"
        }
    };
    
    var d = getChartData(currentMandatId, filter);
    var plot = $.plot($("#placeholder"), d, options);
    
    var overview = $.plot($("#overview"), d, {
        legend: {
            show: false
        },
        lines: {
            show: true,
            lineWidth: 1
        },
        shadowSize: 0,
        xaxis: {
            mode: "time",
            timeformat: "%m/%y",
            min: Date.parseDate('2009-01-01', 'Y-m-d').format('U') * 1000,
            max: Date.parseDate('2009-12-31', 'Y-m-d').format('U') * 1000
        },
        yaxis: {
            ticks: 3
        },
        grid: {
            color: "#999"
        },
        selection: {
            mode: "x"
        }
    });
    
    $("#placeholder").bind("plotselected", function(event, ranges){
        if (ranges.xaxis.to - ranges.xaxis.from < 0.00001) {
            ranges.xaxis.to = ranges.xaxis.from + 0.00001;
        }
        if (ranges.yaxis.to - ranges.yaxis.from < 0.00001) {
            ranges.yaxis.to = ranges.yaxis.from + 0.00001;
        }
        
        var dateStart = new Date();
        dateStart.setTime(parseInt(ranges.xaxis.from));
        var dateEnd = new Date();
        dateEnd.setTime(parseInt(ranges.xaxis.to));
        
        dateStart = Date.parseDate(dateStart.format(lang.date_format), lang.date_format);
        dateEnd = Date.parseDate(dateEnd.format(lang.date_format), lang.date_format);
        
        var filter = new Filter(umrField.getValue(), '', minAmountField.getValue(), maxAmountField.getValue(), sequenceTypeField.getValue(), sddStatusTypeField.getValue(), referenceField.getValue(), dateStart, dateEnd);
        
        var d = getChartData(currentMandatId, filter);
        plot = $.plot($("#placeholder"), d, $.extend(true, {}, options, {
            xaxis: {
                min: ranges.xaxis.from,
                max: ranges.xaxis.to
            },
            yaxis: {
                min: ranges.yaxis.from,
                max: ranges.yaxis.to
            }
        }));
        
        overview.setSelection(ranges, true);
        dateStartField.setValue(dateStart);
        dateEndField.setValue(dateEnd);
        //updateSummary(sepaDirectDebitArray, currentMandatId, filter);
		updateSummary(getSDDFromUserMandats(), currentMandatId, filter);
		//grid.getStore().loadData(getSDDStoreArray(sepaDirectDebitArray, currentMandatId, filter));
		grid.getStore().loadData(getSDDStoreArray(getSDDFromUserMandats(), currentMandatId, filter));
        
        
    });
    $("#overview").bind("plotselected", function(event, ranges){
        plot.setSelection(ranges);
    });
    
    mandatToViewSDD = -1;
	
	umrField.getEl().up('.x-form-item').setDisplayed(false);
	referenceField.getEl().up('.x-form-item').setDisplayed(false);
});

function updateSummary(sddArray, currentMandatId, filter){
    var allSdd = getSDDStoreArray(sddArray, currentMandatId, filter);
    document.getElementById('summary').innerHTML = '';
    
    for (var i = 0; i < allSdd.length; i++) {
        //[id, umr, reference, dueDate, amount, creditor infos, sequenceType name, bicDestination, sddStatus name, mandat]
        var item = allSdd[i];
        var node = Ext.DomQuery.selectNode('span[id="amount-' + item[9] + '"]');
        var currentValue = 0;
        var mandat = getItemById(mandatArray, item[9]);
        var creditor = getItemById(creditorArray, mandat.creditor);
        //var mandatInfos = creditor.name + ' ' + creditor.acronym + ' - ' + mandat.umr + ' ';
		//var mandatInfos = creditor.name + ' ' + creditor.acronym;
		var mandatInfos = creditor.name + ' UMR '+ mandat.umr;
        if (node != null) {
            currentValue = parseFloat(Ext.DomQuery.selectValue('span[id="amount-' + item[9] + '"]'));
            //if (item[8] != "MANDATE_UNKNOWN" && item[8] != "CANCELED" && item[8] != "REJECTED" && item[8] != "REJECTED_BY_BLOCK" && item[8] != "REVERSAL" && item[8] != "REVOKING") {
			if ( item[8] == "PLANNED" || item[8] == "SENT"){
                newAmount = currentValue + item[4];
                document.getElementById('amount-' + item[9]).innerHTML = newAmount;
            }
        }
        else {
            var newAmount = 0;
            //if (item[8] != "MANDATE_UNKNOWN" && item[8] != "CANCELED" && item[8] != "REJECTED" && item[8] != "REJECTED_BY_BLOCK" && item[8] != "REVERSAL" && item[8] != "REVOKING") {
			if ( item[8] == "PLANNED" || item[8] == "SENT"){
                newAmount = item[4];
            }
            var html = '<li id="line-' + item[9] + '"><span class="bold">' + mandatInfos + '</span> : <span id="amount-' + item[9] + '">' + newAmount + '</span> '+lang.currency_euro+'</li>';
            Ext.get('summary').insertHtml('beforeEnd', html);
        }
        
    }
    if (allSdd.length > 0) {
        document.getElementById('summaryIntro').innerHTML =   lang.sdd_view_summary_intro+'<span id="dateStartIntro">' + filter.dateStart.format(lang.date_format) + '</span> '+lang.sdd_view_summary_dateFrom+' <span id="dateEndIntro">' + filter.dateEnd.format(lang.date_format) + '</span> : ';
    }
    else {
        document.getElementById('summaryIntro').innerHTML = lang.sdd_view_summary_no_debit+' <span id="dateStartIntro">' + filter.dateStart.format(lang.date_format) + '</span> '+lang.sdd_view_summary_dateFrom+' <span id="dateEndIntro">' + filter.dateEnd.format(lang.date_format) + '</span> .';
    }
    Ext.get('dateStartIntro').hide();
    Ext.get('dateStartIntro').fadeIn({
        endOpacity: 1,
        easing: 'easeOut',
        duration: 2
    });
    Ext.get('dateEndIntro').hide();
    Ext.get('dateEndIntro').fadeIn({
        endOpacity: 1,
        easing: 'easeOut',
        duration: 2
    });
    
}

function displayStatusName(value){
    var sddStatus = getItemById(sddStatusArray, value);
    return sddStatus.name;
}


