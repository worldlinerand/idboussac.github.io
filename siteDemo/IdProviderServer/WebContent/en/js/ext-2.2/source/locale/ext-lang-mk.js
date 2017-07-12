/*
 * Macedonia translation
 * By PetarD petar.dimitrijevic@vorteksed.com.mk (utf8 encoding)
 * 23 April 2007
 */

Ext.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">ÐÑÐ¸ÑÑÐ²Ð°Ð¼...</div>';

if(Ext.View){
   Ext.View.prototype.emptyText = "";
}

if(Ext.grid.GridPanel){
   Ext.grid.GridPanel.prototype.ddText = "{0} Ð¸Ð·Ð±ÑÐ°Ð½Ð¸ ÑÐµÐ´Ð¸ÑÐ¸";
}

if(Ext.TabPanelItem){
   Ext.TabPanelItem.prototype.closeText = "ÐÐ°ÑÐ²Ð¾ÑÐ¸ tab";
}

if(Ext.form.Field){
   Ext.form.Field.prototype.invalidText = "ÐÑÐµÐ´Ð½Ð¾ÑÑÐ° Ð²Ð¾ Ð¾Ð²Ð° Ð¿Ð¾Ð»Ðµ Ðµ Ð½ÐµÐ²Ð°Ð»Ð¸Ð´Ð½Ð°";
}

if(Ext.LoadMask){
    Ext.LoadMask.prototype.msg = "ÐÑÐ¸ÑÑÐ²Ð°Ð¼...";
}

Date.monthNames = [
   "ÐÐ°Ð½ÑÐ°ÑÐ¸",
   "Ð¤ÐµÐ²ÑÑÐ°ÑÐ¸",
   "ÐÐ°ÑÑ",
   "ÐÐ¿ÑÐ¸Ð»",
   "ÐÐ°Ñ",
   "ÐÑÐ½Ð¸",
   "ÐÑÐ»Ð¸",
   "ÐÐ²Ð³ÑÑÑ",
   "Ð¡ÐµÐ¿ÑÐµÐ¼Ð²ÑÐ¸",
   "ÐÐºÑÐ¾Ð¼Ð²ÑÐ¸",
   "ÐÐ¾ÐµÐ¼Ð²ÑÐ¸",
   "ÐÐµÐºÐµÐ¼Ð²ÑÐ¸"
];

Date.dayNames = [
   "ÐÐµÐ´ÐµÐ»Ð°",
   "ÐÐ¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº",
   "ÐÑÐ¾ÑÐ½Ð¸Ðº",
   "Ð¡ÑÐµÐ´Ð°",
   "Ð§ÐµÑÐ²ÑÑÐ¾Ðº",
   "ÐÐµÑÐ¾Ðº",
   "Ð¡Ð°Ð±Ð¾ÑÐ°"
];

if(Ext.MessageBox){
   Ext.MessageBox.buttonText = {
      ok     : "ÐÐ¾ÑÐ²ÑÐ´Ð¸",
      cancel : "ÐÐ¾Ð½Ð¸ÑÑÐ¸",
      yes    : "ÐÐ°",
      no     : "ÐÐµ"
   };
}

if(Ext.util.Format){
   Ext.util.Format.date = function(v, format){
      if(!v) return "";
      if(!(v instanceof Date)) v = new Date(Date.parse(v));
      return v.dateFormat(format || "d.m.y");
   };
}

if(Ext.DatePicker){
   Ext.apply(Ext.DatePicker.prototype, {
      todayText         : "ÐÐµÐ½ÐµÑÐºÐ°",
      minText           : "ÐÐ²Ð¾Ñ Ð´Ð°ÑÑÐ¼ Ðµ Ð¿ÑÐµÐ´ Ð½Ð°ÑÐ¼Ð°Ð»Ð¸Ð¾Ñ Ð´Ð°ÑÑÐ¼",
      maxText           : "ÐÐ²Ð¾Ñ Ð´Ð°ÑÑÐ¼ Ðµ Ð¿ÑÐµÐ´ Ð½Ð°ÑÐ³Ð¾Ð»ÐµÐ¼Ð¸Ð¾Ñ Ð´Ð°ÑÑÐ¼",
      disabledDaysText  : "",
      disabledDatesText : "",
      monthNames	: Date.monthNames,
      dayNames		: Date.dayNames,
      nextText          : 'Ð¡Ð»ÐµÐ´ÐµÐ½ Ð¼ÐµÑÐµÑ (Control+Ð¡ÑÑÐµÐ»ÐºÐ° Ð´ÐµÑÐ½Ð¾)',
      prevText          : 'ÐÑÐµÑÑÐ¾Ð´ÐµÐ½ Ð¼ÐµÑÐµÑ (Control+Ð¡ÑÑÐµÐ»ÐºÐ° Ð»ÐµÐ²Ð¾)',
      monthYearText     : 'ÐÐ·Ð±ÐµÑÐµÑÐµ Ð¼ÐµÑÐµÑ (Control+Ð¡ÑÑÐµÐ»ÐºÐ° Ð³Ð¾ÑÐµ/Ð¡ÑÑÐµÐ»ÐºÐ° Ð´ÐµÑÐ½Ð¾ Ð·Ð° Ð¼ÐµÐ½ÑÐ²Ð°ÑÐµ Ð³Ð¾Ð´Ð¸Ð½Ð°)',
      todayTip          : "{0} (Spacebar)",
      format            : "d.m.y"
   });
}

