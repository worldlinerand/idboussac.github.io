// JavaScript Document
//------------------------------page index.html--------------------
//fonction permettent de remplir le champ Password en cliquant sur le digicode
function affiche_password(nbr)
{
var password=document.getElementById("ipPassword");
password.value=password.value+nbr;
}

//-----------------------fin page index-------------------------------
//---------------------------menu de gauche du site-------------------------------


//fonction permettant de mettre la petite fleche a coté  des titres vers le bas quand le menu est actif
/*function changeimage(monId,tonId,sonId,nosId,vosId,leurId,deuxId,troisId)
{
 var monId=document.getElementById(monId);
 var tonId=document.getElementById(tonId);
 var sonId=document.getElementById(sonId);
 var nosId=document.getElementById(nosId);
 var vosId=document.getElementById(vosId);
 var leurId=document.getElementById(leurId);
 var deuxId=document.getElementById(deuxId);
 var troisId=document.getElementById(troisId);
 {
 monId.style.display="none";
 tonId.style.display="block";
 tonId.style.visibility="visible";
 sonId.style.display="none";
 nosId.style.display="block";
 nosId.style.visibility="visible";
 vosId.style.display="none";
 leurId.style.display="block";
 leurId.style.visibility="visible";
 deuxId.style.display="none";
 troisId.style.display="block";
 troisId.style.visibility="visible";
 }
}*/


function setFocus(link,reset)
{
	// Mise au point du lien
	var mesLiensAColorer=jQuery("#subNavServ > li");
	for (i=0;i<mesLiensAColorer.length;i++)
	{
			jQuery("#subNavServ > li:eq("+i+")").removeClass("navLinkActiv");
			jQuery("#subNavServ > li:eq("+i+")").addClass("navLink");
	}
	if (!reset)
	{
		var mySelector="li li:has('#"+link+"')";
		jQuery(mySelector).removeClass("navLink");
		jQuery(mySelector).addClass("navLinkActiv");
	}
	// Ajout du Nom dans le header
	setMap(jQuery("#"+link).text());
}
//-------------------------- fin menu de gauche du site---------------------
//---------------------------header--------------------------------------------
function setMap(texte)
{
	// On ajoute le nom du menu a l'arboresence au dessus
	window.parent.frames[0].document.getElementById("bdCrumbs").innerHTML="<a target='main' href='frame-accueil.html'>Main ></a> "+ texte;
}



function setAccueil(){
	setFocus("comptes",true);
	setMap("");




	// Mise a zéro des champs sélectionnés sur le côté
}
//---------------------------fin header--------------------------------------
//--------------------------sur toutes les pages---------------------------
// RECUPERATION DE LA DATE
var now = new Date();
var jour=now.getDay();
var numday = now.getDate();
var nummonth = now.getMonth();
var month = nummonth+1;
var yesterday=numday-1;
if(yesterday<10)
{
yesterday="0"+yesterday;
}
var lastmonth=month-1
if(month<10) {
month = "0"+month;
}
var numyear = now.getFullYear();
// RECUPERATION DE L'HEURE
var numhours = now.getHours();
if(numhours < 10) {
numhours = "0"+numhours;
}
var numminutes = now.getMinutes();
if(numminutes < 10) {
numminutes = "0"+numminutes;
}
if (jour==0)
{
jour="Dimanche";
}
if (jour==1)
{
jour="Lundi";
}
if (jour==2)
{
jour="Mardi";
}
if (jour==3)
{
jour="Mercredi";
}
if (jour==4)
{
jour="Jeudi";
}
if (jour==5)
{
jour="Vendredi";
}
if (jour==6)
{
jour="Samedi";
}
// AFFICHAGE DU COUPLE DATE/HEURE
var nowtoday = "";
if (month==1)
{
nowtoday += jour+" "+numday+" "+"Janvier"+" "+numyear;
}
if (month==2)
{
nowtoday += jour+" "+numday+" "+"Février"+" "+numyear;
}
if (month==3)
{
nowtoday += jour+" "+numday+" "+"Mars"+" "+numyear;
}
if (month==4)
{
nowtoday += jour+" "+numday+" "+"Avril"+" "+numyear;
}
if (month==5)
{
nowtoday += jour+" "+numday+" "+"Mai"+" "+numyear;
}
if (month==6)
{
nowtoday += jour+" "+numday+" "+"Juin"+" "+numyear;
}
if (month==7)
{
nowtoday += jour+" "+numday+" "+"Juillet"+" "+numyear;
}
if (month==8)
{
nowtoday += jour+" "+numday+" "+"Aout"+" "+numyear;
}
if (month==9)
{
nowtoday += jour+" "+numday+" "+"Septembre"+" "+numyear;
}
if (month==10)
{
nowtoday += jour+" "+numday+" "+"Octobre"+" "+numyear;
}
if (month==11)
{
nowtoday += jour+" "+numday+" "+"Novembre"+" "+numyear;
}
if (month==12)
{
nowtoday += jour+" "+numday+" "+"Décembre"+" "+numyear;
}
nowtoday += " - ";
nowtoday += numhours+" h "+numminutes;

