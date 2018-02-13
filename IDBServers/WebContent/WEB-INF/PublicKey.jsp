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

	<form method="post" action="AddPublicKeyHash">
		<fieldset>
			<legend>Inscription</legend>
			<p>Vous pouvez vous inscrire via ce formulaire.</p>

			<label for="email">Adresse email <span class="requis">*</span></label>
			<input type="email" id="email" name="email"
				value="<c:out value="${param.email}"/>" size="20" maxlength="60" />
			<span class="erreur">${erreurs['email']}</span> <br /> <label
				for="motdepasse">Mot de passe <span class="requis">*</span></label>
			<input type="password" id="motdepasse" name="motdepasse" value=""
				size="20" maxlength="20" /> <span class="erreur">${erreurs['motdepasse']}</span>
			<br /> <label for="publicKey">clé publique</label> <input
				type="text" id="publicKey" name="pubKeyHash"
				value="<c:out value="${param.publickey}"/>" size="50"
				maxlength="300" /> <span class="erreur">${erreurs['publickey']}</span>
			<br /> <input type="submit" value="Inscription" class="sansLabel" />
			<br />
			<p class="${empty erreurs ? 'succes' : 'erreur'}">${resultat}</p>
			<br />
		</fieldset>
	</form>
</body>
</html>