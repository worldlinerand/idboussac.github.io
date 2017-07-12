var sepaDirectDebitArray = window.top.sepaDirectDebitArray;
var alertingMediaArray = window.top.alertingMediaArray;
var alertingGeneralAlertArray = window.top.alertingGeneralAlertArray;
var alertingSpecificAlertArray = window.top.alertingSpecificAlertArray;
var alertingReasonArray = window.top.alertingReasonArray;
var alertingActionArray = window.top.alertingActionArray;
var alertingRuleArray = window.top.alertingRuleArray;
var alertingGeneralRuleObject = window.top.alertingGeneralRuleObject;
var alertingGeneralActionArray = window.top.alertingGeneralActionArray;
var alerteArray = window.top.alerteArray;
var lang = window.top.lang;

Ext.onReady(function(){
    Ext.BLANK_IMAGE_URL = "../js/ext-2.2/resources/images/default/s.gif";
    var Tree = Ext.tree;
    var menuRoot = new Tree.TreeNode({
        id: 'menuRoot',
        text: 'menuRoot',
        expanded: true,
        draggable: false
    });
    
    var dashboardMenu = new Tree.TreeNode({
        text: lang.menu_home,
        draggable: false,
        listeners: {
            'click': function(){
                parent.main.window.location = './sepa/sepa-welcome.html';
            }
        }
    });
    
    var mandatsMenu = new Tree.TreeNode({
        text: lang.menu_mandates,
        draggable: false,
		icon: '../imgs/sepa/mandats-mini.png'
    });
    var mandatsCreation = new Tree.TreeNode({
        text: lang.menu_createMandate,
        draggable: false,
        icon: Ext.BLANK_IMAGE_URL,
        
        listeners: {
            'click': function(){
                parent.main.window.location = './sepa/mandats-creation.html';
            }
        }
    });
    var mandatsList = new Tree.TreeNode({
        text: lang.menu_viewMandates,
        draggable: false,
        icon: Ext.BLANK_IMAGE_URL,
        listeners: {
            'click': function(){
                parent.main.window.location = './sepa/mandats-view.html';
            }
        }
    });
    mandatsMenu.appendChild(mandatsCreation);
    mandatsMenu.appendChild(mandatsList);
    
    var sddMenu = new Tree.TreeNode({
        text: lang.menu_debits,
        draggable: false,
		icon: '../imgs/sepa/sdd-mini.png'
    });
    var sddList = new Tree.TreeNode({
        text: lang.menu_viewSdd,
        draggable: false,
        icon: Ext.BLANK_IMAGE_URL,
        listeners: {
            'click': function(){
                window.top.mandatToViewSDD = -1;
                parent.main.window.location = './sepa/sdd-view.html';
            }
        }
    });
    sddMenu.appendChild(sddList);
    
    var alertsMenu = new Tree.TreeNode({
        text: lang.menu_alerts,
        draggable: false,
		icon: '../imgs/sepa/alertes-mini.png'
    });
    var alertsList = new Tree.TreeNode({
        text: lang.menu_viewAlerts,
        icon: Ext.BLANK_IMAGE_URL,
		draggable: false,
        listeners: {
            'click': function(){
                window.top.mandatToViewSDD = -1;
                parent.main.window.location = './sepa/alertes-view.html';
            }
        }
    });
    var alertsConfig = new Tree.TreeNode({
        text: lang.menu_configAlerts,
        icon: Ext.BLANK_IMAGE_URL,
		draggable: false,
        listeners: {
            'click': function(){
                window.top.mandatToViewSDD = -1;
                parent.main.window.location = './sepa/alertes-config.html';
            }
        }
    });
    alertsMenu.appendChild(alertsList);
    alertsMenu.appendChild(alertsConfig);
    
    var sepaTreeMenu = new Tree.TreePanel({
        id: 'sepaTreeMenu',
        header: false, // permet de ne pas afficher le titre
        width: '150px',
        rootVisible: false,
        expanded: true,
        root: menuRoot,
        enableDD: true,
        style: 'margin:5px 0px 0px 30px',
        hidden: true,
        
    });
    sepaTreeMenu.render('sepa-tree-menu');
    menuRoot.appendChild(dashboardMenu);
    menuRoot.appendChild(mandatsMenu);
    menuRoot.appendChild(sddMenu);
    menuRoot.appendChild(alertsMenu);
    sepaTreeMenu.expandAll();
    
    
});

