var lang = window.top.lang;
var createUnknownMandateAutorization = window.top.createUnknownMandateAutorization;

/*******************************************************************************
 * Ce fichier permet de dÃ©clarer des variables et fonctions globales utilisÃ©es
 * par les pages SDD
 */
// Class sequenceType
function SequenceType(id, name){
    this.id = id;
    this.name = name;
}
//Class SDDStatus
function SddStatus(id, name){
    this.id = id;
    this.name = name;
}
//Class MandatStatus
function MandatStatus(id, name, desc){
    this.id = id;
    this.name = name;
	this.desc = desc;
}

//Class Periodicity
function Periodicity(id, name){
    this.id = id;
    this.name = name;
}

//Class Info
function Info(id, adrTp, bldgNb, ctry, ctrySubDvsn, current, modif, name, ownerId, pstCd, strtNm, twnNm){
    this.id = id;
    this.adrTp = adrTp; // AddressType
    this.bldgNb = bldgNb; // Building Number
    this.ctry = ctry; // Country
    this.ctrySubDvsn = ctrySubDvsn; //
    this.current = current; // Boolean
    this.modif = modif; // Boolean
    this.name = name; // Name
    this.ownerId = ownerId; //
    this.pstCd = pstCd; // Postcode
    this.strtNm = strtNm; // StreetNumber
    this.twnNm = twnNm; // TownName
}

//Class Creditor/Debtor
function Party(id, accountsArray, acronym, currentInfo, name, sci){
    this.id = id;
    this.accountsArray = accountsArray; // Accounts array
    this.acronym = acronym; //
    this.currentInfo = currentInfo; // Detailed info
    this.name = name; // Name
    this.sci = sci;
}

//Class Account
function Account(id, bic, iban, ownerId, name){
    this.id = id;
    this.bic = bic;
    this.iban = iban;
    this.ownerId = ownerId;
    this.name = name; // Name
}

//Class PaymentSchedule
function PaymentSchedule(id, schedulingPeriod, schedulingType, paymentStartDate, paymentEndDate, nbPayment, dueDate, currency, transactionReference, mandatId, amount){
    this.id = id;
    this.schedulingPeriod = schedulingPeriod; // Frequency : monthly, daily,
												// yearly
    this.schedulingType = schedulingType; // One-off, Recurrent
    this.paymentStartDate = paymentStartDate;
    this.paymentEndDate = paymentEndDate;
    this.nbPayment = nbPayment; // Either start-end date, either nbPayment-due
								// date
    this.dueDate = dueDate;
    this.currency = currency; // Currency
    this.transactionReference = transactionReference; // Transaction info
    this.mandatId = mandatId;
	this.amount = amount;
}

//Class Mandat
function Mandat(id, creationDate, status, uir, creditorAccount, debtorAcc, cancelDate, creditor, debtor, dateOfSignature, sequenceType, type, ultmtCreditor, ultmtDebtor, umr, underlyingContract, amount, comment){
    this.id = id;
    this.creationDate = creationDate;
    this.status = status;
    this.uir = uir;
    this.creditorAccount = creditorAccount;
    this.debtorAcc = debtorAcc;
    this.cancelDate = cancelDate;
    this.creditor = creditor;
    this.dateOfSignature = dateOfSignature;
    this.debtor = debtor;
    this.sequenceType = sequenceType;
    this.type = type;
    this.ultmtCreditor = ultmtCreditor;
    this.ultmtDebtor = ultmtDebtor;
    this.umr = umr;
    this.underlyingContract = underlyingContract;
    this.amount = amount;
    this.comment = comment;
}

