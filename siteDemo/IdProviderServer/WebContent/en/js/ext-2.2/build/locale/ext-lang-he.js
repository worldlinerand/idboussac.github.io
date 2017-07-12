/**
 * Hebrew Translations
 * By spartacus (from forums) 06-12-2007
 */

Ext.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">...èåòï</div>';

if(Ext.View){
  Ext.View.prototype.emptyText = "";
}

if(Ext.grid.GridPanel){
  Ext.grid.GridPanel.prototype.ddText = "ùåøåú ðáçøåú {0}";
}

if(Ext.TabPanelItem){
  Ext.TabPanelItem.prototype.closeText = "ñâåø ìùåðéú";
}

if(Ext.form.Field){
  Ext.form.Field.prototype.invalidText = "äòøê áùãä æä ùâåé";
}

if(Ext.LoadMask){
  Ext.LoadMask.prototype.msg = "...èåòï";
}

Date.monthNames = [
  "éðåàø",
  "ôáøåàø",
  "îøõ",
  "àôøéì",
  "îàé",
  "éåðé",
  "éåìé",
  "àåâåñè",
  "ñôèîáø",
  "àå÷èåáø",
  "ðåáîáø",
  "ãöîáø"
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
  "à",
  "á",
  "â",
  "ã",
  "ä",
  "å",
  "ù"
];

Date.getShortDayName = function(day) {
  return Date.dayNames[day].substring(0, 3);
};

if(Ext.MessageBox){
  Ext.MessageBox.buttonText = {
    ok     : "àéùåø",
    cancel : "áéèåì",
    yes    : "ëï",
    no     : "ìà"
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
    todayText         : "äéåí",
    minText           : ".úàøéê æä çì ÷åãí ìúàøéê ääúçìúé ùð÷áò",
    maxText           : ".úàøéê æä çì ìàçø äúàøéê äñåôé ùð÷áò",
    disabledDaysText  : "",
    disabledDatesText : "",
    monthNames        : Date.monthNames,
    dayNames          : Date.dayNames,
    nextText          : '(Control+Right) äçåãù äáà',
    prevText          : '(Control+Left) äçåãù ä÷åãí',
    monthYearText     : '(ìáçéøú ùðä Control+Up/Down) áçø çåãù',
    todayTip          : "î÷ù øååç) {0})",
    format            : "d/m/Y",
    okText            : "&#160;àéùåø&#160;",
    cancelText        : "áéèåì",
    startDay          : 0
  });
}

if(Ext.PagingToolbar){
  Ext.apply(Ext.PagingToolbar.prototype, {
    beforePageText : "òîåã",
    afterPageText  : "{0} îúåê",
    firstText      : "òîåã øàùåï",
    prevText       : "òîåã ÷åãí",
    nextText       : "òîåã äáà",
    lastText       : "òîåã àçøåï",
    refreshText    : "øòðï",
    displayMsg     : "îöéâ {0} - {1} îúåê {2}",
    emptyMsg       : 'àéï îéãò ìäöâä'
  });
}

if(Ext.form.TextField){
  Ext.apply(Ext.form.TextField.prototype, {
    minLengthText : "{0} äàåøê äîéðéîàìé ìùãä æä äåà",
    maxLengthText : "{0} äàåøê äîéøáé ìùãä æä äåà",
    blankText     : "ùãä æä äëøçé",
    regexText     : "",
    emptyText     : null
  });
}

if(Ext.form.NumberField){
  Ext.apply(Ext.form.NumberField.prototype, {
    minText : "{0} äòøê äîéðéîàìé ìùãä æä äåà",
    maxText : "{0} äòøê äîéøáé ìùãä æä äåà",
    nanText : "äåà ìà îñôø {0}"
  });
}

if(Ext.form.DateField){
  Ext.apply(Ext.form.DateField.prototype, {
    disabledDaysText  : "îðåèøì",
    disabledDatesText : "îðåèøì",
    minText           : "{0} äúàøéê áùãä æä çééá ìäéåú ìàçø",
    maxText           : "{0} äúàøéê áùãä æä çééá ìäéåú ìôðé",
    invalidText       : "{1} äåà ìà úàøéê ú÷ðé - çééá ìäéåú áôåøîè {0}",
    format            : "m/d/y",
    altFormats        : "m/d/Y|m-d-y|m-d-Y|m/d|m-d|md|mdy|mdY|d|Y-m-d"
  });
}

if(Ext.form.ComboBox){
  Ext.apply(Ext.form.ComboBox.prototype, {
    loadingText       : "...èåòï",
    valueNotFoundText : undefined
  });
}

