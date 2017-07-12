<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>WL Banque</title>
		<link rel="stylesheet" type="text/css" href="styles/main.css">
		<style type="text/css">@import url(../styles/xtheme-wlbank.css);</style>
		<script>

			// Array Remove - By John Resig (MIT Licensed)
			Array.prototype.remove = function(from, to) {
			  var rest = this.slice((to || from) + 1 || this.length);
			  this.length = from < 0 ? this.length + from : from;
			  return this.push.apply(this, rest);
			};
			var mailAafficher = "Pret";
			var coffreAafficher = "Personnel";
			var userName = "<%=request.getAttribute("username")%>";
      var idpUri = "<%=request.getAttribute("uri")%>";
      var idpQrcode = "<%=request.getAttribute("qrcode")%>";
      var gender = "<%=request.getAttribute("gender")%>";

      if(gender == "male"){
          var userGender = "Mr";
      } else {
        var userGender = "Mrs";
      }

      var fname = "<%=request.getAttribute("fname")%>";
      var lname ="<%=request.getAttribute("lname")%>";
      var nationality = "<%=request.getAttribute("nationality")%>";
      var dateOfBrith = "<%=request.getAttribute("dateOfBrith")%>";
      var placeOfBirth = "<%=request.getAttribute("placeOfBirth")%>";
      var postalAddress = "<%=request.getAttribute("postalAddress")%>";
      var cred_img  = "<%=request.getAttribute("credentials")%>";


			var myData = new Array(
        [false,false,true,false,'','','','Agence de Miribel','Fermeture exceptionnelle de votre agence le 29 Octobre 2007','05/10/2007',10.5,
"Cher client,<br><br>Suite &agrave; des travaux de r&eacute;novations, nous sommes au regret de vous informer que votre agence sera ferm&eacute;e le 29 Octobre 2007 toute la journ&eacute;e.<br>N'h&eacute;sitez pas &agrave; prendre contact avec votre conseiller avant cette date pour traiter tout probl&egrave;me urgent.<br><br>Votre conseiller reste &agrave; votre disposition pour toute question compl&eacute;mentaire.<br><br><br>Cordialement<br><br>"],
        [false,false,false,true,'2007-09-releve-01234-031567K.pdf','150Ko','#','Agence de Miribel','Votre relev&eacute; de compte du mois de Septembre 2007','02/10/2007',20,
"Monsieur Durand,<br><br>Vous trouverez en pi&egrave;ce jointe le d&eacute;tail de vos op&eacute;rations sur votre compte n�01069 - 031192K pour le mois de Septembre 2007.<br>Votre conseiller reste &agrave; votre disposition pour toute question compl&eacute;mentaire.<br><br><br>Cordialement<br><br>"],
        [false,false,true,true,'notice-assurance-vie.pdf','140Ko','fichiers/notice.pdf','Martin Dupont','Pr&eacute;sentation de nos offres d\'assurance vie','28/09/2007', 153,
"Bonjour,<br><br>Suite &agrave; votre demande, veuillez trouver ci-joint notre offre d'assurance vie \"notice\".<br>Vous pouvez &eacute;galement cliquer sur ce lien pour d&eacute;couvrir cette offre sur notre site WL Bank Si vous le souhaitez, je vous propose d'en discuter plus en d&eacute;tail par t&eacute;l&eacute;phone ce vendredi &agrave; 14h.<br><br><br>Cordialement<br><br>"]
    );

			var myDataAssurance = new Array();
			var myDataEchange = new Array([false,false,false,true,'message_telephonique.mp3','198.8Ko','fichiers/conseiller.mp3','Votre banque','Message t&eacute;l&eacute;phonique','11/06/2008',200.8,
"Cher client,<br><br>Votre conseiller a cherch&eacute; &agrave; vous joindre. Veuillez trouver ci-joint une copie du message audio qu'il a laiss&eacute; &agrave; votre intention.<br><object type=\'application/x-shockwave-flash\' data=\'Data/dewplayer.swf?mp3=fichiers/conseiller.mp3\' width=\'200\' height=\'20\'><param name=\'movie\' value=\'Data/dewplayer.swf?mp3=fichiers/conseiller.mp3\' /></object><br><br>Cordialement<br><br>"]);
			var myDataSent = new Array();
			var myDataNouveau = new Array();

			var myFiles = new Array([false,'doc','monFichier.doc','Test.doc','18/03/2008 &agrave; 12:15',35,true,true,false,'Dupont','12/05/2008','JKHKJS54556DS'],
									[false,'pdf','test.pdf','Test.doc','18/03/2008 &agrave; 13:15',125,true,true,true,'Martin','12/08/2008','JKHDEH58756DS']
									);
			var myFilesProfessionel = new Array();
			var myFilesContrats = new Array();
			var myFilesNouveau = new Array();

			var myBills = new Array(['WL Energy','240.99','Consommation du mois de <br/>Septembre 2008','6686746544545464','05/11/2008','fichiers/factureWLEnergy.pdf','0'],
			['WL Telecom','62.04','Consommation + forfait <br/>pour Septembre 2008','465486754546','15/10/2008','fichiers/factureWLTelecom.html','1']);

			var myDetail = new Array(['23/03/2009', 'Participation &agrave; la conception de l\' IHM','', '30'], ['23/03/2009', 'Kebab','15', '']);

			var myBillsPayed = new Array(['WL Energy','152.22','Consommation du mois de <br/>Aout 2008','12445854647846','12/09/2008','4558793894','fichiers/factureWLEnergy.pdf'],
			['WL Telecom','45.94','Consommation + forfait <br/>pour Aout 2008','798212358454685','15/09/2008','4564530908','fichiers/factureWLTelecom.html']);

			var selectedCompany="";
			var refFacture="";
			var montantFacture="";
			var moyenPaiement="";
			var comptePaiement="";
			var numeroOrdreFact="4561273906";
			var facturesPayes=0;

			var fournisseur= {
			records : [
			{name:"WL Energy",logo:'../imgs/paiementFacture/WLEnergy.gif',num:"123456789"
			},
			{name:"WL Telecom",logo:'../imgs/paiementFacture/WLTelecom.gif',num:"987654321"}
			]};

			var fournisseurAChoisir= {
			records : [
			{name:"EDF",logo:'../imgs/paiementFacture/EDF.png',exemple:'../imgs/paiementFacture/visuel-facture-gdf.gif',libelle:'Votre r&eacute;f&eacute;rence client'},
			{name:"Gaz De France",logo:'../imgs/paiementFacture/GDF.png',exemple:'../imgs/paiementFacture/visuel-facture-gdf.gif',libelle:'Votre r&eacute;f&eacute;rence client'},
			{name:"France Telecom",logo:'../imgs/paiementFacture/FT.png',exemple:'../imgs/paiementFacture/visuel-facture-gdf.gif',libelle:'Votre num&eacute;ro de ligne'},
			{name:"MACIF",logo:'../imgs/paiementFacture/MACIF.png',exemple:'../imgs/paiementFacture/visuel-facture-gdf.gif',libelle:"Votre num&eacute;ro d'adh&eacute;rent"}
			]};

      function qrcodePrinter(){
        document.getElementById("idbQrcode").src = "data:image/jpg;base64," + idpQrcode;
      }

		</script>
	</head>

	<frameset rows="161,*" scrolling="no" frameborder="0" id="frameCenter">
	  <frame id="header" scrolling="no" name="header" SRC="client/frame-header.html" noresize="noresize">
	  <frameset cols="192,*" scrolling="no" frameborder="0">
		  <frame id="menu" scrolling="no" name="menu" SRC="client/frame-menu.html" noresize="noresize" >
		  <frame id="main" scrolling="auto" name="main" SRC="client/frame-accueil.html" noresize="noresize">
	  </frameset>
	</frameset>



</html>
