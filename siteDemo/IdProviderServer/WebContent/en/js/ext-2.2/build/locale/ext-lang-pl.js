/**
 * Polish Translations
 * By vbert 17-April-2007
 * Updated by mmar 16-November-2007
 * Encoding: utf-8
 */

Ext.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">Wczytywanie danych...</div>';

if(Ext.View){
   Ext.View.prototype.emptyText = "";
}

if(Ext.grid.GridPanel){
   Ext.grid.GridPanel.prototype.ddText = "{0} wybrano wiersze(y)";
}

if(Ext.TabPanelItem){
   Ext.TabPanelItem.prototype.closeText = "Zamknij zakÅadkÄ";
}

if(Ext.form.Field){
   Ext.form.Field.prototype.invalidText = "WartoÅÄ tego pola jest niewÅaÅciwa";
}

if(Ext.LoadMask){
    Ext.LoadMask.prototype.msg = "Wczytywanie danych...";
}

Date.monthNames = [
    "StyczeÅ",
    "Luty",
    "Marzec",
    "KwiecieÅ",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "SierpieÅ",
    "WrzesieÅ",
    "PaÅºdziernik",
    "Listopad",
    "GrudzieÅ"
];

Date.getShortMonthName = function(month) {
  return Date.monthNames[month].substring(0, 3);
};

Date.monthNumbers = {
  Sty : 0,
  Lut : 1,
  Mar : 2,
  Kwi : 3,
  Maj : 4,
  Cze : 5,
  Lip : 6,
  Sie : 7,
  Wrz : 8,
  PaÅº : 9,
  Lis : 10,
  Gru : 11
};

Date.getMonthNumber = function(name) {
  return Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
};

Date.dayNames = [
    "Niedziela",
    "PoniedziaÅek",
    "Wtorek",
    "Åroda",
    "Czwartek",
    "PiÄtek",
    "Sobota"
];

Date.getShortDayName = function(day) {
	switch(day) {
		case 0: return 'ndz';
		case 1: return 'pon';
		case 2: return 'wt';
		case 3: return 'År';
		case 4: return 'czw';
		case 5: return 'pt';				
		case 6: return 'sob';
                default: return '';
	}
};

if(Ext.MessageBox){
   Ext.MessageBox.buttonText = {
      ok     : "OK",
      cancel : "Anuluj",
      yes    : "Tak",
      no     : "Nie"
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
		startDay			: 1,
		todayText			: "Dzisiaj",
		minText				: "Data jest wczeÅniejsza od daty minimalnej",
		maxText				: "Data jest pÃ³Åºniejsza od daty maksymalnej",
		disabledDaysText	: "",
		disabledDatesText	: "",
		monthNames			: Date.monthNames,
		dayNames			: Date.dayNames,
		nextText			: "NastÄpny miesiÄc (Control+StrzaÅkaWPrawo)",
		prevText			: "Poprzedni miesiÄc (Control+StrzaÅkaWLewo)",
		monthYearText		: "Wybierz miesiÄc (Control+Up/Down aby zmieniÄ rok)",
		todayTip			: "{0} (Spacja)",
		format				: "Y-m-d",
		okText            	: "&#160;OK&#160;",
    	cancelText        	: "Anuluj",
    	startDay          	: 1
	});
}

if(Ext.PagingToolbar){
	Ext.apply(Ext.PagingToolbar.prototype, {
		beforePageText	: "Strona",
		afterPageText	: "z {0}",
		firstText		: "Pierwsza strona",
	    prevText		: "Poprzednia strona",
		nextText		: "NastÄpna strona",
	    lastText		: "Ostatnia strona",
		refreshText		: "OdÅwieÅ¼",
	    displayMsg		: "WyÅwietlono {0} - {1} z {2}",
		emptyMsg		: "Brak danych do wyÅwietlenia"
	});
}

if(Ext.form.TextField){
	Ext.apply(Ext.form.TextField.prototype, {
	    minLengthText	: "Minimalna iloÅÄ znakÃ³w dla tego pola to {0}",
		maxLengthText	: "Maksymalna iloÅÄ znakÃ³w dla tego pola to {0}",
	    blankText		: "To pole jest wymagane",
		regexText		: "",
	    emptyText		: null
	});
}

if(Ext.form.NumberField){
	Ext.apply(Ext.form.NumberField.prototype, {
	    minText	: "Minimalna wartoÅÄ dla tego pola to {0}",
	    maxText	: "Maksymalna wartoÅÄ dla tego pola to {0}",
		nanText	: "{0} to nie jest wÅaÅciwa wartoÅÄ"
	});
}

if(Ext.form.DateField){
	Ext.apply(Ext.form.DateField.prototype, {
	    disabledDaysText	: "WyÅÄczony",
	    disabledDatesText	: "WyÅÄczony",
		minText				: "Data w tym polu musi byÄ pÃ³Åºniejsza od {0}",
	    maxText				: "Data w tym polu musi byÄ wczeÅniejsza od {0}",
		invalidText			: "{0} to nie jest prawidÅowa data - prawidÅowy format daty {1}",
	    format				: "Y-m-d",
    	altFormats    	    : "m/d/Y|m-d-y|m-d-Y|m/d|m-d|md|mdy|mdY|d|Y-m-d"
	});
}