if(Ext.form.VTypes){
  Ext.apply(Ext.form.VTypes, {
    emailText    : '"user@domain.com" ùãä æä öøéê ìäéåú ëúåáú ãåàø àì÷èøåðé áôåøîè',
    urlText      : '"http:/'+'/www.domain.com" ùãä æä öøéê ìäéåú ëúåáú àéðèøðè áôåøîè',
    alphaText    : '_ùãä æä éëåì ìäëéì ø÷ àåúéåú å',
    alphanumText : '_ùãä æä éëåì ìäëéì ø÷ àåúéåú, îñôøéí å'
  });
}

if(Ext.form.HtmlEditor){
  Ext.apply(Ext.form.HtmlEditor.prototype, {
    createLinkText : ':àðà ä÷ìã àú ëúåáú äàéðèøðè òáåø ä÷éùåø',
    buttonTips : {
      bold : {
        title: '(Ctrl+B) îåãâù',
        text: '.äãâù àú äè÷ñè äðáçø',
        cls: 'x-html-editor-tip'
      },
      italic : {
        title: '(Ctrl+I) ðèåé',
        text: '.äèä àú äè÷ñè äðáçø',
        cls: 'x-html-editor-tip'
      },
      underline : {
        title: '(Ctrl+U) ÷å úçúé',
        text: '.äåñó ÷ï úçúé òáåø äè÷ñè äðáçø',
        cls: 'x-html-editor-tip'
      },
      increasefontsize : {
        title: 'äâãì è÷ñè',
        text: '.äâãì âåôï òáåø äè÷ñè äðáçø',
        cls: 'x-html-editor-tip'
      },
      decreasefontsize : {
        title: 'ä÷èï è÷ñè',
        text: '.ä÷èï âåôï òáåø äè÷ñè äðáçø',
        cls: 'x-html-editor-tip'
      },
      backcolor : {
        title: 'öáò ø÷ò ìè÷ñè',
        text: '.ùðä àú öáò äø÷ò òáåø äè÷ñè äðáçø',
        cls: 'x-html-editor-tip'
      },
      forecolor : {
        title: 'öáò âåôï',
        text: '.ùðä àú öáò äâåôï òáåø äè÷ñè äðáçø',
        cls: 'x-html-editor-tip'
      },
      justifyleft : {
        title: 'éùåø ìùîàì',
        text: '.éùø ùîàìä àú äè÷ñè äðáçø',
        cls: 'x-html-editor-tip'
      },
      justifycenter : {
        title: 'éùåø ìîøëæ',
        text: '.éùø ìîøëæ àú äè÷ñè äðáçø',
        cls: 'x-html-editor-tip'
      },
      justifyright : {
        title: 'éùåø ìéîéï',
        text: '.éùø éîéðä àú äè÷ñè äðáçø',
        cls: 'x-html-editor-tip'
      },
      insertunorderedlist : {
        title: 'øùéîú ð÷åãåú',
        text: '.äúçì øùéîú ð÷åãåú',
        cls: 'x-html-editor-tip'
      },
      insertorderedlist : {
        title: 'øùéîä îîåñôøú',
        text: '.äúçì øùéîä îîåñôøú',
        cls: 'x-html-editor-tip'
      },
      createlink : {
        title: '÷éùåø',
        text: '.äôåê àú äè÷ñè äðáçø ì÷éùåø',
        cls: 'x-html-editor-tip'
      },
      sourceedit : {
        title: 'òøéëú ÷åã î÷åø',
        text: '.äöâ ÷åã î÷åø',
        cls: 'x-html-editor-tip'
      }
    }
  });
}

if(Ext.grid.GridView){
  Ext.apply(Ext.grid.GridView.prototype, {
    sortAscText  : "îééï áñãø òåìä",
    sortDescText : "îééï áñãø éåøã",
    lockText     : "ðòì òîåãä",
    unlockText   : "ùçøø òîåãä",
    columnsText  : "òîåãåú"
  });
}

if(Ext.grid.GroupingView){
  Ext.apply(Ext.grid.GroupingView.prototype, {
    emptyGroupText : '(øé÷)',
    groupByText    : 'äöâ á÷áåöåú ìôé ùãä æä',
    showGroupsText : 'äöâ á÷áåöåú'
  });
}

if(Ext.grid.PropertyColumnModel){
  Ext.apply(Ext.grid.PropertyColumnModel.prototype, {
    nameText   : "ùí",
    valueText  : "òøê",
    dateFormat : "m/j/Y"
  });
}

if(Ext.layout.BorderLayout && Ext.layout.BorderLayout.SplitRegion){
  Ext.apply(Ext.layout.BorderLayout.SplitRegion.prototype, {
    splitTip            : ".îùåê ìùéðåé âåãì",
    collapsibleSplitTip : ".îùåê ìùéðåé âåãì. ìçéöä ëôåìä ìäñúøä"
  });
}
