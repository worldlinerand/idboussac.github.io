ApplicationLang = function(){

    /* General */
    this.combo_text = "Choose in the list";
    this.currency_euro = "&euro;";
    this.days = "days";
    this.months = "months";
    this.extjs_button_yes = "Yes";
    this.extjs_button_no = "No"
    this.extjs_button_ok = "OK"
    this.extjs_button_cancel = "Cancel";
    this.date_format = "m/d/y";
    this.date_format_chart = "%m/%d";
    
    /* HTML */
    this.html_footer = "&copy; Atos Worldline, 2009";
    
    this.html_welcome_last_alerts = "My 5 last alerts";
    this.html_welcome_next_sdd = "My 5 next SDD";
    this.html_welcome_last_sdd = "My 5 last SDD";
    
    this.html_sdd_view_title = "My SEPA's Debits";
    
    this.html_sdd_details_title = "Debit's details";
    
    this.html_mandats_view_title = "My mandates";
    
    this.html_mandats_modification_title = "Mandate's amendment";
    
    this.html_mandats_details_title = "Mandate's details";
    
    this.html_mandats_creation_title = "New mandate";
    this.html_mandats_creation_autofill_form = "Fill automatically (demo)";
    
    this.html_alertes_view_title = "My alerts";
    
    this.html_alertes_config_title = "Alerts configuration";
    
    /* Mandate creation */
    this.mandats_creation_form = "Mandate creation form";
    this.mandats_creation_label_planification = "Planning";
    this.mandats_creation_label_details = "Details";
    this.mandats_creation_button_cancel = "Cancel";
    this.mandats_creation_button_create = "Create";
    this.mandats_creation_popup_cancelation_title = "Confirmation";
    this.mandats_creation_popup_cancelation_desc = "Do you really want abort mandate's creation ?";
    this.mandats_creation_popup_impossible_title = "Creation failed";
    this.mandats_creation_popup_impossible_desc = "This creditor has been blocked. Creation has failed";
    this.mandats_creation_popup_validation_title = "Information";
    this.mandats_creation_popup_validation_desc = "All planning fields are mandatory";
    this.mandats_creation_popup_confirmation_title = "Confirmation";
    this.mandats_creation_popup_confirmation_desc = "Do you really want to create this mandate ?";
    this.mandats_creation_label_umr = "UMR";
    this.mandats_creation_label_sci = "Creditor identifier";
    this.mandats_creation_label_creditor = "Creditor";
    this.mandats_creation_label_debtorAccount = "Debtor account";
    this.mandats_creation_label_paymentType = "Payment type";
    this.mandats_creation_label_amount = "Amount";
    this.mandats_creation_label_manuelSchedule_choice = "Manuel schedule";
    this.mandats_creation_label_frequency = "Frequency";
    this.mandats_creation_label_date_oof = "Date";
    this.mandats_creation_label_start_date_rcur = "Start date";
    this.mandats_creation_label_end_date_rcur = "End date";
    this.mandats_creation_label_fixAmount = "Fix amount";
    this.mandats_creation_label_variableAmount = "Variable amount";
    this.mandats_creation_label_signatureDate = "Signature date";
    this.mandats_creation_label_comment = "Comment";
    this.mandats_creation_label_manuelSchedule = "Manuel schedule";
    this.mandats_creation_scheduleGrid_date = "Date";
    this.mandats_creation_scheduleGrid_amount = "Amount";
    this.mandats_creation_scheduleGrid_delete = "Delete";
    this.mandats_creation_label_nextDebit = "Next debit";
    this.mandats_creation_popup_unavailableCreditor_title = "Information";
    this.mandats_creation_popup_unavailableCreditor_desc = "Creating a new creditor will be soon available...";
    this.mandats_creation_popup_unavailableSci_title = "Information";
    this.mandats_creation_popup_unavailableSci_desc = "Entered SCI does not match any creditor.";
    this.mandats_creation_summary_intro = " This operation is planned ";
    this.mandats_creation_summary_on = ' on ';
    this.mandats_creation_summary_oof = " one time ";
    this.mandats_creation_summary_everyDay = " every days";
    this.mandats_creation_summary_everyWeek = " every ";
    this.mandats_creation_summary_everyMonth_intro = "on the ";
    this.mandats_creation_summary_everyMonth_end = " each month";
    this.mandats_creation_summary_everyYear = " every year, on ";
    this.mandats_creation_summary_startDate = " from ";
    this.mandats_creation_summary_endDate = " to ";
    this.mandats_creation_summary_onePayment = " payments ";
    this.mandats_creation_summary_manyPayments = " payment ";
    this.mandats_creation_manuelSchedule_button_add = " Add ";
    this.mandats_creation_mondays = " mondays";
    this.mandats_creation_thuesdays = " thuesdays ";
    this.mandats_creation_wednesday = " wednesday ";
    this.mandats_creation_thurdays = " thurdays ";
    this.mandats_creation_fridays = " fridays ";
    this.mandats_creation_saturdays = " saturdays ";
    this.mandats_creation_sundays = " sundays ";
    this.mandats_creation_new_creditor = 'New creditor ...';
    
    /* Mandates listing */
    this.mandats_view_filter_title = 'Filter mandates list';
    this.mandats_view_filter_display_all = 'Display all';
    this.mandats_view_filter_validate = 'OK';
    this.mandats_view_filter_account = 'Account';
    this.mandats_view_filter_umr = 'UMR';
    this.mandats_view_filter_min_amount = 'Min. amount';
    this.mandats_view_filter_max_amount = 'Max amount';
    this.mandats_view_grid_creditor = "Creditor"
    this.mandats_view_grid_creationDate = "Creation";
    this.mandats_view_grid_type = "Type";
    this.mandats_view_grid_account = "Account";
    this.mandats_view_grid_status = "Status";
    this.mandats_view_grid_statusInfos = "Information";
    this.mandats_view_grid_details = "Display debits";
    this.mandats_view_grid_title = 'My mandates list';
    this.mandats_view_tooltip_viewSdd_title = 'Display debits';
    this.mandats_view_tooltip_viewSdd_desc = 'Display all debits of this mandate';
    
    /* Details */
    this.mandats_details_form = "Mandate's details";
    this.mandats_details_button_modify = 'Modify this mandate';
    this.mandats_details_button_cancel = 'Revoke this mandate';
    this.mandats_details_popup_cancel_title = 'Confirmation';
    this.mandats_details_popup_cancel_desc = 'Do you really want to cancel this mandate ? This cannot be undone...';
	this.mandats_details_popup_cancel_mandatory = "Please indicate the cancellation date for this mandate."
	this.mandats_details_popup_cancel_msg = "Please indicate the cancellation date for this mandate (MM/DD/YYYY):  ";
    this.mandats_details_button_block = 'Block this mandates';
    this.mandats_details_popup_block_title = 'Confirmation';
    this.mandats_details_popup_block_desc = 'Do you really want to block this mandate ?';
    this.mandats_details_button_unblock = 'Unblock this mandate';
    this.mandats_details_popup_unblock_title = 'Confirmation';
    this.mandats_details_popup_unblock_desc = 'Do you really want to unblock this mandate ?';
    this.mandats_details_button_block_creditor = 'Block this creditor';
    this.mandats_details_popup_block_creditor_title = 'Confirmation';
    this.mandats_details_popup_block_creditor_desc = 'Do you really want to block this creditor ?';
    this.mandats_details_button_unblock_creditor = 'Unblock this creditor';
    this.mandats_details_popup_unblock_creditor_title = 'Confirmation';
    this.mandats_details_popup_unblock_creditor_desc = 'Do you really want to unblock this creditor ?';
    this.mandats_details_label_cancelDate = "Cancellation date";
    this.mandats_details_status = "Mandate's status";
    this.mandats_details_status_label_title = "Mandate's name"
    this.mandats_details_status_label_desc = 'Description';
    
    /*Sdd details */
    
    this.sdd_details_form = 'Details';
    this.sdd_details_label_status = 'Status';
    this.sdd_details_label_amount = 'Amount';
    this.sdd_details_label_account = 'Account';
    this.sdd_details_label_creditor = 'Creditor';
    this.sdd_details_label_sci = 'SCI';
    this.sdd_details_label_creditor_address = 'Creditor Address';
    this.sdd_details_label_dueDate = 'Due date';
    this.sdd_details_label_reference = 'Reference';
    this.sdd_details_label_comment = 'Comment';
    this.sdd_details_label_type = 'Type';
    
    this.sdd_details_button_reject = "Reject this debit";
    this.sdd_details_popup_reject_title = 'Reject a debit';
    this.sdd_details_popup_reject_desc = 'Please indicate the reason : ';
	this.sdd_details_popup_reject_mandatory = 'Please indicate the reason to reject this debit';
    this.sdd_details_button_refund = "Ask for a refund";
    this.sdd_details_button_create_mandate = "Create mandate";
    this.sdd_details_button_mandate = "Display mandate"
    
    /* Menu */
    this.menu_createMandate = 'Create';
    this.menu_viewMandates = 'List / modify';
    this.menu_viewSdd = 'List';
    this.menu_configAlerts = 'Configure';
    this.menu_viewAlerts = 'List';
    this.menu_generateSdd = 'Generate SDD with a specified amount';
    this.menu_popup_generateSdd_title = "Generate SDD";
    this.menu_popup_generateSdd_desc = 'Entrer un montant pour un SDD One-Off, plannifiÃ© demain';
    this.menu_rejected_reason = 'Rejected by rule engine';
    this.menu_incoming_sdd = "You received a debit within an amount of ";
    this.menu_generate_simple_SDD = 'Generate SDD';
    this.menu_generate_SDD_unkwown_mandate = 'Generate SDD with an unknown creditor';
    this.menu_home = 'Dashboard';
    this.menu_mandates = 'Mandates';
    this.menu_debits = 'Debits';
    this.menu_alerts = 'Alerts';
    this.menu_generate_sdd = 'Generate SDD (demo)';
    this.menu_button_back = 'Back';
    
    /* Data */
    this.data_alerting_reason_0 = 'amount reachs specified threshold';
    this.data_alerting_reason_1 = 'cumulative amount of a mandate reachs specified threshold';
    this.data_alerting_reason_2 = 'cumulative amount on 1 month reachs specified threshold';
    this.data_alerting_reason_3 = 'mandate\'s type is recurrent';
    this.data_alerting_reason_4 = 'mandate\'s type is recurrent and planned over more month than specified';
    this.data_alerting_reason_5 = 'I don\'t know creditor ';
    this.data_alerting_reason_6 = 'due date is higher than specified number of days ';
    this.data_alerting_reason_7 = 'due date is lower than specified number of days ';
    this.data_alerting_reason_8 = 'mandate has not been registered';
    this.data_alerting_reason_9 = 'mandate has been modified';
    this.data_alerting_reason_10 = 'mandate has been canceled';
    this.data_alerting_reason_11 = 'mandate\'s type is unique';
    this.data_alerting_reason_12 = 'mandate\'s type is recurrent';
    this.data_alerting_reason_13 = 'this is a first debit';
    this.data_alerting_reason_14 = 'amount is higher than max amount specified in mandate';
    this.data_alerting_reason_15 = 'SDD has been modified';
    this.data_alerting_reason_16 = 'creditor has been blocked';
    
    this.data_alerting_media_0 = 'SMS';
    this.data_alerting_media_1 = 'Vocal call';
    this.data_alerting_media_2 = 'Email';
    
    this.data_mandat_status_title_0 = 'Dematerialization in progress';
    this.data_mandat_status_desc_0 = 'Dematerialization in progress';
    this.data_mandat_status_title_1 = 'Waiting for electronic signature';
    this.data_mandat_status_desc_1 = 'Waiting for electronic signature';
    this.data_mandat_status_title_2 = 'Ready to use';
    this.data_mandat_status_desc_2 = 'Mandate has just been created and is ready';
    this.data_mandat_status_title_3 = 'Active';
    this.data_mandat_status_desc_3 = 'This mandate is active';
    this.data_mandat_status_title_4 = 'Amended for R1';
    this.data_mandat_status_desc_4 = 'Amended for R1';
    this.data_mandat_status_title_5 = 'Amended for R2';
    this.data_mandat_status_desc_5 = 'Amended for R2';
    this.data_mandat_status_title_6 = 'Amended for R3';
    this.data_mandat_status_desc_6 = 'Amended for R3';
    this.data_mandat_status_title_7 = 'Cancellation to be sent';
    this.data_mandat_status_desc_7 = 'Cancellation to be sent';
    this.data_mandat_status_title_8 = 'Canceled';
    this.data_mandat_status_desc_8 = 'This mandate has been canceled by you';
    this.data_mandat_status_title_9 = 'Suspended';
    this.data_mandat_status_desc_9 = 'This mandate has been suspended.';
    this.data_mandat_status_title_10 = 'Creditor suspended';
    this.data_mandat_status_desc_10 = 'This creditor has been suspended.';
    this.data_mandat_status_title_11 = 'Inactive';
    this.data_mandat_status_desc_11 = 'This mandate is inactive because no debits has been received for 36 month.';
    
    this.data_sdd_status_0 = 'Rejected';
    this.data_sdd_status_1 = 'Rejected (creditor suspended)';
    this.data_sdd_status_2 = 'Accepted';
    this.data_sdd_status_3 = 'Refunded';
    this.data_sdd_status_4 = 'Debited';
    this.data_sdd_status_5 = 'Planned';
    this.data_sdd_status_6 = 'Canceled';
    this.data_sdd_status_7 = 'Revoked';
    this.data_sdd_status_8 = 'Unknown mandate';
    this.data_sdd_status_9 = 'Modified mandate';
    
    this.data_sequence_type_0 = 'Punctual';
    this.data_sequence_type_1 = 'Recurrent';
    this.data_sequence_type_2 = 'Last';
    this.data_sequence_type_3 = 'First';
    
    this.data_period_type_1 = 'daily';
    this.data_period_type_2 = 'weekly';
    this.data_period_type_3 = 'monthly';
    this.data_period_type_4 = 'yearly';
    
    this.data_mandat_comment_0 = '';
    this.data_mandat_comment_1 = '';
    this.data_mandat_comment_2 = '';
    this.data_mandat_comment_3 = '';
    this.data_mandat_comment_4 = '';
    this.data_mandat_comment_5 = '';
    
    this.data_sdd_comment_0 = 'Pending disagreement resolution....';
    this.data_sdd_comment_1 = '';
    this.data_sdd_comment_2 = '';
    this.data_sdd_comment_3 = '';
    this.data_sdd_comment_4 = '';
    this.data_sdd_comment_5 = '';
    this.data_sdd_comment_6 = '';
    this.data_sdd_comment_7 = '';
    this.data_sdd_comment_8 = '';
    this.data_sdd_comment_9 = 'Rejected by rule engine';
    this.data_sdd_comment_10 = '';
    
    this.data_alerting_action_title_0 = 'I reject this debit without notification';
    this.data_alerting_action_desc_0 = 'Reject';
    this.data_alerting_action_title_1 = 'I reject this debit with notification';
    this.data_alerting_action_desc_1 = 'Reject + Notification';
    this.data_alerting_action_title_2 = 'I accept this debit without notification';
    this.data_alerting_action_desc_2 = 'Accept';
    this.data_alerting_action_title_3 = 'I accept this debit with notification';
    this.data_alerting_action_desc_3 = 'Accept + Notification';
    this.data_alerting_action_title_4 = 'I just receive a notification';
    this.data_alerting_action_desc_4 = 'Notification';
    
    this.data_alert_0 = 'You received a debit with an amount of 5000 &euro;';
    this.data_alert_2 = 'You receveid a debit with an unknown mandate';
	this.data_alert_3 = 'You receveid a debit with a modified mandate';
    
    /* Sdd listing */
    this.sdd_view_filter_title = 'Filter debits list';
    this.sdd_view_filter_button_display_all = 'Display all';
    this.sdd_view_filter_validate = 'OK';
    this.sdd_view_filter_umr = 'UMR';
    this.sdd_view_filter_reference = 'Reference';
    this.sdd_view_filter_min_amount = 'Min. amount';
    this.sdd_view_filter_max_amount = 'Max. amount';
    this.sdd_view_filter_sequence_type = 'Type';
    this.sdd_view_filter_status = 'Statuts';
    this.sdd_view_filter_date_start = 'From';
    this.sdd_view_filter_date_end = 'To';
    
    this.sdd_view_grid_account = "Account";
    this.sdd_view_grid_due_date = "Due date";
    this.sdd_view_grid_amount = "Amount";
    this.sdd_view_grid_type = "Type";
    this.sdd_view_grid_mandates = "Mandate";
    this.sdd_view_grid_status = "Status";
    this.sdd_view_grid_display = "Display";
    this.sdd_view_grid_debits = "debits";
    this.sdd_view_grid_debit = "debit";
    this.sdd_view_grid_title = 'Debits list';
    
    this.sdd_view_summary_intro = 'Debit summary for chosen time interval from ';
    this.sdd_view_summary_dateFrom = 'to ';
    this.sdd_view_summary_no_debit = 'No planned debit for chosen time interval from';
    
    /* Alerts listing */
    this.alerts_view_grid_date = "Date";
    this.alerts_view_grid_label = "Label";
    this.alerts_view_grid_action = "Action";
    this.alerts_view_grid_media = "Media";
    this.alerts_view_grid_delete = "Delete";
    this.alerts_view_popup_confirm_title = 'Confirmation';
    this.alerts_view_popup_confirm_desc = 'Do you really want to delete this alert ?';
    this.alerts_view_tooltip_delete = "Delete this alert";
    
    /* Home page */
    this.sepa_welcome_alerts_grid_date = "Date";
    this.sepa_welcome_alerts_grid_label = "Label";
    this.sepa_welcome_alerts_grid_action = "Action";
    this.sepa_welcome_alerts_grid_media = "Media";
    this.sepa_welcome_alerts_grid_delete = "Delete";
    this.sepa_welcome_alerts_grid_rule = "Rule";
    this.sepa_welcome_alerts_grid_title = '5 last alerts list';
    
    this.sepa_welcome_sdd_grid_creditor = "Creditor";
    this.sepa_welcome_sdd_grid_account = "Account";
    this.sepa_welcome_sdd_grid_dueDate = "Due date";
    this.sepa_welcome_sdd_grid_amount = "Amount";
    this.sepa_welcome_sdd_grid_type = "Type";
    this.sepa_welcome_sdd_grid_status = "Status";
    this.sepa_welcome_sdd_grid_details = "Details";
    this.sepa_welcome_sdd_grid_mandate = "Mandate";
    this.sepa_welcome_sdd_grid_last_title = '5 last debits';
    this.sepa_welcome_sdd_grid_next_title = '5 next debits';
    this.sepa_welcome_sdd_chart_label = 'Cumulated debits';
    
    /* Config alerts */
    this.alertes_config_form_general = 'General configuration';
    this.alertes_config_form_general_validate = 'OK';
    
    this.alertes_config_label_general_reason_0 = 'If I receive a debit with an unknown mandate ';
    this.alertes_config_label_general_reason_1 = 'If I receive a debit with a modified mandate';
    this.alertes_config_label_general_reason_2 = 'If I receive a debit with a canceled mandate';
    this.alertes_config_label_general_reason_3 = 'If I receive a debit with a suspended creditor';
	this.alertes_config_label_general_reason_4 = 'If I receive a debit and if my balance is insufficient';
    
    this.alertes_config_label_general_media = 'I want to be notified by';
    this.alertes_config_general_popup_title = 'General configuration save';
    this.alertes_config_general_popup_desc = 'Your configuration has been saved';
    
    this.alertes_config_grid_reason = "Reason";
    this.alertes_config_grid_target = "Target";
    this.alertes_config_grid_action = "Automatic action";
    this.alertes_config_grid_media = "Media";
    this.alertes_config_grid_status = "Status";
    this.alertes_config_grid_delete = "Delete";
    this.alertes_config_grid_modify = "Mod.";
    this.alertes_config_grid_title = 'My alerting rules';
    
    this.alertes_config_form_rule = 'Create a new rule';
    this.alertes_config_form_rule_button_validate = 'OK';
    this.alertes_config_form_rule_popup_error_title = 'Error';
    this.alertes_config_form_rule_popup_error_desc = "Reason and action are mandatory fields";
    this.alertes_config_form_rule_popup_ok_title = 'Rule saved';
    this.alertes_config_form_rule_popup_ok_desc = 'Your rule has been saved';
    this.alertes_config_form_rule_popup_confirm_title = 'Confirmation';
    this.alertes_config_form_rule_popup_confirm_desc = 'Do you really want to delete this rule';
    
    this.alertes_config_form_rule_label_reason = 'When I receive a SDD with';
    this.alertes_config_form_rule_label_target = "Target";
    this.alertes_config_form_rule_label_action = "Do this action";
    this.alertes_config_form_rule_label_media = "By this media";
    
    this.alertes_config_grid_tooltip_modify_title = 'Modify this rule';
    this.alertes_config_grid_tooltip_modify_status_active_title = 'Active rule';
    this.alertes_config_grid_tooltip_modify_status_active_desc = 'This rule is activated. Click here to deactivate it.';
    this.alertes_config_grid_tooltip_modify_status_inactive_title = 'Inactive rule';
    this.alertes_config_grid_tooltip_modify_status_inactive_desc = 'This rule is deactivated. Click here to activate it.';
    this.alertes_config_grid_tooltip_delete_title = 'Delete this rule';
    
    this.alertes_config_label_accept = "I accept";
    this.alertes_config_label_reject = "I refuse";
    this.alertes_config_label_notification = "I want to be notified by";
    this.alertes_config_general_intro = "When date of payment is close, without any action of me, by default :  "
    this.alertes_config_general = "General configuration"
	this.alertes_config_prefs = "Mandates";
	this.alertes_config_prefs_mandat_unknown_title = "If a debit arrives with an unknown mandate";
    this.alertes_config_prefs_mandat_unknown_desc = "Automatically suggest new mandate creation";
    this.alertes_config_prefs_mandat_modified_title = "If a debit arrives with a modified mandate";
    this.alertes_config_prefs_mandat_modified_desc = "Automatically suggest mandate's modification";
    this.alertes_config_prefs_mandat_button_save = "Save";
    this.alertes_config_prefs_mandat_button_reset = "Reset to recommended value";
}


var lang = new ApplicationLang();

