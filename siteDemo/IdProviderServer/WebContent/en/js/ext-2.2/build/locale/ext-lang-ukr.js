ï»¿/*
 * Ukrainian translation
 * By zlatko (utf-8 encoding)
 * 3 October 2007
 */

Ext.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">Ð¢ÑÐ¸Ð²Ð°Ñ Ð·Ð°Ð²Ð°Ð½ÑÐ°Ð¶ÐµÐ½Ð½Ñ...</div>';

if(Ext.View){
   Ext.View.prototype.emptyText = "";
}

if(Ext.grid.GridPanel){
   Ext.grid.GridPanel.prototype.ddText = "{0} Ð²Ð¸Ð±ÑÐ°Ð½Ð¸Ñ ÑÑÑÑÑÐ¾Ðº";
}

if(Ext.TabPanelItem){
   Ext.TabPanelItem.prototype.closeText = "ÐÐ°ÐºÑÐ¸ÑÐ¸ ÑÑ Ð²ÐºÐ»Ð°Ð´ÐºÑ";
}

if(Ext.form.Field){
   Ext.form.Field.prototype.invalidText = "ÐÐ½Ð°ÑÐµÐ½Ð½Ñ Ñ ÑÑÐ¾Ð¼Ñ Ð¿Ð¾Ð»Ñ Ð½ÐµÐ²ÑÑÐ½Ðµ";
}

if(Ext.LoadMask){
   Ext.LoadMask.prototype.msg = "ÐÐ°Ð²Ð°Ð½ÑÐ°Ð¶ÐµÐ½Ð½Ñ...";
}

Date.monthNames = [
   "Ð¡ÑÑÐµÐ½Ñ",
   "ÐÑÑÐ¸Ð¹",
   "ÐÐµÑÐµÐ·ÐµÐ½Ñ",
   "ÐÐ²ÑÑÐµÐ½Ñ",
   "Ð¢ÑÐ°Ð²ÐµÐ½Ñ",
   "Ð§ÐµÑÐ²ÐµÐ½Ñ",
   "ÐÐ¸Ð¿ÐµÐ½Ñ",
   "Ð¡ÐµÑÐ¿ÐµÐ½Ñ",
   "ÐÐµÑÐµÑÐµÐ½Ñ",
   "ÐÐ¾Ð²ÑÐµÐ½Ñ",
   "ÐÐ¸ÑÑÐ¾Ð¿Ð°Ð´",
   "ÐÑÑÐ´ÐµÐ½Ñ"
];

Date.dayNames = [
   "ÐÐµÐ´ÑÐ»Ñ",
   "ÐÐ¾Ð½ÐµÐ´ÑÐ»Ð¾Ðº",
   "ÐÑÐ²ÑÐ¾ÑÐ¾Ðº",
   "Ð¡ÐµÑÐµÐ´Ð°",
   "Ð§ÐµÑÐ²ÐµÑ",
   "ÐÑÑÐ½Ð¸ÑÑ",
   "Ð¡ÑÐ±Ð¾ÑÐ°"
];

