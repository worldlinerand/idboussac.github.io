package tools;

public class Validation {
	static String exceptionEmail = "L'adresse mail saisie est invalide";
	
	static String exceptionMotDePasseDiff = "Les mots de passe entrés sont différents, merci de les saisir à nouveau.";
	static String exceptionMotDePasseNull = "Merci de saisir et confirmer votre mot de passe.";
	static String exceptionMotDePasseLongueur = "Les mots de passe doivent contenir au moins 5 caractères.";
	
	static String exceptionNom = "Le nom d'utilisateur doit contenir au moins 5 caractères." ;
	static String exceptionPublicKey = "La clé publique doit contenir au moins 5 caractères." ;
	static String exceptioncPKHash = "Le hash de la clé publique n'est pas validée." ;
	
	static String matchesEmail = "([^.@]+)(\\.[^.@]+)*@([^.@]+\\.)+([^.@]+)";
	
	static public void validationEmail(String email) throws Exception
	{
		if( email != null && email.trim().length() !=0){
			if(!email.matches( matchesEmail)){
				throw new Exception(exceptionEmail);
			}
		}else{
			throw new Exception(exceptionEmail);
		}
	}
	
	static public void validationMotsDePasse(String motDePasse,String confirmation) throws Exception
	{
		if(motDePasse != null && motDePasse.trim().length()!= 0 
				&& confirmation != null && confirmation.trim().length()!=0)
		{
			if(!motDePasse.equals(confirmation)){
				throw new Exception(exceptionMotDePasseDiff);
			}else if(motDePasse.trim().length() < 5){
				throw new Exception(exceptionMotDePasseLongueur);
			}
			
		}else {
			throw new Exception(exceptionMotDePasseNull);
		}
	}
	
	static public void validationNom(String nom) throws Exception
	{

	}

	public static void validationPublicKey(String publicKey)throws Exception {
		// TODO Auto-generated method stub
		if(publicKey != null && publicKey.trim().length() < 0)
		{
			throw new Exception(exceptionNom);
		}
	}

	public static void validationTxID(String txID) {
		// TODO Auto-generated method stub
		
	}

	public static void validationcPKHash(String cPKHash) throws Exception {
		// TODO Auto-generated method stub
		if(BLCTools.isValidatedHash(cPKHash)==null)
		{
			throw new Exception(exceptioncPKHash);
		}
	}
}
