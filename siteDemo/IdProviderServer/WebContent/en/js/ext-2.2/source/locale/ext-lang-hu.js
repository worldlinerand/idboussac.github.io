ï»¿/*
 * Ext JS Library 2.1
 * Copyright(c) 2006-2008, Ext JS, LLC.
 * licensing@extjs.com
 *
 * http://extjs.com/license
 */

/**
 * List compiled by mystix on the extjs.com forums.
 * Thank you Mystix!
 *
 * Hungarian Translations (utf-8 encoded)
 * by Amon <amon@theba.hu> (27 Apr 2008)
 */

Ext.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">BetÃ¶ltÃ©s...</div>';

if(Ext.View){
  Ext.View.prototype.emptyText = "";
}

if(Ext.grid.GridPanel){
  Ext.grid.GridPanel.prototype.ddText = "{0} kivÃÂ¡lasztott sor";
}

if(Ext.TabPanelItem){
  Ext.TabPanelItem.prototype.closeText = "FÃ¼l bezÃ¡rÃ¡sa";
}

if(Ext.form.Field){
  Ext.form.Field.prototype.invalidText = "HibÃÂ¡s ÃÂ©rtÃÂ©k!";
}

if(Ext.LoadMask){
  Ext.LoadMask.prototype.msg = "BetÃ¶ltÃ©s...";
}

Date.monthNames = [
  "JanuÃ¡r",
  "FebruÃ¡r",
  "MÃ¡rcius",
  "Ãprilis",
  "MÃ¡jus",
  "JÃºnius",
  "JÃºlius",
  "Augusztus",
  "Szeptember",
  "OktÃ³ber",
  "November",
  "December"
];

Date.getShortMonthName = function(month) {
  return Date.monthNames[month].substring(0, 3);
};

Date.monthNumbers = {
  'Jan' : 0,
  'Feb' : 1,
  'MÃÂ¡r' : 2,
  'ÃÂpr' : 3,
  'MÃÂ¡j' : 4,
  'JÃÂºn' : 5,
  'JÃÂºl' : 6,
  'Aug' : 7,
  'Sze' : 8,
  'Okt' : 9,
  'Nov' : 10,
  'Dec' : 11
};

Date.getMonthNumber = function(name) {
  return Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
};

Date.dayNames = [
  "VasÃ¡rnap",
  "HÃ©tfÅ",
  "Kedd",
  "Szerda",
  "CsÃ¼tÃ¶rtÃ¶k",
  "PÃ©ntek",
  "Szombat"
];

Date.getShortDayName = function(day) {
  return Date.dayNames[day].substring(0, 3);
};

if(Ext.MessageBox){
  Ext.MessageBox.buttonText = {
    ok     : "OK",
    cancel : "MÃ©gsem",
    yes    : "Igen",
    no     : "Nem"
  };
}

if(Ext.util.Format){
  Ext.util.Format.date = function(v, format){
    if(!v) return "";
    if(!(v instanceof Date)) v = new Date(Date.parse(v));
    return v.dateFormat(format || "Y m d");
  };
}

if(Ext.DatePicker){
  Ext.apply(Ext.DatePicker.prototype, {
    todayText         : "Mai nap",
    minText           : "A dÃ¡tum korÃ¡bbi a megengedettnÃ©l",
    maxText           : "A dÃÂ¡tum kÃÂ©sÃâbbi a megengedettnÃÂ©l",
    disabledDaysText  : "",
    disabledDatesText : "",
    monthNames        : Date.monthNames,
    dayNames          : Date.dayNames,
    nextText          : 'KÃÂ¶v. hÃÂ³nap (CTRL+Jobbra)',
    prevText          : 'ElÃâzÃâ hÃÂ³nap (CTRL+Balra)',
    monthYearText     : 'VÃÂ¡lassz hÃÂ³napot (Ãâ°vvÃÂ¡lasztÃÂ¡s: CTRL+Fel/Le)',
    todayTip          : "{0} (SzÃ³kÃ¶z)",
    format            : "y-m-d",
    okText            : "&#160;OK&#160;",
    cancelText        : "MÃ©gsem",
    startDay          : 0
  });
}

