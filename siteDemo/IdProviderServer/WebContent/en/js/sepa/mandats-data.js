var lang = window.top.lang;

var sequenceTypeArray = new Array();
var periodicityArray = new Array();
var infoArray = new Array();
var creditorArray = new Array();
var debtorArray = new Array();
var accountArray = new Array();
var paymentScheduleArray = new Array();
var mandatArray = new Array();
var alerteArray = new Array();
var sddStatusArray = new Array();
var mandatStatusArray = new Array();
var sepaDirectDebitArray = new Array();
var alertingMediaArray = new Array();
var alertingGeneralActionArray = new Array();
var alertingSpecificAlertArray = new Array();
var alertingReasonArray = new Array();
var alertingActionArray = new Array();
var alertingRuleArray = new Array();
var blockedCreditor = new Array();
var alertingGeneral = new Array();

var callback_url = '';

var userMandats = new Array();

var createUnknownMandateAutorization = true;
var createUnknownMandateFromSDDId = -1;

var currentPage = "";
var mandatToModify = -1;
var mandatToCreate = -1;
var mandatToViewSDD = -1;

var selectedNextSDDid = -1;
var selectedLastSDDid = -1;
var selectedLastSDDindex = -1;
var selectedNextSDDindex = -1;

// Par rapport a la date du jour
today = new Date();
tomorrow = today.add(Date.DAY, 1);
oneWeek = today.add(Date.DAY, 7);
twoWeeks = today.add(Date.DAY, 14);
twoDaysAgo = today.add(Date.DAY, -2);

alertingReasonArray.push(new AlertingReason(0, lang.data_alerting_reason_0, true, lang.currency_euro));
alertingReasonArray.push(new AlertingReason(1, lang.data_alerting_reason_1, true, lang.currency_euro));
alertingReasonArray.push(new AlertingReason(2, lang.data_alerting_reason_2, true, lang.currency_euro));
alertingReasonArray.push(new AlertingReason(3, lang.data_alerting_reason_3, false));
alertingReasonArray.push(new AlertingReason(4, lang.data_alerting_reason_4, true, lang.months));
alertingReasonArray.push(new AlertingReason(5, lang.data_alerting_reason_5, false));
alertingReasonArray.push(new AlertingReason(6, lang.data_alerting_reason_6, true, lang.days));
alertingReasonArray.push(new AlertingReason(7, lang.data_alerting_reason_7, true, lang.days));
alertingReasonArray.push(new AlertingReason(8, lang.data_alerting_reason_8, false));
alertingReasonArray.push(new AlertingReason(9, lang.data_alerting_reason_9, false));
alertingReasonArray.push(new AlertingReason(10, lang.data_alerting_reason_10, false));
alertingReasonArray.push(new AlertingReason(11, lang.data_alerting_reason_11, false));
alertingReasonArray.push(new AlertingReason(12, lang.data_alerting_reason_12, false));
alertingReasonArray.push(new AlertingReason(13, lang.data_alerting_reason_13, false));
alertingReasonArray.push(new AlertingReason(14, lang.data_alerting_reason_14, false));
alertingReasonArray.push(new AlertingReason(15, lang.data_alerting_reason_15, false));
alertingReasonArray.push(new AlertingReason(16, lang.data_alerting_reason_16, false));

alertingActionArray.push(new AlertingAction(0, lang.data_alerting_action_title_0, lang.data_alerting_action_desc_0));
alertingActionArray.push(new AlertingAction(1, lang.data_alerting_action_title_1, lang.data_alerting_action_desc_1));
alertingActionArray.push(new AlertingAction(2, lang.data_alerting_action_title_2, lang.data_alerting_action_desc_2));
alertingActionArray.push(new AlertingAction(3, lang.data_alerting_action_title_3, lang.data_alerting_action_desc_3));
alertingActionArray.push(new AlertingAction(4, lang.data_alerting_action_title_4, lang.data_alerting_action_desc_4));

alertingRuleArray.push(new AlertingRule(0, 0, 500+' '+lang.currency_euro, 1, 0, true));
alertingRuleArray.push(new AlertingRule(1, 4, 3+' '+lang.months, 1, 2, true));
alertingRuleArray.push(new AlertingRule(2, 1, 10000+' '+lang.currency_euro, 2, -1, false));

