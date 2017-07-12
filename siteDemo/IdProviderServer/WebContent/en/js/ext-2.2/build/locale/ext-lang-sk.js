/**
 * List compiled by mystix on the extjs.com forums.
 * Thank you Mystix!
 */
 
 /*  Slovak Translation by Michal Thomka
  *  14 April 2007
  */

Ext.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">NahrÃ¡vam...</div>';

if(Ext.View){
   Ext.View.prototype.emptyText = "";
}

if(Ext.grid.GridPanel){
   Ext.grid.GridPanel.prototype.ddText = "{0} oznaÄenÃ½ch riadkov";
}

if(Ext.TabPanelItem){
   Ext.TabPanelItem.prototype.closeText = "ZavrieÅ¥ tÃºto zÃ¡loÅ¾ku";
}

if(Ext.form.Field){
   Ext.form.Field.prototype.invalidText = "Hodnota v tomto poli je nesprÃ¡vna";
}

if(Ext.LoadMask){
    Ext.LoadMask.prototype.msg = "NahrÃ¡vam...";
}

Date.monthNames = [
   "JanuÃ¡r",
   "FebruÃ¡r",
   "Marec",
   "AprÃ­l",
   "MÃ¡j",
   "JÃºn",
   "JÃºl",
   "August",
   "September",
   "OktÃ³ber",
   "November",
   "December"
];

Date.dayNames = [
   "NedeÄ¾a",
   "Pondelok",
   "Utorok",
   "Streda",
   "Å tvrtok",
   "Piatok",
   "Sobota"
];

if(Ext.MessageBox){
   Ext.MessageBox.buttonText = {
      ok     : "OK",
      cancel : "ZruÅ¡iÅ¥",
      yes    : "Ãno",
      no     : "Nie"
   };
}

if(Ext.util.Format){
   Ext.util.Format.date = function(v, format){
      if(!v) return "";
      if(!(v instanceof Date)) v = new Date(Date.parse(v));
      return v.dateFormat(format || "d.m.Y");
   };
}


if(Ext.DatePicker){
   Ext.apply(Ext.DatePicker.prototype, {
      todayText         : "Dnes",
      minText           : "Tento dÃ¡tum je menÅ¡Ã­ ako minimÃ¡lny moÅ¾nÃ½ dÃ¡tum",
      maxText           : "Tento dÃ¡tum je vÃ¤ÄÅ¡Ã­ ako maximÃ¡lny moÅ¾nÃ½ dÃ¡tum",
      disabledDaysText  : "",
      disabledDatesText : "",
      monthNames        : Date.monthNames,
      dayNames          : Date.dayNames,
      nextText          : 'ÄalÅ¡Ã­ Mesiac (Control+Doprava)',
      prevText          : 'Predch. Mesiac (Control+DoÄ¾ava)',
      monthYearText     : 'Vyberte Mesiac (Control+Hore/Dole pre posun rokov)',
      todayTip          : "{0} (MedzernÃ­k)",
      format            : "d.m.Y"
   });
}


if(Ext.PagingToolbar){
   Ext.apply(Ext.PagingToolbar.prototype, {
      beforePageText : "Strana",
      afterPageText  : "z {0}",
      firstText      : "PrvÃ¡ Strana",
      prevText       : "Predch. Strana",
      nextText       : "ÄalÅ¡ia Strana",
      lastText       : "PoslednÃ¡ strana",
      refreshText    : "ObnoviÅ¥",
      displayMsg     : "Zobrazujem {0} - {1} z {2}",
      emptyMsg       : 'Âiadne dÃ¡ta'
   });
}


if(Ext.form.TextField){
   Ext.apply(Ext.form.TextField.prototype, {
      minLengthText : "MinimÃ¡lna dÄºÅ¾ka pre toto pole je {0}",
      maxLengthText : "MaximÃ¡lna dÄºÅ¾ka pre toto pole je {0}",
      blankText     : "Toto pole je povinnÃ©",
      regexText     : "",
      emptyText     : null
   });
}

if(Ext.form.NumberField){
   Ext.apply(Ext.form.NumberField.prototype, {
      minText : "MinimÃ¡lna hodnota pre toto pole je {0}",
      maxText : "MaximÃ¡lna hodnota pre toto pole je {0}",
      nanText : "{0} je nesprÃ¡vne ÄÃ­slo"
   });
}

if(Ext.form.DateField){
   Ext.apply(Ext.form.DateField.prototype, {
      disabledDaysText  : "ZablokovanÃ©",
      disabledDatesText : "ZablokovanÃ©",
      minText           : "DÃ¡tum v tomto poli musÃ­ byÅ¥ aÅ¾ po {0}",
      maxText           : "DÃ¡tum v tomto poli musÃ­ byÅ¥ pred {0}",
      invalidText       : "{0} nie je sprÃ¡vny dÃ¡tum - musÃ­ byÅ¥ vo formÃ¡te {1}",
      format            : "d.m.Y"
   });
}

if(Ext.form.ComboBox){
   Ext.apply(Ext.form.ComboBox.prototype, {
      loadingText       : "NahrÃ¡vam...",
      valueNotFoundText : undefined
   });
}

if(Ext.form.VTypes){
   Ext.apply(Ext.form.VTypes, {
      emailText    : 'Toto pole musÃ­ byÅ¥ e-mailovÃ¡ adresa vo formÃ¡te "user@domain.com"',
      urlText      : 'Toto pole musÃ­ byÅ¥ URL vo formÃ¡te "http:/'+'/www.domain.com"',
      alphaText    : 'Toto pole moÅ¾e obsahovaÅ¥ iba pÃ­smenÃ¡ a znak _',
      alphanumText : 'Toto pole moÅ¾e obsahovaÅ¥ iba pÃ­smenÃ¡, ÄÃ­sla a znak _'
   });
}

if(Ext.grid.GridView){
   Ext.apply(Ext.grid.GridView.prototype, {
      sortAscText  : "ZoradiÅ¥ vzostupne",
      sortDescText : "ZoradiÅ¥ zostupne",
      lockText     : "ZamknÃºÅ¥ stÄ¾pec",
      unlockText   : "OdomknÃºÅ¥ stÄ¾pec",
      columnsText  : "StÄ¾pce"
   });
}

if(Ext.grid.PropertyColumnModel){
   Ext.apply(Ext.grid.PropertyColumnModel.prototype, {
      nameText   : "NÃ¡zov",
      valueText  : "Hodnota",
      dateFormat : "d.m.Y"
   });
}

if(Ext.layout.BorderLayout && Ext.layout.BorderLayout.SplitRegion){
   Ext.apply(Ext.layout.BorderLayout.SplitRegion.prototype, {
      splitTip            : "Potiahnite pre zmenu rozmeru",
      collapsibleSplitTip : "Potiahnite pre zmenu rozmeru. Dvojklikom schovÃ¡te."
   });
}
