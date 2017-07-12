/**
 * Swedish translation (utf8-encoding)
 * By Erik Andersson, Monator Technologies
 * 24 April 2007
 * Changed by Cariad, 29 July 2007
 */

Ext.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">Laddar...</div>';

if(Ext.View){
   Ext.View.prototype.emptyText = "";
}

if(Ext.grid.GridPanel){
   Ext.grid.GridPanel.prototype.ddText = "{0} markerade rad(er)";
}

if(Ext.TabPanelItem){
   Ext.TabPanelItem.prototype.closeText = "StÃ¤ng denna flik";
}

if(Ext.form.Field){
   Ext.form.Field.prototype.invalidText = "VÃ¤rdet i detta fÃ¤lt Ã¤r inte tillÃ¥tet";
}

if(Ext.LoadMask){
   Ext.LoadMask.prototype.msg = "Laddar...";
}

Date.monthNames = [
   "januari",
   "februari",
   "mars",
   "april",
   "maj",
   "juni",
   "juli",
   "augusti",
   "september",
   "oktober",
   "november",
   "december"
];

Date.dayNames = [
   "sÃ¶ndag",
   "mÃ¥ndag",
   "tisdag",
   "onsdag",
   "torsdag",
   "fredag",
   "lÃ¶rdag"
];

if(Ext.MessageBox){
   Ext.MessageBox.buttonText = {
      ok     : "OK",
      cancel : "Avbryt",
      yes    : "Ja",
      no     : "Nej"
   };
}

if(Ext.util.Format){
   Ext.util.Format.date = function(v, format){
      if(!v) return "";
      if(!(v instanceof Date)) v = new Date(Date.parse(v));
      return v.dateFormat(format || "Y-m-d");
   };
}

if(Ext.DatePicker){
   Ext.apply(Ext.DatePicker.prototype, {
      todayText         : "Idag",
      minText           : "Detta datum intrÃ¤ffar fÃ¶re det tidigast tillÃ¥tna",
      maxText           : "Detta datum intrÃ¤ffar efter det senast tillÃ¥tna",
      disabledDaysText  : "",
      disabledDatesText : "",
      monthNames	: Date.monthNames,
      dayNames		: Date.dayNames,
      nextText          : 'NÃ¤sta mÃ¥nad (Ctrl + hÃ¶gerpil)',
      prevText          : 'FÃ¶regÃ¥ende mÃ¥nad (Ctrl + vÃ¤nsterpil)',
      monthYearText     : 'VÃ¤lj en mÃ¥nad (Ctrl + uppÃ¥tpil/nerÃ¥tpil fÃ¶r att Ã¤ndra Ã¥rtal)',
      todayTip          : "{0} (mellanslag)",
      format            : "Y-m-d",
      startDay          : 1
   });
}

if(Ext.PagingToolbar){
   Ext.apply(Ext.PagingToolbar.prototype, {
      beforePageText : "Sida",
      afterPageText  : "av {0}",
      firstText      : "FÃ¶rsta sidan",
      prevText       : "FÃ¶regÃ¥ende sida",
      nextText       : "NÃ¤sta sida",
      lastText       : "Sista sidan",
      refreshText    : "Uppdatera",
      displayMsg     : "Visar {0} - {1} av {2}",
      emptyMsg       : 'Det finns ingen data att visa'
   });
}

if(Ext.form.TextField){
   Ext.apply(Ext.form.TextField.prototype, {
      minLengthText : "Minsta tillÃ¥tna lÃ¤ngd fÃ¶r detta fÃ¤lt Ã¤r {0}",
      maxLengthText : "StÃ¶rsta tillÃ¥tna lÃ¤ngd fÃ¶r detta fÃ¤lt Ã¤r {0}",
      blankText     : "Detta fÃ¤lt Ã¤r obligatoriskt",
      regexText     : "",
      emptyText     : null
   });
}

if(Ext.form.NumberField){
   Ext.apply(Ext.form.NumberField.prototype, {
      minText : "Minsta tillÃ¥tna vÃ¤rde fÃ¶r detta fÃ¤lt Ã¤r {0}",
      maxText : "StÃ¶rsta tillÃ¥tna vÃ¤rde fÃ¶r detta fÃ¤lt Ã¤r {0}",
      nanText : "{0} Ã¤r inte ett tillÃ¥tet nummer"
   });
}

if(Ext.form.DateField){
   Ext.apply(Ext.form.DateField.prototype, {
      disabledDaysText  : "Inaktiverad",
      disabledDatesText : "Inaktiverad",
      minText           : "Datumet i detta fÃ¤lt mÃ¥ste intrÃ¤ffa efter {0}",
      maxText           : "Datumet i detta fÃ¤lt mÃ¥ste intrÃ¤ffa fÃ¶re {0}",
      invalidText       : "{0} Ã¤r inte ett tillÃ¥tet datum - datum ska anges i formatet {1}",
      format            : "Y-m-d"
   });
}

if(Ext.form.ComboBox){
   Ext.apply(Ext.form.ComboBox.prototype, {
      loadingText       : "Laddar...",
      valueNotFoundText : undefined
   });
}

if(Ext.form.VTypes){
   Ext.apply(Ext.form.VTypes, {
      emailText    : 'Detta fÃ¤lt ska innehÃ¥lla en e-post adress i formatet "anvÃ¤ndare@domÃ¤n.se"',
      urlText      : 'Detta fÃ¤lt ska innehÃ¥lla en lÃ¤nk (URL) i formatet "http:/'+'/www.domÃ¤n.se"',
      alphaText    : 'Detta fÃ¤lt fÃ¥r bara innehÃ¥lla bokstÃ¤ver och "_"',
      alphanumText : 'Detta fÃ¤lt fÃ¥r bara innehÃ¥lla bokstÃ¤ver, nummer och "_"'
   });
}

if(Ext.grid.GridView){
   Ext.apply(Ext.grid.GridView.prototype, {
      sortAscText  : "Sortera stigande",
      sortDescText : "Sortera fallande",
      lockText     : "LÃ¥s kolumn",
      unlockText   : "LÃ¥s upp kolumn",
      columnsText  : "Kolumner"
   });
}

if(Ext.grid.PropertyColumnModel){
   Ext.apply(Ext.grid.PropertyColumnModel.prototype, {
      nameText   : "Namn",
      valueText  : "VÃ¤rde",
      dateFormat : "Y-m-d"
   });
}

if(Ext.layout.BorderLayout && Ext.layout.BorderLayout.SplitRegion){
   Ext.apply(Ext.layout.BorderLayout.SplitRegion.prototype, {
      splitTip            : "Dra fÃ¶r att Ã¤ndra storleken.",
      collapsibleSplitTip : "Dra fÃ¶r att Ã¤ndra storleken. Dubbelklicka fÃ¶r att gÃ¶mma."
   });
}