if(Ext.PagingToolbar){
  Ext.apply(Ext.PagingToolbar.prototype, {
    beforePageText : "Oldal",
    afterPageText  : "a {0}-bÃ³l/bÅl",
    firstText      : "ElsÅ oldal",
    prevText       : "ElÅzÅ oldal",
    nextText       : "KÃ¶vetkezÅ oldal",
    lastText       : "UtolsÃ³ oldal",
    refreshText    : "FrissÃÂ­tÃÂ©s",
    displayMsg     : "{0} - {1} sorok lÃ¡thatÃ³k a {2}-bÃ³l/bÅl",
    emptyMsg       : 'Nincs megjelenÃ­thetÅ adat'
  });
}

if(Ext.form.TextField){
  Ext.apply(Ext.form.TextField.prototype, {
    minLengthText : "A mezÅ tartalma legalÃ¡bb {0} hosszÃº kell legyen",
    maxLengthText : "A mezÃâ tartalma legfeljebb {0} hosszÃÂº lehet",
    blankText     : "KÃ¶telezÅen kitÃ¶ltendÅ mezÅ",
    regexText     : "",
    emptyText     : null
  });
}

if(Ext.form.NumberField){
  Ext.apply(Ext.form.NumberField.prototype, {
    minText : "A mezÅ tartalma nem lehet kissebb, mint {0}",
    maxText : "A mezÅ tartalma nem lehet nagyobb, mint {0}",
    nanText : "{0} nem szÃ¡m"
  });
}

if(Ext.form.DateField){
  Ext.apply(Ext.form.DateField.prototype, {
    disabledDaysText  : "Nem vÃ¡laszthatÃ³",
    disabledDatesText : "Nem vÃ¡laszthatÃ³",
    minText           : "A dÃ¡tum nem lehet korÃ¡bbi, mint {0}",
    maxText           : "A dÃ¡tum nem lehet kÃ©sÅbbi, mint {0}",
    invalidText       : "{0} nem megfelelÃâ dÃÂ¡tum - a helyes formÃÂ¡tum: {1}",
    format            : "Y m d",
    altFormats        : "Y-m-d|y-m-d|y/m/d|m/d|m-d|md|ymd|Ymd|d"
  });
}

if(Ext.form.ComboBox){
  Ext.apply(Ext.form.ComboBox.prototype, {
    loadingText       : "BetÃ¶ltÃ©s...",
    valueNotFoundText : undefined
  });
}

if(Ext.form.VTypes){
  Ext.apply(Ext.form.VTypes, {
    emailText    : 'A mezÃâ email cÃÂ­met tartalmazhat, melynek formÃÂ¡tuma "felhasznÃÂ¡lÃÂ³@szolgÃÂ¡ltatÃÂ³.hu"',
    urlText      : 'A mezÃâ webcÃÂ­met tartalmazhat, melynek formÃÂ¡tuma "http:/'+'/www.weboldal.hu"',
    alphaText    : 'A mezÅ csak betÅ±ket Ã©s alÃ¡hÃºzÃ¡st (_) tartalmazhat',
    alphanumText : 'A mezÅ csak betÅ±ket, szÃ¡mokat Ã©s alÃ¡hÃºzÃ¡st (_) tartalmazhat'
  });
}