if(Ext.MessageBox){
   Ext.MessageBox.buttonText = {
      ok     : "OK",
      cancel : "ÐÑÐ´Ð¼ÑÐ½Ð°",
      yes    : "Ð¢Ð°Ðº",
      no     : "ÐÑ"
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
      todayText         : "Ð¡ÑÐ¾Ð³Ð¾Ð´Ð½Ñ",
      minText           : "Ð¦Ñ Ð´Ð°ÑÐ° Ð¼ÐµÐ½ÑÐµ Ð¼ÑÐ½ÑÐ¼Ð°Ð»ÑÐ½Ð¾Ñ Ð´Ð°ÑÐ¸",
      maxText           : "Ð¦Ñ Ð´Ð°ÑÐ° Ð±ÑÐ»ÑÑÐµ Ð¼Ð°ÐºÑÐ¸Ð¼Ð°Ð»ÑÐ½Ð¾Ñ Ð´Ð°ÑÐ¸",
      disabledDaysText  : "",
      disabledDatesText : "",
      monthNames        : Date.monthNames,
      dayNames	        : Date.dayNames,
      nextText          : 'ÐÐ°ÑÑÑÐ¿Ð½Ð¸Ð¹ Ð¼ÑÑÑÑÑ (Control+ÐÐ¿ÑÐ°Ð²Ð¾)',
      prevText          : 'ÐÐ¾Ð¿ÐµÑÐµÐ´Ð½ÑÐ¹ Ð¼ÑÑÑÑÑ (Control+ÐÐ»ÑÐ²Ð¾)',
      monthYearText     : 'ÐÐ¸Ð±ÑÑ Ð¼ÑÑÑÑÑ (Control+ÐÐ²ÐµÑÑ/ÐÐ½Ð¸Ð· Ð´Ð»Ñ Ð²Ð¸Ð±Ð¾ÑÑ ÑÐ¾ÐºÑ)',
      todayTip          : "{0} (ÐÑÐ¾Ð±ÑÐ»)",
      format            : "d.m.y",
      okText            : "&#160;OK&#160;",
      cancelText        : "ÐÑÐ´Ð¼ÑÐ½Ð°",
      startDay          : 1
   });
}

if(Ext.PagingToolbar){
   Ext.apply(Ext.PagingToolbar.prototype, {
      beforePageText : "Ð¡ÑÐ¾ÑÑÐ½ÐºÐ°",
      afterPageText  : "Ð· {0}",
      firstText      : "ÐÐµÑÑÐ° ÑÑÐ¾ÑÑÐ½ÐºÐ°",
      prevText       : "ÐÐ¾Ð¿ÐµÑÐµÐ´Ð½Ñ ÑÑÐ¾ÑÑÐ½ÐºÐ°",
      nextText       : "ÐÐ°ÑÑÑÐ¿Ð½Ð° ÑÑÐ¾ÑÑÐ½ÐºÐ°",
      lastText       : "ÐÑÑÐ°Ð½Ð½Ñ ÑÑÐ¾ÑÑÐ½ÐºÐ°",
      refreshText    : "ÐÐ±Ð½Ð¾Ð²Ð¸ÑÐ¸",
      displayMsg     : "ÐÑÐ´Ð¾Ð±ÑÐ°Ð¶Ð°ÑÑÑÑÑ Ð·Ð°Ð¿Ð¸ÑÐ¸ Ð· {0} Ð¿Ð¾ {1}, Ð²ÑÑÐ¾Ð³Ð¾ {2}",
      emptyMsg       : 'ÐÐ°Ð½Ñ Ð´Ð»Ñ Ð²ÑÐ´Ð¾Ð±ÑÐ°Ð¶ÐµÐ½Ð½Ñ Ð²ÑÐ´ÑÑÑÐ½Ñ'
   });
}

if(Ext.form.TextField){
   Ext.apply(Ext.form.TextField.prototype, {
      minLengthText : "ÐÑÐ½ÑÐ¼Ð°Ð»ÑÐ½Ð° Ð´Ð¾Ð²Ð¶Ð¸Ð½Ð° ÑÑÐ¾Ð³Ð¾ Ð¿Ð¾Ð»Ñ {0}",
      maxLengthText : "ÐÐ°ÐºÑÐ¸Ð¼Ð°Ð»ÑÐ½Ð° Ð´Ð¾Ð²Ð¶Ð¸Ð½Ð° ÑÑÐ¾Ð³Ð¾ Ð¿Ð¾Ð»Ñ {0}",
      blankText     : "Ð¦Ðµ Ð¿Ð¾Ð»Ðµ Ñ Ð¾Ð±Ð¾Ð²âÑÐ·ÐºÐ¾Ð²Ð¸Ð¼ Ð´Ð»Ñ Ð·Ð°Ð¿Ð¾Ð²Ð½ÐµÐ½Ð½Ñ",
      regexText     : "",
      emptyText     : null
   });
}

