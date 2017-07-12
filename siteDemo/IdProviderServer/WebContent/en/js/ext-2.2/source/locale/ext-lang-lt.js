/**
 * Lithuanian Translations (UTF-8)
 * By Vladas Saulis, October 18, 2007
 */

Ext.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">Kraunasi...</div>';

if(Ext.View){
  Ext.View.prototype.emptyText = "";
}

if(Ext.grid.GridPanel){
  Ext.grid.GridPanel.prototype.ddText = "{0} paÅ¾ymÄta";
}

if(Ext.TabPanelItem){
  Ext.TabPanelItem.prototype.closeText = "UÅ¾daryti Å¡iÄ uÅ¾sklandÄ";
}

if(Ext.form.Field){
  Ext.form.Field.prototype.invalidText = "Å io lauko reikÅ¡mÄ neteisinga";
}

if(Ext.LoadMask){
  Ext.LoadMask.prototype.msg = "Kraunasi...";
}

Date.monthNames = [
  "Saulis",
  "Vasaris",
  "Kovas",
  "Balandis",
  "GeguÅ¾Ä",
  "BirÅ¾elis",
  "Liepa",
  "RugpjÅ«tis",
  "RugsÄjis",
  "Spalis",
  "Lapkritis",
  "Gruodis"
];

Date.getShortMonthName = function(month) {
  return [
    "Sau",
    "Vas",
    "Kov",
    "Bal",
    "Geg",
    "Bir",
    "Lie",
    "Rgp",
    "Rgs",
    "Spa",
    "Lap",
    "Grd"
    ];
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
  "Pirmadienis",
  "Antradienis",
  "TreÄiadienis",
  "Ketvirtadienis",
  "Penktadienis",
  "Å eÅ¡tadienis",
  "Sekmadienis"
];

Date.getShortDayName = function(day) {
  return Date.dayNames[day].substring(0, 3);
};

if(Ext.MessageBox){
  Ext.MessageBox.buttonText = {
    ok     : "Gerai",
    cancel : "Atsisakyti",
    yes    : "Taip",
    no     : "Ne"
  };
}

if(Ext.util.Format){
  Ext.util.Format.date = function(v, format){
    if(!v) return "";
    if(!(v instanceof Date)) v = new Date(Date.parse(v));
    return v.dateFormat(format || "Y-m-d");
  };
}

if(Ext.DatePicker){
  Ext.apply(Ext.DatePicker.prototype, {
    todayText         : "Å iandien",
    minText           : "Å i data yra maÅ¾esnÄ uÅ¾ leistinÄ",
    maxText           : "Å i data yra didesnÄ uÅ¾ leistinÄ",
    disabledDaysText  : "",
    disabledDatesText : "",
    monthNames        : Date.monthNames,
    dayNames          : Date.dayNames,
    nextText          : 'Next Month (Control+Right)',
    prevText          : 'Previous Month (Control+Left)',
    monthYearText     : 'Choose a month (Control+Up/Down perÄjimui tarp metÅ³)',
    todayTip          : "{0} (Spacebar)",
    format            : "y-m-d",
    okText            : "&#160;Gerai&#160;",
    cancelText        : "Atsisaktyi",
    startDay          : 1
  });
}

if(Ext.PagingToolbar){
  Ext.apply(Ext.PagingToolbar.prototype, {
    beforePageText : "Puslapis",
    afterPageText  : "iÅ¡ {0}",
    firstText      : "Pirmas puslapis",
    prevText       : "Ankstesnis pusl.",
    nextText       : "Kitas puslapis",
    lastText       : "Pakutinis pusl.",
    refreshText    : "Atnaujinti",
    displayMsg     : "Rodomi Ä¯raÅ¡ai {0} - {1} iÅ¡ {2}",
    emptyMsg       : 'NÄra duomenÅ³'
  });
}

if(Ext.form.TextField){
  Ext.apply(Ext.form.TextField.prototype, {
    minLengthText : "Minimalus Å¡io lauko ilgis yra {0}",
    maxLengthText : "Maksimalus Å¡io lauko ilgis yra {0}",
    blankText     : "Å is laukas yra reikalingas",
    regexText     : "",
    emptyText     : null
  });
}

if(Ext.form.NumberField){
  Ext.apply(Ext.form.NumberField.prototype, {
    minText : "Minimalus Å¡io lauko ilgis yra {0}",
    maxText : "Maksimalus Å¡io lauko ilgis yra {0}",
    nanText : "{0} yra neleistina reikÅ¡mÄ"
  });
}

if(Ext.form.DateField){
  Ext.apply(Ext.form.DateField.prototype, {
    disabledDaysText  : "Neprieinama",
    disabledDatesText : "Neprieinama",
    minText           : "Å iame lauke data turi bÅ«ti didesnÄ uÅ¾ {0}",
    maxText           : "Å iame lauke data turi bÅ«ti maÅ¾esnÄÄ uÅ¾ {0}",
    invalidText       : "{0} yra neteisinga data - ji turi bÅ«ti Ä¯vesta formatu {1}",
    format            : "y-m-d",
    altFormats        : "y-m-d|y/m/d|Y-m-d|m/d|m-d|md|ymd|Ymd|d|Y-m-d"
  });
}