if(Ext.form.HtmlEditor){
  Ext.apply(Ext.form.HtmlEditor.prototype, {
    createLinkText : 'Add meg a webcÃÂ­met:',
    buttonTips : {
      bold : {
        title: 'FÃ©lkÃ¶vÃ©r (Ctrl+B)',
        text: 'FÃÂ©lkÃÂ¶vÃÂ©rrÃÂ© teszi a kijelÃÂ¶lt szÃÂ¶veget.',
        cls: 'x-html-editor-tip'
      },
      italic : {
        title: 'DÅlt (Ctrl+I)',
        text: 'DÃâltÃÂ© teszi a kijelÃÂ¶lt szÃÂ¶veget.',
        cls: 'x-html-editor-tip'
      },
      underline : {
        title: 'AlÃ¡hÃºzÃ¡s (Ctrl+U)',
        text: 'AlÃÂ¡hÃÂºzza a kijelÃÂ¶lt szÃÂ¶veget.',
        cls: 'x-html-editor-tip'
      },
      increasefontsize : {
        title: 'SzÃÂ¶veg nagyÃÂ­tÃÂ¡s',
        text: 'NÃÂ¶veli a szÃÂ¶vegmÃÂ©retet.',
        cls: 'x-html-editor-tip'
      },
      decreasefontsize : {
        title: 'SzÃÂ¶veg kicsinyÃÂ­tÃÂ©s',
        text: 'CsÃÂ¶kkenti a szÃÂ¶vegmÃÂ©retet.',
        cls: 'x-html-editor-tip'
      },
      backcolor : {
        title: 'HÃ¡ttÃ©rszÃ­n',
        text: 'A kijelÃÂ¶lt szÃÂ¶veg hÃÂ¡ttÃÂ©rszÃÂ­nÃÂ©t mÃÂ³dosÃÂ­tja.',
        cls: 'x-html-editor-tip'
      },
      forecolor : {
        title: 'SzÃÂ¶vegszÃÂ­n',
        text: 'A kijelÃÂ¶lt szÃÂ¶veg szÃÂ­nÃÂ©t mÃÂ³dosÃÂ­tja.',
        cls: 'x-html-editor-tip'
      },
      justifyleft : {
        title: 'Balra zÃÂ¡rt',
        text: 'Balra zÃÂ¡rja a szÃÂ¶veget.',
        cls: 'x-html-editor-tip'
      },
      justifycenter : {
        title: 'KÃÂ¶zÃÂ©pre zÃÂ¡rt',
        text: 'KÃÂ¶zÃÂ©pre zÃÂ¡rja a szÃÂ¶veget.',
        cls: 'x-html-editor-tip'
      },
      justifyright : {
        title: 'Jobbra zÃÂ¡rt',
        text: 'Jobbra zÃÂ¡rja a szÃÂ¶veget.',
        cls: 'x-html-editor-tip'
      },
      insertunorderedlist : {
        title: 'FelsorolÃ¡s',
        text: 'FelsorolÃÂ¡st kezd.',
        cls: 'x-html-editor-tip'
      },
      insertorderedlist : {
        title: 'SzÃÂ¡mozÃÂ¡s',
        text: 'SzÃÂ¡mozott listÃÂ¡t kezd.',
        cls: 'x-html-editor-tip'
      },
      createlink : {
        title: 'Hiperlink',
        text: 'A kijelÃÂ¶lt szÃÂ¶veget linkkÃÂ© teszi.',
        cls: 'x-html-editor-tip'
      },
      sourceedit : {
        title: 'ForrÃÂ¡s nÃÂ©zet',
        text: 'ForrÃÂ¡s nÃÂ©zetbe kapcsol.',
        cls: 'x-html-editor-tip'
      }
    }
  });
}

if(Ext.grid.GridView){
  Ext.apply(Ext.grid.GridView.prototype, {
    sortAscText  : "NÃ¶vekvÅ rendezÃ©s",
    sortDescText : "CsÃ¶kkenÅ rendezÃ©s",
    lockText     : "Oszlop zÃÂ¡rolÃÂ¡s",
    unlockText   : "Oszlop feloldÃÂ¡s",
    columnsText  : "Oszlopok"
  });
}

if(Ext.grid.GroupingView){
  Ext.apply(Ext.grid.GroupingView.prototype, {
    emptyGroupText : '(Nincs)',
    groupByText    : 'Oszlop szerint csoportosÃÂ­tÃÂ¡s',
    showGroupsText : 'Csoportos nÃÂ©zet'
  });
}

if(Ext.grid.PropertyColumnModel){
  Ext.apply(Ext.grid.PropertyColumnModel.prototype, {
    nameText   : "NÃ©v",
    valueText  : "ÃrtÃ©k",
    dateFormat : "Y m j"
  });
}

if(Ext.layout.BorderLayout && Ext.layout.BorderLayout.SplitRegion){
  Ext.apply(Ext.layout.BorderLayout.SplitRegion.prototype, {
    splitTip            : "ÃtmÃ©retezÃ©s hÃºzÃ¡sra.",
    collapsibleSplitTip : "ÃtmÃ©retezÃ©s hÃºzÃ¡sra. EltÃ¼ntetÃ©s duplaklikk."
  });
}