if(Ext.form.NumberField){
   Ext.apply(Ext.form.NumberField.prototype, {
      minText : "ÐÐ½Ð°ÑÐµÐ½Ð½Ñ ÑÑÐ¾Ð³Ð¾ Ð¿Ð¾Ð»Ñ Ð½Ðµ Ð¼Ð¾Ð¶Ðµ Ð±ÑÑÐ¸ Ð¼ÐµÐ½ÑÐµ {0}",
      maxText : "ÐÐ½Ð°ÑÐµÐ½Ð½Ñ ÑÑÐ¾Ð³Ð¾ Ð¿Ð¾Ð»Ñ Ð½Ðµ Ð¼Ð¾Ð¶Ðµ Ð±ÑÑÐ¸ Ð±ÑÐ»ÑÑÐµ {0}",
      nanText : "{0} Ð½Ðµ ÑÐ²Ð»ÑÑÑÑÑÑ ÑÐ¸ÑÐ»Ð¾Ð¼"
   });
}

if(Ext.form.DateField){
   Ext.apply(Ext.form.DateField.prototype, {
      disabledDaysText  : "ÐÐµ Ð´Ð¾ÑÑÑÐ¿Ð½Ð¾",
      disabledDatesText : "ÐÐµ Ð´Ð¾ÑÑÑÐ¿Ð½Ð¾",
      minText           : "ÐÐ°ÑÐ° Ð² ÑÑÐ¾Ð¼Ñ Ð¿Ð¾Ð»Ñ Ð¿Ð¾Ð²Ð¸Ð½Ð½Ð° Ð±ÑÑÐ¸ Ð±ÑÐ»ÑÑÐµ {0}",
      maxText           : "ÐÐ°ÑÐ° Ð² ÑÑÐ¾Ð¼Ñ Ð¿Ð¾Ð»Ñ Ð¿Ð¾Ð²Ð¸Ð½Ð½Ð° Ð±ÑÑÐ¸ Ð¼ÐµÐ½ÑÐµ {0}",
      invalidText       : "{0} Ð½ÐµÐ¿ÑÐ°Ð²Ð¸Ð»ÑÐ½Ð° Ð´Ð°ÑÐ° - Ð´Ð°ÑÐ° Ð¿Ð¾Ð²Ð¸Ð½Ð½Ð° Ð±ÑÑÐ¸ Ð²ÐºÐ°Ð·Ð°Ð½Ð° Ñ  ÑÐ¾ÑÐ¼Ð°ÑÑ {1}",
      format            : "d.m.y"
   });
}

if(Ext.form.ComboBox){
   Ext.apply(Ext.form.ComboBox.prototype, {
      loadingText       : "ÐÐ°Ð²Ð°Ð½ÑÐ°Ð¶ÐµÐ½Ð½Ñ...",
      valueNotFoundText : undefined
   });
}