//Class filter
function Filter(umr, name, minAmount, maxAmount, sequenceType, sddStatus, reference, dateStart, dateEnd, debtorAccount){
	var length=0;
	if(umr!=''){
		length++;
	}
	if(name!=''){
		length++;
	}
	if(minAmount!=''){
		length++;
	}
	if(maxAmount!=''){
		length++;
	}
	if(sequenceType!=''){
		length++;
	}
	if(sddStatus!=''){
		length++;
	}
	if(reference!=''){
		length++;
	}
	if(dateStart!=''){
		length++;
	}
	if(dateEnd!=''){
		length++;
	}
	if(debtorAccount!='' || debtorAccount==0){
		length++;
	}
	this.umr = umr;
	this.name = name;
	this.minAmount = minAmount;
	this.maxAmount = maxAmount;
	this.sequenceType = sequenceType;
	this.sddStatus = sddStatus;
	this.reference = reference;
	this.dateStart = dateStart;
	this.dateEnd = dateEnd;
	this.debtorAccount = debtorAccount;
	
	this.length = length;
}


//Class Alerte
function Alerte(id, name, rule, date, sddId){
	this.id = id;
	this.name = name;
	this.rule = rule;
	this.date = date;
	this.sdd = sddId;
}
//Class AlertingReason
function AlertingReason(id, name, hasTarget, targetUnit){
	this.id = id;
	this.name = name;
	this.hasTarget = hasTarget;
	this.unit = targetUnit;
}
//Class AlertingMedia
function AlertingMedia(id, name){
    this.id = id;
    this.name = name;
}
//Class AlertingAction
function AlertingAction (id, name, desc){
    this.id = id;
    this.name = name;
    this.desc=desc;
}
//Class AlertingGeneralAction
function AlertingGeneralAction(id, texte){
    this.id = id;
    this.texte = texte;
}

//Class AlertingGeneralRule
function AlertingGeneralRule(idGeneralAction, idMedia){
	this.action = idGeneralAction;
    this.alertingMedia = idMedia;
}

//Class AlertingRule
function AlertingRule(id, idReason, target, idAction, idAlertingMedia, status){
    this.id = id;
    this.reason = idReason;
    this.target = target;
    this.action = idAction;
    this.alertingMedia = idAlertingMedia;
    this.status = status;
}

//Class AlertingSpecificAlert
//function AlertingSpecificAlert(id, texte){
//    this.id = id;
//    this.texte = texte;
//}

//Class SepaDirectDebit
function SepaDirectDebit(id, status, previousStatus, amendment, amount, bicDestination,credAccount, creditor, currency, dueDate, index, mandat, orgCreditorName, orgDebAccount, orgDebAccountId, orgSchemeCode, orgUmr, reference, remittanceInfo, sequenceType, umr){
    this.id = id;
	this.status = status;
	this.previousStatus = previousStatus;	
    this.amendment = amendment; // Boolean yes if sdd modified during process
	this.amount = amount;
	this.bicDestination = bicDestination;
	this.credAccount = credAccount;
	this.creditor = creditor;
	this.currency = currency;
	this.dueDate = dueDate;
	this.index = index; // Number of paiement within the paymentSchedule
	this.mandat = mandat; // mandatId
	this.orgCreditorName = orgCreditorName;
	this.orgDebAccount = orgDebAccount;
	this.orgDebAccountId = orgDebAccountId;
	this.orgSchemeCode = orgSchemeCode;
	this.orgUmr = orgUmr;
	this.reference = reference;
	this.remittanceInfo = remittanceInfo; // Comments
	this.sequenceType = sequenceType; // First / Final / OOFF
	this.umr = umr;
}
/**
 * Renvoit l'objet de array, dont l'id est passï¿½ en paramï¿½tre
 * @param {Object} array
 * @param {Object} id
 */
function getItemById(array, id){
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
        if (item.id == id) {
            return item;
        }
    }
}

/**
 * Renvoit l'id max du tableau passe en paramÃ¨tre
 * @param {Object} array
 */
function getLastArrayId(array){
    var lastId = -1;
    for (var i = 0; i < array.length; i++) {
        if (lastId < array[i].id) {
            lastId = array[i].id;
        }
    }
    return parseInt(lastId);
}