if(Ext.PagingToolbar){
   Ext.apply(Ext.PagingToolbar.prototype, {
      beforePageText : "Ð¡ÑÑÐ°Ð½Ð¸ÑÐ°",
      afterPageText  : "Ð¾Ð´ {0}",
      firstText      : "ÐÑÐ²Ð° Ð¡ÑÑÐ°Ð½Ð¸ÑÐ°",
      prevText       : "ÐÑÐµÑÑÐ¾Ð´Ð½Ð° Ð¡ÑÑÐ°Ð½Ð¸ÑÐ°",
      nextText       : "Ð¡Ð»ÐµÐ´Ð½Ð° Ð¡ÑÑÐ°Ð½Ð¸ÑÐ°",
      lastText       : "ÐÐ¾ÑÐ»ÐµÐ´Ð½Ð° Ð¡ÑÑÐ°Ð½Ð¸ÑÐ°",
      refreshText    : "ÐÑÐ²ÐµÐ¶Ð¸",
      displayMsg     : "ÐÑÐ¸ÐºÐ°Ð¶ÑÐ²Ð°Ð¼ {0} - {1} Ð¾Ð´ {2}",
      emptyMsg       : 'ÐÐµÐ¼Ð° Ð¿Ð¾Ð´Ð°ÑÐ¾ÑÐ¸ Ð·Ð° Ð¿ÑÐ¸ÐºÐ°Ð·'
   });
}

if(Ext.form.TextField){
   Ext.apply(Ext.form.TextField.prototype, {
      minLengthText : "ÐÐ¸Ð½Ð¸Ð¼Ð°Ð»Ð½Ð°ÑÐ° Ð´Ð¾Ð»Ð¶Ð¸Ð½Ð° Ð·Ð° Ð¾Ð²Ð° Ð¿Ð¾Ð»Ðµ Ðµ {0}",
      maxLengthText : "ÐÐ°ÐºÑÐ¸Ð¼Ð°Ð»Ð½Ð°ÑÐ° Ð´Ð¾Ð»Ð¶Ð¸Ð½Ð° Ð·Ð° Ð¾Ð²Ð° Ð¿Ð¾Ð»Ðµ Ðµ {0}",
      blankText     : "ÐÐ¾Ð´Ð°ÑÐ¾ÑÐ¸ÑÐµ Ð²Ð¾ Ð¾Ð²Ð° Ð¿Ð¾Ð»Ðµ ÑÐµ Ð¿Ð¾ÑÑÐµÐ±Ð½Ð¸",
      regexText     : "",
      emptyText     : null
   });
}

if(Ext.form.NumberField){
   Ext.apply(Ext.form.NumberField.prototype, {
      minText : "ÐÐ¸Ð½Ð¸Ð¼Ð°Ð»Ð½Ð°ÑÐ° Ð²ÑÐµÐ´Ð½Ð¾ÑÑ Ð·Ð° Ð¾Ð²Ð° Ð¿Ð¾Ð»Ðµ Ðµ {0}",
      maxText : "ÐÐ°ÐºÑÐ¸Ð¼Ð°Ð»Ð½Ð°ÑÐ° Ð²ÑÐµÐ´Ð½Ð¾ÑÑ Ð·Ð° Ð¾Ð²Ð° Ð¿Ð¾Ð»Ðµ Ðµ {0}",
      nanText : "{0} Ð½Ðµ Ðµ Ð²Ð°Ð»Ð¸Ð´ÐµÐ½ Ð±ÑÐ¾Ñ"
   });
}