if(Ext.form.VTypes){
   Ext.apply(Ext.form.VTypes, {
      emailText    : 'Ð¦Ðµ Ð¿Ð¾Ð»Ðµ Ð¿Ð¾Ð²Ð¸Ð½Ð½Ð¾ Ð¼ÑÑÑÐ¸ÑÐ¸ Ð°Ð´ÑÐµÑÑ ÐµÐ»ÐµÐºÑÑÐ¾Ð½Ð½Ð¾Ñ Ð¿Ð¾ÑÑÐ¸ Ñ ÑÐ¾ÑÐ¼Ð°ÑÑ "user@domain.com"',
      urlText      : 'Ð¦Ðµ Ð¿Ð¾Ð»Ðµ Ð¿Ð¾Ð²Ð¸Ð½Ð½Ð¾ Ð¼ÑÑÑÐ¸ÑÐ¸ URL Ñ ÑÐ¾ÑÐ¼Ð°ÑÑ "http:/'+'/www.domain.com"',
      alphaText    : 'Ð¦Ðµ Ð¿Ð¾Ð»Ðµ Ð¿Ð¾Ð²Ð¸Ð½Ð½Ð¾ Ð¼ÑÑÑÐ¸ÑÐ¸ Ð²Ð¸ÐºÐ»ÑÑÐ½Ð¾ Ð»Ð°ÑÐ¸Ð½ÑÑÐºÑ Ð»ÑÑÐµÑÐ¸ ÑÐ° ÑÐ¸Ð¼Ð²Ð¾Ð» Ð¿ÑÐ´ÐºÑÐµÑÐ»ÐµÐ½Ð½Ñ "_"',
      alphanumText : 'Ð¦Ðµ Ð¿Ð¾Ð»Ðµ Ð¿Ð¾Ð²Ð¸Ð½Ð½Ð¾ Ð¼ÑÑÑÐ¸ÑÐ¸ Ð²Ð¸ÐºÐ»ÑÑÐ½Ð¾ Ð»Ð°ÑÐ¸Ð½ÑÑÐºÑ Ð»ÑÑÐµÑÐ¸, ÑÐ¸ÑÑÐ¸ ÑÐ° ÑÐ¸Ð¼Ð²Ð¾Ð» Ð¿ÑÐ´ÐºÑÐµÑÐ»ÐµÐ½Ð½Ñ "_"'
   });
}

