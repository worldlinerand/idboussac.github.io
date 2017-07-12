ï»¿/*
 * Russian translation
 * By ZooKeeper (utf-8 encoding)
 * 6 November 2007
 */

Ext.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">ÐÐ´ÐµÑ Ð·Ð°Ð³ÑÑÐ·ÐºÐ°...</div>';

if(Ext.View){
  Ext.View.prototype.emptyText = "";
}

if(Ext.grid.GridPanel){
  Ext.grid.GridPanel.prototype.ddText = "{0} Ð²ÑÐ±ÑÐ°Ð½Ð½ÑÑ ÑÑÑÐ¾Ðº";
}

if(Ext.TabPanelItem){
  Ext.TabPanelItem.prototype.closeText = "ÐÐ°ÐºÑÑÑÑ ÑÑÑ Ð²ÐºÐ»Ð°Ð´ÐºÑ";
}

if(Ext.form.Field){
  Ext.form.Field.prototype.invalidText = "ÐÐ½Ð°ÑÐµÐ½Ð¸Ðµ Ð² ÑÑÐ¾Ð¼ Ð¿Ð¾Ð»Ðµ Ð½ÐµÐ²ÐµÑÐ½Ð¾Ðµ";
}

if(Ext.LoadMask){
  Ext.LoadMask.prototype.msg = "ÐÐ°Ð³ÑÑÐ·ÐºÐ°...";
}

Date.monthNames = [
  "Ð¯Ð½Ð²Ð°ÑÑ",
  "Ð¤ÐµÐ²ÑÐ°Ð»Ñ",
  "ÐÐ°ÑÑ",
  "ÐÐ¿ÑÐµÐ»Ñ",
  "ÐÐ°Ð¹",
  "ÐÑÐ½Ñ",
  "ÐÑÐ»Ñ",
  "ÐÐ²Ð³ÑÑÑ",
  "Ð¡ÐµÐ½ÑÑÐ±ÑÑ",
  "ÐÐºÑÑÐ±ÑÑ",
  "ÐÐ¾ÑÐ±ÑÑ",
  "ÐÐµÐºÐ°Ð±ÑÑ"
];

Date.getShortMonthName = function(month) {
  return Date.monthNames[month].substring(0, 3);
};

Date.monthNumbers = {
  Jan : 0,
  Feb : 1,
  Mar : 2,
  Apr : 3,
  May : 4,
  Jun : 5,
  Jul : 6,
  Aug : 7,
  Sep : 8,
  Oct : 9,
  Nov : 10,
  Dec : 11
};

Date.getMonthNumber = function(name) {
  return Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
};

Date.dayNames = [
  "ÐÐ¾ÑÐºÑÐµÑÐµÐ½ÑÐµ",
  "ÐÐ¾Ð½ÐµÐ´ÐµÐ»ÑÐ½Ð¸Ðº",
  "ÐÑÐ¾ÑÐ½Ð¸Ðº",
  "Ð¡ÑÐµÐ´Ð°",
  "Ð§ÐµÑÐ²ÐµÑÐ³",
  "ÐÑÑÐ½Ð¸ÑÐ°",
  "Ð¡ÑÐ±Ð±Ð¾ÑÐ°"
];

Date.getShortDayName = function(day) {
  return Date.dayNames[day].substring(0, 3);
};

