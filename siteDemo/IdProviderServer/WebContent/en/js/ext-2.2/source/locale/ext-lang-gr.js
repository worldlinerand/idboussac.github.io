/**
 * Greek (Old Version) Translations by Vagelis
 * 03-June-2007
 */

Ext.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">ÃÃ¼Ã±Ã´Ã¹Ã³Ã§...</div>';

if(Ext.View){
   Ext.View.prototype.emptyText = "";
}

if(Ext.grid.GridPanel){
   Ext.grid.GridPanel.prototype.ddText = "{0} Ã¥Ã°Ã©Ã«Ã¥Ã£Ã¬ÃÃ­Ã§(Ã¥Ã²) Ã£Ã±Ã¡Ã¬Ã¬Ã(ÃÃ²)";
}

if(Ext.TabPanelItem){
   Ext.TabPanelItem.prototype.closeText = "ÃÃ«Ã¥ÃÃ³Ã´Ã¥ Ã¡ÃµÃ´Ã Ã´Ã§Ã­ ÃªÃ¡Ã±Ã´ÃÃ«Ã¡";
}

if(Ext.form.Field){
   Ext.form.Field.prototype.invalidText = "Ã Ã´Ã©Ã¬Ã Ã³Ã´Ã¯ Ã°Ã¥Ã¤ÃÃ¯ Ã¤Ã¥Ã­ Ã¥ÃÃ­Ã¡Ã© ÃÃ£ÃªÃµÃ±Ã§";
}

if(Ext.LoadMask){
    Ext.LoadMask.prototype.msg = "ÃÃ¼Ã±Ã´Ã¹Ã³Ã§...";
}

Date.monthNames = [
   "ÃÃ¡Ã­Ã¯ÃµÃÃ±Ã©Ã¯Ã²",
   "ÃÃ¥Ã¢Ã±Ã¯ÃµÃÃ±Ã©Ã¯Ã²",
   "ÃÃÃ±Ã´Ã©Ã¯Ã²",
   "ÃÃ°Ã±ÃÃ«Ã©Ã¯Ã²",
   "ÃÃÃ©Ã¯Ã²",
   "ÃÃ¯Ã½Ã­Ã©Ã¯Ã²",
   "ÃÃ¯Ã½Ã«Ã©Ã¯Ã²",
   "ÃÃ½Ã£Ã¯ÃµÃ³Ã´Ã¯Ã²",
   "ÃÃ¥Ã°Ã´ÃÃ¬Ã¢Ã±Ã©Ã¯Ã²",
   "ÃÃªÃ´Ã¾Ã¢Ã±Ã©Ã¯Ã²",
   "ÃÃ¯ÃÃ¬Ã¢Ã±Ã©Ã¯Ã²",
   "ÃÃ¥ÃªÃÃ¬Ã¢Ã±Ã©Ã¯Ã²"
];

Date.dayNames = [
   "ÃÃµÃ±Ã©Ã¡ÃªÃ",
   "ÃÃ¥ÃµÃ´ÃÃ±Ã¡",
   "ÃÃ±ÃÃ´Ã§",
   "ÃÃ¥Ã´ÃÃ±Ã´Ã§",
   "ÃÃÃ¬Ã°Ã´Ã§",
   "ÃÃ¡Ã±Ã¡Ã³ÃªÃ¥ÃµÃ",
   "ÃÃÃ¢Ã¢Ã¡Ã´Ã¯"
];

if(Ext.MessageBox){
   Ext.MessageBox.buttonText = {
      ok     : "ÃÃ­Ã´ÃÃ®Ã¥Ã©",
      cancel : "ÃÃªÃ½Ã±Ã¹Ã³Ã§",
      yes    : "ÃÃ¡Ã©",
      no     : "Â¼Ã·Ã©"
   };
}

if(Ext.util.Format){
   Ext.util.Format.date = function(v, format){
      if(!v) return "";
      if(!(v instanceof Date)) v = new Date(Date.parse(v));
      return v.dateFormat(format || "Ã¬/Ã§/Ã");
   };
}

