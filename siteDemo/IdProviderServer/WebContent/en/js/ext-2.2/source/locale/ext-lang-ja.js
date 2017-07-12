/*
 * Japanese translation
 * By tyama
 * 04-08-2007, 05:49 AM
 */

Ext.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">èª­ã¿è¾¼ã¿ä¸­...</div>';

if(Ext.View){
  Ext.View.prototype.emptyText = "";
}

if(Ext.grid.GridPanel){
  Ext.grid.GridPanel.prototype.ddText = "{0} è¡é¸æ";
}

if(Ext.TabPanelItem){
  Ext.TabPanelItem.prototype.closeText = "ãã®ã¿ããéãã";
}

if(Ext.form.Field){
  Ext.form.Field.prototype.invalidText = "ãã£ã¼ã«ãã®å¤ãä¸æ­£ã§ãã";
}

if(Ext.LoadMask){
    Ext.LoadMask.prototype.msg = "èª­ã¿è¾¼ã¿ä¸­...";
}

Date.monthNames = ['1æ', '2æ', '3æ', '4æ', '5æ', '6æ', '7æ', '8æ', '9æ', '10æ','11æ','12æ'];

Date.dayNames = [
 "æ¥",
 "æ",
 "ç«",
 "æ°´",
 "æ¨",
 "é",
 "å"];

if(Ext.MessageBox){
  Ext.MessageBox.buttonText = {
    ok : "OK",
    cancel : "ã­ã£ã³ã»ã«",
    yes : "ã¯ã",
    no : "ããã"
  };
}

if(Ext.util.Format){
  Ext.util.Format.date = function(v, format){
     if(!v) return "";
     if(!(v instanceof Date)) v = new Date(Date.parse(v));
     return v.dateFormat(format || "Y/m/d");
  };
}

if(Ext.DatePicker){
  Ext.apply(Ext.DatePicker.prototype, {
     todayText         : "ä»æ¥",
     minText           : "é¸æããæ¥ä»ã¯æå°å¤ä»¥ä¸ã§ãã",
     maxText           : "é¸æããæ¥ä»ã¯æå¤§å¤ä»¥ä¸ã§ãã",
     disabledDaysText  : "",
     disabledDatesText : "",
     monthNames	       : Date.monthNames,
     dayNames	       : Date.dayNames,
     nextText          : 'æ¬¡æã¸ (ã³ã³ãã­ã¼ã«+å³)',
     prevText          : 'åæã¸ (ã³ã³ãã­ã¼ã«+å·¦)',
     monthYearText     : 'æé¸æ (ã³ã³ãã­ã¼ã«+ä¸/ä¸ã§å¹´ç§»å)',
     todayTip          : "{0} (ã¹ãã¼ã¹ã­ã¼)",
     format            : "Y/m/d"
  });
}

if(Ext.PagingToolbar){
  Ext.apply(Ext.PagingToolbar.prototype, {
     beforePageText : "ãã¼ã¸",
     afterPageText  : "/ {0}",
     firstText      : "æåã®ãã¼ã¸",
     prevText       : "åã®ãã¼ã¸",
     nextText       : "æ¬¡ã®ãã¼ã¸",
     lastText       : "æå¾ã®ãã¼ã¸",
     refreshText    : "æ´æ°",
     displayMsg     : "{2} ä»¶ä¸­ {0} - {1} ãè¡¨ç¤º",
     emptyMsg       : 'è¡¨ç¤ºãããã¼ã¿ãããã¾ããã'
  });
}

if(Ext.form.TextField){
  Ext.apply(Ext.form.TextField.prototype, {
     minLengthText : "ãã®ãã£ã¼ã«ãã®æå°å¤ã¯ {0} ã§ãã",
     maxLengthText : "ãã®ãã£ã¼ã«ãã®æå¤§å¤ã¯ {0} ã§ãã",
     blankText     : "å¿é é ç®ã§ãã",
     regexText     : "",
     emptyText     : null
  });
}

if(Ext.form.NumberField){
  Ext.apply(Ext.form.NumberField.prototype, {
     minText : "ãã®ãã£ã¼ã«ãã®æå°å¤ã¯ {0} ã§ãã",
     maxText : "ãã®ãã£ã¼ã«ãã®æå¤§å¤ã¯ {0} ã§ãã",
     nanText : "{0} ã¯æ°å¤ã§ã¯ããã¾ããã"
  });
}

if(Ext.form.DateField){
  Ext.apply(Ext.form.DateField.prototype, {
     disabledDaysText  : "ç¡å¹",
     disabledDatesText : "ç¡å¹",
     minText           : "ãã®ãã£ã¼ã«ãã®æ¥ä»ã¯ã {0} ä»¥éã®æ¥ä»ã«è¨­å®ãã¦ãã ããã",
     maxText           : "ãã®ãã£ã¼ã«ãã®æ¥ä»ã¯ã {0} ä»¥åã®æ¥ä»ã«è¨­å®ãã¦ãã ããã",
     invalidText       : "{0} ã¯ééã£ãæ¥ä»å¥åã§ãã - å¥åå½¢å¼ã¯ã{1}ãã§ãã",
     format            : "Y/m/d"
  });
}

if(Ext.form.ComboBox){
  Ext.apply(Ext.form.ComboBox.prototype, {
     loadingText       : "èª­ã¿è¾¼ã¿ä¸­...",
     valueNotFoundText : undefined
  });
}

if(Ext.form.VTypes){
  Ext.apply(Ext.form.VTypes, {
     emailText    : 'ã¡ã¼ã«ã¢ãã¬ã¹ã"user@domain.com"ã®å½¢å¼ã§å¥åãã¦ãã ããã',
     urlText      : 'URLã"http:/'+'/www.domain.com"ã®å½¢å¼ã§å¥åãã¦ãã ããã',
     alphaText    : 'åè§è±å­ã¨"_"ã®ã¿ã§ãã',
     alphanumText : 'åè§è±æ°ã¨"_"ã®ã¿ã§ãã'
  });
}

if(Ext.grid.GridView){
  Ext.apply(Ext.grid.GridView.prototype, {
     sortAscText  : "æé ",
     sortDescText : "éé ",
     lockText     : "ã«ã©ã ã­ãã¯",
     unlockText   : "ã«ã©ã ã­ãã¯è§£é¤",
     columnsText  : "Columns"
  });
}

if(Ext.grid.PropertyColumnModel){
  Ext.apply(Ext.grid.PropertyColumnModel.prototype, {
     nameText   : "åç§°",
     valueText  : "å¤",
     dateFormat : "Y/m/d"
  });
}

if(Ext.layout.BorderLayout && Ext.layout.BorderLayout.SplitRegion){
  Ext.apply(Ext.layout.BorderLayout.SplitRegion.prototype, {
     splitTip            : "ãã©ãã°ããã¨ãªãµã¤ãºã§ãã¾ãã",
     collapsibleSplitTip : "ãã©ãã°ã§ãªãµã¤ãºã ããã«ã¯ãªãã¯ã§é ãã"
  });
}