if(Ext.MessageBox){
  Ext.MessageBox.buttonText = {
    ok     : "OK",
    cancel : "ÐÑÐ¼ÐµÐ½Ð°",
    yes    : "ÐÐ°",
    no     : "ÐÐµÑ"
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
    todayText          : "Ð¡ÐµÐ³Ð¾Ð´Ð½Ñ",
    minText            : "Ð­ÑÐ° Ð´Ð°ÑÐ° ÑÐ°Ð½ÑÑÐµ Ð¼Ð¸Ð½Ð¸Ð¼Ð°Ð»ÑÐ½Ð¾Ð¹ Ð´Ð°ÑÑ",
    maxText            : "Ð­ÑÐ° Ð´Ð°ÑÐ° Ð¿Ð¾Ð·Ð¶Ðµ Ð¼Ð°ÐºÑÐ¸Ð¼Ð°Ð»ÑÐ½Ð¾Ð¹ Ð´Ð°ÑÑ",
    disabledDaysText   : "",
    disabledDatesText  : "",
    monthNames         : Date.monthNames,
    dayNames           : Date.dayNames,
    nextText           : 'Ð¡Ð»ÐµÐ´ÑÑÑÐ¸Ð¹ Ð¼ÐµÑÑÑ (Control+ÐÐ¿ÑÐ°Ð²Ð¾)',
    prevText           : 'ÐÑÐµÐ´ÑÐ´ÑÑÐ¸Ð¹ Ð¼ÐµÑÑÑ (Control+ÐÐ»ÐµÐ²Ð¾)',
    monthYearText      : 'ÐÑÐ±Ð¾Ñ Ð¼ÐµÑÑÑÐ° (Control+ÐÐ²ÐµÑÑ/ÐÐ½Ð¸Ð· Ð´Ð»Ñ Ð²ÑÐ±Ð¾ÑÐ° Ð³Ð¾Ð´Ð°)',
    todayTip           : "{0} (ÐÑÐ¾Ð±ÐµÐ»)",
    format             : "d.m.y",
    okText             : "&#160;OK&#160;",
    cancelText         : "ÐÑÐ¼ÐµÐ½Ð°",
    startDay           : 1
  });
}

if(Ext.PagingToolbar){
  Ext.apply(Ext.PagingToolbar.prototype, {
    beforePageText : "Ð¡ÑÑÐ°Ð½Ð¸ÑÐ°",
    afterPageText  : "Ð¸Ð· {0}",
    firstText      : "ÐÐµÑÐ²Ð°Ñ ÑÑÑÐ°Ð½Ð¸ÑÐ°",
    prevText       : "ÐÑÐµÐ´ÑÐ´ÑÑÐ°Ñ ÑÑÑÐ°Ð½Ð¸ÑÐ°",
    nextText       : "Ð¡Ð»ÐµÐ´ÑÑÑÐ°Ñ ÑÑÑÐ°Ð½Ð¸ÑÐ°",
    lastText       : "ÐÐ¾ÑÐ»ÐµÐ´Ð½ÑÑ ÑÑÑÐ°Ð½Ð¸ÑÐ°",
    refreshText    : "ÐÐ±Ð½Ð¾Ð²Ð¸ÑÑ",
    displayMsg     : "ÐÑÐ¾Ð±ÑÐ°Ð¶Ð°ÑÑÑÑ Ð·Ð°Ð¿Ð¸ÑÐ¸ Ñ {0} Ð¿Ð¾ {1}, Ð²ÑÐµÐ³Ð¾ {2}",
    emptyMsg       : 'ÐÐµÑ Ð´Ð°Ð½Ð½ÑÑ Ð´Ð»Ñ Ð¾ÑÐ¾Ð±ÑÐ°Ð¶ÐµÐ½Ð¸Ñ'
  });
}

if(Ext.form.TextField){
  Ext.apply(Ext.form.TextField.prototype, {
    minLengthText : "ÐÐ¸Ð½Ð¸Ð¼Ð°Ð»ÑÐ½Ð°Ñ Ð´Ð»Ð¸Ð½Ð° ÑÑÐ¾Ð³Ð¾ Ð¿Ð¾Ð»Ñ {0}",
    maxLengthText : "ÐÐ°ÐºÑÐ¸Ð¼Ð°Ð»ÑÐ½Ð°Ñ Ð´Ð»Ð¸Ð½Ð° ÑÑÐ¾Ð³Ð¾ Ð¿Ð¾Ð»Ñ {0}",
    blankText     : "Ð­ÑÐ¾ Ð¿Ð¾Ð»Ðµ Ð¾Ð±ÑÐ·Ð°ÑÐµÐ»ÑÐ½Ð¾ Ð´Ð»Ñ Ð·Ð°Ð¿Ð¾Ð»Ð½ÐµÐ½Ð¸Ñ",
    regexText     : "",
    emptyText     : null
  });
}

