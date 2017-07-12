ï»¿/*
 * Serbian Cyrillic Translation
 * by Äolovic Vladan (cyrillic, utf8 encoding)
 * sr_RS (ex: sr_CS, sr_YU)
 * 12 May 2007
 */

Ext.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">Ð£ÑÐ¸ÑÐ°Ð²Ð°Ð¼...</div>';

if(Ext.View){
   Ext.View.prototype.emptyText = "";
}

if(Ext.grid.GridPanel){
   Ext.grid.GridPanel.prototype.ddText = "{0} Ð¸Ð·Ð°Ð±ÑÐ°Ð½Ð¸Ñ ÑÐµÐ´Ð¾Ð²Ð°";
}

if(Ext.TabPanelItem){
   Ext.TabPanelItem.prototype.closeText = "ÐÐ°ÑÐ²Ð¾ÑÐ¸ Ð¾Ð²Ñ Â»ÐºÐ°ÑÑÐ¸ÑÑÂ«";
}

if(Ext.form.Field){
   Ext.form.Field.prototype.invalidText = "Ð£Ð½ÐµÑÐµÐ½Ð° Ð²ÑÐµÐ´Ð½Ð¾ÑÑ Ð½Ð¸ÑÐµ Ð¿ÑÐ°Ð²Ð¸Ð»Ð½Ð°";
}

if(Ext.LoadMask){
    Ext.LoadMask.prototype.msg = "Ð£ÑÐ¸ÑÐ°Ð²Ð°Ð¼...";
}

Date.monthNames = [
   "ÐÐ°Ð½ÑÐ°Ñ",
   "Ð¤ÐµÐ±ÑÑÐ°Ñ",
   "ÐÐ°ÑÑ",
   "ÐÐ¿ÑÐ¸Ð»",
   "ÐÐ°Ñ",
   "ÐÑÐ½",
   "ÐÑÐ»",
   "ÐÐ²Ð³ÑÑÑ",
   "Ð¡ÐµÐ¿ÑÐµÐ¼Ð±Ð°Ñ",
   "ÐÐºÑÐ¾Ð±Ð°Ñ",
   "ÐÐ¾Ð²ÐµÐ¼Ð±Ð°Ñ",
   "ÐÐµÑÐµÐ¼Ð±Ð°Ñ"
];

Date.dayNames = [
   "ÐÐµÐ´ÐµÑÐ°",
   "ÐÐ¾Ð½ÐµÐ´ÐµÑÐ°Ðº",
   "Ð£ÑÐ¾ÑÐ°Ðº",
   "Ð¡ÑÐµÐ´Ð°",
   "Ð§ÐµÑÐ²ÑÑÐ°Ðº",
   "ÐÐµÑÐ°Ðº",
   "Ð¡ÑÐ±Ð¾ÑÐ°"
];

if(Ext.MessageBox){
   Ext.MessageBox.buttonText = {
      ok     : "Ð£ ÑÐµÐ´Ñ",
      cancel : "ÐÐ´ÑÑÑÐ°Ð½Ð¸",
      yes    : "ÐÐ°",
      no     : "ÐÐµ"
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
      todayText         : "ÐÐ°Ð½Ð°Ñ",
      minText           : "ÐÐ°ÑÑÐ¼ ÑÐµ Ð¸ÑÐ¿ÑÐµÐ´ Ð½Ð°ÑÐ¼Ð°ÑÐµÐ³ Ð´Ð¾Ð·Ð²Ð¾ÑÐµÐ½Ð¾Ð³ Ð´Ð°ÑÑÐ¼Ð°",
      maxText           : "ÐÐ°ÑÑÐ¼ ÑÐµ Ð½Ð°ÐºÐ¾Ð½ Ð½Ð°ÑÐ²ÐµÑÐµÐ³ Ð´Ð¾Ð·Ð²Ð¾ÑÐµÐ½Ð¾Ð³ Ð´Ð°ÑÑÐ¼Ð°",
      disabledDaysText  : "",
      disabledDatesText : "",
      monthNames	: Date.monthNames,
      dayNames		: Date.dayNames,
      nextText          : 'Ð¡Ð»ÐµÐ´ÐµÑÐ¸ Ð¼ÐµÑÐµÑ (Control+ÐÐµÑÐ½Ð¾)',
      prevText          : 'ÐÑÐµÑÑÐ¾Ð´Ð½Ð¸ Ð¼ÐµÑÐµÑ (Control+ÐÐµÐ²Ð¾)',
      monthYearText     : 'ÐÐ·Ð°Ð±ÐµÑÐ¸ÑÐµ Ð¼ÐµÑÐµÑ (Control+ÐÐ¾ÑÐµ/ÐÐ¾Ð»Ðµ Ð·Ð° Ð¸Ð·Ð±Ð¾Ñ Ð³Ð¾Ð´Ð¸Ð½Ðµ)',
      todayTip          : "{0} (Ð Ð°Ð·Ð¼Ð°ÐºÐ½Ð¸ÑÐ°)",
      format            : "d.m.y",
      startDay 		 : 1
   });
}