if(Ext.form.ComboBox){
	Ext.apply(Ext.form.ComboBox.prototype, {
		loadingText       : "WczytujÄ...",
		valueNotFoundText : undefined
	});
}

if(Ext.form.VTypes){
	Ext.apply(Ext.form.VTypes, {
	    emailText		: 'To pole wymaga podania adresu e-mail w formacie: "nazwa@domena.pl"',
	    urlText			: 'To pole wymaga podania adresu strony www w formacie: "http:/'+'/www.domena.pl"',
		alphaText		: 'To pole wymaga podania tylko liter i _',
		alphanumText	: 'To pole wymaga podania tylko liter, cyfr i _'
	});
}

if(Ext.form.HtmlEditor){
  Ext.apply(Ext.form.HtmlEditor.prototype, {
    createLinkText : 'WprowadÅº adres URL strony:',
    buttonTips : {
      bold : {
        title: 'Pogrubienie (Ctrl+B)',
        text: 'Ustaw styl zaznaczonego tekstu na pogrubiony.',
        cls: 'x-html-editor-tip'
      },
      italic : {
        title: 'Kursywa (Ctrl+I)',
        text: 'Ustaw styl zaznaczonego tekstu na kursywÄ.',
        cls: 'x-html-editor-tip'
      },
      underline : {
        title: 'PodkreÅlenie (Ctrl+U)',
        text: 'PodkreÅl zaznaczony tekst.',
        cls: 'x-html-editor-tip'
      },
      increasefontsize : {
        title: 'ZwiÄksz czcionkÄ',
        text: 'ZwiÄksz rozmiar czcionki.',
        cls: 'x-html-editor-tip'
      },
      decreasefontsize : {
        title: 'Zmniejsz czcionkÄ',
        text: 'Zmniejsz rozmiar czcionki.',
        cls: 'x-html-editor-tip'
      },
      backcolor : {
        title: 'WyrÃ³Å¼nienie',
        text: 'ZmieÅ kolor wyrÃ³Å¼nienia zaznaczonego tekstu.',
        cls: 'x-html-editor-tip'
      },
      forecolor : {
        title: 'Kolor czcionki',
        text: 'ZmieÅ kolor zaznaczonego tekstu.',
        cls: 'x-html-editor-tip'
      },
      justifyleft : {
        title: 'Do lewej',
        text: 'WyrÃ³wnaj tekst do lewej.',
        cls: 'x-html-editor-tip'
      },
      justifycenter : {
        title: 'WyÅrodkuj',
        text: 'WyrÃ³wnaj tekst do Årodka.',
        cls: 'x-html-editor-tip'
      },
      justifyright : {
        title: 'Do prawej',
        text: 'WyrÃ³wnaj tekst do prawej.',
        cls: 'x-html-editor-tip'
      },
      insertunorderedlist : {
        title: 'Lista wypunktowana',
        text: 'Rozpocznij listÄ wypunktowanÄ.',
        cls: 'x-html-editor-tip'
      },
      insertorderedlist : {
        title: 'Lista numerowana',
        text: 'Rozpocznij listÄ numerowanÄ.',
        cls: 'x-html-editor-tip'
      },
      createlink : {
        title: 'HiperÅÄcze',
        text: 'PrzeksztaÅÄ zaznaczony tekst w hiperÅÄcze.',
        cls: 'x-html-editor-tip'
      },
      sourceedit : {
        title: 'Edycja ÅºrÃ³dÅa',
        text: 'PrzeÅÄcz w tryb edycji ÅºrÃ³dÅa.',
        cls: 'x-html-editor-tip'
      }
    }
  });
}

if(Ext.grid.GridView){
	Ext.apply(Ext.grid.GridView.prototype, {
	    sortAscText		: "Sortuj rosnÄco",
	    sortDescText	: "Sortuj malejÄco",
		lockText		: "Zablokuj kolumnÄ",
	    unlockText		: "Odblokuj kolumnÄ",
		columnsText		: "Kolumny"
	});
}

if(Ext.grid.GroupingView){
  Ext.apply(Ext.grid.GroupingView.prototype, {
    emptyGroupText : '(None)',
    groupByText    : 'Grupuj po tym polu',
    showGroupsText : 'PokaÅ¼ w grupach'
  });
}

if(Ext.grid.PropertyColumnModel){
	Ext.apply(Ext.grid.PropertyColumnModel.prototype, {
	    nameText	: "Nazwa",
	    valueText	: "WartoÅÄ",
		dateFormat	: "Y-m-d"
	});
}

if(Ext.layout.BorderLayout && Ext.layout.BorderLayout.SplitRegion){
	Ext.apply(Ext.layout.BorderLayout.SplitRegion.prototype, {
	    splitTip			: "PrzeciÄgnij aby zmieniÄ rozmiar.",
		collapsibleSplitTip	: "PrzeciÄgnij aby zmieniÄ rozmiar. Kliknij dwukrotnie aby ukryÄ."
	});
}
