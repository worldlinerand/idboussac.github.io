ApplicationLang = function(){

    /* General */
    this.combo_text = "Choisissez dans la liste";
    this.currency_euro = "&euro;";
    this.days = "jours";
    this.months = "mois";
    this.extjs_button_yes = "Oui";
    this.extjs_button_no = "Non"
    this.extjs_button_ok = "OK"
    this.extjs_button_cancel = "Cancel";
    this.date_format = "d/m/Y";
    this.date_format_chart = "%d/%m";
    
    /* HTML */
    this.html_footer = "&copy; Atos Worldline, 2009";
    
    this.html_welcome_last_alerts = "Mes 5 derniÃ¨res alertes";
    this.html_welcome_next_sdd = "Mes 5 prochains d&eacute;bits";
    this.html_welcome_last_sdd = "Mes 5 derniers d&eacute;bits";
    
    this.html_sdd_view_title = "Mes d&eacute;bits";
    
    this.html_sdd_details_title = "D&eacute;tails d'un d&eacute;bit";
    
    this.html_mandats_view_title = "Mes mandats";
    
    this.html_mandats_modification_title = "Modification de mandat";
    
    this.html_mandats_details_title = "D&eacute;tails d'un mandat";
    
    this.html_mandats_creation_title = "Nouveau mandat de prÃ©lÃ¨vement SEPA";
    this.html_mandats_creation_autofill_form = "Remplir automatiquement (d&eacute;mo)";
    
    this.html_alertes_view_title = "Mes alertes";
    
    this.html_alertes_config_title = "Configuration des alertes";
    
    /* Mandate creation */
    this.mandats_creation_form = "Formulaire de crÃ©ation";
    this.mandats_creation_label_planification = "Planification";
    this.mandats_creation_label_details = "DÃ©tails";
    this.mandats_creation_button_cancel = "Cancel";
    this.mandats_creation_button_create = "CrÃ©er";
    this.mandats_creation_popup_cancelation_title = "Confirmation";
    this.mandats_creation_popup_cancelation_desc = "Etes-vous sÃ»r de vouloir annuler la crÃ©ation de ce mandat ?";
    this.mandats_creation_popup_impossible_title = "CrÃ©ation impossible";
    this.mandats_creation_popup_impossible_desc = "Le crÃ©ancier choisi a Ã©tÃ© bloquÃ©. La crÃ©ation de ce mandat est impossible.";
    this.mandats_creation_popup_validation_title = "Information";
    this.mandats_creation_popup_validation_desc = "Merci de remplir tous les champs concernant la planification";
    this.mandats_creation_popup_confirmation_title = "Confirmation";
    this.mandats_creation_popup_confirmation_desc = "Etes-vous sÃ»r de vouloir crÃ©er ce mandat ?";
    this.mandats_creation_label_umr = "UMR";
    this.mandats_creation_label_sci = "Identifier du crÃ©ancier";
    this.mandats_creation_label_creditor = "CrÃ©ancier";
    this.mandats_creation_label_debtorAccount = "Account dÃ©biteur";
    this.mandats_creation_label_paymentType = "Type de paiement";
    this.mandats_creation_label_amount = "Amount";
    this.mandats_creation_label_manuelSchedule_choice = "Entrer un Ã©chÃ©ancier spÃ©cifique";
    this.mandats_creation_label_frequency = "FrÃ©quence";
    this.mandats_creation_label_date_oof = "Date d'opÃ©ration";
    this.mandats_creation_label_start_date_rcur = "Date de dÃ©but";
    this.mandats_creation_label_end_date_rcur = "Date de fin";
    this.mandats_creation_label_fixAmount = "Amount fixe";
    this.mandats_creation_label_variableAmount = "Amount variable";
    this.mandats_creation_label_signatureDate = "Date de signature";
    this.mandats_creation_label_comment = "Commentaire";
    this.mandats_creation_label_manuelSchedule = "EchÃ©ancier manuel";
    this.mandats_creation_scheduleGrid_date = "Date d'opÃ©ration";
    this.mandats_creation_scheduleGrid_amount = "Amount";
    this.mandats_creation_scheduleGrid_delete = "Cancel";
    this.mandats_creation_label_nextDebit = "Prochain dÃ©bit";
    this.mandats_creation_popup_unavailableCreditor_title = "Information";
    this.mandats_creation_popup_unavailableCreditor_desc = "La crÃ©ation d'un nouveau crÃ©ancier sera bientÃ´t disponible.";
    this.mandats_creation_popup_unavailableSci_title = "Information";
    this.mandats_creation_popup_unavailableSci_desc = "Le SCI saisi ne correspond Ã  aucun crÃ©ancier disponible.";
    this.mandats_creation_summary_intro = " Cette opÃ©ration est prÃ©vue ";
    this.mandats_creation_summary_on = ' le ';
    this.mandats_creation_summary_oof = " une seule fois ";
    this.mandats_creation_summary_everyDay = " tous les jours";
    this.mandats_creation_summary_everyWeek = " tous les ";
    this.mandats_creation_summary_everyMonth_intro = " le ";
    this.mandats_creation_summary_everyMonth_end = " de chaque mois";
    this.mandats_creation_summary_everyYear = " tous les ans, le ";
    this.mandats_creation_summary_startDate = " Ã  partir du ";
    this.mandats_creation_summary_endDate = " jusqu'au ";
    this.mandats_creation_summary_onePayment = " paiement ";
    this.mandats_creation_summary_manyPayments = " paiements ";
    this.mandats_creation_manuelSchedule_button_add = "Ajouter";
    this.mandats_creation_mondays = "lundis";
    this.mandats_creation_thuesdays = "mardis";
    this.mandats_creation_wednesday = "mecredis";
    this.mandats_creation_thurdays = "jeudis";
    this.mandats_creation_fridays = "vendredis";
    this.mandats_creation_saturdays = "samedis";
    this.mandats_creation_sundays = "dimanches";
    this.mandats_creation_new_creditor = 'Nouveau crÃ©ancier ...';
    
    /* Mandates listing */
    this.mandats_view_filter_title = 'Filtrer l\'affichage des mandats';
    this.mandats_view_filter_display_all = 'Tout voir';
    this.mandats_view_filter_validate = 'Confirm';
    this.mandats_view_filter_account = 'Account';
    this.mandats_view_filter_umr = 'Filtrer sur l\'UMR';
    this.mandats_view_filter_min_amount = 'Filtrer sur un montant minimum';
    this.mandats_view_filter_max_amount = 'Filtrer sur un montant maximum';
    this.mandats_view_grid_creditor = "CrÃ©ancier"
    this.mandats_view_grid_creationDate = "CrÃ©ation";
    this.mandats_view_grid_type = "Type";
    this.mandats_view_grid_account = "Account";
    this.mandats_view_grid_status = "Statut";
    this.mandats_view_grid_statusInfos = "Information";
    this.mandats_view_grid_details = "Voir les dÃ©bits";
    this.mandats_view_grid_title = 'Listes de mes mandats';
    this.mandats_view_tooltip_viewSdd_title = 'Voir les dÃ©bits';
    this.mandats_view_tooltip_viewSdd_desc = 'Afficher tous les SDD liÃ©s Ã  ce mandat';
    
    /* Modification */
    this.mandats_modification_form = 'Modification d\'un mandat';
    
    this.mandats_modification_button_cancel = "Cancel";
    this.mandats_modification_button_create = "Modifier";
    this.mandats_modification_popup_cancelation_title = "Confirmation";
    this.mandats_modification_popup_cancelation_desc = "Etes-vous sÃ»r de vouloir annuler la modification de ce mandat ?";
    this.mandats_modification_popup_impossible_title = "CrÃ©ation impossible";
    this.mandats_modification_popup_impossible_desc = "Le crÃ©ancier choisi a Ã©tÃ© bloquÃ©. La modification de ce mandat est impossible.";
    this.mandats_modification_popup_validation_title = "Information";
    this.mandats_modification_popup_validation_desc = "Merci de remplir tous les champs concernant la planification";
    this.mandats_modification_popup_confirmation_title = "Confirmation";
    this.mandats_modification_popup_confirmation_desc = "Etes-vous sÃ»r de vouloir modifier ce mandat ?";
    
    
    /* Details */
    this.mandats_details_form = "DÃ©tails d'un mandat";
    this.mandats_details_button_modify = 'Modifier ce mandat';
    this.mandats_details_button_cancel = 'RÃ©voquer ce mandat';
    this.mandats_details_popup_cancel_title = 'Confirmation';
    this.mandats_details_popup_cancel_desc = 'Etes-vous sÃ»r de vouloir annuler ce mandat ? Cette action est irrÃ©versible.';
    this.mandats_details_popup_cancel_mandatory = "Merci de renseigner la date d'annulation du mandat."
    this.mandats_details_popup_cancel_msg = "Merci d'indiquer la date d'annulation du mandat (JJ/MM/AAAA): ";
    this.mandats_details_button_block = 'Bloquer ce mandat';
    this.mandats_details_popup_block_title = 'Confirmation';
    this.mandats_details_popup_block_desc = 'Etes-vous sÃ»r de vouloir bloquer ce mandat ?';
    this.mandats_details_button_unblock = 'DÃ©bloquer le mandat';
    this.mandats_details_popup_unblock_title = 'Confirmation';
    this.mandats_details_popup_unblock_desc = 'Etes-vous sÃ»r de vouloir dÃ©bloquer ce mandat ?';
    this.mandats_details_button_block_creditor = 'Bloquer ce crÃ©ancier';
    this.mandats_details_popup_block_creditor_title = 'Confirmation';
    this.mandats_details_popup_block_creditor_desc = 'Etes-vous sÃ»r de vouloir bloquer ce crÃ©ancier ?';
    this.mandats_details_button_unblock_creditor = 'DÃ©bloquer ce crÃ©ancier';
    this.mandats_details_popup_unblock_creditor_title = 'Confirmation';
    this.mandats_details_popup_unblock_creditor_desc = 'Etes-vous sÃ»r de vouloir dÃ©bloquer ce crÃ©ancier ?';
    this.mandats_details_label_cancelDate = "Date d'annulation";
    this.mandats_details_status = 'Statut courant du mandat';
    this.mandats_details_status_label_title = 'Name du statut';
    this.mandats_details_status_label_desc = 'Description';
    
    
    /*Sdd details */
    
    this.sdd_details_form = 'DÃ©tails';
    this.sdd_details_label_status = 'Statut';
    this.sdd_details_label_amount = 'Amount';
    this.sdd_details_label_account = 'Account';
    this.sdd_details_label_creditor = 'CrÃ©ancier';
    this.sdd_details_label_sci = 'SCI';
    this.sdd_details_label_creditor_address = 'Adresse crÃ©ancier';
    this.sdd_details_label_dueDate = 'Date d\'Ã©chÃ©ance';
    this.sdd_details_label_reference = 'RÃ©fÃ©rence';
    this.sdd_details_label_comment = 'Commentaire';
    this.sdd_details_label_type = 'Type';
    
    this.sdd_details_button_reject = "Refuser ce dÃ©bit";
    this.sdd_details_popup_reject_title = 'Refuser un dÃ©bit';
    this.sdd_details_popup_reject_desc = 'Merci d\'indiquer la raison du refus:';
    this.sdd_details_popup_reject_mandatory = 'Merci d\'indiquer la raison du refus de ce dÃ©bit';
    this.sdd_details_button_refund = "Demander le remboursement";
    this.sdd_details_button_create_mandate = "CrÃ©er le mandat";
    this.sdd_details_button_mandate = "Voir le mandat"
    
    
    /* Menu */
    this.menu_createMandate = 'CrÃ©er';
    this.menu_viewMandates = 'Lister / modifier';
    this.menu_viewSdd = 'Lister';
    this.menu_configAlerts = 'Configurer';
    this.menu_viewAlerts = 'Lister';
    this.menu_generateSdd = 'GÃ©nÃ©rer un SDD avec un montant spÃ©cifiÃ©';
    this.menu_popup_generateSdd_title = "GÃ©nÃ©ration d'un SDD";
    this.menu_popup_generateSdd_desc = 'Entrer un montant pour un SDD One-Off, plannifiÃ© demain';
    this.menu_rejected_reason = 'Rejet automatique par le moteur de rÃ¨gle.';
    this.menu_incoming_sdd = "You have reÃ§u un SDD d\'un montant de ";
    this.menu_generate_simple_SDD = 'GÃ©nÃ©ration d\'un SDD';
    this.menu_generate_SDD_unkwown_mandate = 'GÃ©nÃ©rer un SDD dont le mandat n\'a pas Ã©tÃ© saisi';
    this.menu_home = 'Tableau de bord';
    this.menu_mandates = 'Mandats';
    this.menu_debits = 'DÃ©bits';
    this.menu_alerts = 'Alertes';
    this.menu_generate_sdd = 'GÃ©nÃ©ration de SDD (dÃ©mo)';
    this.menu_button_back = 'Retour';
    
    /* Data */
    this.data_alerting_reason_0 = 'le montant atteint un plafond';
    this.data_alerting_reason_1 = 'le montant cumulÃ© d\'un mÃªme mandat atteint un plafond';
    this.data_alerting_reason_2 = 'le montant cumulÃ© sur un mois atteint un plafond';
    this.data_alerting_reason_3 = 'le type est rÃ©current';
    this.data_alerting_reason_4 = 'le type est rÃ©current et s\'Ã©tale sur un nombre de mois supÃ©rieur Ã  un plafond';
    this.data_alerting_reason_5 = 'je ne connais pas l\'Ã©metteur ';
    this.data_alerting_reason_6 = 'la date de prÃ©lÃ¨vement est postÃ©rieure Ã  un nombre de jours ouvrÃ©s spÃ©cifiÃ©s ';
    this.data_alerting_reason_7 = 'la date de prÃ©lÃ¨vement est antÃ©rieure Ã  un nombre de jours ouvrÃ©s spÃ©cifiÃ©s ';
    this.data_alerting_reason_8 = 'le mandat n\'a pas Ã©tÃ© saisi';
    this.data_alerting_reason_9 = 'le mandat a Ã©tÃ© modifiÃ©';
    this.data_alerting_reason_10 = 'le mandat a Ã©tÃ© annulÃ©';
    this.data_alerting_reason_11 = 'le mandat est de type Unique';
    this.data_alerting_reason_12 = 'le mandat est de type RÃ©current';
    this.data_alerting_reason_13 = 'c\'est un premier SDD';
    this.data_alerting_reason_14 = 'le montant du SDD dÃ©passe le montant maximum du mandat';
    this.data_alerting_reason_15 = 'le SDD a Ã©tÃ© modifiÃ©';
    this.data_alerting_reason_16 = 'le crÃ©ancier a Ã©tÃ© bloquÃ©';
    
    this.data_alerting_media_0 = 'SMS';
    this.data_alerting_media_1 = 'Appel vocal';
    this.data_alerting_media_2 = 'Email';
    
    this.data_mandat_status_title_0 = 'Dematerialization in progress';
    this.data_mandat_status_desc_0 = 'Dematerialization in progress';
    this.data_mandat_status_title_1 = 'Waiting for electronic signature';
    this.data_mandat_status_desc_1 = 'Waiting for electronic signature';
    this.data_mandat_status_title_2 = 'PrÃªt Ã  Ãªtre utiliser';
    this.data_mandat_status_desc_2 = 'Ce mandat est actif et vient d\'Ãªtre crÃ©Ã©.';
    this.data_mandat_status_title_3 = 'Actif';
    this.data_mandat_status_desc_3 = 'Ce mandat est actif.';
    this.data_mandat_status_title_4 = 'Amended for R1';
    this.data_mandat_status_desc_4 = 'Amended for R1';
    this.data_mandat_status_title_5 = 'Amended for R2';
    this.data_mandat_status_desc_5 = 'Amended for R2';
    this.data_mandat_status_title_6 = 'Amended for R3';
    this.data_mandat_status_desc_6 = 'Amended for R3';
    this.data_mandat_status_title_7 = 'Cancellation to be sent';
    this.data_mandat_status_desc_7 = 'Cancellation to be sent';
    this.data_mandat_status_title_8 = 'AnnulÃ©';
    this.data_mandat_status_desc_8 = 'Ce mandat a Ã©tÃ© annulÃ© par vous';
    this.data_mandat_status_title_9 = 'Suspendu';
    this.data_mandat_status_desc_9 = 'Ce mandat a Ã©tÃ© suspendu. Vous ne recevrez plus aucun dÃ©bit liÃ© Ã  ce mandat.';
    this.data_mandat_status_title_10 = 'CrÃ©ancier suspendu';
    this.data_mandat_status_desc_10 = 'Le crÃ©ancier de ce mandat a Ã©tÃ© suspendu. Vous ne recevrez plus aucun dÃ©bit liÃ© Ã  ce crÃ©ancier';
    this.data_mandat_status_title_11 = 'Inactif';
    this.data_mandat_status_desc_11 = 'Ce mandat est inactif car aucun SDD liÃ© n\'est arrivÃ© depuis 36 mois.';
    
    this.data_sdd_status_0 = 'RejetÃ©';
    this.data_sdd_status_1 = 'RejetÃ© (crÃ©ancier bloquÃ©)';
    this.data_sdd_status_2 = 'AcceptÃ©';
    this.data_sdd_status_3 = 'RemboursÃ©';
    this.data_sdd_status_4 = 'DÃ©bitÃ©';
    this.data_sdd_status_5 = 'PlanifiÃ©';
    this.data_sdd_status_6 = 'AnnulÃ©';
    this.data_sdd_status_7 = 'RÃ©vocation';
    this.data_sdd_status_8 = 'Mandat inconnu';
    this.data_sdd_status_9 = 'Mandat modifiÃ©';
    
    this.data_sequence_type_0 = 'Ponctuel';
    this.data_sequence_type_1 = 'RÃ©current';
    this.data_sequence_type_2 = 'Dernier';
    this.data_sequence_type_3 = 'Premier';
    
    this.data_period_type_1 = 'quotidien';
    this.data_period_type_2 = 'hebdomadaire';
    this.data_period_type_3 = 'mensuelle';
    this.data_period_type_4 = 'annuelle';
    
    this.data_mandat_comment_0 = 'Abonnement annuel Internet';
    this.data_mandat_comment_1 = 'Frais bancaire divers';
    this.data_mandat_comment_2 = 'Assurance voiture et habitation';
    this.data_mandat_comment_3 = 'Abonnement Ã©lectricitÃ©';
    this.data_mandat_comment_4 = 'Abonnement annuel Internet';
    this.data_mandat_comment_5 = 'Supplement abonnement Internet';
    
    this.data_sdd_comment_0 = 'DÃ©bit annulÃ© par moi, en attente rÃ©solution diffÃ©rend';
    this.data_sdd_comment_1 = '';
    this.data_sdd_comment_2 = '';
    this.data_sdd_comment_3 = '';
    this.data_sdd_comment_4 = '';
    this.data_sdd_comment_5 = '';
    this.data_sdd_comment_6 = '';
    this.data_sdd_comment_7 = '';
    this.data_sdd_comment_8 = '';
    this.data_sdd_comment_9 = 'DÃ©bit rejetÃ© par le moteur de rÃ¨gles';
    this.data_sdd_comment_10 = '';
    
    this.data_alerting_action_title_0 = 'je ne reÃ§ois pas d\'alerte et refuse ce SDD';
    this.data_alerting_action_desc_0 = 'Refus';
    this.data_alerting_action_title_1 = 'je reÃ§ois une alerte et refuse ce SDD';
    this.data_alerting_action_desc_1 = 'Refus + Alerte';
    this.data_alerting_action_title_2 = 'je ne reÃ§ois pas d\'alerte et accepte ce SDD';
    this.data_alerting_action_desc_2 = 'Accord';
    this.data_alerting_action_title_3 = 'je reÃ§ois une alerte et accepte ce SDD';
    this.data_alerting_action_desc_3 = 'Accord + Alerte';
    this.data_alerting_action_title_4 = 'je reÃ§ois simplement une alerte';
    this.data_alerting_action_desc_4 = 'Alerte';
    
    this.data_alert_0 = 'You have reÃ§u un SDD d\'un montant de 5000 â¬';
    this.data_alert_2 = 'You have reÃ§u un SDD liÃ© Ã  un mandat non-saisi';
    this.data_alert_3 = 'You have reÃ§u un SDD liÃ© Ã  un mandat modifiÃ©';
    
    /* Sdd listing */
    this.sdd_view_filter_title = 'Filtrer l\'affichage des dÃ©bits';
    this.sdd_view_filter_button_display_all = 'Tout voir';
    this.sdd_view_filter_validate = 'Confirm';
    this.sdd_view_filter_umr = 'Filtrer sur l\'UMR';
    this.sdd_view_filter_reference = 'Filtrer sur la rÃ©fÃ©rence';
    this.sdd_view_filter_min_amount = 'Filtrer sur un montant minimum';
    this.sdd_view_filter_max_amount = 'Filtrer sur un montant maximum';
    this.sdd_view_filter_sequence_type = 'Type';
    this.sdd_view_filter_status = 'Statut';
    this.sdd_view_filter_date_start = 'Depuis le';
    this.sdd_view_filter_date_end = 'Jusqu\'au';
    
    this.sdd_view_grid_account = "Account";
    this.sdd_view_grid_due_date = "EchÃ©ance";
    this.sdd_view_grid_amount = "Amount";
    this.sdd_view_grid_type = "Type";
    this.sdd_view_grid_mandates = "Mandat";
    this.sdd_view_grid_status = "Statut";
    this.sdd_view_grid_display = "Voir";
    this.sdd_view_grid_debits = "dÃ©bits";
    this.sdd_view_grid_debit = "dÃ©bit";
    this.sdd_view_grid_title = 'Liste des SDD';
    
    this.sdd_view_summary_intro = 'RÃ©sumÃ© des dÃ©bits sur la pÃ©riode sÃ©lectionnÃ©e du ';
    this.sdd_view_summary_dateFrom = 'au ';
    this.sdd_view_summary_no_debit = 'Aucun dÃ©bit prÃ©vu pour la pÃ©riode sÃ©lectionnÃ©e du ';
    
    /* Alerts listing */
    this.alerts_view_grid_date = "Date";
    this.alerts_view_grid_label = "LibellÃ©";
    this.alerts_view_grid_action = "Action";
    this.alerts_view_grid_media = "Media";
    this.alerts_view_grid_delete = "Suppr.";
    this.alerts_view_popup_confirm_title = 'Confirmation';
    this.alerts_view_popup_confirm_desc = 'Etes-vous sÃ»r de vouloir supprimer cette alerte ?';
    this.alerts_view_tooltip_delete = "Cancel cette alerte";
    
    /* Home page */
    this.sepa_welcome_alerts_grid_date = "Date";
    this.sepa_welcome_alerts_grid_label = "LibellÃ©";
    this.sepa_welcome_alerts_grid_action = "Action";
    this.sepa_welcome_alerts_grid_media = "Media";
    this.sepa_welcome_alerts_grid_delete = "Suppr.";
    this.sepa_welcome_alerts_grid_rule = "RÃ¨gle";
    this.sepa_welcome_alerts_grid_title = 'Liste des 5 derniÃ¨res alertes';
    
    this.sepa_welcome_sdd_grid_creditor = "CrÃ©ancier";
    this.sepa_welcome_sdd_grid_account = "Account";
    this.sepa_welcome_sdd_grid_dueDate = "EchÃ©ance";
    this.sepa_welcome_sdd_grid_amount = "Amount";
    this.sepa_welcome_sdd_grid_type = "Type";
    this.sepa_welcome_sdd_grid_status = "Statut";
    this.sepa_welcome_sdd_grid_details = "DÃ©tails";
    this.sepa_welcome_sdd_grid_mandate = "Mandat";
    this.sepa_welcome_sdd_grid_last_title = 'Liste des 5 derniers SDD';
    this.sepa_welcome_sdd_grid_next_title = 'Liste des 5 prochains SDD';
    this.sepa_welcome_sdd_chart_label = 'Cumul des dÃ©bits';
    
    /* Config alerts */
    this.alertes_config_form_general = 'Configuration gÃ©nÃ©rale';
    this.alertes_config_form_general_validate = 'Confirm';
    
    this.alertes_config_label_general_reason_0 = 'Si je reÃ§ois un SDD liÃ© Ã  un mandat que je n\'ai pas saisi';
    this.alertes_config_label_general_reason_1 = 'Si je reÃ§ois un SDD liÃ© Ã  un mandat qui a Ã©tÃ© modifiÃ©';
    this.alertes_config_label_general_reason_2 = 'Si je reÃ§ois un SDD liÃ© Ã  un mandat annulÃ©';
    this.alertes_config_label_general_reason_3 = 'Si je reÃ§ois un SDD liÃ© Ã  un creancier bloquÃ©';
    this.alertes_config_label_general_reason_4 = 'Si je reÃ§ois un SDD et que mon solde est insuffisant';
    
    this.alertes_config_label_general_media = 'Je veux Ãªtre alertÃ© par';
    this.alertes_config_general_popup_title = 'Enregistrement Configuration GÃ©nÃ©rale';
    this.alertes_config_general_popup_desc = 'Votre configuration gÃ©nÃ©rale a bien Ã©tÃ© enregistrÃ©e';
    
    this.alertes_config_grid_reason = "Cause";
    this.alertes_config_grid_target = "Cible";
    this.alertes_config_grid_action = "Action automatique";
    this.alertes_config_grid_media = "Canal";
    this.alertes_config_grid_status = "Statut";
    this.alertes_config_grid_delete = "Suppr.";
    this.alertes_config_grid_modify = "Mod.";
    this.alertes_config_grid_title = 'Mes rÃ¨gles d\'alerte';
    
    this.alertes_config_form_rule = 'CrÃ©ation d\'une nouvelle rÃ¨gle';
    this.alertes_config_form_rule_button_validate = 'Confirm';
    this.alertes_config_form_rule_popup_error_title = 'Erreur d\'enregistrement';
    this.alertes_config_form_rule_popup_error_desc = "Les champs 'cause' et 'action' sont obligatoires";
    this.alertes_config_form_rule_popup_ok_title = 'RÃ¨gle enregistrÃ©e';
    this.alertes_config_form_rule_popup_ok_desc = 'Votre rÃ¨gle a bien Ã©tÃ© enregistrÃ©e';
    this.alertes_config_form_rule_popup_confirm_title = 'Confirmation';
    this.alertes_config_form_rule_popup_confirm_desc = 'Etes-vous sÃ»r de vouloir supprimer cette rÃ¨gle ?';
    
    this.alertes_config_form_rule_label_reason = 'Lorsqu\'un SDD arrive, dont';
    this.alertes_config_form_rule_label_target = "Cible";
    this.alertes_config_form_rule_label_action = "Faire l'action suivante";
    this.alertes_config_form_rule_label_media = "Par le moyen suivant";
    
    this.alertes_config_grid_tooltip_modify_title = 'Modifier cette rÃ¨gle';
    this.alertes_config_grid_tooltip_modify_status_active_title = 'RÃ¨gle active';
    this.alertes_config_grid_tooltip_modify_status_active_desc = 'Cette rÃ¨gle est active. Cliquer ici pour la dÃ©sactiver';
    this.alertes_config_grid_tooltip_modify_status_inactive_title = 'RÃ¨gle inactive';
    this.alertes_config_grid_tooltip_modify_status_inactive_desc = 'Cette rÃ¨gle est inactive. Cliquer ici pour l\'activer';
    this.alertes_config_grid_tooltip_delete_title = 'Cancel cette rÃ¨gle';
    
    this.alertes_config_label_accept = "J'accepte";
    this.alertes_config_label_reject = "Je refuse";
    this.alertes_config_label_notification = "Je veux Ãªtre notifiÃ© par";
    this.alertes_config_general_intro = "Quand le date d'Ã©chÃ©ance arrive, sans action de ma part, par dÃ©faut"
    this.alertes_config_general = "Configuration gÃ©nÃ©rale"
    this.alertes_config_prefs = "Mandats";
    this.alertes_config_prefs_mandat_unknown_title = "Si un dÃ©bit liÃ© Ã  un mandat inconnu arrive";
    this.alertes_config_prefs_mandat_unknown_desc = "Proposer automatiquement la crÃ©ation de ce mandat";
    this.alertes_config_prefs_mandat_modified_title = "Si un dÃ©bit liÃ© Ã  un mandat modifiÃ© arrive";
    this.alertes_config_prefs_mandat_modified_desc = "Proposer automatiquement la modification du mandat";
    this.alertes_config_prefs_mandat_button_save = "Save";
    this.alertes_config_prefs_mandat_button_reset = "Remettre les valeurs recommandÃ©es";
    
}





var lang = new ApplicationLang();