if(Ext.DatePicker){
   Ext.apply(Ext.DatePicker.prototype, {
      todayText         : "ÃÃÃ¬Ã¥Ã±Ã¡",
      minText           : "Ã Ã§Ã¬Ã¥Ã±Ã¯Ã¬Ã§Ã­ÃÃ¡ Ã¡ÃµÃ´Ã Ã¥ÃÃ­Ã¡Ã© Ã°Ã±Ã©Ã­ Ã´Ã§Ã­ Ã¬Ã©ÃªÃ±Ã¼Ã´Ã¥Ã±Ã§ Ã§Ã¬Ã¥Ã±Ã¯Ã¬Ã§Ã­ÃÃ¡",
      maxText           : "Ã Ã§Ã¬Ã¥Ã±Ã¯Ã¬Ã§Ã­ÃÃ¡ Ã¡ÃµÃ´Ã Ã¥ÃÃ­Ã¡Ã© Ã¬Ã¥Ã´Ã Ã´Ã§Ã­ Ã¬Ã¥Ã£Ã¡Ã«Ã½Ã´Ã¥Ã±Ã§ Ã§Ã¬Ã¥Ã±Ã¯Ã¬Ã§Ã­ÃÃ¡",
      disabledDaysText  : "",
      disabledDatesText : "",
      monthNames	: Date.monthNames,
      dayNames		: Date.dayNames,
      nextText          : 'ÃÃ°Ã¼Ã¬Ã¥Ã­Ã¯Ã² ÃÃÃ­Ã¡Ã² (Control+Right)',
      prevText          : 'ÃÃ±Ã¯Ã§Ã£Ã¯Ã½Ã¬Ã¥Ã­Ã¯Ã² ÃÃÃ­Ã¡Ã² (Control+Left)',
      monthYearText     : 'ÃÃ°Ã©Ã«ÃÃ®Ã´Ã¥ ÃÃÃ­Ã¡ (Control+Up/Down Ã£Ã©Ã¡ Ã¬Ã¥Ã´Ã¡ÃªÃÃ­Ã§Ã³Ã§ Ã³Ã´Ã¡ ÃÃ´Ã§)',
      todayTip          : "{0} (Spacebar)",
      format            : "Ã¬/Ã§/Ã"
   });
}

if(Ext.PagingToolbar){
   Ext.apply(Ext.PagingToolbar.prototype, {
      beforePageText : "ÃÃ¥Ã«ÃÃ¤Ã¡",
      afterPageText  : "Ã¡Ã°Ã¼ {0}",
      firstText      : "ÃÃ±Ã¾Ã´Ã§ Ã³Ã¥Ã«ÃÃ¤Ã¡",
      prevText       : "ÃÃ±Ã¯Ã§Ã£Ã¯Ã½Ã¬Ã¥Ã­Ã§ Ã³Ã¥Ã«ÃÃ¤Ã¡",
      nextText       : "ÃÃ°Ã¼Ã¬Ã¥Ã­Ã§ Ã³Ã¥Ã«ÃÃ¤Ã¡",
      lastText       : "ÃÃ¥Ã«Ã¥ÃµÃ´Ã¡ÃÃ¡ Ã³Ã¥Ã«ÃÃ¤Ã¡",
      refreshText    : "ÃÃ­Ã¡Ã­ÃÃ¹Ã³Ã§",
      displayMsg     : "ÃÃ¬Ã¶ÃÃ­Ã©Ã³Ã§ {0} - {1} Ã¡Ã°Ã¼ {2}",
      emptyMsg       : 'ÃÃ¥Ã­ Ã¢Ã±ÃÃ¨Ã§ÃªÃ¡Ã­ Ã¥Ã£Ã£Ã±Ã¡Ã¶ÃÃ² Ã£Ã©Ã¡ Ã¥Ã¬Ã¶ÃÃ­Ã©Ã³Ã§'
   });
}