if(Ext.form.NumberField){
  Ext.apply(Ext.form.NumberField.prototype, {
    minText : "ÐÐ½Ð°ÑÐµÐ½Ð¸Ðµ ÑÑÐ¾Ð³Ð¾ Ð¿Ð¾Ð»Ñ Ð½Ðµ Ð¼Ð¾Ð¶ÐµÑ Ð±ÑÑÑ Ð¼ÐµÐ½ÑÑÐµ {0}",
    maxText : "ÐÐ½Ð°ÑÐµÐ½Ð¸Ðµ ÑÑÐ¾Ð³Ð¾ Ð¿Ð¾Ð»Ñ Ð½Ðµ Ð¼Ð¾Ð¶ÐµÑ Ð±ÑÑÑ Ð±Ð¾Ð»ÑÑÐµ {0}",
    nanText : "{0} Ð½Ðµ ÑÐ²Ð»ÑÐµÑÑÑ ÑÐ¸ÑÐ»Ð¾Ð¼"
  });
}

if(Ext.form.DateField){
  Ext.apply(Ext.form.DateField.prototype, {
    disabledDaysText  : "ÐÐµ Ð´Ð¾ÑÑÑÐ¿Ð½Ð¾",
    disabledDatesText : "ÐÐµ Ð´Ð¾ÑÑÑÐ¿Ð½Ð¾",
    minText           : "ÐÐ°ÑÐ° Ð² ÑÑÐ¾Ð¼ Ð¿Ð¾Ð»Ðµ Ð´Ð¾Ð»Ð¶Ð½Ð° Ð±ÑÑÑ Ð¿Ð¾Ð·Ð´Ðµ {0}",
    maxText           : "ÐÐ°ÑÐ° Ð² ÑÑÐ¾Ð¼ Ð¿Ð¾Ð»Ðµ Ð´Ð¾Ð»Ð¶Ð½Ð° Ð±ÑÑÑ ÑÐ°Ð½ÑÑÐµ {0}",
    invalidText       : "{0} Ð½Ðµ ÑÐ²Ð»ÑÐµÑÑÑ Ð¿ÑÐ°Ð²Ð¸Ð»ÑÐ½Ð¾Ð¹ Ð´Ð°ÑÐ¾Ð¹ - Ð´Ð°ÑÐ° Ð´Ð¾Ð»Ð¶Ð½Ð° Ð±ÑÑÑ ÑÐºÐ°Ð·Ð°Ð½Ð° Ð² ÑÐ¾ÑÐ¼Ð°ÑÐµ {1}",
    format            : "d.m.y",
    altFormats        : "d.m.y|d/m/Y|d-m-y|d-m-Y|d/m|d-m|dm|dmy|dmY|d|Y-m-d"
  });
}

if(Ext.form.ComboBox){
  Ext.apply(Ext.form.ComboBox.prototype, {
    loadingText       : "ÐÐ°Ð³ÑÑÐ·ÐºÐ°...",
    valueNotFoundText : undefined
  });
}

if(Ext.form.VTypes){
  Ext.apply(Ext.form.VTypes, {
    emailText     : 'Ð­ÑÐ¾ Ð¿Ð¾Ð»Ðµ Ð´Ð¾Ð»Ð¶Ð½Ð¾ ÑÐ¾Ð´ÐµÑÐ¶Ð°ÑÑ Ð°Ð´ÑÐµÑ ÑÐ»ÐµÐºÑÑÐ¾Ð½Ð½Ð¾Ð¹ Ð¿Ð¾ÑÑÑ Ð² ÑÐ¾ÑÐ¼Ð°ÑÐµ "user@domain.com"',
    urlText       : 'Ð­ÑÐ¾ Ð¿Ð¾Ð»Ðµ Ð´Ð¾Ð»Ð¶Ð½Ð¾ ÑÐ¾Ð´ÐµÑÐ¶Ð°ÑÑ URL Ð² ÑÐ¾ÑÐ¼Ð°ÑÐµ "http:/'+'/www.domain.com"',
    alphaText     : 'Ð­ÑÐ¾ Ð¿Ð¾Ð»Ðµ Ð´Ð¾Ð»Ð¶Ð½Ð¾ ÑÐ¾Ð´ÐµÑÐ¶Ð°ÑÑ ÑÐ¾Ð»ÑÐºÐ¾ Ð»Ð°ÑÐ¸Ð½ÑÐºÐ¸Ðµ Ð±ÑÐºÐ²Ñ Ð¸ ÑÐ¸Ð¼Ð²Ð¾Ð» Ð¿Ð¾Ð´ÑÐµÑÐºÐ¸Ð²Ð°Ð½Ð¸Ñ "_"',
    alphanumText  : 'Ð­ÑÐ¾ Ð¿Ð¾Ð»Ðµ Ð´Ð¾Ð»Ð¶Ð½Ð¾ ÑÐ¾Ð´ÐµÑÐ¶Ð°ÑÑ ÑÐ¾Ð»ÑÐºÐ¾ Ð»Ð°ÑÐ¸Ð½ÑÐºÐ¸Ðµ Ð±ÑÐºÐ²Ñ, ÑÐ¸ÑÑÑ Ð¸ ÑÐ¸Ð¼Ð²Ð¾Ð» Ð¿Ð¾Ð´ÑÐµÑÐºÐ¸Ð²Ð°Ð½Ð¸Ñ "_"'
  });
}