alertingMediaArray.push(new AlertingMedia(0, lang.data_alerting_media_0));
alertingMediaArray.push(new AlertingMedia(1, lang.data_alerting_media_1));
alertingMediaArray.push(new AlertingMedia(2, lang.data_alerting_media_2));

// Alerte(id, name, rule, date, sddId)
alerteArray.push(new Alerte(0, lang.data_alert_0,0, twoDaysAgo.add(Date.DAY, -2).format('Y-m-d')));
alerteArray.push(new Alerte(2, lang.data_alert_2,1, tomorrow.add(Date.DAY, -1).format('Y-m-d')));
alerteArray.push(new Alerte(3, lang.data_alert_3,1, tomorrow.add(Date.DAY, -2).format('Y-m-d')));

mandatStatusArray.push(new MandatStatus('DEMATERIALIZATION_IN_PROGRESS', lang.data_mandat_status_title_0, lang.data_mandat_status_desc_0));
mandatStatusArray.push(new MandatStatus('WAITING_SIGNATURE', lang.data_mandat_status_title_1, lang.data_mandat_status_desc_1));
mandatStatusArray.push(new MandatStatus('ACTIVE_FIRST_USE',lang.data_mandat_status_title_2, lang.data_mandat_status_desc_2));
mandatStatusArray.push(new MandatStatus('ACTIVE',lang.data_mandat_status_title_3, lang.data_mandat_status_desc_3));
mandatStatusArray.push(new MandatStatus('AMENDED_R1',lang.data_mandat_status_title_4, lang.data_mandat_status_desc_4));
mandatStatusArray.push(new MandatStatus('AMENDED_R2', lang.data_mandat_status_title_5, lang.data_mandat_status_desc_5));
mandatStatusArray.push(new MandatStatus('AMENDED_R3', lang.data_mandat_status_title_6, lang.data_mandat_status_desc_6));
mandatStatusArray.push(new MandatStatus('CANCELLATION_SENT',lang.data_mandat_status_title_7, lang.data_mandat_status_desc_7));
mandatStatusArray.push(new MandatStatus('CANCELLED',lang.data_mandat_status_title_8, lang.data_mandat_status_desc_8));
mandatStatusArray.push(new MandatStatus('SUSPENDED_CUSTOMER', lang.data_mandat_status_title_9, lang.data_mandat_status_desc_9));
mandatStatusArray.push(new MandatStatus('CREDITOR_SUSPENDED',lang.data_mandat_status_title_10, lang.data_mandat_status_desc_10));
mandatStatusArray.push(new MandatStatus('INACTIVE',lang.data_mandat_status_title_11, lang.data_mandat_status_desc_11));

sddStatusArray.push(new SddStatus('REJECTED', lang.data_sdd_status_0));
sddStatusArray.push(new SddStatus('REJECTED_BY_BLOCK', lang.data_sdd_status_1));
sddStatusArray.push(new SddStatus('ACCEPTED', lang.data_sdd_status_2));
sddStatusArray.push(new SddStatus('REVERSAL', lang.data_sdd_status_3));
sddStatusArray.push(new SddStatus('SENT', lang.data_sdd_status_4));
sddStatusArray.push(new SddStatus('PLANNED', lang.data_sdd_status_5));
sddStatusArray.push(new SddStatus('CANCELED', lang.data_sdd_status_6));
sddStatusArray.push(new SddStatus('REVOKING', lang.data_sdd_status_7));
sddStatusArray.push(new SddStatus('MANDATE_UNKNOWN', lang.data_sdd_status_8));
sddStatusArray.push(new SddStatus('MANDATE_MODIFIED', lang.data_sdd_status_9));

//Do not change ID !!!
sequenceTypeArray.push(new SequenceType('OOFF', lang.data_sequence_type_0));
sequenceTypeArray.push(new SequenceType('RCUR', lang.data_sequence_type_1));
sequenceTypeArray.push(new SequenceType('FINAL', lang.data_sequence_type_2));
sequenceTypeArray.push(new SequenceType('FIRST', lang.data_sequence_type_3));

//Do not change ID !!!
periodicityArray.push(new Periodicity(1, lang.data_period_type_1));
periodicityArray.push(new Periodicity(2, lang.data_period_type_2));
periodicityArray.push(new Periodicity(3, lang.data_period_type_3));
periodicityArray.push(new Periodicity(4, lang.data_period_type_4));

