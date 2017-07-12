/*
 * Simplified Chinese translation
 * By DavidHu
 * 09 April 2007
 */

Ext.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">å è½½ä¸­...</div>';

if(Ext.View){
   Ext.View.prototype.emptyText = "";
}

if(Ext.grid.GridPanel){
   Ext.grid.GridPanel.prototype.ddText = "{0} éæ©è¡";
}

if(Ext.TabPanelItem){
   Ext.TabPanelItem.prototype.closeText = "å³é­";
}

if(Ext.form.Field){
   Ext.form.Field.prototype.invalidText = "è¾å¥å¼éæ³";
}

Date.monthNames = [
   "ä¸æ",
   "äºæ",
   "ä¸æ",
   "åæ",
   "äºæ",
   "å­æ",
   "ä¸æ",
   "å«æ",
   "ä¹æ",
   "åæ",
   "åä¸æ",
   "åäºæ"
];

Date.dayNames = [
   "æ¥",
   "ä¸",
   "äº",
   "ä¸",
   "å",
   "äº",
   "å­"
];

if(Ext.MessageBox){
   Ext.MessageBox.buttonText = {
      ok     : "ç¡®å®",
      cancel : "åæ¶",
      yes    : "æ¯",
      no     : "å¦"
   };
}

if(Ext.util.Format){
   Ext.util.Format.date = function(v, format){
      if(!v) return "";
      if(!(v instanceof Date)) v = new Date(Date.parse(v));
      return v.dateFormat(format || "yå¹´mædæ¥");
   };
}

if(Ext.DatePicker){
   Ext.apply(Ext.DatePicker.prototype, {
      todayText         : "ä»å¤©",
      minText           : "æ¥æå¨æå°æ¥æä¹å",
      maxText           : "æ¥æå¨æå¤§æ¥æä¹å",
      disabledDaysText  : "",
      disabledDatesText : "",
      monthNames        : Date.monthNames,
      dayNames          : Date.dayNames,
      nextText          : 'ä¸æ (Control+Right)',
      prevText          : 'ä¸æ (Control+Left)',
      monthYearText     : 'éæ©ä¸ä¸ªæ (Control+Up/Down æ¥æ¹åå¹´)',
      todayTip          : "{0} (ç©ºæ ¼é®éæ©)",
      format            : "yå¹´mædæ¥",
      okText            : "ç¡®å®",
      cancelText        : "åæ¶"
   });
}

if(Ext.PagingToolbar){
   Ext.apply(Ext.PagingToolbar.prototype, {
      beforePageText : "é¡µ",
      afterPageText  : "é¡µå± {0} é¡µ",
      firstText      : "ç¬¬ä¸é¡µ",
      prevText       : "åä¸é¡µ",
      nextText       : "ä¸ä¸é¡µ",
      lastText       : "æåé¡µ",
      refreshText    : "å·æ°",
      displayMsg     : "æ¾ç¤º {0} - {1}ï¼å± {2} æ¡",
      emptyMsg       : 'æ²¡ææ°æ®éè¦æ¾ç¤º'
   });
}

if(Ext.form.TextField){
   Ext.apply(Ext.form.TextField.prototype, {
      minLengthText : "è¯¥è¾å¥é¡¹çæå°é¿åº¦æ¯ {0}",
      maxLengthText : "è¯¥è¾å¥é¡¹çæå¤§é¿åº¦æ¯ {0}",
      blankText     : "è¯¥è¾å¥é¡¹ä¸ºå¿è¾é¡¹",
      regexText     : "",
      emptyText     : null
   });
}

if(Ext.form.NumberField){
   Ext.apply(Ext.form.NumberField.prototype, {
      minText : "è¯¥è¾å¥é¡¹çæå°å¼æ¯ {0}",
      maxText : "è¯¥è¾å¥é¡¹çæå¤§å¼æ¯ {0}",
      nanText : "{0} ä¸æ¯æææ°å¼"
   });
}

if(Ext.form.DateField){
   Ext.apply(Ext.form.DateField.prototype, {
      disabledDaysText  : "ç¦ç¨",
      disabledDatesText : "ç¦ç¨",
      minText           : "è¯¥è¾å¥é¡¹çæ¥æå¿é¡»å¨ {0} ä¹å",
      maxText           : "è¯¥è¾å¥é¡¹çæ¥æå¿é¡»å¨ {0} ä¹å",
      invalidText       : "{0} æ¯æ æçæ¥æ - å¿é¡»ç¬¦åæ ¼å¼ï¼ {1}",
      format            : "yå¹´mædæ¥"
   });
}

if(Ext.form.ComboBox){
   Ext.apply(Ext.form.ComboBox.prototype, {
      loadingText       : "å è½½...",
      valueNotFoundText : undefined
   });
}

if(Ext.form.VTypes){
   Ext.apply(Ext.form.VTypes, {
      emailText    : 'è¯¥è¾å¥é¡¹å¿é¡»æ¯çµå­é®ä»¶å°åï¼æ ¼å¼å¦ï¼ "user@domain.com"',
      urlText      : 'è¯¥è¾å¥é¡¹å¿é¡»æ¯URLå°åï¼æ ¼å¼å¦ï¼ "http:/'+'/www.domain.com"',
      alphaText    : 'è¯¥è¾å¥é¡¹åªè½åå«å­ç¬¦å_',
      alphanumText : 'è¯¥è¾å¥é¡¹åªè½åå«å­ç¬¦,æ°å­å_'
   });
}

if(Ext.grid.GridView){
   Ext.apply(Ext.grid.GridView.prototype, {
      sortAscText  : "æ­£åº",
      sortDescText : "éåº",
      lockText     : "éå",
      unlockText   : "è§£éå",
      columnsText  : "å"
   });
}

if(Ext.grid.PropertyColumnModel){
   Ext.apply(Ext.grid.PropertyColumnModel.prototype, {
      nameText   : "åç§°",
      valueText  : "å¼",
      dateFormat : "yå¹´mædæ¥"
   });
}

if(Ext.layout.BorderLayout && Ext.layout.BorderLayout.SplitRegion){
   Ext.apply(Ext.layout.BorderLayout.SplitRegion.prototype, {
      splitTip            : "æå¨æ¥æ¹åå°ºå¯¸.",
      collapsibleSplitTip : "æå¨æ¥æ¹åå°ºå¯¸. åå»éè."
   });
}