if(Ext.form.ComboBox){
  Ext.apply(Ext.form.ComboBox.prototype, {
    loadingText       : "Kraunasi...",
    valueNotFoundText : undefined
  });
}

if(Ext.form.VTypes){
  Ext.apply(Ext.form.VTypes, {
    emailText    : 'Å iame lauke turi bÅ«ti el.paÅ¡to adresas formatu "user@domain.com"',
    urlText      : 'Å iame lauke turi bÅ«ti nuoroda (URL) formatu "http:/'+'/www.domain.com"',
    alphaText    : 'Å iame lauke gali bÅ«ti tik raidÄs ir Å¾enklas "_"',
    alphanumText : 'Å iame lauke gali bÅ«ti tik raidÄs, skaiÄiai ir Å¾enklas "_"'
  });
}

if(Ext.form.HtmlEditor){
  Ext.apply(Ext.form.HtmlEditor.prototype, {
    createLinkText : 'Ä®veskite URL Å¡iai nuorodai:',
    buttonTips : {
      bold : {
        title: 'Bold (Ctrl+B)',
        text: 'Teksto paryÅ¡kinimas.',
        cls: 'x-html-editor-tip'
      },
      italic : {
        title: 'Italic (Ctrl+I)',
        text: 'Kursyvinis tekstas.',
        cls: 'x-html-editor-tip'
      },
      underline : {
        title: 'Underline (Ctrl+U)',
        text: 'Teksto pabraukimas.',
        cls: 'x-html-editor-tip'
      },
      increasefontsize : {
        title: 'Padidinti Å¡riftÄ',
        text: 'Padidinti Å¡rifto dydÄ¯.',
        cls: 'x-html-editor-tip'
      },
      decreasefontsize : {
        title: 'SumaÅ¾inti Å¡riftÄ',
        text: 'SumaÅ¾inti Å¡rifto dydÄ¯.',
        cls: 'x-html-editor-tip'
      },
      backcolor : {
        title: 'Nuspalvinti teksto fonÄ',
        text: 'Pakeisti teksto fono spalvÄ.',
        cls: 'x-html-editor-tip'
      },
      forecolor : {
        title: 'Teksto spalva',
        text: 'Pakeisti paÅ¾ymÄto teksto spalvÄ.',
        cls: 'x-html-editor-tip'
      },
      justifyleft : {
        title: 'IÅ¡lyginti kairen',
        text: 'IÅ¡lyginti tekstÄ Ä¯ kairÄ.',
        cls: 'x-html-editor-tip'
      },
      justifycenter : {
        title: 'Centruoti tekstÄ',
        text: 'Centruoti tektÄ redaktoriaus lange.',
        cls: 'x-html-editor-tip'
      },
      justifyright : {
        title: 'IÅ¡lyginti deÅ¡inÄn',
        text: 'IÅ¡lyginti tekstÄ Ä¯ deÅ¡inÄ.',
        cls: 'x-html-editor-tip'
      },
      insertunorderedlist : {
        title: 'Paprastas sÄraÅ¡as',
        text: 'PradÄti neorganizuotÄ sÄraÅ¡Ä.',
        cls: 'x-html-editor-tip'
      },
      insertorderedlist : {
        title: 'Numeruotas sÄraÅ¡as',
        text: 'PradÄti numeruotÄ sÄraÅ¡Ä.',
        cls: 'x-html-editor-tip'
      },
      createlink : {
        title: 'Nuoroda',
        text: 'Padaryti paÅ¾ymÄta tekstÄ nuoroda.',
        cls: 'x-html-editor-tip'
      },
      sourceedit : {
        title: 'IÅ¡eities tekstas',
        text: 'Persijungti Ä¯ iÅ¡eities teksto koregavimo reÅ¾imÄ.',
        cls: 'x-html-editor-tip'
      }
    }
  });
}

if(Ext.grid.GridView){
  Ext.apply(Ext.grid.GridView.prototype, {
    sortAscText  : "RÅ«Å¡iuoti didÄjanÄia tvarka",
    sortDescText : "RÅ«Å¡iuoti maÅ¾ÄjanÄia tvarka",
    lockText     : "UÅ¾fiksuoti stulpelÄ¯",
    unlockText   : "Atlaisvinti stulpelÄ¯",
    columnsText  : "Stulpeliai"
  });
}

if(Ext.grid.GroupingView){
  Ext.apply(Ext.grid.GroupingView.prototype, {
    emptyGroupText : '(NÄra)',
    groupByText    : 'Grupuoti pagal Å¡Ä¯ laukÄ',
    showGroupsText : 'Rodyti grupÄse'
  });
}

if(Ext.grid.PropertyColumnModel){
  Ext.apply(Ext.grid.PropertyColumnModel.prototype, {
    nameText   : "Pavadinimas",
    valueText  : "ReikÅ¡mÄ",
    dateFormat : "Y-m-d"
  });
}

if(Ext.layout.BorderLayout && Ext.layout.BorderLayout.SplitRegion){
  Ext.apply(Ext.layout.BorderLayout.SplitRegion.prototype, {
    splitTip            : "Patraukite juostelÄ.",
    collapsibleSplitTip : "Patraukite juostelÄ arba Paspauskite dvigubai kad paslÄpti."
  });
}
