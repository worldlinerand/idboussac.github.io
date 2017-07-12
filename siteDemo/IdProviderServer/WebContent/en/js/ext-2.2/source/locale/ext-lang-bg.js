/**
 * Bulgarian Translation
 *
 * By ÐÐµÐ¾ÑÐ³Ð¸ ÐÐ¾ÑÑÐ°Ð´Ð¸Ð½Ð¾Ð², ÐÐ°Ð»Ð³Ð°ÑÐ¸, ÐÐ°Ð½Ð°Ð´Ð°
 * 10 October 2007
 * By Nedko Penev 
 * 26 October 2007
 *
 * (utf-8 encoding)
 */

Ext.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">ÐÐ°ÑÐµÐ¶Ð´Ð°Ð½Ðµ...</div>';

if(Ext.View){
  Ext.View.prototype.emptyText = "";
}

if(Ext.grid.GridPanel){
  Ext.grid.GridPanel.prototype.ddText = "{0} Ð¸Ð·Ð±ÑÐ°Ð½Ð¸ ÐºÐ¾Ð»Ð¾Ð½Ð¸";
}

if(Ext.TabPanelItem){
  Ext.TabPanelItem.prototype.closeText = "ÐÐ°ÑÐ²Ð¾ÑÐ¸ ÑÐ°Ð±";
}

if(Ext.form.Field){
  Ext.form.Field.prototype.invalidText = "ÐÐµÐ²Ð°Ð»Ð¸Ð´Ð½Ð° ÑÑÐ¾Ð¹Ð½Ð¾ÑÑ Ð½Ð° Ð¿Ð¾Ð»ÐµÑÐ¾";
}

if(Ext.LoadMask){
  Ext.LoadMask.prototype.msg = "ÐÐ°ÑÐµÐ¶Ð´Ð°Ð½Ðµ...";
}

Date.monthNames = [
  "Ð¯Ð½ÑÐ°ÑÐ¸",
  "Ð¤ÐµÐ²ÑÑÐ°ÑÐ¸",
  "ÐÐ°ÑÑ",
  "ÐÐ¿ÑÐ¸Ð»",
  "ÐÐ°Ð¹",
  "Ð®Ð½Ð¸",
  "Ð®Ð»Ð¸",
  "ÐÐ²Ð³ÑÑÑ",
  "Ð¡ÐµÐ¿ÑÐµÐ¼Ð²ÑÐ¸",
  "ÐÐºÑÐ¾Ð¼Ð²ÑÐ¸",
  "ÐÐ¾ÐµÐ¼Ð²ÑÐ¸",
  "ÐÐµÐºÐµÐ¼Ð²ÑÐ¸"
];

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

Date.dayNames = [
  "ÐÐµÐ´ÐµÐ»Ñ",
  "ÐÐ¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº",
  "ÐÑÐ¾ÑÐ½Ð¸Ðº",
  "Ð¡ÑÑÐ´Ð°",
  "Ð§ÐµÑÐ²ÑÑÑÑÐº",
  "ÐÐµÑÑÐº",
  "Ð¡ÑÐ±Ð¾ÑÐ°"
];

if(Ext.MessageBox){
  Ext.MessageBox.buttonText = {
    ok     : "OK",
    cancel : "ÐÑÐ¼ÐµÐ½Ð¸",
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
    todayText         : "ÐÐ½ÐµÑ",
    minText           : "Ð¢Ð°Ð·Ð¸ Ð´Ð°ÑÐ° Ðµ Ð¿ÑÐµÐ´Ð¸ Ð¼Ð¸Ð½Ð¸Ð¼Ð°Ð»Ð½Ð°ÑÐ°",
    maxText           : "Ð¢Ð°Ð·Ð¸ Ð´Ð°ÑÐ° Ðµ ÑÐ»ÐµÐ´ Ð¼Ð°ÐºÑÐ¸Ð¼Ð°Ð»Ð½Ð°ÑÐ°",
    disabledDaysText  : "",
    disabledDatesText : "",
    monthNames        : Date.monthNames,
    dayNames          : Date.dayNames,
    nextText          : 'Ð¡Ð»ÐµÐ´Ð²Ð°Ñ Ð¼ÐµÑÐµÑ (Control+Right)',
    prevText          : 'ÐÑÐµÐ´Ð¸ÑÐµÐ½ Ð¼ÐµÑÐµÑ (Control+Left)',
    monthYearText     : 'ÐÐ·Ð±ÐµÑÐ¸ Ð¼ÐµÑÐµÑ (Control+Up/Down Ð·Ð° Ð¿ÑÐµÐ¼ÐµÑÑÐ²Ð°Ð½Ðµ Ð¿Ð¾ Ð³Ð¾Ð´Ð¸Ð½Ð¸)',
    todayTip          : "{0} (Spacebar)",
    format            : "d.m.y",
    okText            : "&#160;OK&#160;",
    cancelText        : "ÐÑÐ¼ÐµÐ½Ð¸",
    startDay          : 1
  });
}