if(Ext.form.HtmlEditor){
  Ext.apply(Ext.form.HtmlEditor.prototype, {
    createLinkText : 'ÐÐ¾Ð¶Ð°Ð»ÑÐ¹ÑÑÐ° Ð²Ð²ÐµÐ´Ð¸ÑÐµ Ð°Ð´ÑÐµÑ:',
    buttonTips : {
      bold : {
        title: 'ÐÐ¾Ð»ÑÐ¶Ð¸ÑÐ½ÑÐ¹ (Ctrl+B)',
        text: 'ÐÑÐ¸Ð¼ÐµÐ½ÐµÐ½Ð¸Ðµ Ð¿Ð¾Ð»ÑÐ¶Ð¸ÑÐ½Ð¾Ð³Ð¾ Ð½Ð°ÑÐµÑÑÐ°Ð½Ð¸Ñ Ðº Ð²ÑÐ´ÐµÐ»ÐµÐ½Ð½Ð¾Ð¼Ñ ÑÐµÐºÑÑÑ.',
        cls: 'x-html-editor-tip'
      },
      italic : {
        title: 'ÐÑÑÑÐ¸Ð² (Ctrl+I)',
        text: 'ÐÑÐ¸Ð¼ÐµÐ½ÐµÐ½Ð¸Ðµ ÐºÑÑÑÐ¸Ð²Ð½Ð¾Ð³Ð¾ Ð½Ð°ÑÐµÑÑÐ°Ð½Ð¸Ñ Ðº Ð²ÑÐ´ÐµÐ»ÐµÐ½Ð½Ð¾Ð¼Ñ ÑÐµÐºÑÑÑ.',
        cls: 'x-html-editor-tip'
      },
      underline : {
        title: 'ÐÐ¾Ð´ÑÑÑÐºÐ½ÑÑÑÐ¹ (Ctrl+U)',
        text: 'ÐÐ¾Ð´ÑÑÑÐºÐ¸Ð²Ð°Ð½Ð¸Ðµ Ð²ÑÐ´ÐµÐ»ÐµÐ½Ð½Ð¾Ð³Ð¾ ÑÐµÐºÑÑÐ°.',
        cls: 'x-html-editor-tip'
      },
      increasefontsize : {
        title: 'Ð£Ð²ÐµÐ»Ð¸ÑÐ¸ÑÑ ÑÐ°Ð·Ð¼ÐµÑ',
        text: 'Ð£Ð²ÐµÐ»Ð¸ÑÐµÐ½Ð¸Ðµ ÑÐ°Ð·Ð¼ÐµÑÐ° ÑÑÐ¸ÑÑÐ°.',
        cls: 'x-html-editor-tip'
      },
      decreasefontsize : {
        title: 'Ð£Ð¼ÐµÐ½ÑÑÐ¸ÑÑ ÑÐ°Ð·Ð¼ÐµÑ',
        text: 'Ð£Ð¼ÐµÐ½ÑÑÐµÐ½Ð¸Ðµ ÑÐ°Ð·Ð¼ÐµÑÐ° ÑÑÐ¸ÑÑÐ°.',
        cls: 'x-html-editor-tip'
      },
      backcolor : {
        title: 'ÐÐ°Ð»Ð¸Ð²ÐºÐ°',
        text: 'ÐÐ·Ð¼ÐµÐ½ÐµÐ½Ð¸Ðµ ÑÐ²ÐµÑÐ° ÑÐ¾Ð½Ð° Ð´Ð»Ñ Ð²ÑÐ´ÐµÐ»ÐµÐ½Ð½Ð¾Ð³Ð¾ ÑÐµÐºÑÑÐ° Ð¸Ð»Ð¸ Ð°Ð±Ð·Ð°ÑÐ°.',
        cls: 'x-html-editor-tip'
      },
      forecolor : {
        title: 'Ð¦Ð²ÐµÑ ÑÐµÐºÑÑÐ°',
        text: 'ÐÐ·Ð¼ÐµÐ½Ð¸Ðµ ÑÐ²ÐµÑÐ° ÑÐµÐºÑÑÐ°.',
        cls: 'x-html-editor-tip'
      },
      justifyleft : {
        title: 'ÐÑÑÐ¾Ð²Ð½ÑÑÑ ÑÐµÐºÑÑ Ð¿Ð¾ Ð»ÐµÐ²Ð¾Ð¼Ñ ÐºÑÐ°Ñ',
        text: 'ÐÑÑÐ¾Ð²Ð½Ð¸Ð²Ð°Ð½Ð¸Ðµ ÑÐµÐºÑÑÐ° Ð¿Ð¾ Ð»ÐµÐ²Ð¾Ð¼Ñ ÐºÑÐ°Ñ.',
        cls: 'x-html-editor-tip'
      },
      justifycenter : {
        title: 'ÐÐ¾ ÑÐµÐ½ÑÑÑ',
        text: 'ÐÑÑÐ¾Ð²Ð½Ð¸Ð²Ð°Ð½Ð¸Ðµ ÑÐµÐºÑÑÐ° Ð¿Ð¾ ÑÐµÐ½ÑÑÑ.',
        cls: 'x-html-editor-tip'
      },
      justifyright : {
        title: 'ÐÑÑÐ¾Ð²Ð½ÑÑÑ ÑÐµÐºÑÑ Ð¿Ð¾ Ð¿ÑÐ°Ð²Ð¾Ð¼Ñ ÐºÑÐ°Ñ',
        text: 'ÐÑÑÐ¾Ð²Ð½Ð¸Ð²Ð°Ð½Ð¸Ðµ ÑÐµÐºÑÑÐ° Ð¿Ð¾ Ð¿ÑÐ°Ð²Ð¾Ð¼Ñ ÐºÑÐ°Ñ.',
        cls: 'x-html-editor-tip'
      },
      insertunorderedlist : {
        title: 'ÐÐ°ÑÐºÐµÑÑ',
        text: 'ÐÐ°ÑÐ°ÑÑ Ð¼Ð°ÑÐºÐ¸ÑÐ¾Ð²Ð°Ð½Ð½ÑÐ¹ ÑÐ¿Ð¸ÑÐ¾Ðº.',
        cls: 'x-html-editor-tip'
      },
      insertorderedlist : {
        title: 'ÐÑÐ¼ÐµÑÐ°ÑÐ¸Ñ',
        text: 'ÐÐ°ÑÐ°ÑÑ Ð½ÑÐ¼ÐµÑÐ½Ð¾Ð²Ð°Ð½Ð½ÑÐ¹ ÑÐ¿Ð¸ÑÐ¾Ðº.',
        cls: 'x-html-editor-tip'
      },
      createlink : {
        title: 'ÐÑÑÐ°Ð²Ð¸ÑÑ Ð³Ð¸Ð¿ÐµÑÑÑÑÐ»ÐºÑ',
        text: 'Ð¡Ð¾Ð·Ð´Ð°Ð½Ð¸Ðµ ÑÑÑÐ»ÐºÐ¸ Ð¸Ð· Ð²ÑÐ´ÐµÐ»ÐµÐ½Ð½Ð¾Ð³Ð¾ ÑÐµÐºÑÑÐ°.',
        cls: 'x-html-editor-tip'
      },
      sourceedit : {
        title: 'ÐÑÑÐ¾Ð´Ð½ÑÐ¹ ÐºÐ¾Ð´',
        text: 'ÐÐµÑÐµÐºÐ»ÑÑÐ¸ÑÑÑÑ Ð½Ð° Ð¸ÑÑÐ¾Ð´Ð½ÑÐ¹ ÐºÐ¾Ð´.',
        cls: 'x-html-editor-tip'
      }
    }
  });
}