// Creation date pour coffre
var datecoffre=numday+"/"+month+"/"+numyear + " &agrave;  " + numhours+":"+numminutes;
// Creation date pour le paiement
var datepaiement=numday+"/"+month+"/"+numyear;

//affichage derniere connexion
var lasttoday="";
if (numday==1)
{
lasttoday+="28"+"/"+lastmonth+"/"+numyear
}
else
{
lasttoday += yesterday+"/"+month+"/"+numyear;
}
//-------------------------- fin sur toutes les pages----------------------
//----------------------gestion des alertes-----------------------

index=0;
// fonction permettant de choisir le type d'alerte
function change2(monId)
{
 var technologie=document.getElementById(monId);
 var mondiv="";
    if (technologie.value=="technologie1")
          {
           mondiv="SMS";
          }
     if (technologie.value=="technologie2")
          {
           mondiv="E-mail";
          }
     if (technologie.value=="technologie3")
          {
           mondiv="appel entrant";
          }
         return mondiv;
 }

//fonction permettant de faire apparaitre les choix pour les operations sur solde

function change3()
{
var solde = document.getElementById("solde");
var superdiv=document.getElementById("superdiv");
var div1=document.getElementById("div1");
var div2=document.getElementById("div2");
var div5=document.getElementById("div5");
                if (solde.value=="solde1")
                {
                 superdiv.style.visibility="visible";
                 superdiv.style.display ="block";
                 superdiv.innerHTML=div1.innerHTML;
                }
                if (solde.value=="solde2")
                {
                 superdiv.style.visibility = "visible";
                 superdiv.style.display ="block";
                 superdiv.innerHTML=div2.innerHTML;
                }
                if (solde.value=="solde3")
                {
                superdiv.style.visibility = "visible";
                superdiv.style.display ="block";
                 superdiv.innerHTML=div5.innerHTML;
                }
}

//fontion permettant de faire apparaitre les choix pour les operations sur mouvement

function change4()
{
 var operation = document.getElementById("operation");
 var superdiv=document.getElementById("superdiv");
 var div3=document.getElementById("div3");
 var div4=document.getElementById("div4");
 var div14=document.getElementById("div14");
 var div8=document.getElementById("div8");
  if (operation.value=="operation1")
                {
                 superdiv.style.visibility = "visible";
                 superdiv.style.display ="block";
                 superdiv.innerHTML=div3.innerHTML;
                }
                if (operation.value=="operation2")
                {
                 superdiv.style.visibility = "visible";
                 superdiv.style.display ="block";
                 superdiv.innerHTML=div4.innerHTML;
                }
                if (operation.value=="operation3")
                {
                 superdiv.style.visibility = "visible";
                 superdiv.style.display ="block";
                 superdiv.innerHTML=div14.innerHTML;
                 }
                 if (operation.value=="operation4")
                {
                 superdiv.style.visibility = "visible";
                 superdiv.style.display ="block";
                 superdiv.innerHTML=div8.innerHTML;
                 }
}

