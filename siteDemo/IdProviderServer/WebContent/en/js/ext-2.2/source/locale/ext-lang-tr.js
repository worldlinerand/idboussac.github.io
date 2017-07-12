/**
 * List compiled by mystix on the extjs.com forums.
 * Thank you Mystix!
 *
 * Turkish translation by Alper YAZGAN
 * 2008-01-24 , 10:29 AM 
*/

Ext.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">YÃ¼kleniyor ...</div>';

if(Ext.View){
  Ext.View.prototype.emptyText = "";
}

if(Ext.grid.GridPanel){
  Ext.grid.GridPanel.prototype.ddText = "ÅeÃ§ili satÄ±r sayÄ±sÄ± : {0}";
}

if(Ext.TabPanelItem){
  Ext.TabPanelItem.prototype.closeText = "Sekmeyi kapat";
}

if(Ext.form.Field){
  Ext.form.Field.prototype.invalidText = "Bu alandaki deÄer geÃ§ersiz";
}

if(Ext.LoadMask){
  Ext.LoadMask.prototype.msg = "YÃ¼kleniyor ...";
}

Date.monthNames = [
  "Ocak",
  "Åubat",
  "Mart",
  "Nisan",
  "MayÄ±s",
  "Haziran",
  "Temmuz",
  "AÄustos",
  "EylÃ¼l",
  "Ekim",
  "KasÄ±m",
  "AralÄ±k"
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
  "Pazar",
  "Pazartesi",
  "SalÄ±",
  "ÃarÅamba",
  "PerÅembe",
  "Cuma",
  "Cumartesi"
];

Date.shortDayNames = [
  "Paz",
  "Pzt",
  "Sal",
  "ÃrÅ",
  "PrÅ",
  "Cum",
  "Cmt"
];

Date.getShortDayName = function(day) {
  return Date.shortDayNames[day];
};

if(Ext.MessageBox){
  Ext.MessageBox.buttonText = {
    ok     : "Tamam",
    cancel : "Ä°ptal",
    yes    : "Evet",
    no     : "HayÄ±r"
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
    todayText         : "BugÃ¼n",
    minText           : "Bu tarih izin verilen en kÃ¼Ã§Ã¼k tarihten daha Ã¶nce",
    maxText           : "Bu tarih izin verilen en bÃ¼yÃ¼k tarihten daha sonra",
    disabledDaysText  : "",
    disabledDatesText : "",
    monthNames        : Date.monthNames,
    dayNames          : Date.dayNames,
    nextText          : 'Gelecek Ay (Control+Right)',
    prevText          : 'Ãnceki Ay (Control+Left)',
    monthYearText     : 'Bir ay ÅeÃ§iniz (YÄ±lÄ± artÄ±rmak/azaltmak iÃ§in Control+Up/Down)',
    todayTip          : "{0} (BoÅluk TuÅu - Spacebar)",
    format            : "d/m/Y",
    okText            : "&#160;Tamam&#160;",
    cancelText        : "Ä°ptal",
    startDay          : 1
  });
}

if(Ext.PagingToolbar){
  Ext.apply(Ext.PagingToolbar.prototype, {
    beforePageText : "Sayfa",
    afterPageText  : " / {0}",
    firstText      : "Ä°lk Sayfa",
    prevText       : "Ãnceki Sayfa",
    nextText       : "Sonraki Sayfa",
    lastText       : "Son Sayfa",
    refreshText    : "Yenile",
    displayMsg     : "GÃ¶sterilen {0} - {1} / {2}",
    emptyMsg       : 'GÃ¶sterilebilecek veri yok'
  });
}

if(Ext.form.TextField){
  Ext.apply(Ext.form.TextField.prototype, {
    minLengthText : "Girilen verinin uzunluÄu en az {0} olabilir",
    maxLengthText : "Girilen verinin uzunluÄu en fazla {0} olabilir",
    blankText     : "Bu alan boÅ bÄ±rakÄ±lamaz",
    regexText     : "",
    emptyText     : null
  });
}

if(Ext.form.NumberField){
  Ext.apply(Ext.form.NumberField.prototype, {
    minText : "En az {0} girilebilir",
    maxText : "En Ã§ok {0} girilebilir",
    nanText : "{0} geÃ§ersiz bir sayÄ±dÄ±r"
  });
}

if(Ext.form.DateField){
  Ext.apply(Ext.form.DateField.prototype, {
    disabledDaysText  : "Disabled",
    disabledDatesText : "Disabled",
    minText           : "Bu tarih, {0} tarihinden daha sonra olmalÄ±dÄ±r", 
    maxText           : "Bu tarih, {0} tarihinden daha Ã¶nce olmalÄ±dÄ±r",
    invalidText       : "{0} geÃ§ersiz bir tarihdir - tarih formatÄ± {1} Åeklinde olmalÄ±dÄ±r",
    format            : "d/m/Y",
    altFormats        : "d.m.y|d.m.Y|d/m/y|d-m-Y|d-m-y|d.m|d/m|d-m|dm|dmY|dmy|d|Y.m.d|Y-m-d|Y/m/d"
  });
}

if(Ext.form.ComboBox){
  Ext.apply(Ext.form.ComboBox.prototype, {
    loadingText       : "YÃ¼kleniyor ...",
    valueNotFoundText : undefined
  });
}