var logger = {
    log: function(object){
        try {
            window.top.frames[0].console.log(object);
        } 
        catch (err) {
            //alert(err); Nothing to do
        }
        
    }
};
/**
 * Write log in console, if available, nothing otherwise and avoid errors on IE
 * 
 * @param {Object}
 *            object
 */
function writeLog(object){
    if (isArray(object)) {
        for (var i = 0; i < object.length; i++) {
            writeLog(object[i]);
        }
    }
    else {
        Ext.get('footer').insertHtml('afterEnd', object);
    }
}

/**
 * Tells if an object is an array
 * @param {Object} obj
 */
function isArray(obj){
    if (obj.constructor.toString().indexOf("Array") == -1) 
        return false;
    else 
        return true;
}

/**
 * Returns periodicityArray as ExtJS Store
 */
function getPeriodicityStoreArray(){
    var periodicityStoreArray = new Array();
    for (var i = 0; i < periodicityArray.length; i++) {
        var periodicityStoreItem = new Array();
        periodicityStoreItem[0] = periodicityArray[i].id;
        periodicityStoreItem[1] = periodicityArray[i].name;
        periodicityStoreArray.push(periodicityStoreItem);
    }
    return periodicityStoreArray;
}

/**
 * Returns creditorArray as ExtJS Store
 */
function getCreditorStoreArray(){
    var creditorStoreArray = new Array();
    for (var i = 0; i < creditorArray.length; i++) {
        var creditorStoreItem = new Array();
        creditorStoreItem[0] = creditorArray[i].id;
        creditorStoreItem[1] = creditorArray[i].name + '[' + creditorArray[i].acronym + ']';
        creditorStoreArray.push(creditorStoreItem);
    }
    creditorStoreArray.push([-1, lang.mandats_creation_new_creditor]);
    return creditorStoreArray;
}

/**
 * Returns debtorArray as ExtJS Store
 */
function getDebtorStoreArray(){
    var debtorStoreArray = new Array();
    for (var i = 0; i < debtorArray.length; i++) {
        var debtorStoreItem = new Array();
        debtorStoreItem[0] = debtorArray[i].id;
        debtorStoreItem[1] = debtorArray[i].name + '[' + debtorArray[i].acronym + ']';
        debtorArray.push(debtorStoreItem);
    }
    return debtorArray;
}

/**
 * Returns debtorAccountArray as ExtJS Store
 */
function getDebtorAccountStoreArray(idDebtor){
    var debtorAccountsArray = new Array();
    var debtors = getItemById(debtorArray, idDebtor);
    var accounts = debtors.accountsArray;
    for (var j = 0; j < accounts.length; j++) {
        var accountItem = new Array();
        accountItem[0] = accounts[j].id;
        //accountItem[1] = accounts[j].name + ' ' + accounts[j].bic + '-' + accounts[j].iban;
        //accountItem[1] = accounts[j].bic + '-' + accounts[j].iban;
		accountItem[1] = displayDebtorAccount(accounts[j].id);
        debtorAccountsArray.push(accountItem);
    }
    return debtorAccountsArray;
}

/**
 * Returns creditorAccountArray as ExtJS Store
 */
function getCreditorAccountStoreArray(idCreditor){
    var creditorAccountsArray = new Array();
    var creditors = getItemById(creditorArray, idCreditor);
    var accounts = creditors.accountsArray;
    for (var j = 0; j < accounts.length; j++) {
        var accountItem = new Array();
        accountItem[0] = accounts[j].id;
        //accountItem[1] = accounts[j].name + ' ' + accounts[j].bic + '-' + accounts[j].iban;
		accountItem[1] = displayDebtorAccount(accounts[j].id);
        creditorAccountsArray.push(accountItem);
    }
    
    return creditorAccountsArray;
}

/**
 * Returns sequenceTypeArray as ExtJS Store
 */