//fonction faisant apparaitre le tableau une fois qu'on commence a le remplir

function tableaurecap()
{
var div9=document.getElementById("div9");
{
div9.style.visibility = "visible";
}
}

//fonction qui cache l'endroit ou vont apparaitre les choix pour ne pas prendre trop de place sur la page

function cachersuperdiv()
{
var superdiv=document.getElementById("superdiv")
{
superdiv.style.display="none";
}
}

//fonction permettant de choisir le type général de l'alerte (solde, operation, blocage carte)

function change()
{
 var alerte = document.getElementById("alerte");
 var superdiv=document.getElementById("superdiv");
 var div6=document.getElementById("div6");
 var div11=document.getElementById("div11");
 var div12=document.getElementById("div12");
      if(alerte.value == "alerte1")
               {
                div11.style.visibility = "visible";
               }
        if(alerte.value == "alerte2")
               {
                div12.style.visibility = "visible";
                }
        if(alerte.value == "alerte3")
               {
               superdiv.style.visibility = "visible";
               superdiv.style.display ="block";
                superdiv.innerHTML=div6.innerHTML;
                }
}
//fonction qui cache tous les choix d'alertes
function cacher(a,b,c,d,e,f,g,h,i,j,k,l)
{
  cacherun(a);
  cacherun(b);
  cacherun(c);
  cacherun(d);
  cacherun(e);
  cacherun(f);
  cacherun(g);
  cacherun(h);
  cacherun(i);
  cacherun(j);
  cacherun(k);
  cacherun(l);
}

//fonction qui cache un div
function cacherun(monDiv)
{
   var object = document.getElementById(monDiv);
   object.style.visibility='hidden';
}
//fonction qui remet les menus déroulant en position initiale

function initialiser()
{
var alerte = document.getElementById("alerte");
var solde = document.getElementById("solde");
var operation = document.getElementById("operation");
         if (alerte.value!= "alerte0")
            {alerte.value="alerte0"
            }
         if (solde.value!= "solde0")
            {solde.value="solde0"
            }
         if (operation.value!= "operation0")
            {operation.value="operation0"
            }
}
// fonction qui supprime une ligne du tableau récapitulatif
function supp(id)
{
	//switch (document.getElementById(id).value)
	//{
	//case "Ligne":
	//	tableau.deleteRow(Number(document.getElementById("i").value));
	//	break;
	//}
	//ligne = document.getElementById(id);
	tableau = document.getElementById("table");
	for (i=0;i<tableau.rows.length;i++)
	{
	   if (tableau.rows[i].id==id)
	   {
	     tableau.deleteRow(i);
     }
  }
}
//fonction qui ajoute dynamiquement une ligne au tableau récapitulatif si il y a un montant &agrave; ecrire

function ajouterligne(type_alerte,montant,mondiv,monId)
{
    var nouvelleligne = document.getElementById("table").insertRow(-1);
    var newCell = nouvelleligne.insertCell(0);
    var valeur=document.getElementById(montant).value;
    var ty_al=type_alerte;
    index++;
    nouvelleligne.id="tr_"+index;
    newCell.innerHTML = ty_al;
    newCell = nouvelleligne.insertCell(1);
    newCell.innerHTML = valeur+"&euro;";
    newCell = nouvelleligne.insertCell(2);
    newCell.innerHTML = change2(monId);
    newCell = nouvelleligne.insertCell(3);
    newCell.innerHTML = "<input type='image' src='../imgs/supprimer.gif' value='supprimer' onclick='supp(\""+nouvelleligne.id+"\");'>";
}

//fonction qui ajoute dynamiquement une ligne au tableau récapitulatif si il n'y a pas de montant &agrave; ecrire