infoArray.push(new Info(0, 'Home', '40', 'France', 'FR', true, false, 'Brice Chaffangeon', 'a174594', '69007', 'Bd. Jean MacÃ©', 'Lyon'));
infoArray.push(new Info(1, 'Work', '103', 'France', 'FR', true, false, 'WL Telecom', 'WLT', '69003', 'Bd. De Gaulle', 'Lyon'));
infoArray.push(new Info(2, 'Work', '505', 'France', 'FR', true, false, 'WL Energy', 'WLE-Elec', '69006', 'Bd.Vivier-Merle', 'Lyon'));
infoArray.push(new Info(3, 'Work', '1', 'France', 'FR', true, false, 'WL Insurance', 'WLI', '69009', 'Bd. Garibaldi', 'Lyon'));
infoArray.push(new Info(3, 'Work', '85', 'France', 'FR', true, false, 'WL Energy', 'WLE-Gas', '75000', 'Rue Rivoli', 'Paris'));

accountArray.push(new Account(0, 'PSSTFRPPREN', 'FR1920041100200058741005T15', 'a174594', 'Brice Chaffangeon'));
accountArray.push(new Account(1, 'PSSTFRPPREN', 'FR1120041100200033741005T76', 'a174594', 'Brice Chaffangeon'));
accountArray.push(new Account(2, 'CRLYFRPP', 'FR7030002005500000157845Z02', 'WL Telecom', 'WL Telecom'));
accountArray.push(new Account(3, 'CRLYFRPP', 'FR7030002005500000117845Z09', 'WL Telecom', 'WL Telecom'));
accountArray.push(new Account(4, 'POPUFRPPXXX', 'FR7641199101421000000014258', 'WL Energy Gas', 'WL Energy Gas'));
accountArray.push(new Account(5, 'POPUFRPPXXX', 'FR7641199101421000000024587', 'WL Energy Gas', 'WL Energy Gas'));
accountArray.push(new Account(6, 'BOTKFRPXXXX', 'FR7641249101221000000012242', 'WL Insurance', 'WLI'));
accountArray.push(new Account(7, 'AGRIFRPP882', 'FR7618206002105487266700217', 'WL Energy Elec', 'WL Energy Elec'));

debtorArray.push(new Party(0, new Array(getItemById(accountArray,0),getItemById(accountArray,1)), 'BC', infoArray[0], 'Brice Chaffangeon'));

creditorArray.push(new Party(0, new Array(getItemById(accountArray,2), getItemById(accountArray,3)), 'WL Telecom', infoArray[1], 'Worldline Telecom', 'FR 65 ZZZ 351365135'));
creditorArray.push(new Party(1, new Array(getItemById(accountArray,6)), 'WL Insurance', infoArray[3], 'WL Insurance','FR 79 ZZZ 654321'));
creditorArray.push(new Party(2, new Array(getItemById(accountArray,4), getItemById(accountArray,5)), 'WL Energy Elec.', infoArray[2], 'WL Energy Elec.','FR 24 ZZZ 35136513'));
creditorArray.push(new Party(3, new Array(getItemById(accountArray,7)), 'WL Energy Gas.', infoArray[1], 'WL Energy Gas.','FR 88 ZZZ 541351351351'));

// PaymentSchedule(id, schedulingPeriod, schedulingType, paymentStartDate, paymentEndDate, nbPayment, dueDate, currency, transactionReference, mandatId, amount)
paymentScheduleArray.push(new PaymentSchedule(0, '', 'OOFF', tomorrow.format('Y-m-d'), '', '', tomorrow.format('Y-m-d'), 'Euros', '',0, 99.99));
paymentScheduleArray.push(new PaymentSchedule(1, 3, 'RCUR', today.add(Date.MONTH,-2).format('Y-m-d'), tomorrow.format('Y-m-d'), '', '', 'Euros', 'ref1234',1, 49.95));
paymentScheduleArray.push(new PaymentSchedule(2, 3, 'RCUR', today.add(Date.MONTH,-2).format('Y-m-d'), tomorrow.format('Y-m-d'), '', '', 'Euros', 'ref1234',2,30));
paymentScheduleArray.push(new PaymentSchedule(3, 3, 'RCUR', '2009-05-01', '2009-12-31', '', '', 'Euros', '',3, 30.99));
paymentScheduleArray.push(new PaymentSchedule(4, '', 'OOFF', tomorrow.format('Y-m-d'), '', '', tomorrow.format('Y-m-d'), 'Euros', '',4, 35.15));