function getSequenceTypeStoreArray(){
    var sequenceTypeStoreArray = new Array();
    for (var j = 0; j < sequenceTypeArray.length; j++) {
        var sequenceTypeStoreItem = new Array();
        sequenceTypeStoreItem[0] = sequenceTypeArray[j].id;
        sequenceTypeStoreItem[1] = sequenceTypeArray[j].name;
        sequenceTypeStoreArray.push(sequenceTypeStoreItem);
    }
    return sequenceTypeStoreArray;
}

/**
 * Returns sequenceTypeArray as ExtJS Store
 */
function getSequenceTypeStoreArrayForMandatCreation(){
    var sequenceTypeStoreArray = new Array();
    for (var j = 0; j < sequenceTypeArray.length; j++) {
        var sequenceTypeStoreItem = new Array();
		if (sequenceTypeArray[j].id != 'FINAL' && sequenceTypeArray[j].id != 'FIRST') {
			sequenceTypeStoreItem[0] = sequenceTypeArray[j].id;
			sequenceTypeStoreItem[1] = sequenceTypeArray[j].name;
			sequenceTypeStoreArray.push(sequenceTypeStoreItem);
		}
    }
    return sequenceTypeStoreArray;
}

/**
 * Returns sddStatusArray as ExtJS Store
 */
function getSddStatusArrayStoreArray(){
    var array = new Array();
    for (var j = 0; j < sddStatusArray.length; j++) {
        var item = new Array();
        item[0] = sddStatusArray[j].id;
        item[1] = sddStatusArray[j].name;
        array.push(item);
    }
    return array;
}


/**
 * Returns alertingMediaArray as ExtJS Store
 */
function getAlertingMediaArrayStoreArray(){
    var array = new Array();
    for (var j = 0; j < alertingMediaArray.length; j++) {
        var item = new Array();
        item[0] = alertingMediaArray[j].id;
        item[1] = alertingMediaArray[j].name;
        array.push(item);
    }
    return array;
}

/**
 * Returns alertingMediaArray as ExtJS Store
 */
function getAlertingGeneralAlertStoreArray(){
    var array = new Array();
    for (var j = 0; j < alertingGeneralAlertArray.length; j++) {
        var item = new Array();
        item[0] = alertingGeneralAlertArray[j].id;
        item[1] = alertingGeneralAlertArray[j].texte;
        array.push(item);
    }
    return array;
}

/**
 * Returns number of payment beetwen 2 dates, and with given parameters
 */
function getNbPayment(sequenceType, dateStart, dateEnd, frequency){
    var nb = 0;
	var offset = 0;
    if (sequenceType == 'OOFF') {
        nb = 1;
    }
    else 
        if (sequenceType == 'RCUR') {
            var unit = "";
            var offset = 1;
            switch (frequency) {
                case 1:
                    unit = Date.DAY;
                    break;
                case 2:
                    unit = Date.DAY;
                    offset = 7;
                    break;
                case 3:
                    unit = Date.MONTH;
                    break;
                case 4:
                    unit = Date.YEAR;
                    break;
            }
            while (unit != '' && dateStart <= dateEnd) {
                dateStart = dateStart.add(unit, offset);
                nb++;
            }
        }
    
    return nb;
}

/**
 * Returns a new array without given object 
 * @param {Object} array
 * @param {Object} id object id to remove
 */
function removeFromArray(array, id){
	var newArray = new Array();
	for(var i=0;i<array.length;i++){
		if(array[i].id != id){
			newArray.push(array[i]);
		}
	}
	return newArray;
}

/**
 * Returns an array containing all SDD of a specific mandat
 * @param {Object} sddArray
 * @param {Object} mandatId
 */
function getSDDFromMandat(mandatId){
	var newArray = new Array();
	for(var i=0;i<sepaDirectDebitArray.length;i++){
		if(sepaDirectDebitArray[i].mandat == mandatId){
			newArray.push(sepaDirectDebitArray[i]);
		}
	}
	return newArray;
}

/**
 * Returns mandatArray as ExtJS Store
 */