if(Ext.PagingToolbar){
  Ext.apply(Ext.PagingToolbar.prototype, {
    beforePageText : "Ð¡ÑÑÐ°Ð½Ð¸ÑÐ°",
    afterPageText  : "Ð¾Ñ {0}",
    firstText      : "ÐÑÑÐ²Ð° ÑÑÑÐ°Ð½Ð¸ÑÐ°",
    prevText       : "ÐÑÐµÐ´Ð¸ÑÐ½Ð° ÑÑÑÐ°Ð½Ð¸ÑÐ°",
    nextText       : "Ð¡Ð»ÐµÐ´Ð²Ð°ÑÐ° ÑÑÑÐ°Ð½Ð¸ÑÐ°",
    lastText       : "ÐÐ¾ÑÐ»ÐµÐ´Ð½Ð° ÑÑÑÐ°Ð½Ð¸ÑÐ°",
    refreshText    : "ÐÑÐµÐ·Ð°ÑÐµÐ´Ð¸",
    displayMsg     : "ÐÐ¾ÐºÐ°Ð·Ð²Ð°Ð¹ÐºÐ¸ {0} - {1} Ð¾Ñ {2}",
    emptyMsg       : 'ÐÑÐ¼Ð° Ð´Ð°Ð½Ð½Ð¸ Ð·Ð° Ð¿Ð¾ÐºÐ°Ð·Ð²Ð°Ð½Ðµ'
  });
}

if(Ext.form.TextField){
  Ext.apply(Ext.form.TextField.prototype, {
    minLengthText : "ÐÐ¸Ð½Ð¸Ð¼Ð°Ð»Ð½Ð°ÑÐ° Ð´ÑÐ»Ð¶Ð¸Ð½Ð° Ð½Ð° ÑÐ¾Ð²Ð° Ð¿Ð¾Ð»Ðµ Ðµ {0}",
    maxLengthText : "ÐÐ°ÐºÑÐ¸Ð¼Ð°Ð»Ð½Ð°ÑÐ° Ð´ÑÐ»Ð¶Ð¸Ð½Ð° Ð½Ð° ÑÐ¾Ð²Ð° Ð¿Ð¾Ð»Ðµ Ðµ {0}",
    blankText     : "Ð¢Ð¾Ð²Ð° Ð¿Ð¾Ð»Ðµ Ðµ Ð·Ð°Ð´ÑÐ»Ð¶Ð¸ÑÐµÐ»Ð½Ð¾",
    regexText     : "",
    emptyText     : null
  });
}

if(Ext.form.NumberField){
  Ext.apply(Ext.form.NumberField.prototype, {
    minText : "ÐÐ¸Ð½Ð¸Ð¼Ð°Ð»Ð½Ð°ÑÐ° ÑÑÐ¾Ð¹Ð½Ð¾ÑÑ Ð·Ð° ÑÐ¾Ð²Ð° Ð¿Ð¾Ð»Ðµ Ðµ {0}",
    maxText : "ÐÐ°ÐºÑÐ¸Ð¼Ð°Ð»Ð½Ð°ÑÐ° ÑÑÐ¾Ð¹Ð½Ð¾ÑÑ Ð·Ð° ÑÐ¾Ð²Ð° Ð¿Ð¾Ð»Ðµ Ðµ {0}",
    nanText : "{0} Ð½Ðµ Ðµ Ð²Ð°Ð»Ð¸Ð´Ð½Ð¾ ÑÐ¸ÑÐ»Ð¾"
  });
}