if(Ext.form.HtmlEditor){
   Ext.apply(Ext.form.HtmlEditor.prototype, {
     createLinkText : 'ÐÑÐ´Ñ-Ð»Ð°ÑÐºÐ° Ð²Ð²ÐµÐ´ÑÑÑ Ð°Ð´ÑÐµÑÑ:',
     buttonTips : {
            bold : {
               title: 'ÐÐ°Ð¿ÑÐ²Ð¶Ð¸ÑÐ½Ð¸Ð¹ (Ctrl+B)',
               text: 'ÐÐ°ÑÑÐ¾ÑÑÐ²Ð°Ð½Ð½Ñ Ð½Ð°Ð¿ÑÐ²Ð¶Ð¸ÑÐ½Ð¾Ð³Ð¾ Ð´Ð¾ Ð²Ð¸Ð´ÑÐ»ÐµÐ½Ð¾Ð³Ð¾ ÑÐµÐºÑÑÑ.',
               cls: 'x-html-editor-tip'
            },
            italic : {
               title: 'ÐÑÑÑÐ¸Ð² (Ctrl+I)',
               text: ' ÐÐ°ÑÑÐ¾ÑÑÐ²Ð°Ð½Ð½Ñ ÐºÑÑÑÐ¸Ð²Ñ Ð´Ð¾ Ð²Ð¸Ð´ÑÐ»ÐµÐ½Ð¾Ð³Ð¾ ÑÐµÐºÑÑÑ.',
               cls: 'x-html-editor-tip'
            },
            underline : {
               title: 'ÐÑÐ´ÐºÑÐµÑÐ»ÐµÐ½Ð¸Ð¹ (Ctrl+U)',
               text: ' ÐÐ°ÑÑÐ¾ÑÑÐ²Ð°Ð½Ð½Ñ Ð¿ÑÐ´ÐºÑÐµÑÐ»ÐµÐ½Ð½Ñ Ð´Ð¾ Ð²Ð¸Ð´ÑÐ»ÐµÐ½Ð½Ð¾Ð³Ð¾ ÑÐµÐºÑÑÑ.',
               cls: 'x-html-editor-tip'
           },
           increasefontsize : {
               title: 'ÐÐ±ÑÐ»ÑÑÐ¸ÑÐ¸ ÑÐ¾Ð·Ð¼ÑÑ',
               text: 'ÐÐ±ÑÐ»ÑÑÐµÐ½Ð½Ñ ÑÐ¾Ð·Ð¼ÑÑÑ ÑÑÐ¸ÑÑÐ°.',
               cls: 'x-html-editor-tip'
           },
           decreasefontsize : {
               title: 'ÐÐ¼ÐµÐ½ÑÐ¸ÑÐ¸ ÑÐ¾Ð·Ð¼ÑÑ',
               text: 'ÐÐ¼ÐµÐ½ÑÐµÐ½Ð½Ñ ÑÐ¾Ð·Ð¼ÑÑÑ ÑÑÐ¸ÑÑÐ°.',
               cls: 'x-html-editor-tip'
           },
           backcolor : {
               title: 'ÐÐ°Ð»Ð¸Ð²ÐºÐ°',
               text: 'ÐÐ¼ÑÐ½Ð° ÐºÐ¾Ð»ÑÐ¾ÑÑ ÑÐ¾Ð½Ñ Ð´Ð»Ñ Ð²Ð¸Ð´ÑÐ»ÐµÐ½Ð¾Ð³Ð¾ ÑÐµÐºÑÑÑ Ð°Ð±Ð¾ Ð°Ð±Ð·Ð°ÑÑ.',
               cls: 'x-html-editor-tip'
           },
           forecolor : {
               title: 'ÐÐ¾Ð»ÑÑ ÑÐµÐºÑÑÑ',
               text: 'ÐÐ¼ÑÐ½Ð° ÐºÐ¾Ð»ÑÐ¾ÑÑ ÑÐµÐºÑÑÑ.',
               cls: 'x-html-editor-tip'
           },
           justifyleft : {
               title: 'ÐÐ¸ÑÑÐ²Ð½ÑÑÐ¸ ÑÐµÐºÑÑ Ð¿Ð¾ Ð»ÑÐ²ÑÐ¹ Ð³ÑÐ°Ð½Ð¸ÑÑ',
               text: 'ÐÐ¸ÑÑÐ²Ð½ÑÐ²Ð°Ð½Ð½Ñ ÑÐµÐºÑÑÑ Ð¿Ð¾ Ð»ÑÐ²ÑÐ¹ Ð³ÑÐ°Ð½Ð¸ÑÑ.',
               cls: 'x-html-editor-tip'
           },
           justifycenter : {
               title: 'ÐÐ¸ÑÑÐ²Ð½ÑÑÐ¸ ÑÐµÐºÑÑ Ð¿Ð¾ ÑÐµÐ½ÑÑÑ',
               text: 'ÐÐ¸ÑÑÐ²Ð½ÑÐ²Ð°Ð½Ð½Ñ ÑÐµÐºÑÑÑ Ð¿Ð¾ ÑÐµÐ½ÑÑÑ.',
               cls: 'x-html-editor-tip'
           },
           justifyright : {
               title: 'ÐÐ¸ÑÑÐ²Ð½ÑÑÐ¸ ÑÐµÐºÑÑ Ð¿Ð¾ Ð¿ÑÐ°Ð²ÑÐ¹ Ð³ÑÐ°Ð½Ð¸ÑÑ',
               text: 'ÐÐ¸ÑÑÐ²Ð½ÑÐ²Ð°Ð½Ð½Ñ ÑÐµÐºÑÑÑ Ð¿Ð¾ Ð¿ÑÐ°Ð²ÑÐ¹ Ð³ÑÐ°Ð½Ð¸ÑÑ.',
               cls: 'x-html-editor-tip'
           },
           insertunorderedlist : {
               title: 'ÐÐ°ÑÐºÐµÑÐ¸',
               text: 'ÐÐ¾ÑÐ°ÑÐ¸ Ð¼Ð°ÑÐºÐ¾Ð²Ð°Ð½Ð¸Ð¹ ÑÐ¿Ð¸ÑÐ¾Ðº.',
               cls: 'x-html-editor-tip'
           },
           insertorderedlist : {
               title: 'ÐÑÐ¼ÐµÑÐ°ÑÑÑ',
               text: 'ÐÐ¾ÑÐ°ÑÐ¸ Ð½ÑÐ¼ÐµÑÐ½Ð¾Ð²Ð°Ð½Ð¸Ð¹ ÑÐ¿Ð¸ÑÐ¾Ðº.',
               cls: 'x-html-editor-tip'
           },
           createlink : {
               title: 'ÐÑÑÐ°Ð²Ð¸ÑÐ¸ Ð³ÑÐ¿ÐµÑÐ¿Ð¾ÑÐ¸Ð»Ð°Ð½Ð½Ñ',
               text: 'Ð¡ÑÐ²Ð¾ÑÐµÐ½Ð½Ñ Ð¿Ð¾ÑÐ¸Ð»Ð°Ð½Ð½Ñ ÑÐ· Ð²Ð¸Ð´ÑÐ»ÐµÐ½Ð¾Ð³Ð¾ ÑÐµÐºÑÑÑ.',
               cls: 'x-html-editor-tip'
           },
           sourceedit : {
               title: 'ÐÐ¸ÑÑÐ´Ð½Ð¸Ð¹ ÐºÐ¾Ð´',
               text: 'ÐÐµÑÐµÐºÐ»ÑÑÐ¸ÑÐ¸ÑÑ Ð½Ð° Ð²Ð¸ÑÑÐ´Ð½Ð¸Ð¹ ÐºÐ¾Ð´.',
               cls: 'x-html-editor-tip'
           }
        }
   });
}