function ajouterligne2(type_alerte,montant,mondiv,monId)
{
    var nouvelleligne = document.getElementById("table").insertRow(-1);
    var newCell = nouvelleligne.insertCell(0);
    var valeur=document.getElementById(montant).value;
    var ty_al=type_alerte;
    index++;
    nouvelleligne.id="tr_"+index;
    newCell.innerHTML = ty_al;
    newCell = nouvelleligne.insertCell(1);
    newCell.innerHTML = valeur+"######";
    newCell = nouvelleligne.insertCell(2);
    newCell.innerHTML = "######";
    newCell = nouvelleligne.insertCell(3);
    newCell.innerHTML = "<input type='image' src='../imgs/supprimer.gif' value='supprimer' onclick='supp(\""+nouvelleligne.id+"\");'>";
}

//---------------------------fin de gestion des alertes------------------------------------
//----------------------------messagerie instantanée--------------------------------------
i=0;
//fonction faisant clignoter un élément en passant la souris dessus
function clignoter(monid)
{
 var myElement = $('#'+monid);
 for (var j = 0; j < 4; j++) { // Pulsate
      myElement.animate({opacity: 0}, 2000).animate({opacity: 1},2000);
 };
}

//fonction affichant une popup
function affichage_popup()
{
window.open('fenetre_popup.html','Messagerie', config='height=490, width=490, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, directories=no, status=no');
}

//fonction permettant de remplacer le "conseiller hors ligne" par le "conseiller en ligne"
function apparaitre()
{
	var image2=document.getElementById("image2");
	var conseiller=document.getElementById("conseiller");
	{
		image2.style.display="block";
		image2.style.visibility="visible";
		conseiller.style.display="block";
		conseiller.style.visibility="visible";
	}
}
function attendre (image1,image2){
	var image1=document.getElementById("image1");
	var image2=document.getElementById("image2");

		image1.style.display="none";
		apparaitre();
		clignoter('image2');

}
//fonctions permettant d'envoyer le texte  ecrit dans la fenetre de discussion
function envoyer_texte()
{
 var texte_2=document.getElementById("textarea_2");
 var texte_1=document.getElementById("textarea_1");
 texte_1.innerHTML=texte_1.innerHTML +  "<span class='pop'><b>Mr.Durand:</b> " + texte_2.value + "</span><BR><BR>";
 texte_2.value="";
}
function entree(event)
{
if(event.keyCode==13)
{
envoyer_texte();
reponse_conseiller();
return false;
}
}
var merci=0;
//fonctions permettant au conseiller de repondre si le client dit merci dans sa phrase
function reponse()
{
var texte_1=document.getElementById("textarea_1");
{
 texte_1.innerHTML=texte_1.innerHTML +  "<span class='conseiller'><b>Mr.Martin:</b> Je reste &agrave; votre disposition pour tout renseignement. Au revoir.<BR></span>";
}
}
function reponse_conseiller()
{
 var texte_1=document.getElementById("textarea_1");
if((texte_1.innerHTML.indexOf("merci")!=-1 || texte_1.innerHTML.indexOf("Merci")!=-1 || texte_1.innerHTML.indexOf("MERCI")!=-1) && merci==0)
{
 merci=1;
 setTimeout("reponse()",3000);
}
}
//-------------------------------fin messagerie instantanée--------------------------------


//--------------------------------facture--------------------------------------------------
function changeClasseFacture(id){
	var mesLiensAColorer=jQuery("#listeFournisseur tr");
	window.top.selectedCompany=id;
	for (i=0;i<mesLiensAColorer.length;i++)
	{
		var monfacttemp = jQuery("#listeFournisseur tr:eq("+i+")");
		if(monfacttemp.attr("id")==id){
			jQuery("#listeFournisseur tr:eq("+i+") .imgFacture").addClass("selectionImgFacture").removeClass("imgFacture");
			jQuery("#listeFournisseur tr:eq("+i+") .textFacture").addClass("selectionTextFacture").removeClass("textFacture");
		}
		else{
			jQuery("#listeFournisseur tr:eq("+i+") .selectionImgFacture").addClass("imgFacture").removeClass("selectionImgFacture");
			jQuery("#listeFournisseur tr:eq("+i+") .selectionTextFacture").addClass("textFacture").removeClass("selectionTextFacture");
		}
	}
}