if(Ext.form.DateField){
  Ext.apply(Ext.form.DateField.prototype, {
    disabledDaysText  : "ÐÐµÐ´Ð¾ÑÑÑÐ¿ÐµÐ½",
    disabledDatesText : "ÐÐµÐ´Ð¾ÑÑÑÐ¿ÐµÐ½",
    minText           : "ÐÐ°ÑÐ°ÑÐ° Ð² ÑÐ¾Ð²Ð° Ð¿Ð¾Ð»Ðµ ÑÑÑÐ±Ð²Ð° Ð´Ð° Ðµ ÑÐ»ÐµÐ´ {0}",
    maxText           : "ÐÐ°ÑÐ°ÑÐ° Ð² ÑÐ¾Ð²Ð° Ð¿Ð¾Ð»Ðµ ÑÑÑÐ±Ð²Ð° Ð´Ð° Ðµ Ð¿ÑÐµÐ´Ð¸ {0}",
    invalidText       : "{0} Ð½Ðµ Ðµ Ð²Ð°Ð»Ð¸Ð´Ð½Ð° Ð´Ð°ÑÐ° - ÑÑÑÐ±Ð²Ð° Ð´Ð° Ð±ÑÐ´Ðµ Ð²ÑÐ² ÑÐ¾ÑÐ¼Ð°Ñ {1}",
    format            : "d.m.y",
    altFormats        : "d.m.y|d/m/Y|d-m-y|d-m-Y|d/m|d-m|dm|dmy|dmY|d|Y-m-d"
  });
}

if(Ext.form.ComboBox){
  Ext.apply(Ext.form.ComboBox.prototype, {
    loadingText       : "ÐÐ°ÑÐµÐ¶Ð´Ð°Ð½Ðµ...",
    valueNotFoundText : undefined
  });
}

if(Ext.form.VTypes){
  Ext.apply(Ext.form.VTypes, {
    emailText    : 'Ð¢Ð¾Ð²Ð° Ð¿Ð¾Ð»Ðµ ÑÑÑÐ±Ð²Ð° Ð´Ð° Ð±ÑÐ´Ðµ ÐµÐ¼ÐµÐ¹Ð» Ð²ÑÐ² ÑÐ¾ÑÐ¼Ð°Ñ "user@domain.com"',
    urlText      : 'Ð¢Ð¾Ð²Ð° Ð¿Ð¾Ð»Ðµ ÑÑÑÐ±Ð²Ð° Ð´Ð° Ð±ÑÐ´Ðµ URL Ð²ÑÐ² ÑÐ¾ÑÐ¼Ð°Ñ "http:/'+'/www.domain.com"',
    alphaText    : 'Ð¢Ð¾Ð²Ð° Ð¿Ð¾Ð»Ðµ ÑÑÑÐ±Ð²Ð° Ð´Ð° ÑÑÐ´ÑÑÐ¶Ð° ÑÐ°Ð¼Ð¾ Ð±ÑÐºÐ²Ð¸ Ð¸ _',
    alphanumText : 'Ð¢Ð¾Ð²Ð° Ð¿Ð¾Ð»Ðµ ÑÑÑÐ±Ð²Ð° Ð´Ð° ÑÑÐ´ÑÑÐ¶Ð° ÑÐ°Ð¼Ð¾ Ð±ÑÐºÐ²Ð¸, ÑÐ¸ÑÑÐ¸ Ð¸ _'
  });
}