if(Ext.PagingToolbar){
   Ext.apply(Ext.PagingToolbar.prototype, {
      beforePageText : "Ð¡ÑÑÐ°Ð½Ð°",
      afterPageText  : "Ð¾Ð´ {0}",
      firstText      : "ÐÑÐ²Ð° ÑÑÑÐ°Ð½Ð°",
      prevText       : "ÐÑÐµÑÑÐ¾Ð´Ð½Ð° ÑÑÑÐ°Ð½Ð°",
      nextText       : "Ð¡Ð»ÐµÐ´ÐµÑÐ° ÑÑÑÐ°Ð½Ð°",
      lastText       : "ÐÐ¾ÑÐ»ÐµÐ´ÑÐ° ÑÑÑÐ°Ð½Ð°",
      refreshText    : "ÐÑÐ²ÐµÐ¶Ð¸",
      displayMsg     : "ÐÑÐ¸ÐºÐ°Ð·Ð°Ð½Ð° {0} - {1} Ð¾Ð´ {2}",
      emptyMsg       : 'ÐÐµÐ¼Ð°Ð¼ ÑÑÐ° Ð¿ÑÐ¸ÐºÐ°Ð·Ð°ÑÐ¸'
   });
}

if(Ext.form.TextField){
   Ext.apply(Ext.form.TextField.prototype, {
      minLengthText : "ÐÐ¸Ð½Ð¸Ð¼Ð°Ð»Ð½Ð° Ð´ÑÐ¶Ð¸Ð½Ð° Ð¾Ð²Ð¾Ð³ Ð¿Ð¾ÑÐ° ÑÐµ {0}",
      maxLengthText : "ÐÐ°ÐºÑÐ¸Ð¼Ð°Ð»Ð½Ð° Ð´ÑÐ¶Ð¸Ð½Ð° Ð¾Ð²Ð¾Ð³ Ð¿Ð¾ÑÐ° ÑÐµ {0}",
      blankText     : "ÐÐ¾ÑÐµ ÑÐµ Ð¾Ð±Ð°Ð²ÐµÐ·Ð½Ð¾",
      regexText     : "",
      emptyText     : null
   });
}

if(Ext.form.NumberField){
   Ext.apply(Ext.form.NumberField.prototype, {
      minText : "ÐÐ¸Ð½Ð¸Ð¼Ð°Ð»Ð½Ð° Ð²ÑÐµÐ´Ð½Ð¾ÑÑ Ñ Ð¿Ð¾ÑÑ ÑÐµ {0}",
      maxText : "ÐÐ°ÐºÑÐ¸Ð¼Ð°Ð»Ð½Ð° Ð²ÑÐµÐ´Ð½Ð¾ÑÑ Ñ Ð¿Ð¾ÑÑ ÑÐµ {0}",
      nanText : "{0} Ð½Ð¸ÑÐµ Ð¿ÑÐ°Ð²Ð¸Ð»Ð°Ð½ Ð±ÑÐ¾Ñ"
   });
}

if(Ext.form.DateField){
   Ext.apply(Ext.form.DateField.prototype, {
      disabledDaysText  : "ÐÐ°ÑÐ¸Ð²Ð½Ð¾",
      disabledDatesText : "ÐÐ°ÑÐ¸Ð²Ð½Ð¾",
      minText           : "ÐÐ°ÑÑÐ¼ Ñ Ð¾Ð²Ð¾Ð¼ Ð¿Ð¾ÑÑ Ð¼Ð¾ÑÐ° Ð±Ð¸ÑÐ¸ Ð½Ð°ÐºÐ¾Ð½ {0}",
      maxText           : "ÐÐ°ÑÑÐ¼ Ñ Ð¾Ð²Ð¾Ð¼ Ð¿Ð¾ÑÑ Ð¼Ð¾ÑÐ° Ð±Ð¸ÑÐ¸ Ð¿ÑÐµ {0}",
      invalidText       : "{0} Ð½Ð¸ÑÐµ Ð¿ÑÐ°Ð²Ð¸Ð»Ð°Ð½ Ð´Ð°ÑÑÐ¼ - Ð·Ð°ÑÑÐµÐ²Ð°Ð½Ð¸ Ð¾Ð±Ð»Ð¸Ðº ÑÐµ {1}",
      format            : "d.m.y"
   });
}

