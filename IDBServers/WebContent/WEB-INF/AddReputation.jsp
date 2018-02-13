<%@ page pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>Verification Pub Key Hash</title>
<link type="text/css" rel="stylesheet" href="form.css" />
</head>
<body>
	<c:import url="Top.jsp"></c:import>

	<form method="post" action="AddReputation">
		<fieldset>
			<legend>Inscription</legend>
			<p>Vous pouvez vous Ajoutez une clef publique.</p>

			<label for="name">name <span class="requis">*</span></label> <input
				type="text" id="name" name="name"
				value="<c:out value="${param.name}"/>" size="30" maxlength="300" />
			<span class="erreur">${erreurs['name']}</span> <br /> <label
				for="txID">txID <span class="requis">*</span></label> <input
				type="text" id="txID" name="txID" value="" size="30" maxlength="300" />
			<span class="erreur">${erreurs['txID']}</span> <br /> <label
				for="cPKHash"> hash of customer's public key <span
				class="requis">*</span></label> <input type="text" id="cPKHash"
				name="cPKHash" value="" size="30" maxlength="300" /> <span
				class="erreur">${erreurs['cPKHash']}</span> <br /> <input
				type="submit" value="Inscription" class="sansLabel" /> <br />
			<p class="${empty erreurs ? 'succes' : 'erreur'}">${resultat}</p>
			<br />
		</fieldset>
	</form>
</body>
</html>