if(Ext.form.TextField){
   Ext.apply(Ext.form.TextField.prototype, {
      minLengthText : "ÃÃ¯ Ã¥Ã«ÃÃ·Ã©Ã³Ã´Ã¯ Ã¬ÃÃ£Ã¥Ã¨Ã¯Ã² Ã£Ã©Ã¡ Ã¡ÃµÃ´Ã¼ Ã´Ã¯ Ã°Ã¥Ã¤ÃÃ¯ Ã¥ÃÃ­Ã¡Ã© {0}",
      maxLengthText : "ÃÃ¯ Ã¬ÃÃ£Ã©Ã³Ã´Ã¯ Ã¬ÃÃ£Ã¥Ã¨Ã¯Ã² Ã£Ã©Ã¡ Ã¡ÃµÃ´Ã¼ Ã´Ã¯ Ã°Ã¥Ã¤ÃÃ¯ Ã¥ÃÃ­Ã¡Ã© {0}",
      blankText     : "ÃÃ¯ Ã°Ã¥Ã¤ÃÃ¯ Ã¡ÃµÃ´Ã¼ Ã¥ÃÃ­Ã¡Ã© ÃµÃ°Ã¯Ã·Ã±Ã¥Ã¹Ã´Ã¯ÃªÃ¼",
      regexText     : "",
      emptyText     : null
   });
}

if(Ext.form.NumberField){
   Ext.apply(Ext.form.NumberField.prototype, {
      minText : "Ã Ã¥Ã«ÃÃ·Ã©Ã³Ã´Ã§ Ã´Ã©Ã¬Ã Ã£Ã©Ã¡ Ã¡ÃµÃ´Ã¼ Ã´Ã¯ Ã°Ã¥Ã¤ÃÃ¯ Ã¥ÃÃ­Ã¡Ã© {0}",
      maxText : "Ã Ã¬ÃÃ£Ã©Ã³Ã´Ã§ Ã´Ã©Ã¬Ã Ã£Ã©Ã¡ Ã¡ÃµÃ´Ã¼ Ã´Ã¯ Ã°Ã¥Ã¤ÃÃ¯ Ã¥ÃÃ­Ã¡Ã© {0}",
      nanText : "{0} Ã¤Ã¥Ã­ Ã¥ÃÃ­Ã¡Ã© ÃÃ£ÃªÃµÃ±Ã¯Ã² Ã¡Ã±Ã©Ã¨Ã¬Ã¼Ã²"
   });
}

if(Ext.form.DateField){
   Ext.apply(Ext.form.DateField.prototype, {
      disabledDaysText  : "ÃÃ°Ã¥Ã­Ã¥Ã±Ã£Ã¯Ã°Ã¯Ã©Ã§Ã¬ÃÃ­Ã¯",
      disabledDatesText : "ÃÃ°Ã¥Ã­Ã¥Ã±Ã£Ã¯Ã°Ã¯Ã©Ã§Ã¬ÃÃ­Ã¯",
      minText           : "Ã Ã§Ã¬Ã¥Ã±Ã¯Ã¬Ã§Ã­ÃÃ¡ Ã³' Ã¡ÃµÃ´Ã¼ Ã´Ã¯ Ã°Ã¥Ã¤ÃÃ¯ Ã°Ã±ÃÃ°Ã¥Ã© Ã­Ã¡ Ã¥ÃÃ­Ã¡Ã© Ã¬Ã¥Ã´Ã Ã¡Ã°Ã¼ {0}",
      maxText           : "Ã Ã§Ã¬Ã¥Ã±Ã¯Ã¬Ã§Ã­ÃÃ¡ Ã³' Ã¡ÃµÃ´Ã¼ Ã´Ã¯ Ã°Ã¥Ã¤ÃÃ¯ Ã°Ã±ÃÃ°Ã¥Ã© Ã­Ã¡ Ã¥ÃÃ­Ã¡Ã© Ã°Ã±Ã©Ã­ Ã¡Ã°Ã¼ {0}",
      invalidText       : "{0} Ã¤Ã¥Ã­ Ã¥ÃÃ­Ã¡Ã© ÃÃ£ÃªÃµÃ±Ã§ Ã§Ã¬Ã¥Ã±Ã¯Ã¬Ã§Ã­ÃÃ¡ - Ã°Ã±ÃÃ°Ã¥Ã© Ã­Ã¡ Ã¥ÃÃ­Ã¡Ã© Ã´Ã§Ã² Ã¬Ã¯Ã±Ã¶ÃÃ² {1}",
      format            : "Ã¬/Ã§/Ã"
   });
}

if(Ext.form.ComboBox){
   Ext.apply(Ext.form.ComboBox.prototype, {
      loadingText       : "ÃÃ¼Ã±Ã´Ã¹Ã³Ã§...",
      valueNotFoundText : undefined
   });
}

