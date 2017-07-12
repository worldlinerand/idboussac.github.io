var sepaDirectDebitArray = window.top.sepaDirectDebitArray;var alertingMediaArray = window.top.alertingMediaArray;
var alertingGeneralAlertArray = window.top.alertingGeneralAlertArray;
var alertingSpecificAlertArray = window.top.alertingSpecificAlertArray;
var alertingReasonArray = window.top.alertingReasonArray;
var alertingActionArray = window.top.alertingActionArray;
var alertingRuleArray = window.top.alertingRuleArray;
var alertingGeneralRuleObject = window.top.alertingGeneralRuleObject;
var alertingGeneralActionArray = window.top.alertingGeneralActionArray;
var alerteArray = window.top.alerteArray;

Ext.onReady(function(){

    //Mandats
    var createMandat = new Ext.Action({
        text: lang.menu_createMandate,
        handler: function(){
            parent.main.window.location = './mandats-creation.html';
        }
    });
    
    var listMandats = new Ext.Action({
        text: lang.menu_viewMandates,
        handler: function(){
            parent.main.window.location = './mandats-view.html';
        }
    });
    
    //SDD
    var listSdd = new Ext.Action({
        text: lang.menu_viewSdd,
        handler: function(){
            window.top.mandatToViewSDD = -1;
            parent.main.window.location = './sdd-view.html';
        }
    });
    
    //Alertes
    var createAlert = new Ext.Action({
        text: lang.menu_configAlerts,
        handler: function(){
            parent.main.window.location = './alertes-config.html';
        }
    });
    
    var listAlerts = new Ext.Action({
        text: lang.menu_viewAlerts,
        handler: function(){
            parent.main.window.location = './alertes-view.html';
        }
    });
    
    //Simulation
    var createSddAmount = new Ext.Action({
        text: lang.menu_generateSdd,
        handler: function(){
	    	Ext.Msg.prompt(lang.menu_popup_generateSdd_title, lang.menu_popup_generateSdd_desc, function(btn, text){
	            if(btn == 'ok' && text){
	            	sdd = generateSdd(0, parseFloat(text,2));
	            	var rule = filterNewSdd(sdd);
					if(rule != -1){
						sdd.status = 'REJECTED';
						sdd.remittanceInfo = lang.menu_rejected_reason;
						var alertText = lang.menu_incoming_sdd+displayAsEuroMoney(sdd.amount);
						var today = new Date();
						var alerte = new Alerte(alerteArray.length+1,alertText, rule, today.format('Y-m-d'), sdd.id)
						alerteArray.push(alerte);
						parent.main.window.location = './sepa-welcome.html';
					}
	            }
	        });
    	}
    });
    
    
    
    var createSddUnknown = new Ext.Action({
        text: lang.menu_generate_SDD_unkwown_mandate,
        handler: function(){
    		sdd = generateSdd(2);
    	}
    });
    
	var tbar = new Ext.Toolbar({
		items: [
		{
            text: lang.menu_home,
            handler:function(){
				parent.main.window.location = './sepa-welcome.html';
			}
        },{
            text: lang.menu_mandates,
            menu: [createMandat, listMandats]
        }, {
            text: lang.menu_debits,
            menu: [listSdd]
        }, {
            text: lang.menu_alerts,
            menu: [createAlert, listAlerts]
        }/*, {
            text: lang.menu_generate_sdd,
            //menu: [createSddAmount, createSddRecur, createSddUnknown]
            menu: [createSddAmount]
        }*/],
		width:550
	});
    var panel = new Ext.Panel({
        title: '',
        autoWidth: true,
        autoHeight: true,
        border: false,
        draggable: false,
        collapsible: false,
        collapsed: false,
        header: false,
        cls: 'menu-sepa',
		buttonAlign:'right',
        //tbar:tbar,
        buttons: getPanelButtons()
		
    });
    panel.render('sepa-menu');

    
});

function getPanelButtons(){
	buttons = new Array();
	if(window.top.currentPage != null && window.top.currentPage != 'Home') {
		buttons.push({
            text: lang.menu_button_back,
            handler: function(){
				history.back();
            }
        });
	}
	return buttons;
}
function generateSdd(type, value){
	var randomUid = Math.round((Math.random()*1000));
	//logger.log('random UID : '+randomUid);
	var today = new Date();
	var sdd;
	var id = getLastArrayId(sepaDirectDebitArray);
	switch (type) {
	//Sdd with specified Amount
    case 0:
    	sdd = new SepaDirectDebit(id+1, 'PLANNED', '', false, value, 'bicDest-'+randomUid,1, 0, 'Euros', today.add(Date.DAY,1).format('Y-m-d'), 0, 0, 'orgCreditorName-'+randomUid, 'orgDebitorName-'+randomUid, 'orgDebtorAccoutId-'+randomUid, 'orgSchemeCode-'+randomUid, 'orgUmr-'+randomUid, 'refSDD-'+randomUid,'SDD gÃ©nÃ©rÃ© nÂ°'+randomUid, 'FINAL', 'umr-0');
        break;
    //Sdd with specified periodicity
    case 1: 
        break;
    //Sdd without mandate
    case 1: 
        break;
	}
	return sdd;
}

function filterNewSdd(sdd){
	var result = -1;
	for(var i=0; i<alertingRuleArray.length; i++){
		var rule = alertingRuleArray[i];
		//Amount ou montant cumulÃ© atteint un certain seuil
		if((rule.reason == 0 || rule.reason == 1) && rule.status){
			//Seuil atteint
			if(sdd.amount >= rule.target ){
				result = rule.id;
				break;
			}
		}
	}
	return result;
}