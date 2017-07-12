/**
 * Romanian translations for ExtJS 2.1
 * First released by Lucian Lature on 2007-04-24
 * Changed locale for Romania (date formats) as suggested by keypoint
 * on ExtJS forums: http://www.extjs.com/forum/showthread.php?p=129524#post129524
 * Removed some useless parts
 * Changed by: Emil Cazamir, 2008-04-24
 */

Ext.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">ÃncÄrcare...</div>';

if(Ext.grid.GridPanel){
   Ext.grid.GridPanel.prototype.ddText = "{0} rÃ¢nd(uri) selectate";
}

if(Ext.TabPanelItem){
   Ext.TabPanelItem.prototype.closeText = "Ãnchide acest tab";
}

if(Ext.form.Field){
   Ext.form.Field.prototype.invalidText = "Valoarea acestui cÃ¢mp este invalidÄ";
}

if(Ext.LoadMask){
    Ext.LoadMask.prototype.msg = "ÃncÄrcare...";
}

Date.monthNames = [
   "Ianuarie",
   "Februarie",
   "Martie",
   "Aprilie",
   "Mai",
   "Iunie",
   "Iulie",
   "August",
   "Septembrie",
   "Octombrie",
   "Noiembrie",
   "Decembrie"
];

Date.getShortMonthName = function(month) {
  return Date.monthNames[month].substring(0, 3);
};

Date.monthNumbers = {
  Ian : 0,
  Feb : 1,
  Mar : 2,
  Apr : 3,
  Mai : 4,
  Iun : 5,
  Iul : 6,
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
   "DuminicÄ",
   "Luni",
   "MarÅ£i",
   "Miercuri",
   "Joi",
   "Vineri",
   "SÃ¢mbÄtÄ"
];

Date.getShortDayName = function(day) {
  return Date.dayNames[day].substring(0, 3);
};

if(Ext.MessageBox){
   Ext.MessageBox.buttonText = {
      ok     : "OK",
      cancel : "RenunÅ£Ä",
      yes    : "Da",
      no     : "Nu"
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
    todayText         : "AstÄzi",
    minText           : "AceastÄ datÄ este anterioarÄ datei minime",
    maxText           : "AceastÄ datÄ este ulterioarÄ datei maxime",
    disabledDaysText  : "",
    disabledDatesText : "",
    monthNames        : Date.monthNames,
    dayNames          : Date.dayNames,
    nextText          : 'Luna urmÄtoare (Control+Dreapta)',
    prevText          : 'Luna precedentÄ (Control+StÃ¢nga)',
    monthYearText     : 'Alege o lunÄ (Control+Sus/Jos pentru a parcurge anii)',
    todayTip          : "{0} (Bara spaÈiu)",
    format            : "d.m.Y",
    okText            : "&#160;OK&#160;",
    cancelText        : "RenunÈÄ",
    startDay          : 0
  });
}

if(Ext.PagingToolbar){
  Ext.apply(Ext.PagingToolbar.prototype, {
    beforePageText : "Pagina",
    afterPageText  : "din {0}",
    firstText      : "Prima paginÄ",
    prevText       : "Pagina anterioarÄ",
    nextText       : "Pagina urmÄtoare",
    lastText       : "Ultima paginÄ",
    refreshText    : "ÃmprospÄteazÄ",
    displayMsg     : "AfiÈare Ã®nregistrÄri {0} - {1} din {2}",
    emptyMsg       : 'Nu sunt date de afiÈat'
  });
}

if(Ext.form.TextField){
   Ext.apply(Ext.form.TextField.prototype, {
      minLengthText : "Lungimea minimÄ pentru acest cÃ¢mp este de {0}",
      maxLengthText : "Lungimea maximÄ pentru acest cÃ¢mp este {0}",
      blankText     : "Acest cÃ¢mp este obligatoriu",
      regexText     : "",
      emptyText     : null
   });
}

if(Ext.form.NumberField){
   Ext.apply(Ext.form.NumberField.prototype, {
      minText : "Valoarea minimÄ permisÄ a acestui cÃ¢mp este {0}",
      maxText : "Valaorea maximÄ permisÄ a acestui cÃ¢mp este {0}",
      nanText : "{0} nu este un numÄr valid"
   });
}

if(Ext.form.DateField){
  Ext.apply(Ext.form.DateField.prototype, {
    disabledDaysText  : "Indisponibil",
    disabledDatesText : "Indisponibil",
    minText           : "Data din aceastÄ casetÄ trebuie sÄ fie dupÄ {0}",
    maxText           : "Data din aceastÄ casetÄ trebuie sÄ fie inainte de {0}",
    invalidText       : "{0} nu este o datÄ validÄ, trebuie sÄ fie Ã®n formatul {1}",
    format            : "d.m.Y",
    altFormats        : "d-m-Y|d.m.y|d-m-y|d.m|d-m|dm|d|Y-m-d"
  });
}

