ï»¿/*
 * France (Canadian) translation
 * By BernardChhun
 * 04-08-2007, 03:07 AM
 */

Ext.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">En cours de chargement...</div>';

if(Ext.View){
   Ext.View.prototype.emptyText = "";
}

if(Ext.grid.GridPanel){
   Ext.grid.GridPanel.prototype.ddText = "{0} ligne(s) sÃ©lectionnÃ©(s)";
}

if(Ext.TabPanelItem){
   Ext.TabPanelItem.prototype.closeText = "Fermer cette onglet";
}

if(Ext.form.Field){
   Ext.form.Field.prototype.invalidText = "La valeur de ce champ est invalide";
}

if(Ext.LoadMask){
    Ext.LoadMask.prototype.msg = "En cours de chargement...";
}

Date.monthNames = [
   "Janvier",
   "FÃ©vrier",
   "Mars",
   "Avril",
   "Mai",
   "Juin",
   "Juillet",
   "AoÃ»t",
   "Septembre",
   "Octobre",
   "Novembre",
   "DÃ©cembre"
];

Date.dayNames = [
   "Sunday",
   "Monday",
   "Tuesday",
   "Wendesday",
   "Thursday",
   "Friday",
   "Saturday"
];

if(Ext.MessageBox){
   Ext.MessageBox.buttonText = {
      ok     : "OK",
      cancel : "Cancel",
      yes    : "Oui",
      no     : "Non"
   };
}

if(Ext.util.Format){
   Ext.util.Format.date = function(v, format){
      if(!v) return "";
      if(!(v instanceof Date)) v = new Date(Date.parse(v));
      return v.dateFormat(format || "d/m/Y");
   };
}

if(Ext.DatePicker){
   Ext.apply(Ext.DatePicker.prototype, {
      todayText         : "Aujourd'hui",
      minText           : "Cette date est plus petite que la date minimum",
      maxText           : "Cette date est plus grande que la date maximum",
      disabledDaysText  : "",
      disabledDatesText : "",
      monthNames	: Date.monthNames,
      dayNames		: Date.dayNames,
      nextText          : 'Prochain mois (CTRL+FlÃ©che droite)',
      prevText          : 'Mois prÃ©cÃ©dent (CTRL+FlÃ©che gauche)',
      monthYearText     : 'Choissisez un mois (CTRL+FlÃ©che haut ou bas pour changer d\'annÃ©e.)',
      todayTip          : "{0} (Barre d'espace)",
      format            : "d/m/y"
   });
}

if(Ext.PagingToolbar){
   Ext.apply(Ext.PagingToolbar.prototype, {
      beforePageText : "Page",
      afterPageText  : "de {0}",
      firstText      : "PremiÃ¨re page",
      prevText       : "Page prÃ©cÃ©dente",
      nextText       : "Prochaine page",
      lastText       : "DerniÃ¨re page",
      refreshText    : "Recharger la page",
      displayMsg     : "Page courante {0} - {1} de {2}",
      emptyMsg       : 'Aucune donnÃ©e Ã  afficher'
   });
}

if(Ext.form.TextField){
   Ext.apply(Ext.form.TextField.prototype, {
      minLengthText : "La longueur minimum de ce champ est de {0} caractÃ¨res",
      maxLengthText : "La longueur maximum de ce champ est de {0} caractÃ¨res",
      blankText     : "Ce champ est obligatoire",
      regexText     : "",
      emptyText     : null
   });
}

if(Ext.form.NumberField){
   Ext.apply(Ext.form.NumberField.prototype, {
      minText : "La valeur minimum de ce champ doit Ãªtre de {0}",
      maxText : "La valeur maximum de ce champ doit Ãªtre de {0}",
      nanText : "{0} n'est pas un nombre valide"
   });
}

if(Ext.form.DateField){
   Ext.apply(Ext.form.DateField.prototype, {
      disabledDaysText  : "DÃ©sactivÃ©",
      disabledDatesText : "DÃ©sactivÃ©",
      minText           : "La date de ce champ doit Ãªtre avant le {0}",
      maxText           : "La date de ce champ doit Ãªtre aprÃ¨s le {0}",
      invalidText       : "{0} n'est pas une date valide - il doit Ãªtre au format suivant: {1}",
      format            : "d/m/y"
   });
}

if(Ext.form.ComboBox){
   Ext.apply(Ext.form.ComboBox.prototype, {
      loadingText       : "En cours de chargement...",
      valueNotFoundText : undefined
   });
}

if(Ext.form.VTypes){
   Ext.apply(Ext.form.VTypes, {
      emailText    : 'Ce champ doit contenir un courriel et doit Ãªtre sous ce format: "usager@domaine.com"',
      urlText      : 'Ce champ doit contenir une URL sous le format suivant: "http:/'+'/www.domaine.com"',
      alphaText    : 'Ce champ ne peut contenir que des lettres et le caractÃ¨re soulignÃ© (_)',
      alphanumText : 'Ce champ ne peut contenir que des caractÃ¨res alphanumÃ©riques ainsi que le caractÃ¨re soulignÃ© (_)'
   });
}

if(Ext.grid.GridView){
   Ext.apply(Ext.grid.GridView.prototype, {
      sortAscText  : "Tri ascendant",
      sortDescText : "Tri descendant",
      lockText     : "VerrouillÃ© la colonne",
      unlockText   : "DÃ©verrouillÃ© la colonne",
      columnsText  : "Colonnes"
   });
}

if(Ext.grid.PropertyColumnModel){
   Ext.apply(Ext.grid.PropertyColumnModel.prototype, {
      nameText   : "PropriÃ©tÃ©",
      valueText  : "Valeur",
      dateFormat : "d/m/Y"
   });
}

if(Ext.layout.BorderLayout && Ext.layout.BorderLayout.SplitRegion){
   Ext.apply(Ext.layout.BorderLayout.SplitRegion.prototype, {
      splitTip            : "Cliquer et glisser pour redimensionner le panneau.",
      collapsibleSplitTip : "Cliquer et glisser pour redimensionner le panneau. Double-cliquer pour cacher le panneau."
   });
}