// Mandat(id, creationDate, status, uir, creditorAccount, debtorAcc, cancelDate, creditor, debtor, dateOfSignature, sequenceType, type, ultmtCreditor, ultmtDebtor, umr, underlyingContract, amount, comment)
mandatArray.push(new Mandat(0, today.add(Date.DAY, -7).format('Y-m-d'), 'ACTIVE', 'A84602', 2, 0, '', 0, 0, today.add(Date.DAY, -10).format('Y-m-d'), 'OOFF', '', '', '', '200906081148380000A84602000019', '', '', lang.data_mandat_comment_0));
mandatArray.push(new Mandat(1, today.add(Date.DAY, -20).format('Y-m-d'), 'ACTIVE', '4568751564', 4, 1, '', 2, 0, today.add(Date.DAY, -22).format('Y-m-d'), 'RCUR', '', '', '', '20090608A846021245', '', '', lang.data_mandat_comment_1));
mandatArray.push(new Mandat(2, today.add(Date.DAY, -20).format('Y-m-d'), 'ACTIVE', 'BFE48542', 6, 0, '', 1, 0, today.add(Date.DAY, -22).format('Y-m-d'), 'RCUR', '', '', '', '20090608A24521245Z', '', '', lang.data_mandat_comment_2));
mandatArray.push(new Mandat(3, today.add(Date.DAY, -20).format('Y-m-d'), 'INACTIVE', '487255ERD', 7, 1, '', 3, 0, today.add(Date.DAY, -22).format('Y-m-d'), 'RCUR', '', '', '', '20090608114838000', '', '', lang.data_mandat_comment_3));
mandatArray.push(new Mandat(4, today.format('Y-m-d'), 'ACTIVE', 'A84603', 2, 0, '', 0, 0, today.add(Date.DAY, -10).format('Y-m-d'), 'OOFF', '', '', '', '200906081148380000A84602000033', '', '', lang.data_mandat_comment_4));
mandatArray.push(new Mandat(5, today.add(Date.DAY, -12).format('Y-m-d'), 'ACTIVE', 'A84612', 2, 0, '', 0, 0, today.add(Date.DAY, -17).format('Y-m-d'), 'OOFF', '', '', '', '200906081148380000A84602000094', '', '', lang.data_mandat_comment_5));

//Les mandats de l'utilisateur
userMandats.push(0);
userMandats.push(1);
userMandats.push(2);
userMandats.push(3);
//userMandats.push(4);


