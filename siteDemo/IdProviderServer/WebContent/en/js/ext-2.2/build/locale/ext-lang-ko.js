/**
 * Korean Translations By nicetip
 * 05 September 2007
 * Modify by techbug / 25 February 2008
 */

Ext.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">ë¡ë©ì¤...</div>';

if(Ext.View){
   Ext.View.prototype.emptyText = "";
}

if(Ext.grid.GridPanel){
   Ext.grid.GridPanel.prototype.ddText = "{0} ê°ê° ì íëììµëë¤.";
}

if(Ext.TabPanelItem){
   Ext.TabPanelItem.prototype.closeText = "ë«ê¸°";
}

if(Ext.form.Field){
   Ext.form.Field.prototype.invalidText = "ì¬ë°ë¥¸ ê°ì´ ìëëë¤.";
}

if(Ext.LoadMask){
    Ext.LoadMask.prototype.msg = "ë¡ë©ì¤...";
}

Date.monthNames = [
   "1ì",
   "2ì",
   "3ì",
   "4ì",
   "5ì",
   "6ì",
   "7ì",
   "8ì",
   "9ì",
   "10ì",
   "11ì",
   "12ì"
];

Date.dayNames = [
   "ì¼",
   "ì",
   "í",
   "ì",
   "ëª©",
   "ê¸",
   "í "
];

if(Ext.MessageBox){
   Ext.MessageBox.buttonText = {
      ok     : "íì¸",
      cancel : "ì·¨ì",
      yes    : "ì",
      no     : "ìëì¤"
   };
}

if(Ext.util.Format){
   Ext.util.Format.date = function(v, format){
      if(!v) return "";
      if(!(v instanceof Date)) v = new Date(Date.parse(v));
      return v.dateFormat(format || "m/d/Y");
   };
}

if(Ext.DatePicker){
   Ext.apply(Ext.DatePicker.prototype, {
      todayText         : "ì¤ë",
      minText           : "ìµì ë ì§ë²ìë¥¼ ëììµëë¤.",
      maxText           : "ìµë ë ì§ë²ìë¥¼ ëììµëë¤.",
      disabledDaysText  : "",
      disabledDatesText : "",
      monthNames        : Date.monthNames,
      dayNames          : Date.dayNames,
      nextText          : 'ë¤ìë¬(ì»¨í¸ë¡¤í¤+ì¤ë¥¸ìª½ íì´í)',
      prevText          : 'ì´ì ë¬ (ì»¨í¸ë¡¤í¤+ì¼ì¡± íì´í)',
      monthYearText     : 'ìì ì íí´ì£¼ì¸ì. (ì»¨í¸ë¡¤í¤+ì/ìë íì´í)',
      todayTip          : "{0} (ì¤íì´ì¤ë°)",
      format            : "m/d/y",
      okText            : "íì¸",
      cancelText        : "ì·¨ì",
      startDay          : 0
   });
}

if(Ext.PagingToolbar){
   Ext.apply(Ext.PagingToolbar.prototype, {
      beforePageText : "íì´ì§",
      afterPageText  : "/ {0}",
      firstText      : "ì²« íì´ì§",
      prevText       : "ì´ì  íì´ì§",
      nextText       : "ë¤ì íì´ì§",
      lastText       : "ë§ì§ë§ íì´ì§",
      refreshText    : "ìë¡ê³ ì¹¨",
      displayMsg     : "ì ì²´ {2} ì¤ {0} - {1}",
      emptyMsg       : 'íìí  ë°ì´í°ê° ììµëë¤.'
   });
}

if(Ext.form.TextField){
   Ext.apply(Ext.form.TextField.prototype, {
      minLengthText : "ìµìê¸¸ì´ë {0}ìëë¤.",
      maxLengthText : "ìµëê¸¸ì´ë {0}ìëë¤.",
      blankText     : "ê°ì ìë ¥í´ì£¼ì¸ì.",
      regexText     : "",
      emptyText     : null
   });
}

if(Ext.form.NumberField){
   Ext.apply(Ext.form.NumberField.prototype, {
      minText : "ìµìê°ì {0}ìëë¤.",
      maxText : "ìµëê°ì {0}ìëë¤.",
      nanText : "{0}ë ì¬ë°ë¥¸ ì«ìê° ìëëë¤."
   });
}

if(Ext.form.DateField){
   Ext.apply(Ext.form.DateField.prototype, {
      disabledDaysText  : "ë¹íì±",
      disabledDatesText : "ë¹íì±",
      minText           : "{0}ì¼ ì´íì¬ì¼ í©ëë¤.",
      maxText           : "{0}ì¼ ì´ì ì´ì´ì¼ í©ëë¤.",
      invalidText       : "{0}ë ì¬ë°ë¥¸ ë ì§íìì´ ìëëë¤. - ë¤ìê³¼ ê°ì íìì´ì´ì¼ í©ëë¤. {1}",
      format            : "m/d/y"
   });
}

if(Ext.form.ComboBox){
   Ext.apply(Ext.form.ComboBox.prototype, {
      loadingText       : "ë¡ë©ì¤...",
      valueNotFoundText : undefined
   });
}

if(Ext.form.VTypes){
   Ext.apply(Ext.form.VTypes, {
      emailText    : 'ì´ë©ì¼ ì£¼ì íìì ë§ê² ìë ¥í´ì¼í©ëë¤. (ì: "user@domain.com")',
      urlText      : 'URL íìì ë§ê² ìë ¥í´ì¼í©ëë¤. (ì: "http:/'+'/www.domain.com")',
      alphaText    : 'ìë¬¸, ë°ì¤(_)ë§ ìë ¥í  ì ììµëë¤.',
      alphanumText : 'ìë¬¸, ì«ì, ë°ì¤(_)ë§ ìë ¥í  ì ììµëë¤.'
   });
}

