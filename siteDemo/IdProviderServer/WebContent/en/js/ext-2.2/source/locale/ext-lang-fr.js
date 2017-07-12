ï»¿/*
 * France (France) translation
 * By Thylia
 * 09-11-2007, 02:22 PM
 */

Ext.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">En cours de chargement...</div>';

if(Ext.View){
   Ext.View.prototype.emptyText = "";
}

if(Ext.grid.GridPanel){
   Ext.grid.GridPanel.prototype.ddText = "{0} ligne(s) sÃ©lectionnÃ©e(s)";
}

if(Ext.TabPanelItem){
   Ext.TabPanelItem.prototype.closeText = "Fermer cet onglet";
}

if(Ext.form.Field){
   Ext.form.Field.prototype.invalidText = "La valeur de ce champ est invalide";
}

if(Ext.LoadMask){
    Ext.LoadMask.prototype.msg = "En cours de chargement...";
}

Date.monthNames = [
   "Janvier",
   "FÃ©vrier",
   "Mars",
   "Avril",
   "Mai",
   "Juin",
   "Juillet",
   "AoÃ»t",
   "Septembre",
   "Octobre",
   "Novembre",
   "DÃ©cembre"
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
   "Sunday",
   "Monday",
   "Tuesday",
   "Wendesday",
   "Thursday",
   "Friday",
   "Saturday"
];

Date.getShortDayName = function(day) {
  return Date.dayNames[day].substring(0, 3);
};

if(Ext.MessageBox){
   Ext.MessageBox.buttonText = {
      ok     : "OK",
      cancel : "Cancel",
      yes    : "Oui",
      no     : "Non"
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
      todayText         : "Aujourd'hui",
      minText           : "Cette date est antÃ©rieure Ã  la date minimum",
      maxText           : "Cette date est postÃ©rieure Ã  la date maximum",
      disabledDaysText  : "",
      disabledDatesText : "",
      monthNames		: Date.monthNames,
      dayNames			: Date.dayNames,
      nextText          : 'Mois suivant (CTRL+FlÃ¨che droite)',
      prevText          : "Mois prÃ©cÃ©dent (CTRL+FlÃ¨che gauche)",
      monthYearText     : "Choisissez un mois (CTRL+FlÃ¨che haut ou bas pour changer d'annÃ©e.)",
      todayTip          : "{0} (Barre d'espace)",
      okText            : "&#160;OK&#160;",
      cancelText        : "Cancel",
      format            : "d/m/y",
      startDay          : 1
   });
}

if(Ext.PagingToolbar){
   Ext.apply(Ext.PagingToolbar.prototype, {
      beforePageText : "Page",
      afterPageText  : "sur {0}",
      firstText      : "PremiÃ¨re page",
      prevText       : "Page prÃ©cÃ©dente",
      nextText       : "Page suivante",
      lastText       : "DerniÃ¨re page",
      refreshText    : "Actualiser la page",
      displayMsg     : "Page courante {0} - {1} on {2}",
      emptyMsg       : 'Aucune donnÃ©e Ã  afficher'
   });
}

if(Ext.form.TextField){
   Ext.apply(Ext.form.TextField.prototype, {
      minLengthText : "La longueur minimum de ce champ est de {0} caractÃ¨res",
      maxLengthText : "La longueur maximum de ce champ est de {0} caractÃ¨res",
      blankText     : "Ce champ est obligatoire",
      regexText     : "",
      emptyText     : null
   });
}

if(Ext.form.NumberField){
   Ext.apply(Ext.form.NumberField.prototype, {
      minText : "La valeur minimum de ce champ doit Ãªtre de {0}",
      maxText : "La valeur maximum de ce champ doit Ãªtre de {0}",
      nanText : "{0} n'est pas un nombre valide"
   });
}

if(Ext.form.DateField){
   Ext.apply(Ext.form.DateField.prototype, {
      disabledDaysText  : "DÃ©sactivÃ©",
      disabledDatesText : "DÃ©sactivÃ©",
      minText           : "La date de ce champ ne peut Ãªtre antÃ©rieure au {0}",
      maxText           : "La date de ce champ ne peut Ãªtre postÃ©rieure au {0}",
      invalidText       : "{0} n'est pas une date valide - elle doit Ãªtre au format suivant: {1}",
      format            : "d/m/y",
      altFormats        : "d/m/Y|d-m-y|d-m-Y|d/m|d-m|dm|dmy|dmY|d|Y-m-d"
   });
}

if(Ext.form.ComboBox){
   Ext.apply(Ext.form.ComboBox.prototype, {
      loadingText       : "En cours de chargement...",
      valueNotFoundText : undefined
   });
}

