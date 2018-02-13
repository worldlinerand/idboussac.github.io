<%@ page pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>Inscription</title>
<link type="text/css" rel="stylesheet" href="form.css" />
</head>
<body>
	<c:import url="Top.jsp"></c:import>

	<form method="post" action="AddPubKeyHashbis">
		<fieldset>
			<legend>Inscription</legend>
			<p>Vous pouvez vous inscrire via ce formulaire.</p>
			<label for="pubKeyHashTx">clé publique</label> <input type="text"
				id="pubKeyHashTx" name="pubKeyHashTx"
				value="<c:out value="${param.pubKeyHashTx}"/>" size="50"
				maxlength="300" /> <span class="erreur">${erreurs['publickey']}</span>
			<br /> <input type="submit" value="Inscription" class="sansLabel" />
			<br />
			<p class="${empty erreurs ? 'succes' : 'erreur'}">${resultat}</p>
			<br />
		</fieldset>
	</form>
</body>
</html>