function getMandatStoreArray(){
    var mandatStoreArray = new Array();
    for (var j = 0; j < mandatArray.length; j++) {
        var mandatItem = new Array();
        mandatItem[0] = mandatArray[j].id;
        mandatItem[1] = mandatArray[j].umr + ' ' + mandatArray[j].creationDate + '-' + mandatArray[j].amount;
        mandatStoreArray.push(mandatItem);
    }
    return mandatStoreArray;
}

/***
 * 
 * @param {Object} dataArray
 * @param {Object} timestamp
 */
function getChartDataIndex(dataArray, timestamp){
    var ret = -1;
    for (var i = 0; i < dataArray.length; i++) {
        if (dataArray[i][0] == timestamp) {
            ret = i;
            break;
        }
    }
    return ret;
}

/**
 * Returns SDD amount/time series for building a chart with jquery.flot
 * @param {Object} mandatId or -1 for all SDD
 * @param {Object} filter Filter object
 */
function getChartData(mandatId, filter){
    var mandatChartArray = new Array();
	var sddArray = getSDDFromUserMandats();
    var chartData = new Array();
    if (mandatId == -1) {
        //for (var i = 0; i < sepaDirectDebitArray.length; i++) {
		for (var i = 0; i < sddArray.length; i++) {
            var present = false;
            var j = 0;
            while (!present && j < mandatChartArray.length) {
                //if (mandatChartArray[j] == sepaDirectDebitArray[i].mandat) {
				if (mandatChartArray[j] == sddArray[i].mandat) {
                    present = true;
                }
                j++;
            }
            if (!present) {
                //mandatChartArray.push(sepaDirectDebitArray[i].mandat);
				mandatChartArray.push(sddArray[i].mandat);
            }
        }
    }
    else {
        mandatChartArray.push(mandatId);
    }

    for (var m = 0; m < mandatChartArray.length; m++) {
		var storeArray = new Array();
		//storeArray = getSDDStoreArray(sepaDirectDebitArray, mandatChartArray[m], filter);	
		storeArray = getSDDStoreArray(sddArray, mandatChartArray[m], filter);	
        
        var array = new Array();
        var finalArray = new Array();
        
        // [id, umr, reference, dueDate, amount, creditor infos, sequenceType
		// name, bicDestination, sddStatus name]
        array = storeArray.sort(dateCompare);
        
        // Valeur initiale, pour abaisser la courbe Ã  0
        var timestampStart = Date.parseDate('2009-01-01', 'Y-m-d');
        var firstTimeStamp = Date.parseDate(array[0][3], 'Y-m-d');
        while (timestampStart < firstTimeStamp) {
            finalArray.push([timestampStart.format('U') * 1000, 0]);
            timestampStart = timestampStart.add(Date.DAY, 5);
        }
        
        for (var i = 0; i < array.length; i++) {
			//if ( array[i][8] != "MANDATE_UNKNOWN" && array[i][8] != "CANCELED" && array[i][8] != "REJECTED" && array[i][8] != "REJECTED_BY_BLOCK" && array[i][8] != "REVERSAL" && array[i][8] != "REVOKING"){
			if ( array[i][8] == "PLANNED" || array[i][8] == "SENT"){
                var timestamp = Date.parseDate(array[i][3], 'Y-m-d').format('U') * 1000;
                var chartDataIndex = getChartDataIndex(finalArray, timestamp);
                if (chartDataIndex != -1) {
                    finalArray[chartDataIndex][1] = finalArray[chartDataIndex][1] + array[i][4];
                }
                else {
                    finalArray.push([timestamp, array[i][4]]);
                }
            }
        }
        //Valeur finale, pour abaisser la courbe Ã  0
        var timestampStop = Date.parseDate('2009-12-31', 'Y-m-d');
        var firstTimeStamp = Date.parseDate(array[array.length - 1][3], 'Y-m-d').add(Date.DAY, 5);
        while (firstTimeStamp < timestampStop) {
            finalArray.push([firstTimeStamp.format('U') * 1000, 0]);
            firstTimeStamp = firstTimeStamp.add(Date.DAY, 5);
        }
        
        var mandat = getItemById(mandatArray, mandatChartArray[m]);
        var creditor = getItemById(creditorArray, mandat.creditor);
        //var mandatInfos = creditor.name + ' ' + creditor.acronym + ' - ' + mandat.umr + ' ';
		var mandatInfos = creditor.name + ' ' + creditor.acronym;
        
        chartData.push({
            data: finalArray,
            label: mandatInfos
        });
    }
    
    return chartData;
}

