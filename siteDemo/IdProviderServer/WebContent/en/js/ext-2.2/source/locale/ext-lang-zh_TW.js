ï»¿/*
 * Traditional Chinese translation
 * By hata1234
 * 09 April 2007
 */

Ext.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">è®åä¸­...</div>';

if(Ext.View){
    Ext.View.prototype.emptyText = "";
}

if(Ext.grid.GridPanel){
    Ext.grid.GridPanel.prototype.ddText = "é¸æäº {0} è¡";
}

if(Ext.TabPanelItem){
    Ext.TabPanelItem.prototype.closeText = "ééæ­¤æ¨ç±¤";
}

if(Ext.form.Field){
    Ext.form.Field.prototype.invalidText = "æ¸å¼ä¸ç¬¦åæ¬ä½è¦å®";
}

if(Ext.LoadMask){
    Ext.LoadMask.prototype.msg = "è®åä¸­...";
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
        ok : "ç¢ºå®",
        cancel : "åæ¶",
        yes : "æ¯",
        no : "å¦"
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
       todayText         : "ä»å¤©",
       minText           : "æ¥æå¿é å¤§æ¼æå°å®¹è¨±æ¥æ",
       maxText           : "æ¥æå¿é å°æ¼æå¤§å®¹è¨±æ¥æ",
       disabledDaysText  : "",
       disabledDatesText : "",
       monthNames        : Date.monthNames,
       dayNames          : Date.dayNames,       
       nextText          : "ä¸åæ (Ctrl+å³æ¹åéµ)",
       prevText          : "ä¸åæ (Ctrl+å·¦æ¹åéµ)",
       monthYearText     : "é¸ææä»½ (Ctrl+ä¸/ä¸æ¹åéµé¸æå¹´ä»½)",
       todayTip          : "{0} (ç©ºç½éµ)",
       format            : "y/m/d",
       okText            : "ç¡®å®",
       cancelText        : "åæ¶"
    });
}

if(Ext.PagingToolbar){
    Ext.apply(Ext.PagingToolbar.prototype, {
       beforePageText : "ç¬¬",
       afterPageText  : "é ï¼å±{0}é ",
       firstText      : "ç¬¬ä¸é ",
       prevText       : "ä¸ä¸é ",
       nextText       : "ä¸ä¸é ",
       lastText       : "æå¾é ",
       refreshText    : "éæ°æ´ç",
       displayMsg     : "é¡¯ç¤º{0} - {1}é ,å±{2}é ",
       emptyMsg       : 'æ²æä»»ä½è³æ'
    });
}

if(Ext.form.TextField){
    Ext.apply(Ext.form.TextField.prototype, {
       minLengthText : "æ­¤æ¬ä½æå°è¦è¼¸å¥ {0} åå­",
       maxLengthText : "æ­¤æ¬ä½æå¤è¼¸å¥ {0} åå­",
       blankText     : "æ­¤æ¬ä½çºå¿å¡«",
       regexText     : "",
       emptyText     : null
    });
}

if(Ext.form.NumberField){
    Ext.apply(Ext.form.NumberField.prototype, {
       minText : "æ­¤æ¬ä½ä¹æ¸å¼å¿é å¤§æ¼ {0}",
       maxText : "æ­¤æ¬ä½ä¹æ¸å¼å¿é å°æ¼ {0}",
       nanText : "{0} ä¸æ¯åæ³çæ¸å­"
    });
}

if(Ext.form.DateField){
    Ext.apply(Ext.form.DateField.prototype, {
       disabledDaysText  : "ç¡æ³ä½¿ç¨",
       disabledDatesText : "ç¡æ³ä½¿ç¨",
       minText           : "æ­¤æ¬ä½ä¹æ¥æå¿é å¨ {0} ä¹å¾",
       maxText           : "æ­¤æ¬ä½ä¹æ¥æå¿é å¨ {0} ä¹å",
       invalidText       : "{0} ä¸æ¯æ­£ç¢ºçæ¥ææ ¼å¼ - å¿é åæ¯ ã {1} ã éæ¨£çæ ¼å¼",
       format            : "Y/m/d"
    });
}

if(Ext.form.ComboBox){
    Ext.apply(Ext.form.ComboBox.prototype, {
       loadingText       : "è®åä¸­ ...",
       valueNotFoundText : undefined
    });
}

if(Ext.form.VTypes){
    Ext.apply(Ext.form.VTypes, {
       emailText    : 'æ­¤æ¬ä½å¿é è¼¸å¥å "user@domain.com" ä¹E-Mailæ ¼å¼',
       urlText      : 'æ­¤æ¬ä½å¿é è¼¸å¥å "http:/'+'/www.domain.com" ä¹ç¶²åæ ¼å¼',
       alphaText    : 'æ­¤æ¬ä½åè½è¼¸å¥åå½¢è±æå­æ¯ååºç·( _ )ç¬¦è',
       alphanumText : 'æ­¤æ¬ä½åè½è¼¸å¥åå½¢è±æå­æ¯ãæ¸å­ååºç·( _ )ç¬¦è'
    });
}

if(Ext.grid.GridView){
    Ext.apply(Ext.grid.GridView.prototype, {
       sortAscText  : "æ­£åæåº",
       sortDescText : "ååæåº",
       lockText     : "éå®æ¬ä½",
       unlockText   : "è§£éæ¬ä½éå®",
       columnsText  : "æ¬ä½"
    });
}

if(Ext.grid.PropertyColumnModel){
    Ext.apply(Ext.grid.PropertyColumnModel.prototype, {
       nameText   : "åç¨±",
       valueText  : "æ¸å¼",
       dateFormat : "Y/m/d"
    });
}

if(Ext.layout.BorderLayout && Ext.layout.BorderLayout.SplitRegion){
    Ext.apply(Ext.layout.BorderLayout.SplitRegion.prototype, {
       splitTip            : "ææ³ç¸®æ¾å¤§å°.",
       collapsibleSplitTip : "ææ³ç¸®æ¾å¤§å°. æ»é¼ éæé±è."
    });
}