if(Ext.form.VTypes){
   Ext.apply(Ext.form.VTypes, {
      emailText    : 'Ce champ doit contenir une adresse email au format: "usager@domaine.com"',
      urlText      : 'Ce champ doit contenir une URL au format suivant: "http:/'+'/www.domaine.com"',
      alphaText    : 'Ce champ ne peut contenir que des lettres et le caractÃ¨re soulignÃ© (_)',
      alphanumText : 'Ce champ ne peut contenir que des caractÃ¨res alphanumÃ©riques ainsi que le caractÃ¨re soulignÃ© (_)'
   });
}

if(Ext.form.HtmlEditor){
   Ext.apply(Ext.form.HtmlEditor.prototype, {
      createLinkText : "Veuillez entrer l'URL pour ce lien:",
          buttonTips : {
              bold : {
                  title: 'Gras (Ctrl+B)',
                  text: 'Met le texte sÃ©lectionnÃ© en gras.',
                  cls: 'x-html-editor-tip'
              },
              italic : {
                  title: 'Italique (Ctrl+I)',
                  text: 'Met le texte sÃ©lectionnÃ© en italique.',
                  cls: 'x-html-editor-tip'
              },
              underline : {
                  title: 'SoulignÃ© (Ctrl+U)',
                  text: 'Souligne le texte sÃ©lectionnÃ©.',
                  cls: 'x-html-editor-tip'
              },
              increasefontsize : {
                  title: 'Agrandir la police',
                  text: 'Augmente la taille de la police.',
                  cls: 'x-html-editor-tip'
              },
              decreasefontsize : {
                  title: 'RÃ©duire la police',
                  text: 'RÃ©duit la taille de la police.',
                  cls: 'x-html-editor-tip'
              },
              backcolor : {
                  title: 'Couleur de surbrillance',
                  text: 'Modifie la couleur de fond du texte sÃ©lectionnÃ©.',
                  cls: 'x-html-editor-tip'
              },
              forecolor : {
                  title: 'Couleur de police',
                  text: 'Modifie la couleur du texte sÃ©lectionnÃ©.',
                  cls: 'x-html-editor-tip'
              },
              justifyleft : {
                  title: 'Aligner Ã  gauche',
                  text: 'Aligne le texte Ã  gauche.',
                  cls: 'x-html-editor-tip'
              },
              justifycenter : {
                  title: 'Centrer',
                  text: 'Centre le texte.',
                  cls: 'x-html-editor-tip'
              },
              justifyright : {
                  title: 'Aligner Ã  droite',
                  text: 'Aligner le texte Ã  droite.',
                  cls: 'x-html-editor-tip'
              },
              insertunorderedlist : {
                  title: 'Liste Ã  puce',
                  text: 'DÃ©marre une liste Ã  puce.',
                  cls: 'x-html-editor-tip'
              },
              insertorderedlist : {
                  title: 'Liste numÃ©rotÃ©e',
                  text: 'DÃ©marre une liste numÃ©rotÃ©e.',
                  cls: 'x-html-editor-tip'
              },
              createlink : {
                  title: 'Lien hypertexte',
                  text: 'Transforme en lien hypertexte.',
                  cls: 'x-html-editor-tip'
              },
              sourceedit : {
                  title: 'Code source',
                  text: 'Basculer en mode Ã©dition du code source.',
                  cls: 'x-html-editor-tip'
              }
        }
   });
}

if(Ext.form.TimeField){
   Ext.apply(Ext.form.TimeField.prototype, {
      minText     : "L'heure de ce champ ne peut Ãªtre antÃ©rieure au {0}",
      maxText     : "L'heure de ce champ ne peut Ãªtre postÃ©rieure au {0}",
      invalidText : "{0} n'est pas une heure valide",
      format      : "H:i",
      altFormats  : "g:ia|g:iA|g:i a|g:i A|h:i|g:i|H:i|ga|h a|g a|g A|gi|hi|Hi|gia|hia|g|H"
   });
}

if(Ext.grid.GridView){
   Ext.apply(Ext.grid.GridView.prototype, {
      sortAscText  : "Tri croissant",
      sortDescText : "Tri dÃ©croissant",
      lockText     : "Verrouiller la colonne",
      unlockText   : "DÃ©verrouiller la colonne",
      columnsText  : "Colonnes"
   });
}

if(Ext.grid.GroupingView){
   Ext.apply(Ext.grid.GroupingView.prototype, {
      emptyGroupText : '(Aucun)',
      groupByText    : 'Grouper par ce champ',
      showGroupsText : 'Afficher par groupes'
   });
}

if(Ext.grid.PropertyColumnModel){
   Ext.apply(Ext.grid.PropertyColumnModel.prototype, {
      nameText   : "PropriÃ©tÃ©",
      valueText  : "Valeur",
      dateFormat : "d/m/Y"
   });
}

if(Ext.layout.BorderLayout && Ext.layout.BorderLayout.SplitRegion){
   Ext.apply(Ext.layout.BorderLayout.SplitRegion.prototype, {
      splitTip            : "Cliquer et glisser pour redimensionner le panneau.",
      collapsibleSplitTip : "Cliquer et glisser pour redimensionner le panneau. Double-cliquer pour le cacher."
   });
}