/**
 * Helper function to sort array by date
 * @param {Object} itemStoreA is a sdd array contening [id, umr, reference, dueDate, amount, creditor infos, sequenceType name, bicDestination, sddStatus name, mandat]
 * @param {Object} itemStoreB is an sdd array contening [id, umr, reference, dueDate, amount, creditor infos, sequenceType name, bicDestination, sddStatus name, mandat]
 */
function dateCompare(itemStoreA, itemStoreB){
    var ret = 0;
    //
    if (itemStoreA[3] > itemStoreB[3]) {
        ret = 1;
    }
    else 
        if (itemStoreA[3] < itemStoreB[3]) {
            ret = -1;
        }
    return ret;
}

/**
 * Returns a store containing all wanted SDD
 * @param {Object} sddArray
 * @param {Object} currentMandatId
 * @param {Object} filter
 */
function getSDDStoreArray(sddArray, currentMandatId, filter){
    var array = new Array();
    for (var j = 0; j < sddArray.length; j++) {
        if ((currentMandatId != -1 && currentMandatId == sddArray[j].mandat) || currentMandatId == -1) {
        
            var item = new Array();
            var mandat = getItemById(mandatArray, sddArray[j].mandat);
            var creditor = getItemById(creditorArray, mandat.creditor);
            var sequenceType = getItemById(sequenceTypeArray, sddArray[j].sequenceType);
            var sddStatus = getItemById(sddStatusArray, sddArray[j].status);
            var debtorAccount = getItemById(accountArray, mandat.debtorAcc);
            item[0] = sddArray[j].id;
            item[1] = sddArray[j].umr;
            item[2] = sddArray[j].reference;
            item[3] = sddArray[j].dueDate;
            item[4] = sddArray[j].amount;
            item[5] = creditor.name + ' ' + creditor.acronym + ' - ' + mandat.umr + ' ';
            item[6] = sequenceType.name;
            item[7] = sddArray[j].bicDestination;
            item[8] = sddArray[j].status; // sddStatus.name;
            item[9] = sddArray[j].mandat;
            //item[10] = debtorAccount.name + ' ' + debtorAccount.bic + '-' + debtorAccount.iban;
            //item[10] = debtorAccount.bic + '-' + debtorAccount.iban;
			item[10] = mandat.debtorAcc;
            
            if (filter == null || filter.length == 0 || filter.length == "undefined") {
                array.push(item);
            }
            else {
                var nbSatisfiedConditions = filter.length;
                if (filter.umr != '' && item[1].indexOf(filter.umr) == -1) {
                    nbSatisfiedConditions--;
                }
                if (filter.minAmount != '' && item[4] < parseFloat(filter.minAmount)) {
                    nbSatisfiedConditions--;
                }
                if (filter.maxAmount != '' && item[4] > parseFloat(filter.maxAmount)) {
                    nbSatisfiedConditions--;
                }
                if (filter.sequenceType != '' && item[6] != filter.sequenceType) {
                    nbSatisfiedConditions--;
                }
                if (filter.reference != '' && item[2].indexOf(filter.reference) == -1) {
                    nbSatisfiedConditions--;
                }
                if (filter.sddStatus != '' && item[8] != filter.sddStatus) {
                    nbSatisfiedConditions--;
                }
                if (filter.dateStart != '' && Date.parseDate(item[3], 'Y-m-d') < filter.dateStart) {
                    nbSatisfiedConditions--;
                }
                if (filter.dateEnd != '' && Date.parseDate(item[3], 'Y-m-d') > filter.dateEnd) {
                    nbSatisfiedConditions--;
                }
                if (nbSatisfiedConditions == filter.length) {
                    array.push(item);
                }
            }
            
        }
        
    }
    return array;
}