if(Ext.grid.GridView){
  Ext.apply(Ext.grid.GridView.prototype, {
    sortAscText  : "Ð¡Ð¾ÑÑÐ¸ÑÐ¾Ð²Ð°ÑÑ Ð¿Ð¾ Ð²Ð¾Ð·ÑÐ°ÑÑÐ°Ð½Ð¸Ñ",
    sortDescText : "Ð¡Ð¾ÑÑÐ¸ÑÐ¾Ð²Ð°ÑÑ Ð¿Ð¾ ÑÐ±ÑÐ²Ð°Ð½Ð¸Ñ",
    lockText     : "ÐÐ°ÐºÑÐµÐ¿Ð¸ÑÑ ÑÑÐ¾Ð»Ð±ÐµÑ",
    unlockText   : "Ð¡Ð½ÑÑÑ Ð·Ð°ÐºÑÐµÐ¿Ð»ÐµÐ½Ð¸Ðµ ÑÑÐ¾Ð»Ð±ÑÐ°",
    columnsText  : "Ð¡ÑÐ¾Ð»Ð±ÑÑ"
  });
}

if(Ext.grid.GroupingView){
  Ext.apply(Ext.grid.GroupingView.prototype, {
    emptyGroupText : '(ÐÑÑÑÐ¾)',
    groupByText    : 'ÐÑÑÐ¿Ð¿Ð¸ÑÐ¾Ð²Ð°ÑÑ Ð¿Ð¾ ÑÑÐ¾Ð¼Ñ Ð¿Ð¾Ð»Ñ',
    showGroupsText : 'ÐÑÐ¾Ð±ÑÐ°Ð¶Ð°ÑÑ Ð¿Ð¾ Ð³ÑÑÐ¿Ð¿Ð°Ð¼'
  });
}

