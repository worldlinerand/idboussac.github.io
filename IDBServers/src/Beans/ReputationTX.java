package Beans;

public class ReputationTX {
	/**
	 * L'identifiant maximal de la classe
	 */
	private static int classRTID = 300;
	/**
	 * l'identifiant de l'objet
	 */
	private int idRT = 0;
	/**
	 * l'adresse de la transaction
	 */
	private String tx = "";
	/**
	 * l'identifiant du feedbacker
	 */
	private int idFb=0;
	/**
	 * La clé publique de l'user
	 */
	private int idPK=0;
	
	/**
	 * Constructeur de ReputationTX
	 */
	public ReputationTX()
	{
		
	}

	/**
	 * Constructeur de ReputationTX
	 * @param idRT
	 * @param tx
	 * @param idFb
	 * @param idPK
	 */
	public ReputationTX(int idRT, String tx,int idFb, int idPK)
	{
		this.idRT=idRT;
		this.tx=tx;
		this.idFb=idFb;
		this.idPK=idPK;
	}
	
	/**
	 * Constructeur de ReputationTX
	 * @param tx
	 * @param idFb
	 * @param idPK
	 */
	public ReputationTX( String tx,int idFb, int idPK)
	{
		this.idRT=classRTID++;
		this.tx=tx;
		this.idFb=idFb;
		this.idPK=idPK;
	}
	
	/**
	 * 
	 * @return idRT
	 */
	public int getIDRT()
	{
		return this.idRT;
	}
	
	/**
	 * 
	 * @return idFb
	 */
	public int getIDFB()
	{
		return this.idFb;
	}
	
	/**
	 * 
	 * @return idPK
	 */
	public int getIDPK()
	{
		return this.idPK;
	}
	
	/**
	 * 
	 * @return tx
	 */
	public String getTx()
	{
		return this.tx;
	}
	
	/**
	 * 
	 * @param idFb
	 */
	public void setIDFB(int idFb)
	{
		this.idFb = idFb;
	}
	
	/**
	 * 
	 * @param idRT
	 */
	public void setIDRT(int idRT)
	{
		this.idRT = idRT;
	}
	
	/**
	 * 
	 * @param idPK
	 */
	public void setIDPK(int idPK)
	{
		this.idPK = idPK;
	}
	
	/**
	 * 
	 * @param tx
	 */
	public void setTx(String tx)
	{
		this.tx = tx;
	}
	
}