if(Ext.form.VTypes){
  Ext.apply(Ext.form.VTypes, {
    emailText    : 'Bu alan "user@domain.com" Åeklinde elektronik posta formatÄ±nda olmalÄ±dÄ±r',
    urlText      : 'Bu alan "http://www.domain.com" Åeklinde URL adres formatÄ±nda olmalÄ±dÄ±r',
    alphaText    : 'Bu alan sadece harf ve _ iÃ§ermeli',
    alphanumText : 'Bu alan sadece harf, sayÄ± ve _ iÃ§ermeli'
  });
}

if(Ext.form.HtmlEditor){
  Ext.apply(Ext.form.HtmlEditor.prototype, {
    createLinkText : 'LÃ¼tfen bu baÄlantÄ± iÃ§in gerekli URL adresini giriniz:',
    buttonTips : {
      bold : {
        title: 'KalÄ±n(Bold) (Ctrl+B)',
        text: 'ÅeÃ§ili yazÄ±yÄ± kalÄ±n yapar.',
        cls: 'x-html-editor-tip'
      },
      italic : {
        title: 'Ä°talik(Italic) (Ctrl+I)',
        text: 'ÅeÃ§ili yazÄ±yÄ± italik yapar.',
        cls: 'x-html-editor-tip'
      },
      underline : {
        title: 'Alt Ãizgi(Underline) (Ctrl+U)',
        text: 'ÅeÃ§ili yazÄ±nÄ±n altÄ±nÄ± Ã§izer.',
        cls: 'x-html-editor-tip'
      },
      increasefontsize : {
        title: 'Fontu bÃ¼yÃ¼lt',
        text: 'YazÄ± fontunu bÃ¼yÃ¼tÃ¼r.',
        cls: 'x-html-editor-tip'
      },
      decreasefontsize : {
        title: 'Fontu kÃ¼Ã§Ã¼lt',
        text: 'YazÄ± fontunu kÃ¼Ã§Ã¼ltÃ¼r.',
        cls: 'x-html-editor-tip'
      },
      backcolor : {
        title: 'Arka Plan Rengi',
        text: 'SeÃ§ili yazÄ±nÄ±n arka plan rengini deÄiÅtir.',
        cls: 'x-html-editor-tip'
      },
      forecolor : {
        title: 'YazÄ± Rengi',
        text: 'SeÃ§ili yazÄ±nÄ±n rengini deÄiÅtir.',
        cls: 'x-html-editor-tip'
      },
      justifyleft : {
        title: 'Sola Daya',
        text: 'YazÄ±yÄ± sola daya.',
        cls: 'x-html-editor-tip'
      },
      justifycenter : {
        title: 'Ortala',
        text: 'YazÄ±yÄ± editÃ¶rde ortala.',
        cls: 'x-html-editor-tip'
      },
      justifyright : {
        title: 'SaÄa daya',
        text: 'YazÄ±yÄ± saÄa daya.',
        cls: 'x-html-editor-tip'
      },
      insertunorderedlist : {
        title: 'NoktalÄ± Liste',
        text: 'NoktalÄ± listeye baÅla.',
        cls: 'x-html-editor-tip'
      },
      insertorderedlist : {
        title: 'NumaralÄ± Liste',
        text: 'NumaralÄ± lisyeye baÅla.',
        cls: 'x-html-editor-tip'
      },
      createlink : {
        title: 'Web Adresi(Hyperlink)',
        text: 'SeÃ§ili yazÄ±yÄ± web adresi(hyperlink) yap.',
        cls: 'x-html-editor-tip'
      },
      sourceedit : {
        title: 'Kaynak kodu DÃ¼zenleme',
        text: 'Kaynak kodu dÃ¼zenleme moduna geÃ§.',
        cls: 'x-html-editor-tip'
      }
    }
  });
}

if(Ext.grid.GridView){
  Ext.apply(Ext.grid.GridView.prototype, {
    sortAscText  : "Artan sÄ±rada sÄ±rala",
    sortDescText : "Azalan sÄ±rada sÄ±rala",
    lockText     : "Kolonu kilitle",
    unlockText   : "Kolon kilidini kaldÄ±r",
    columnsText  : "Kolonlar"
  });
}

if(Ext.grid.GroupingView){
  Ext.apply(Ext.grid.GroupingView.prototype, {
    emptyGroupText : '(Yok)',
    groupByText    : 'Bu Alana GÃ¶re Grupla',
    showGroupsText : 'Gruplar Halinde GÃ¶ster'
  });
}

if(Ext.grid.PropertyColumnModel){
  Ext.apply(Ext.grid.PropertyColumnModel.prototype, {
    nameText   : "Ad",
    valueText  : "DeÄer",
    dateFormat : "d/m/Y"
  });
}

if(Ext.layout.BorderLayout && Ext.layout.BorderLayout.SplitRegion){
  Ext.apply(Ext.layout.BorderLayout.SplitRegion.prototype, {
    splitTip            : "Yeniden boyutlandÄ±rmak iÃ§in sÃ¼rÃ¼kle.",
    collapsibleSplitTip : "Yeniden boyutlandÄ±rmak iÃ§in sÃ¼rÃ¼kle. Saklamak iÃ§in Ã§ift tÄ±kla."
  });
}