function chargerLogoFacture(){
	document.getElementById("logoFacture").innerHTML="<img src=\"../imgs/paiementFacture/"+window.top.selectedCompany+".png\" />";
}

function apparitionMobile(){
	//jQuery("#masqueMobile").css("display","none");
	//jQuery("#textMobile").attr("width","425");
	//jQuery("#cacheMobile").css("display","none");
	jQuery("#codeMobile").slideDown("slow");
	//jQuery("#codeMobile").css("display","inline");
}

function afficheChoixAbo(maValeur){
	if (maValeur=="Telepaiement"){
		jQuery("#choixAbonnneTele").slideDown("def");
		jQuery("#DonneesCB").slideUp("def");
	}
	else{
		jQuery("#choixAbonnneTele").slideUp("def");
		jQuery("#DonneesCB").slideDown("def");
	}
}

function afficheChoixCompte(maValeur){
	if (maValeur=="yes"){
		jQuery("#choixCompte").slideDown("def");
	}
	else{
		jQuery("#choixCompte").slideUp("def");
	}
}

function getFournisseur(id){

		var organisme;
		var name=id;
		// On recherche dans la table des fournisseur pour trouver le logo
		$.each(window.top.fournisseur.records,function(i,four){
		if (four.name==name)
		{
			organisme=four;
			return;
		}
		});
		$.each(window.top.fournisseurAChoisir.records,function(i,four){
		if (four.name==name)
		{
			organisme=four;
			return;
		}
		});
		return organisme;
	}

function buildData(start,organisme)
{
	var dt = new Date();
	var d = [];
    for (var i = 0; i < 12; i +=1)
	{
        d.push([dt.add(Date.MONTH,-1*i).format('U')*1000, start+((Math.random()-0.5)*75)]);
	}
    return [
    { label: organisme, data: d }
        ];
}

function getData(series,x1,x2)
{
	var d = [];
	for (var i = 0; i < series[0].data.length; i +=1)
	{
		if (series[0].data[i][0]>x1&series[0].data[i][1]<x2)
		{
			d.push(series[0].data[i]);
		}
	}
	return [
    { label: series[0].label, data: d }
        ];
}

var noRefresh = function(ct, position){
        Ext.PagingToolbar.superclass.onRender.call(this, ct, position);
        this.first = this.addButton({
            tooltip: this.firstText,
            iconCls: "x-tbar-page-first",
            disabled: true,
            handler: this.onClick.createDelegate(this, ["first"])
        })
        this.prev = this.addButton({
            tooltip: this.prevText,
            iconCls: "x-tbar-page-prev",
            disabled: true,
            handler: this.onClick.createDelegate(this, ["prev"])
        });
        this.addSeparator();
        this.add(this.beforePageText);
        this.field = Ext.get(this.addDom({
           tag: "input",
           type: "text",
           size: "3",
           value: "1",
           cls: "x-tbar-page-number"
        }).el);
        this.field.on("keydown", this.onPagingKeydown, this);
        this.field.on("focus", function(){this.dom.select();});
        this.afterTextEl = this.addText(String.format(this.afterPageText, 1));
        this.field.setHeight(18);
        this.addSeparator();
        this.next = this.addButton({
            tooltip: this.nextText,
            iconCls: "x-tbar-page-next",
            disabled: true,
            handler: this.onClick.createDelegate(this, ["next"])
        });
        this.last = this.addButton({
            tooltip: this.lastText,
            iconCls: "x-tbar-page-last",
            disabled: true,
            handler: this.onClick.createDelegate(this, ["last"])
        });
        this.addSeparator();

        if(this.displayInfo){
            this.displayEl = Ext.fly(this.el.dom).createChild({cls:'x-paging-info'});
        }
        if(this.dsLoaded){
            this.onLoad.apply(this, this.dsLoaded);
        }
	}

function submitForm(){
	document.getElementById("loginForm").submit();
}

function cancelForm(){
	document.getElementById("ipPassword").value = "";
}