if(Ext.form.DateField){
   Ext.apply(Ext.form.DateField.prototype, {
      disabledDaysText  : "ÐÐµÐ°ÐºÑÐ¸Ð²Ð½Ð¾",
      disabledDatesText : "ÐÐµÐ°ÐºÑÐ¸Ð²Ð½Ð¾",
      minText           : "ÐÐ°ÑÑÐ¼Ð¾Ñ Ð²Ð¾ Ð¾Ð²Ð° Ð¿Ð¾Ð»Ðµ Ð¼Ð¾ÑÐ° Ð´Ð° Ð±Ð¸Ð´Ðµ Ð¿ÑÐµÐ´ {0}",
      maxText           : "ÐÐ°ÑÑÐ¼Ð¾Ñ Ð²Ð¾ Ð¾Ð²Ð° Ð¿Ð¾Ð»Ðµ Ð¼Ð¾ÑÐ° Ð´Ð° Ð±Ð¸Ð´Ðµ Ð¿Ð¾ {0}",
      invalidText       : "{0} Ð½Ðµ Ðµ Ð²Ð°Ð»Ð¸Ð´ÐµÐ½ Ð´Ð°ÑÑÐ¼ - Ð¼Ð¾ÑÐ° Ð´Ð° Ð±Ð¸Ð´Ðµ Ð²Ð¾ ÑÐ¾ÑÐ¼Ð°Ñ {1}",
      format            : "d.m.y"
   });
}

if(Ext.form.ComboBox){
   Ext.apply(Ext.form.ComboBox.prototype, {
      loadingText       : "ÐÑÐ¸ÑÑÐ²Ð°Ð¼...",
      valueNotFoundText : undefined
   });
}

if(Ext.form.VTypes){
   Ext.apply(Ext.form.VTypes, {
      emailText    : 'ÐÐ²Ð° Ð¿Ð¾Ð»Ðµ ÑÑÐµÐ±Ð° Ð´Ð° Ð±Ð¸Ð´Ðµ e-mail Ð°Ð´ÑÐµÑÐ° Ð²Ð¾ ÑÐ¾ÑÐ¼Ð°Ñ "user@domain.com"',
      urlText      : 'ÐÐ²Ð° Ð¿Ð¾Ð»Ðµ ÑÑÐµÐ±Ð° Ð´Ð° Ð±Ð¸Ð´Ðµ URL Ð²Ð¾ ÑÐ¾ÑÐ¼Ð°Ñ "http:/'+'/www.domain.com"',
      alphaText    : 'ÐÐ²Ð° Ð¿Ð¾Ð»Ðµ ÑÑÐµÐ±Ð° Ð´Ð° ÑÐ¾Ð´ÑÐ¶Ð¸ ÑÐ°Ð¼Ð¾ Ð±ÑÐºÐ²Ð¸ Ð¸ _',
      alphanumText : 'ÐÐ²Ð° Ð¿Ð¾Ð»Ðµ ÑÑÐµÐ±Ð° Ð´Ð° ÑÐ¾Ð´ÑÐ¶Ð¸ ÑÐ°Ð¼Ð¾ Ð±ÑÐºÐ²Ð¸, Ð±ÑÐ¾ÑÐºÐ¸ Ð¸ _'
   });
}

if(Ext.grid.GridView){
   Ext.apply(Ext.grid.GridView.prototype, {
      sortAscText  : "Ð¡Ð¾ÑÑÐ¸ÑÐ°Ñ Ð Ð°ÑÑÐµÑÐºÐ¸",
      sortDescText : "Ð¡Ð¾ÑÑÐ¸ÑÐ°Ñ ÐÐ¿Ð°ÑÐ°ÑÐºÐ¸",
      lockText     : "ÐÐ°ÐºÐ»ÑÑÐ¸ ÐÐ¾Ð»Ð¾Ð½Ð°",
      unlockText   : "ÐÑÐºÐ»ÑÑÐ¸ ÐºÐ¾Ð»Ð¾Ð½Ð°",
      columnsText  : "ÐÐ¾Ð»Ð¾Ð½Ð¸"
   });
}

if(Ext.grid.PropertyColumnModel){
   Ext.apply(Ext.grid.PropertyColumnModel.prototype, {
      nameText   : "ÐÐ¼Ðµ",
      valueText  : "ÐÑÐµÐ´Ð½Ð¾ÑÑ",
      dateFormat : "m.d.Y"
   });
}

if(Ext.layout.BorderLayout && Ext.layout.BorderLayout.SplitRegion){
   Ext.apply(Ext.layout.BorderLayout.SplitRegion.prototype, {
      splitTip            : "ÐÐ¾Ð²Ð»ÐµÑÐµÑÐµ Ð·Ð° Ð¼ÐµÐ½ÑÐ²Ð°ÑÐµ Ð½Ð° Ð³Ð¾Ð»ÐµÐ¼Ð¸Ð½Ð°ÑÐ°.",
      collapsibleSplitTip : "ÐÐ¾Ð²Ð»ÐµÑÐµÑÐµ Ð·Ð° Ð¼ÐµÐ½ÑÐ²Ð°ÑÐµ Ð½Ð° Ð³Ð¾Ð»ÐµÐ¼Ð¸Ð½Ð°ÑÐ°. ÐÑÐ¿Ð»Ð¸ ÐºÐ»Ð¸Ðº Ð·Ð° ÐºÑÐ¸ÐµÑÐµ."
   });
}