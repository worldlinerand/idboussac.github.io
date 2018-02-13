<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Verification du hash</title>
<link type="text/css" rel="stylesheet" href="form.css" />
</head>
<body>
	<c:import url="Top.jsp"></c:import>

	<form method="post" action="VerificationPubKeyHash">
		<fieldset>
			<legend>Verification de l'existence du hash d'une clé
				publique</legend>
			<label for="hash">hash<span class="requis">*</span></label> <input
				type="hash" id="hash" name="hash" value="" size="20" maxlength="200" />
			<br />
		</fieldset>
		<input type="submit" value="Valider" />
	</form>
	<div>${message}</div>
	<p>

		<% String[] repParser = (String[]) request.getAttribute("reputations");
if(repParser==null)
{
	
} else
{
	out.print(repParser.length/2+"<br/>");

		for(int i =0;i<repParser.length;i++)
		{
			 
			 out.print(repParser[i]+"<br/>");
		}
}
%>

	</p>
</body>
</html>