if(Ext.form.ComboBox){
  Ext.apply(Ext.form.ComboBox.prototype, {
    loadingText       : "ÃncÄrcare...",
    valueNotFoundText : undefined
  });
}

if(Ext.form.VTypes){
   Ext.apply(Ext.form.VTypes, {
      emailText    : 'Acest cÃ¢mp trebuie sÄ conÅ£inÄ o adresÄ de e-mail Ã®n formatul "user@domeniu.com"',
      urlText      : 'Acest cÃ¢mp trebuie sÄ conÅ£inÄ o adresÄ URL Ã®n formatul "http:/'+'/www.domeniu.com"',
      alphaText    : 'Acest cÃ¢mp trebuie sÄ conÅ£inÄ doar litere Åi _',
      alphanumText : 'Acest cÃ¢mp trebuie sÄ conÅ£inÄ doar litere, cifre Åi _'
   });
}

if(Ext.form.HtmlEditor){
  Ext.apply(Ext.form.HtmlEditor.prototype, {
    createLinkText : 'VÄ rugÄm introduceti un URL pentru aceastÄ legÄturÄ web:',
    buttonTips : {
      bold : {
        title: 'ÃngroÅat (Ctrl+B)',
        text: 'ÃngroÅati caracterele textului selectat.',
        cls: 'x-html-editor-tip'
      },
      italic : {
        title: 'Ãnclinat (Ctrl+I)',
        text: 'ÃnclinaÅ£i caracterele textului selectat.',
        cls: 'x-html-editor-tip'
      },
      underline : {
        title: 'Subliniat (Ctrl+U)',
        text: 'SubliniaÅ£i caracterele textului selectat.',
        cls: 'x-html-editor-tip'
      },
      increasefontsize : {
        title: 'MÄrit',
        text: 'MÄreÅte dimensiunea fontului.',
        cls: 'x-html-editor-tip'
      },
      decreasefontsize : {
        title: 'MicÅorat',
        text: 'MicÅoreazÄ dimensiunea textului.',
        cls: 'x-html-editor-tip'
      },
      backcolor : {
        title: 'Culoarea fundalului',
        text: 'SchimbÄ culoarea fundalului pentru textul selectat.',
        cls: 'x-html-editor-tip'
      },
      forecolor : {
        title: 'Culoarea textului',
        text: 'SchimbÄ culoarea textului selectat.',
        cls: 'x-html-editor-tip'
      },
      justifyleft : {
        title: 'Aliniat la stÃ¢nga',
        text: 'AliniazÄ textul la stÃ¢nga.',
        cls: 'x-html-editor-tip'
      },
      justifycenter : {
        title: 'Centrat',
        text: 'CentreazÄ textul Ã®n editor.',
        cls: 'x-html-editor-tip'
      },
      justifyright : {
        title: 'Aliniat la dreapta',
        text: 'AliniazÄ textul la dreapta.',
        cls: 'x-html-editor-tip'
      },
      insertunorderedlist : {
        title: 'ListÄ cu puncte',
        text: 'InsereazÄ listÄ cu puncte.',
        cls: 'x-html-editor-tip'
      },
      insertorderedlist : {
        title: 'ListÄ numerotatÄ',
        text: 'InsereazÄ o listÄ numerotatÄ.',
        cls: 'x-html-editor-tip'
      },
      createlink : {
        title: 'LegÄturÄ web',
        text: 'TransformÄ textul selectat Ã®n legÄturÄ web.',
        cls: 'x-html-editor-tip'
      },
      sourceedit : {
        title: 'Editare sursÄ',
        text: 'SchimbÄ pe modul de editare al codului HTML.',
        cls: 'x-html-editor-tip'
      }
    }
  });
}


if(Ext.grid.GridView){
   Ext.apply(Ext.grid.GridView.prototype, {
      sortAscText  : "Sortare ascendentÄ",
      sortDescText : "Sortare descendentÄ",
      lockText     : "BlocheazÄ coloana",
      unlockText   : "DeblocheazÄ coloana",
      columnsText  : "Coloane"
   });
}

if(Ext.grid.GroupingView){
  Ext.apply(Ext.grid.GroupingView.prototype, {
    emptyGroupText : '(FÄrÄ)',
    groupByText    : 'GrupeazÄ dupÄ aceastÄ coloanÄ',
    showGroupsText : 'AfiÈeazÄ grupat'
  });
}

if(Ext.grid.PropertyColumnModel){
  Ext.apply(Ext.grid.PropertyColumnModel.prototype, {
    nameText   : "Nume",
    valueText  : "Valoare",
    dateFormat : "d.m.Y"
  });
}

if(Ext.layout.BorderLayout && Ext.layout.BorderLayout.SplitRegion){
   Ext.apply(Ext.layout.BorderLayout.SplitRegion.prototype, {
      splitTip            : "Trage pentru redimensionare.",
      collapsibleSplitTip : "Trage pentru redimensionare. Dublu-click pentru ascundere."
   });
}