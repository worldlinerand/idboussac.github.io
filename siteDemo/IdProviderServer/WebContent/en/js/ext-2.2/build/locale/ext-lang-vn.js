ï»¿/**
 * List compiled by mystix on the extjs.com forums.
 * Thank you Mystix!
 */

/**
 * Vietnamese translation
 * By bpmtri
 * 12-April-2007 04:06PM
 */

Ext.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">Äang táº£i...</div>';

if(Ext.View){
   Ext.View.prototype.emptyText = "";
}

if(Ext.grid.GridPanel){
   Ext.grid.GridPanel.prototype.ddText = "{0} dÃ²ng ÄÆ°á»£c chá»n";
}

if(Ext.TabPanelItem){
   Ext.TabPanelItem.prototype.closeText = "ÄÃ³ng tháº» nÃ y";
}

if(Ext.form.Field){
   Ext.form.Field.prototype.invalidText = "GiÃ¡ trá» cá»§a Ã´ nÃ y khÃ´ng há»£p lá».";
}

if(Ext.LoadMask){
    Ext.LoadMask.prototype.msg = "Äang táº£i...";
}

Date.monthNames = [
   "ThÃ¡ng 1",
   "ThÃ¡ng 2",
   "ThÃ¡ng 3",
   "ThÃ¡ng 4",
   "ThÃ¡ng 5",
   "ThÃ¡ng 6",
   "ThÃ¡ng 7",
   "ThÃ¡ng 8",
   "ThÃ¡ng 9",
   "ThÃ¡ng 10",
   "ThÃ¡ng 11",
   "ThÃ¡ng 12"
];

Date.dayNames = [
   "Chá»§ nháº­t",
   "Thá»© hai",
   "Thá»© ba",
   "Thá»© tÆ°",
   "Thá»© nÄm",
   "Thá»© sÃ¡u",
   "Thá»© báº£y"
];

if(Ext.MessageBox){
   Ext.MessageBox.buttonText = {
      ok     : "Äá»ng Ã½",
      cancel : "Há»§y bá»",
      yes    : "CÃ³",
      no     : "KhÃ´ng"
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
      todayText         : "HÃ´m nay",
      minText           : "NgÃ y nÃ y nhá» hÆ¡n ngÃ y nhá» nháº¥t",
      maxText           : "NgÃ y nÃ y lá»n hÆ¡n ngÃ y lá»n nháº¥t",
      disabledDaysText  : "",
      disabledDatesText : "",
      monthNames	: Date.monthNames,
      dayNames		: Date.dayNames,
      nextText          : 'ThÃ¡ng sau (Control+Right)',
      prevText          : 'ThÃ¡ng trÆ°á»c (Control+Left)',
      monthYearText     : 'Chá»n má»t thÃ¡ng (Control+Up/Down Äá» thay Äá»i nÄm)',
      todayTip          : "{0} (Spacebar - PhÃ­m tráº¯ng)",
      format            : "d/m/y"
   });
}

if(Ext.PagingToolbar){
   Ext.apply(Ext.PagingToolbar.prototype, {
      beforePageText : "Trang",
      afterPageText  : "of {0}",
      firstText      : "Trang Äáº§u",
      prevText       : "Trang trÆ°á»c",
      nextText       : "Trang sau",
      lastText       : "Trang cuá»i",
      refreshText    : "Táº£i láº¡i",
      displayMsg     : "Hiá»n thá» {0} - {1} cá»§a {2}",
      emptyMsg       : 'KhÃ´ng cÃ³ dá»¯ liá»u Äá» hiá»n thá»'
   });
}

if(Ext.form.TextField){
   Ext.apply(Ext.form.TextField.prototype, {
      minLengthText : "Chiá»u dÃ i tá»i thiá»u cá»§a Ã´ nÃ y lÃ  {0}",
      maxLengthText : "Chiá»u dÃ i tá»i Äa cá»§a Ã´ nÃ y lÃ  {0}",
      blankText     : "Ã nÃ y cáº§n pháº£i nháº­p giÃ¡ trá»",
      regexText     : "",
      emptyText     : null
   });
}

if(Ext.form.NumberField){
   Ext.apply(Ext.form.NumberField.prototype, {
      minText : "GiÃ¡ trá» nhá» nháº¥t cá»§a Ã´ nÃ y lÃ  {0}",
      maxText : "GiÃ¡ trá» lá»n nháº¥t cá»§a Ã´ nÃ y lÃ   {0}",
      nanText : "{0} hÃ´ng pháº£i lÃ  má»t sá» há»£p lá»"
   });
}

if(Ext.form.DateField){
   Ext.apply(Ext.form.DateField.prototype, {
      disabledDaysText  : "VÃ´ hiá»u",
      disabledDatesText : "VÃ´ hiá»u",
      minText           : "NgÃ y nháº­p trong Ã´ nÃ y pháº£i sau ngÃ y {0}",
      maxText           : "NgÃ y nháº­p trong Ã´ nÃ y pháº£i trÆ°á»c ngÃ y {0}",
      invalidText       : "{0} khÃ´ng pháº£i lÃ  má»t ngÃ y há»£p lá» - pháº£i cÃ³ dáº¡ng {1}",
      format            : "d/m/y"
   });
}

if(Ext.form.ComboBox){
   Ext.apply(Ext.form.ComboBox.prototype, {
      loadingText       : "Äang táº£i...",
      valueNotFoundText : undefined
   });
}

if(Ext.form.VTypes){
   Ext.apply(Ext.form.VTypes, {
      emailText    : 'GiÃ¡ trá» cá»§a Ã´ nÃ y pháº£i lÃ  má»t Äá»a chá» email cÃ³ dáº¡ng nhÆ° "ten@abc.com"',
      urlText      : 'GiÃ¡ trá» cá»§a Ã´ nÃ y pháº£i lÃ  má»t Äá»a chá» web(URL) há»£p lá», cÃ³ dáº¡ng nhÆ° "http:/'+'/www.domain.com"',
      alphaText    : 'Ã nÃ y chá» ÄÆ°á»£c nháº­p cÃ¡c kÃ­ tá»± vÃ  gáº¡ch dÆ°á»i(_)',
      alphanumText : 'Ã nÃ y chá» ÄÆ°á»£c nháº­p cÃ¡c kÃ­ tá»±, sá» vÃ  gáº¡ch dÆ°á»i(_)'
   });
}

if(Ext.grid.GridView){
   Ext.apply(Ext.grid.GridView.prototype, {
      sortAscText  : "TÄng dáº§n",
      sortDescText : "Giáº£m dáº§n",
      lockText     : "KhÃ³a cá»t",
      unlockText   : "Bá» khÃ³a cá»t",
      columnsText  : "CÃ¡c cá»t"
   });
}

if(Ext.grid.PropertyColumnModel){
   Ext.apply(Ext.grid.PropertyColumnModel.prototype, {
      nameText   : "TÃªn",
      valueText  : "GiÃ¡ trá»",
      dateFormat : "j/m/Y"
   });
}

if(Ext.layout.BorderLayout && Ext.layout.BorderLayout.SplitRegion){
   Ext.apply(Ext.layout.BorderLayout.SplitRegion.prototype, {
      splitTip            : "KÃ©o giá»¯ chuá»t Äá» thay Äá»i kÃ­ch thÆ°á»c.",
      collapsibleSplitTip : "KÃ©o giá»¯ chuá»t Äá» thay Äá»i kÃ­ch thÆ°á»c. Nháº¥p ÄÃºp Äá» áº©n Äi."
   });
}