if(Ext.grid.PropertyColumnModel){
  Ext.apply(Ext.grid.PropertyColumnModel.prototype, {
    nameText   : "ÐÐ°Ð·Ð²Ð°Ð½Ð¸Ðµ",
    valueText  : "ÐÐ½Ð°ÑÐµÐ½Ð¸Ðµ",
    dateFormat : "d.m.Y"
  });
}

if(Ext.SplitLayoutRegion){
  Ext.apply(Ext.SplitLayoutRegion.prototype, {
    splitTip            : "Ð¢ÑÐ½Ð¸ÑÐµ Ð´Ð»Ñ Ð¸Ð·Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ ÑÐ°Ð·Ð¼ÐµÑÐ°.",
    collapsibleSplitTip : "Ð¢ÑÐ½Ð¸ÑÐµ Ð´Ð»Ñ Ð¸Ð·Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ ÑÐ°Ð·Ð¼ÐµÑÐ°. ÐÐ²Ð¾Ð¹Ð½Ð¾Ð¹ ÑÐµÐ»ÑÐ¾Ðº ÑÐ¿ÑÑÑÐµÑ Ð¿Ð°Ð½ÐµÐ»Ñ."
  });
}

if(Ext.layout.BorderLayout && Ext.layout.BorderLayout.SplitRegion){
  Ext.apply(Ext.layout.BorderLayout.SplitRegion.prototype, {
    splitTip            : "Ð¢ÑÐ½Ð¸ÑÐµ Ð´Ð»Ñ Ð¸Ð·Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ ÑÐ°Ð·Ð¼ÐµÑÐ°.",
    collapsibleSplitTip : "Ð¢ÑÐ½Ð¸ÑÐµ Ð´Ð»Ñ Ð¸Ð·Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ ÑÐ°Ð·Ð¼ÐµÑÐ°. ÐÐ²Ð¾Ð¹Ð½Ð¾Ð¹ ÑÐµÐ»ÑÐ¾Ðº ÑÐ¿ÑÑÑÐµÑ Ð¿Ð°Ð½ÐµÐ»Ñ."
  });
}
