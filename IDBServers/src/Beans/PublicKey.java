package Beans;

public class PublicKey {
	/**
	 * 
	 * L'identifiant maximal de la classe
	 */
	private static int classPKID = 300;
	/**
	 * l'identifiant de l'objet
	 */
	private int pKID = 0;
	private String transaction = "";
	
	/**
	 * Constructeur de PublicKey
	 */
	public PublicKey(){
		
	}
	
	/**
	 * Constructeur de PublicKey 
	 * @param transaction
	 */
	public PublicKey(String transaction){
		this.pKID=classPKID++;
		this.transaction=transaction;
	}
	
	/**
	 * Constructeur de PublicKey
	 * @param idpk
	 * @param transaction
	 */
	public PublicKey(int idpk, String transaction){
		this.pKID=idpk;
		this.transaction=transaction;
	}
	
	/**
	 * 
	 * @return transaction
	 */
	public String getTransaction()
	{
		return this.transaction;
	}
	
	/**
	 * 
	 * @return pKID
	 */
	public int getID()
	{
		return this.pKID;
	}
}