if(Ext.form.VTypes){
   Ext.apply(Ext.form.VTypes, {
      emailText    : 'ÃÃµÃ´Ã¼ Ã´Ã¯ Ã°Ã¥Ã¤ÃÃ¯ Ã°Ã±ÃÃ°Ã¥Ã© Ã­Ã¡ Ã¥ÃÃ­Ã¡Ã© e-mail address Ã´Ã§Ã² Ã¬Ã¯Ã±Ã¶ÃÃ² "user@domain.com"',
      urlText      : 'ÃÃµÃ´Ã¼ Ã´Ã¯ Ã°Ã¥Ã¤ÃÃ¯ Ã°Ã±ÃÃ°Ã¥Ã© Ã­Ã¡ Ã¥ÃÃ­Ã¡Ã© Ã¬Ã©Ã¡ Ã¤Ã©Ã¥Ã½Ã¨ÃµÃ­Ã³Ã§ URL Ã´Ã§Ã² Ã¬Ã¯Ã±Ã¶ÃÃ² "http:/'+'/www.domain.com"',
      alphaText    : 'ÃÃµÃ´Ã¼ Ã´Ã¯ Ã°Ã¥Ã¤ÃÃ¯ Ã°Ã±ÃÃ°Ã¥Ã© Ã­Ã¡ Ã°Ã¥Ã±Ã©ÃÃ·Ã¥Ã© Ã£Ã±ÃÃ¬Ã¬Ã¡Ã´Ã¡ ÃªÃ¡Ã© _',
      alphanumText : 'ÃÃµÃ´Ã¼ Ã´Ã¯ Ã°Ã¥Ã¤ÃÃ¯ Ã°Ã±ÃÃ°Ã¥Ã© Ã­Ã¡ Ã°Ã¥Ã±Ã©ÃÃ·Ã¥Ã© Ã£Ã±ÃÃ¬Ã¬Ã¡Ã´Ã¡, Ã¡Ã±Ã©Ã¨Ã¬Ã¯Ã½Ã² ÃªÃ¡Ã© _'
   });
}

if(Ext.grid.GridView){
   Ext.apply(Ext.grid.GridView.prototype, {
      sortAscText  : "ÃÃ½Ã®Ã¯ÃµÃ³Ã¡ ÃÃ¡Ã®Ã©Ã­Ã¼Ã¬Ã§Ã³Ã§",
      sortDescText : "ÃÃ¨ÃÃ­Ã¯ÃµÃ³Ã¡ ÃÃ¡Ã®Ã©Ã­Ã¼Ã¬Ã§Ã³Ã§",
      lockText     : "ÃÃ«Ã¥ÃÃ¤Ã¹Ã¬Ã¡ Ã³Ã´ÃÃ«Ã§Ã²",
      unlockText   : "ÃÃ¥ÃªÃ«Ã¥ÃÃ¤Ã¹Ã¬Ã¡ Ã³Ã´ÃÃ«Ã§Ã²",
      columnsText  : "ÃÃ´ÃÃ«Ã¥Ã²"
   });
}

if(Ext.grid.PropertyColumnModel){
   Ext.apply(Ext.grid.PropertyColumnModel.prototype, {
      nameText   : "Â¼Ã­Ã¯Ã¬Ã¡",
      valueText  : "ÃÃ©Ã¬Ã",
      dateFormat : "Ã¬/Ã§/Ã"
   });
}

if(Ext.layout.BorderLayout && Ext.layout.BorderLayout.SplitRegion){
   Ext.apply(Ext.layout.BorderLayout.SplitRegion.prototype, {
      splitTip            : "ÃÃ½Ã±Ã¥Ã´Ã¥ Ã£Ã©Ã¡ Ã¡Ã«Ã«Ã¡Ã£Ã Ã¬Ã¥Ã£ÃÃ¨Ã¯ÃµÃ².",
      collapsibleSplitTip : "ÃÃ½Ã±Ã¥Ã´Ã¥ Ã£Ã©Ã¡ Ã¡Ã«Ã«Ã¡Ã£Ã Ã¬Ã¥Ã£ÃÃ¨Ã¯ÃµÃ². Double click Ã£Ã©Ã¡ Ã¡Ã°Ã¼ÃªÃ±ÃµÃ¸Ã§."
   });
}