if(Ext.grid.GridView){
   Ext.apply(Ext.grid.GridView.prototype, {
      sortAscText  : "Ð¡Ð¾ÑÑÑÐ²Ð°ÑÐ¸ Ð¿Ð¾ Ð·ÑÐ¾ÑÑÐ°Ð½Ð½Ñ",
      sortDescText : "Ð¡Ð¾ÑÑÑÐ²Ð°ÑÐ¸ Ð¿Ð¾ ÑÐ¿Ð°Ð´Ð°Ð½Ð½Ñ",
      lockText     : "ÐÐ°ÐºÑÑÐ¿Ð¸ÑÐ¸ ÐºÐ¾Ð»Ð¾Ð½ÐºÑ",
      unlockText   : "ÐÐ½ÑÑÐ¸ Ð·Ð°ÐºÑÑÐ¿Ð»ÐµÐ½Ð½Ñ ÐºÐ¾Ð»Ð¾Ð½ÐºÐ¸",
      columnsText  : "ÐÐ¾Ð»Ð¾Ð½ÐºÐ¸"
   });
}

if(Ext.grid.PropertyColumnModel){
   Ext.apply(Ext.grid.PropertyColumnModel.prototype, {
      nameText   : "ÐÐ°Ð·Ð²Ð°",
      valueText  : "ÐÐ½Ð°ÑÐµÐ½Ð½Ñ",
      dateFormat : "j.m.Y"
   });
}

if(Ext.layout.BorderLayout && Ext.layout.BorderLayout.SplitRegion){
   Ext.apply(Ext.layout.BorderLayout.SplitRegion.prototype, {
      splitTip            : "Ð¢ÑÐ³Ð½ÑÑÑ Ð´Ð»Ñ Ð·Ð¼ÑÐ½Ð¸ ÑÐ¾Ð·Ð¼ÑÑÑ.",
      collapsibleSplitTip : "Ð¢ÑÐ³Ð½ÑÑÑ Ð´Ð»Ñ Ð·Ð¼ÑÐ½Ð¸ ÑÐ¾Ð·Ð¼ÑÑÑ. ÐÐ¾Ð´Ð²ÑÐ¹Ð½Ð¸Ð¹ ÐºÐ»ÑÐº ÑÑÐ¾Ð²Ð°Ñ Ð¿Ð°Ð½ÐµÐ»Ñ."
   });
}