if(Ext.form.HtmlEditor){
  Ext.apply(Ext.form.HtmlEditor.prototype, {
    createLinkText : 'ÐÐ¾Ð»Ñ, Ð²ÑÐ²ÐµÐ´ÐµÑÐµ URL Ð·Ð° Ð²ÑÑÐ·ÐºÐ°ÑÐ°:',
    buttonTips : {
      bold : {
        title: 'Bold (Ctrl+B)',
        text: 'Ð£Ð´ÐµÐ±ÐµÐ»ÑÐ²Ð° Ð¸Ð·Ð±ÑÐ°Ð½Ð¸Ñ ÑÐµÐºÑÑ.',
        cls: 'x-html-editor-tip'
      },
      italic : {
        title: 'Italic (Ctrl+I)',
        text: 'ÐÑÐ°Ð²Ð¸ Ð¸Ð·Ð±ÑÐ°Ð½Ð¸Ñ ÑÐµÐºÑÑ ÐºÑÑÑÐ¸Ð².',
        cls: 'x-html-editor-tip'
      },
      underline : {
        title: 'Underline (Ctrl+U)',
        text: 'ÐÐ¾Ð´ÑÐµÑÑÐ°Ð²Ð° Ð¸Ð·Ð±ÑÐ°Ð½Ð¸Ñ ÑÐµÐºÑÑ.',
        cls: 'x-html-editor-tip'
      },
      increasefontsize : {
        title: 'Ð£Ð³Ð¾Ð»ÐµÐ¼Ð¸ ÑÐµÐºÑÑÐ°',
        text: 'Ð£Ð³Ð¾Ð»ÐµÐ¼ÑÐ²Ð° ÑÐ°Ð·Ð¼ÐµÑÐ° Ð½Ð° ÑÑÐ¸ÑÑÐ°.',
        cls: 'x-html-editor-tip'
      },
      decreasefontsize : {
        title: 'ÐÐ°Ð¼Ð°Ð»Ð¸ ÑÐµÐºÑÑÐ°',
        text: 'ÐÐ°Ð¼Ð°Ð»ÑÐ²Ð° ÑÐ°Ð·Ð¼ÐµÑÐ° Ð½Ð° ÑÑÐ¸ÑÑÐ°.',
        cls: 'x-html-editor-tip'
      },
      backcolor : {
        title: 'Ð¦Ð²ÑÑ Ð½Ð° Ð¼Ð°ÑÐºÐ¸ÑÐ°Ð½Ð¸Ñ ÑÐµÐºÑÑ',
        text: 'ÐÑÐ¾Ð¼ÐµÐ½Ñ ÑÐ¾Ð½Ð¾Ð²Ð¸Ñ ÑÐ²ÑÑ Ð½Ð° Ð¸Ð·Ð±ÑÐ°Ð½Ð¸Ñ ÑÐµÐºÑÑ.',
        cls: 'x-html-editor-tip'
      },
      forecolor : {
        title: 'Ð¦Ð²ÑÑ Ð½Ð° ÑÑÐ¸ÑÑÐ°',
        text: 'ÐÑÐ¾Ð¼ÐµÐ½Ñ ÑÐ²ÐµÑÐ° Ð½Ð° Ð¸Ð·Ð±ÑÐ°Ð½Ð¸Ñ ÑÐµÐºÑÑ.',
        cls: 'x-html-editor-tip'
      },
      justifyleft : {
        title: 'ÐÑÐ²Ð¾ Ð¿Ð¾Ð´ÑÐ°Ð²Ð½ÑÐ²Ð°Ð½Ðµ',
        text: 'ÐÐ¾Ð´ÑÐ°Ð²Ð½ÑÐ²Ð° ÑÐµÐºÑÑÐ° Ð½Ð° Ð»ÑÐ²Ð¾.',
        cls: 'x-html-editor-tip'
      },
      justifycenter : {
        title: 'Ð¦ÐµÐ½ÑÑÐ¸ÑÐ°Ð½Ðµ',
        text: 'Ð¦ÐµÐ½ÑÑÐ¸ÑÐ° ÑÐµÐºÑÑÐ°.',
        cls: 'x-html-editor-tip'
      },
      justifyright : {
        title: 'ÐÑÑÐ½Ð¾ Ð¿Ð¾Ð´ÑÐ°Ð²Ð½ÑÐ²Ð°Ð½Ðµ',
        text: 'ÐÐ¾Ð´ÑÐ°Ð²Ð½ÑÐ²Ð° ÑÐµÐºÑÑÐ° Ð½Ð° Ð´ÑÑÐ½Ð¾.',
        cls: 'x-html-editor-tip'
      },
      insertunorderedlist : {
        title: 'ÐÐµÐ½Ð¾Ð¼ÐµÑÐ¸ÑÐ°Ð½ ÑÐ¿Ð¸ÑÑÐº',
        text: 'ÐÐ°Ð¿Ð¾ÑÐ²Ð° Ð½ÐµÐ½Ð¾Ð¼ÐµÑÐ¸ÑÐ°Ð½ ÑÐ¿Ð¸ÑÑÐº.',
        cls: 'x-html-editor-tip'
      },
      insertorderedlist : {
        title: 'ÐÐ¾Ð¼ÐµÑÐ¸ÑÐ°Ð½ ÑÐ¿Ð¸ÑÑÐº',
        text: 'ÐÐ°Ð¿Ð¾ÑÐ²Ð° Ð½Ð¾Ð¼ÐµÑÐ¸ÑÐ°Ð½ ÑÐ¿Ð¸ÑÑÐº.',
        cls: 'x-html-editor-tip'
      },
      createlink : {
        title: 'Ð¥Ð¸Ð¿ÐµÑÐ²ÑÑÐ·ÐºÐ°',
        text: 'ÐÑÐµÐ²ÑÑÑÐ° Ð¸Ð·Ð±ÑÐ°Ð½Ð¸Ñ ÑÐµÐºÑÑ Ð² ÑÐ¸Ð¿ÐµÑÐ²ÑÑÐ·ÐºÐ°.',
        cls: 'x-html-editor-tip'
      },
      sourceedit : {
        title: 'Ð ÐµÐ´Ð°ÐºÑÐ¸ÑÐ°Ð½Ðµ Ð½Ð° ÐºÐ¾Ð´Ð°',
        text: 'ÐÑÐµÐ¼Ð¸Ð½Ð°Ð²Ð°Ð½Ðµ Ð² ÑÐµÐ¶Ð¸Ð¼ Ð½Ð° ÑÐµÐ´Ð°ÐºÑÐ¸ÑÐ°Ð½Ðµ Ð½Ð° ÐºÐ¾Ð´Ð°.',
        cls: 'x-html-editor-tip'
      }
    }
  });
}