if(Ext.form.ComboBox){
   Ext.apply(Ext.form.ComboBox.prototype, {
      loadingText       : "Ð£ÑÐ¸ÑÐ°Ð²Ð°Ð¼...",
      valueNotFoundText : undefined
   });
}

if(Ext.form.VTypes){
   Ext.apply(Ext.form.VTypes, {
      emailText    : 'ÐÐ²Ð¾ Ð¿Ð¾ÑÐµ Ð¿ÑÐ¸ÑÐ²Ð°ÑÐ° e-mail Ð°Ð´ÑÐµÑÑ Ð¸ÑÐºÑÑÑÐ¸Ð²Ð¾ Ñ Ð¾Ð±Ð»Ð¸ÐºÑ "korisnik@domen.com"',
      urlText      : 'ÐÐ²Ð¾ Ð¿Ð¾ÑÐµ Ð¿ÑÐ¸ÑÐ²Ð°ÑÐ° URL Ð°Ð´ÑÐµÑÑ Ð¸ÑÐºÑÑÑÐ¸Ð²Ð¾ Ñ Ð¾Ð±Ð»Ð¸ÐºÑ "http:/'+'/www.domen.com"',
      alphaText    : 'ÐÐ²Ð¾ Ð¿Ð¾ÑÐµ Ð¼Ð¾Ð¶Ðµ ÑÐ°Ð´ÑÐ¶Ð°ÑÐ¸ Ð¸ÑÐºÑÑÑÐ¸Ð²Ð¾ ÑÐ»Ð¾Ð²Ð° Ð¸ Ð·Ð½Ð°Ðº _',
      alphanumText : 'ÐÐ²Ð¾ Ð¿Ð¾ÑÐµ Ð¼Ð¾Ð¶Ðµ ÑÐ°Ð´ÑÐ¶Ð°ÑÐ¸ ÑÐ°Ð¼Ð¾ ÑÐ»Ð¾Ð²Ð°, Ð±ÑÐ¾ÑÐµÐ²Ðµ Ð¸ Ð·Ð½Ð°Ðº _'
   });
}

if(Ext.grid.GridView){
   Ext.apply(Ext.grid.GridView.prototype, {
      sortAscText  : "Ð Ð°ÑÑÑÑÐ¸ ÑÐµÐ´Ð¾ÑÐ»ÐµÐ´",
      sortDescText : "ÐÐ¿Ð°Ð´Ð°ÑÑÑÐ¸ ÑÐµÐ´Ð¾ÑÐ»ÐµÐ´",
      lockText     : "ÐÐ°ÐºÑÑÑÐ°Ñ ÐºÐ¾Ð»Ð¾Ð½Ñ",
      unlockText   : "ÐÑÐºÑÑÑÐ°Ñ ÐºÐ¾Ð»Ð¾Ð½Ñ",
      columnsText  : "ÐÐ¾Ð»Ð¾Ð½Ðµ"
   });
}

if(Ext.grid.PropertyColumnModel){
   Ext.apply(Ext.grid.PropertyColumnModel.prototype, {
      nameText   : "ÐÐ°Ð·Ð¸Ð²",
      valueText  : "ÐÑÐµÐ´Ð½Ð¾ÑÑ",
      dateFormat : "d.m.Y"
   });
}

if(Ext.layout.BorderLayout && Ext.layout.BorderLayout.SplitRegion){
   Ext.apply(Ext.layout.BorderLayout.SplitRegion.prototype, {
      splitTip            : "ÐÐ¾Ð²ÑÑÐ¸ Ð·Ð° Ð¸Ð·Ð¼ÐµÐ½Ñ Ð²ÐµÐ»Ð¸ÑÐ¸Ð½Ðµ.",
      collapsibleSplitTip : "ÐÐ¾Ð²ÑÑÐ¸ Ð·Ð° Ð¸Ð·Ð¼ÐµÐ½Ñ Ð²ÐµÐ»Ð¸ÑÐ¸Ð½Ðµ. ÐÐ²Ð¾ÑÑÑÑÐºÐ¸ ÐºÐ»Ð¸Ðº Ð·Ð° ÑÐ°ÐºÑÐ¸Ð²Ð°ÑÐµ."
   });
}
