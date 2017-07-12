/*
 * Croatian translation
 * By Ylodi (utf8 encoding)
 * 8 May 2007
 */
 
Ext.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">UÄitavanje...</div>';

if(Ext.View){
   Ext.View.prototype.emptyText = "";
}

if(Ext.grid.GridPanel){
   Ext.grid.GridPanel.prototype.ddText = "{0} odabranih redova";
}

if(Ext.TabPanelItem){
   Ext.TabPanelItem.prototype.closeText = "Zatvori ovaj tab";
}

if(Ext.form.Field){
   Ext.form.Field.prototype.invalidText = "Unesena vrijednost u ovom polju je neispravna";
}

if(Ext.LoadMask){
    Ext.LoadMask.prototype.msg = "UÄitavanje...";
}

Date.monthNames = [
   "SijeÄanj",
   "VeljaÄa",
   "OÅ¾ujak",
   "Travanj",
   "Svibanj",
   "Lipanj",
   "Srpanj",
   "Kolovoz",
   "Rujan",
   "Listopad",
   "Studeni",
   "Prosinac"
];

Date.dayNames = [
   "Nedjelja",
   "Ponedjeljak",
   "Utorak",
   "Srijeda",
   "Äetvrtak",
   "Petak",
   "Subota"
];

if(Ext.MessageBox){
   Ext.MessageBox.buttonText = {
      ok     : "U redu",
      cancel : "Odustani",
      yes    : "Da",
      no     : "Ne"
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
      todayText         : "Danas",
      minText           : "Taj datum je prije najmanjeg datuma",
      maxText           : "Taj datum je poslije najveÄeg datuma",
      disabledDaysText  : "",
      disabledDatesText : "",
      monthNames	: Date.monthNames,
      dayNames		: Date.dayNames,
      nextText          : 'SlijedeÄi mjesec (Control+Desno)',
      prevText          : 'Prethodni mjesec (Control+Lijevo)',
      monthYearText     : 'Odaberite mjesec (Control+Gore/Dolje za promjenu godine)',
      todayTip          : "{0} (Razmaknica)",
      format            : "d.m.y",
      startDay 		 : 1
   });
}

if(Ext.PagingToolbar){
   Ext.apply(Ext.PagingToolbar.prototype, {
      beforePageText : "Stranica",
      afterPageText  : "od {0}",
      firstText      : "Prva stranica",
      prevText       : "Prethodna stranica",
      nextText       : "SlijedeÄa stranica",
      lastText       : "Posljednja stranica",
      refreshText    : "Obnovi",
      displayMsg     : "Prikazujem {0} - {1} od {2}",
      emptyMsg       : 'Nema podataka za prikaz'
   });
}

if(Ext.form.TextField){
   Ext.apply(Ext.form.TextField.prototype, {
      minLengthText : "Minimalna duÅ¾ina za ovo polje je {0}",
      maxLengthText : "Maksimalna duÅ¾ina za ovo polje je {0}",
      blankText     : "Ovo polje je obavezno",
      regexText     : "",
      emptyText     : null
   });
}

if(Ext.form.NumberField){
   Ext.apply(Ext.form.NumberField.prototype, {
      minText : "Minimalna vrijednost za ovo polje je {0}",
      maxText : "Maksimalna vrijednost za ovo polje je {0}",
      nanText : "{0} nije ispravan broj"
   });
}

if(Ext.form.DateField){
   Ext.apply(Ext.form.DateField.prototype, {
      disabledDaysText  : "Neaktivno",
      disabledDatesText : "Neaktivno",
      minText           : "Datum u ovom polje mora biti poslije {0}",
      maxText           : "Datum u ovom polju mora biti prije {0}",
      invalidText       : "{0} nije ispravan datum - mora biti u obliku {1}",
      format            : "d.m.y"
   });
}

if(Ext.form.ComboBox){
   Ext.apply(Ext.form.ComboBox.prototype, {
      loadingText       : "UÄitavanje...",
      valueNotFoundText : undefined
   });
}

if(Ext.form.VTypes){
   Ext.apply(Ext.form.VTypes, {
      emailText    : 'Ovdje moÅ¾ete unijeti samo e-mail adresu u obliku "korisnik@domena.com"',
      urlText      : 'Ovdje moÅ¾ete unijeti samo URL u obliku "http:/'+'/www.domena.com"',
      alphaText    : 'Ovo polje moÅ¾e sadrÅ¾avati samo slova i znak _',
      alphanumText : 'Ovo polje moÅ¾e sadrÅ¾avati samo slova, brojeve i znak _'
   });
}

if(Ext.grid.GridView){
   Ext.apply(Ext.grid.GridView.prototype, {
      sortAscText  : "Sortiraj rastuÄim redoslijedom",
      sortDescText : "Sortiraj padajuÄim redoslijedom",
      lockText     : "ZakljuÄaj stupac",
      unlockText   : "OtkljuÄaj stupac",
      columnsText  : "Stupci"
   });
}

if(Ext.grid.PropertyColumnModel){
   Ext.apply(Ext.grid.PropertyColumnModel.prototype, {
      nameText   : "Naziv",
      valueText  : "Vrijednost",
      dateFormat : "d.m.Y"
   });
}

if(Ext.layout.BorderLayout && Ext.layout.BorderLayout.SplitRegion){
   Ext.apply(Ext.layout.BorderLayout.SplitRegion.prototype, {
      splitTip            : "Povuci za promjenu veliÄine.",
      collapsibleSplitTip : "Povuci za promjenu veliÄine. Dvostruki klik za skrivanje."
   });
}