// SepaDirectDebit(id, status, previousStatus, amendment, amount, bicDestination,credAccount, creditor, currency, dueDate, index, mandat, orgCreditorName, orgDebAccount, orgDebAccountId, orgSchemeCode, orgUmr, reference, remittanceInfo, sequenceType, umr)
sepaDirectDebitArray.push(new SepaDirectDebit(0, 'REJECTED', '', false, 175.89, 'CRLYFRPP',2, 0, 'Euros', today.add(Date.MONTH, -1).format('Y-m-d'), 0, 0, 'orgCreditorName-0', 'orgDebitorName-0', 'orgDebtorAccoutId-0', 'orgSchemeCode-0', 'orgUmr-0', 'refSDD-0',lang.data_sdd_comment_0, 'OOFF', 'umr-0'));
sepaDirectDebitArray.push(new SepaDirectDebit(1, 'SENT', '', false, 115, 'CRLYFRPP',2, 0, 'Euros', today.add(Date.DAY, -7).format('Y-m-d'), 0, 5, 'orgCreditorName-1', 'orgDebitorName-1', 'orgDebtorAccoutId-1', 'orgSchemeCode-1', 'orgUmr-1', 'refSDD-1',lang.data_sdd_comment_1, 'OOFF', 'umr-0'));
sepaDirectDebitArray.push(new SepaDirectDebit(2, 'SENT', '', false, 49.95, 'POPUFRPPXXX',4, 3, 'Euros', today.add(Date.MONTH, -2).format('Y-m-d'), 0, 1, 'orgCreditorName-2', 'orgDebitorName-2', 'orgDebtorAccoutId-2', 'orgSchemeCode-2', 'orgUmr-2', 'refSDD-2',lang.data_sdd_comment_2, 'FIRST', 'umr-1'));
sepaDirectDebitArray.push(new SepaDirectDebit(3, 'SENT', '', false, 30, 'BOTKFRPXXXX',6, 1, 'Euros', today.add(Date.MONTH, -1).format('Y-m-d'), 0, 2, 'orgCreditorName-3', 'orgDebitorName-3', 'orgDebtorAccoutId-3', 'orgSchemeCode-3', 'orgUmr-3', 'refSDD-3',lang.data_sdd_comment_3, 'RCUR', 'umr-2'));
sepaDirectDebitArray.push(new SepaDirectDebit(4, 'PLANNED', '', false, 30, 'BOTKFRPXXXX',6, 1, 'Euros', tomorrow.format('Y-m-d'), 0, 2, 'orgCreditorName-4', 'orgDebitorName-4', 'orgDebtorAccoutId-4', 'orgSchemeCode-4', 'orgUmr-4', 'refSDD-4',lang.data_sdd_comment_4, 'FINAL', 'umr-2'));
sepaDirectDebitArray.push(new SepaDirectDebit(5, 'SENT', '', false, 74.50, 'BOTKFRPXXXX',6, 1, 'Euros', today.add(Date.MONTH,-2).format('Y-m-d'), 0, 2, 'orgCreditorName-5', 'orgDebitorName-5', 'orgDebtorAccoutId-5', 'orgSchemeCode-5', 'orgUmr-5', 'refSDD-5',lang.data_sdd_comment_5, 'FIRST', 'umr-2'));
sepaDirectDebitArray.push(new SepaDirectDebit(6, 'PLANNED', '', false, 99.99, 'CRLYFRPP',2, 0, 'Euros', tomorrow.format('Y-m-d'), 0, 0, 'orgCreditorName-6', 'orgDebitorName-6', 'orgDebtorAccoutId-6', 'orgSchemeCode-6', 'orgUmr-6', 'refSDD-6',lang.data_sdd_comment_6, 'OOFF', 'umr-0'));
sepaDirectDebitArray.push(new SepaDirectDebit(7, 'MANDATE_MODIFIED', '', false, 49.95, 'CRLYFRPP',2, 0, 'Euros', tomorrow.format('Y-m-d'), 0, 1, 'orgCreditorName-7', 'orgDebitorName-7', 'orgDebtorAccoutId-7', 'orgSchemeCode-7', 'orgUmr-7', 'refSDD-7',lang.data_sdd_comment_7, 'FINAL', 'umr-0'));
sepaDirectDebitArray.push(new SepaDirectDebit(8, 'SENT', '', false, 49.95, 'POPUFRPPXXX',4, 3, 'Euros', today.add(Date.MONTH, -1).format('Y-m-d'), 0, 1, 'orgCreditorName-8', 'orgDebitorName-8', 'orgDebtorAccoutId-8', 'orgSchemeCode-8', 'orgUmr-8', 'refSDD-8',lang.data_sdd_comment_8, 'RCUR', 'umr-1'));
sepaDirectDebitArray.push(new SepaDirectDebit(9, 'REJECTED', '', false, 5000, 'BOTKFRPXXXX',6, 1, 'Euros', twoDaysAgo.format('Y-m-d'), 0, 2, 'orgCreditorName-9', 'orgDebitorName-9', 'orgDebtorAccoutId-9', 'orgSchemeCode-9', 'orgUmr-9', 'refSDD-9',lang.data_sdd_comment_9, 'OOFF', 'umr-2'));
sepaDirectDebitArray.push(new SepaDirectDebit(10, 'PLANNED', '', false, 35.15, 'CRLYFRPP',2, 0, 'Euros', tomorrow.format('Y-m-d'), 0, 4, 'orgCreditorName-10', 'orgDebitorName-10', 'orgDebtorAccoutId-10', 'orgSchemeCode-10', 'orgUmr-10', 'refSDD-10',lang.data_sdd_comment_10, 'OOFF', 'umr-2'));