if(Ext.grid.GridView){
  Ext.apply(Ext.grid.GridView.prototype, {
    sortAscText  : "ÐÐ¾Ð´ÑÐµÐ´Ð¸ Ð² Ð½Ð°ÑÐ°ÑÑÐ²Ð°Ñ ÑÐµÐ´",
    sortDescText : "ÐÐ¾Ð´ÑÐµÐ´Ð¸ Ð² Ð½Ð°Ð¼Ð°Ð»ÑÐ²Ð°Ñ ÑÐµÐ´",
    lockText     : "ÐÐ°ÐºÐ»ÑÑÐ¸ ÐºÐ¾Ð»Ð¾Ð½Ð°",
    unlockText   : "ÐÑÐºÐ»ÑÑÐ¸ ÐºÐ¾Ð»Ð¾Ð½Ð°",
    columnsText  : "ÐÐ¾Ð»Ð¾Ð½Ð¸"
  });
}

if(Ext.grid.PropertyColumnModel){
  Ext.apply(Ext.grid.PropertyColumnModel.prototype, {
    nameText   : "ÐÐ¼Ðµ",
    valueText  : "Ð¡ÑÐ¾Ð¹Ð½Ð¾ÑÑ",
    dateFormat : "d.m.Y"
  });
}

if(Ext.layout.BorderLayout && Ext.layout.BorderLayout.SplitRegion){
  Ext.apply(Ext.layout.BorderLayout.SplitRegion.prototype, {
    splitTip            : "ÐÐ»Ð°ÑÐµÑÐµ Ñ Ð¼Ð¸ÑÐºÐ°ÑÐ° Ð·Ð° Ð´Ð° Ð¿ÑÐ¾Ð¼ÐµÐ½Ð¸ÑÐµ ÑÐ°Ð·Ð¼ÐµÑÐ°.",
    collapsibleSplitTip : "ÐÐ»Ð°ÑÐµÑÐµ Ñ Ð¼Ð¸ÑÐºÐ°ÑÐ° Ð·Ð° Ð´Ð° Ð¿ÑÐ¾Ð¼ÐµÐ½Ð¸ÑÐµ ÑÐ°Ð·Ð¼ÐµÑÐ°. Ð§ÑÐºÐ½ÐµÑÐµ Ð´Ð²Ð° Ð¿ÑÑÐ¸ Ð·Ð° Ð´Ð° ÑÐºÑÐ¸ÐµÑÐµ."
  });
}