if(Ext.form.HtmlEditor){
   Ext.apply(Ext.form.HtmlEditor.prototype, {
   createLinkText : 'URLì ìë ¥í´ì£¼ì¸ì:',
   buttonTips : {
            bold : {
               title: 'êµµê² (Ctrl+B)',
               text: 'ì íí íì¤í¸ë¥¼ êµµê² íìí©ëë¤.',
               cls: 'x-html-editor-tip'
            },
            italic : {
               title: 'ê¸°ì¸ìê¼´ (Ctrl+I)',
               text: 'ì íí íì¤í¸ë¥¼ ê¸°ì¸ìê¼´ë¡ íìí©ëë¤.',
               cls: 'x-html-editor-tip'
            },
            underline : {
               title: 'ë°ì¤ (Ctrl+U)',
               text: 'ì íí íì¤í¸ì ë°ì¤ì íìí©ëë¤.',
               cls: 'x-html-editor-tip'
           },
           increasefontsize : {
               title: 'ê¸ê¼´í¬ê¸° ëë¦¼',
               text: 'ê¸ê¼´ í¬ê¸°ë¥¼ í¬ê² í©ëë¤.',
               cls: 'x-html-editor-tip'
           },
           decreasefontsize : {
               title: 'ê¸ê¼´í¬ê¸° ì¤ì',
               text: 'ê¸ê¼´ í¬ê¸°ë¥¼ ìê² í©ëë¤.',
               cls: 'x-html-editor-tip'
           },
           backcolor : {
               title: 'íì¤í¸ ê°ì¡° ì',
               text: 'ì íí íì¤í¸ì ë°°ê²½ìì ë³ê²½í©ëë¤.',
               cls: 'x-html-editor-tip'
           },
           forecolor : {
               title: 'ê¸ê¼´ì',
               text: 'ì íí íì¤í¸ì ìì ë³ê²½í©ëë¤.',
               cls: 'x-html-editor-tip'
           },
           justifyleft : {
               title: 'íì¤í¸ ì¼ìª½ ë§ì¶¤',
               text: 'ì¼ìª½ì íì¤í¸ë¥¼ ë§ì¶¥ëë¤.',
               cls: 'x-html-editor-tip'
           },
           justifycenter : {
               title: 'ê°ì´ë° ë§ì¶¤',
               text: 'ê°ì´ë°ì íì¤í¸ë¥¼ ë§ì¶¥ëë¤.',
               cls: 'x-html-editor-tip'
           },
           justifyright : {
               title: 'íì¤í¸ ì¤ë¥¸ìª½ ë§ì¶¤',
               text: 'ì¤ë¥¸ìª½ì íì¤í¸ë¥¼ ë§ì¶¥ëë¤.',
               cls: 'x-html-editor-tip'
           },
           insertunorderedlist : {
               title: 'ê¸ë¨¸ë¦¬ ê¸°í¸',
               text: 'ê¸ë¨¸ë¦¬ ê¸°í¸ ëª©ë¡ì ììí©ëë¤.',
               cls: 'x-html-editor-tip'
           },
           insertorderedlist : {
               title: 'ë²í¸ ë§¤ê¸°ê¸°',
               text: 'ë²í¸ ë§¤ê¸°ê¸° ëª©ë¡ì ììí©ëë¤.',
               cls: 'x-html-editor-tip'
           },
           createlink : {
               title: 'íì´í¼ë§í¬',
               text: 'ì íí íì¤í¸ì íì´í¼ë§í¬ë¥¼ ë§ë­ëë¤.',
               cls: 'x-html-editor-tip'
           },
           sourceedit : {
               title: 'ìì¤í¸ì§',
               text: 'ìì¤í¸ì§ ëª¨ëë¡ ë³íí©ëë¤.',
               cls: 'x-html-editor-tip'
           }
        }
   });
}

if(Ext.grid.GridView){
   Ext.apply(Ext.grid.GridView.prototype, {
      sortAscText  : "ì¤ë¦ì°¨ì ì ë ¬",
      sortDescText : "ë´ë¦¼ì°¨ì ì ë ¬",
      lockText     : "ì¹¼ë¼ ì ê¸",
      unlockText   : "ì¹¼ë¼ ì ê¸í´ì ",
      columnsText  : "ì¹¼ë¼ ëª©ë¡"
   });
}

if(Ext.grid.GroupingView){
  Ext.apply(Ext.grid.GroupingView.prototype, {
    emptyGroupText : '(None)',
    groupByText    : 'íì¬ íëë¡ ê·¸ë£¹íí©ëë¤.',
    showGroupsText : 'ê·¸ë£¹ì¼ë¡ ë³´ì¬ì£¼ê¸°'

  });
}

if(Ext.grid.PropertyColumnModel){
   Ext.apply(Ext.grid.PropertyColumnModel.prototype, {
      nameText   : "í­ëª©",
      valueText  : "ê°",
      dateFormat : "m/j/Y"
   });
}

if(Ext.layout.BorderLayout && Ext.layout.BorderLayout.SplitRegion){
   Ext.apply(Ext.layout.BorderLayout.SplitRegion.prototype, {
      splitTip            : "í¬ê¸°ë³ê²½ì ìí´ ëëê·¸íì¸ì.",
      collapsibleSplitTip : "í¬ê¸°ë³ê²½ì ìí´ ëëê·¸, ì¨ê¸°ê¸° ìí´ ëë¸í´ë¦­ íì¸ì."
   });
}