/**
 * Returns configFormMediaFieldStoreArray as ExtJS Store
 */
function getConfigFormMediaFieldStoreArray(){
    var array = new Array();
    for (var j = 0; j < alertingMediaArray.length; j++) {
        var item = new Array();
        item[0] = alertingMediaArray[j].id;
        item[1] = alertingMediaArray[j].name;
        array.push(item);
    }
    return array;
}

/**
 * Returns configFormAlertFieldStoreArray as ExtJS Store
 */
function getConfigFormAlertFieldStoreArray(){
    var array = new Array();
    for (var j = 0; j < alertingGeneralActionArray.length; j++) {
        var item = new Array();
        item[0] = alertingGeneralActionArray[j].id;
        item[1] = alertingGeneralActionArray[j].texte;
        array.push(item);
    }
    return array;
}


/**
 * Returns alertingAlertFieldStoreArray as ExtJS Store
 */
function getAlertingAlertFieldStoreArray(){
    var array = new Array();
    for (var j = 0; j < alertingSDDRuleArray.length; j++) {
        var item = new Array();
        item[0] = alertingSDDCreationRuleArray[j].id;
        item[1] = alertingSDDCreationRuleArray[j].texte;
        array.push(item);
    }
    return array;
}

function displayAsEuroMoney(v){
	v = (Math.round((v-0)*100))/100;
    v = (v == Math.floor(v)) ? v + ".00" : ((v*10 == Math.floor(v*10)) ? v + "0" : v);
    v = String(v);
	var ps = v.split('.');
	var whole = ps[0];
    var sub = ps[1] ? '.'+ ps[1] : '.00';
    var r = /(\d+)(\d{3})/;
    while (r.test(whole)) {
        whole = whole.replace(r, '$1' + ',' + '$2');
    }
    v = whole + sub;
	return v+' &euro;';
}

function displayDebtorAccount(accountId){
	var debtorAccount = getItemById(accountArray, accountId);
	return debtorAccount.iban;
}

function viewSdd(value, p, r){
	var sddStatus = r.data['status'];	
	if (sddStatus == "MANDATE_UNKNOWN"){
		if (createUnknownMandateAutorization){
			//return '<img src="../../imgs/sepa/sdd.png" width="30" ext:qwidth="200" ext:qtip="Voir les dÃ©tails de ce SDD" align="center" />';	
			return '<img src="../../imgs/sepa/sdd.png" width="30" align="center" />';	
		}
		else {
			//return '<img src="../../imgs/sepa/sdd.png" width="30" ext:qwidth="200" ext:qtip="Voir les dÃ©tails de ce SDD" align="center" />';	
			return '<img src="../../imgs/sepa/sdd.png" width="30" align="center" />';	
		}
		return '';	
	}
	else if(sddStatus == "MANDATE_MODIFIED"){
		//return '<img src="../../imgs/sepa/sdd.png" width="30" ext:qwidth="200" ext:qtip="Voir les dÃ©tails de ce SDD" align="center" />';
		return '<img src="../../imgs/sepa/sdd.png" width="30" align="center" />';
	}
	//else return '<img src="../../imgs/sepa/sdd.png" width="30" ext:qwidth="200" ext:qtip="Voir les dÃ©tails de ce SDD et agir sur ce SDD" align="center" />';   
	else return '<img src="../../imgs/sepa/sdd.png" width="30" align="center" />';
}

function getSDDFromUserMandats(){
	var sddArray = new Array();
	for (var i = 0; i < userMandats.length; i++) {
		for(var j = 0; j < sepaDirectDebitArray.length ; j++){
			if(sepaDirectDebitArray[j].mandat == userMandats[i]){
				sddArray.push(sepaDirectDebitArray[j]);
			}
		}
	}
	return sddArray;
}