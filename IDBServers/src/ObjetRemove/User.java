package ObjetRemove;

import tools.BDDManager;

public class User {
	
	private static int classUserID = 300;
	private int userID = 0;
	private String email = "";
	private String password = "";
	private int walletCounter = 0;
	/**
	 * Constructeur de User
	 * @param email
	 * @param password
	 * @param walletCounter
	 */
	public User(String email, String password,int walletCounter){
		this.userID=classUserID++;
		this.email=email;
		this.password=password;
		if(walletCounter>10)
			this.walletCounter = 10;
		else if(walletCounter < 0)
			this.walletCounter = 0;
		else
			this.walletCounter=walletCounter;
	}
	/**
	 * Constructeur de User
	 * @param userID
	 * @param email
	 * @param password
	 * @param walletCounter
	 */
	public User(int userID, String email, String password,int walletCounter){
		this.userID=userID;
		this.email=email;
		this.password=password;
		this.walletCounter=walletCounter;
	}
	/**
	 * Constructeur de User
	 */
	public User(){}
	
	/**
	 * Modifier l'email
	 * @param email
	 */
	public void setEmail(String email){
		this.email=email;
	}
	
	/**
	 * Modifier le password
	 * @param password
	 */
	public void setPassword(String password){
		this.password=password;
	}
	
	
	/**
	 * 
	 * @return userID
	 */
	public int getID(){
		return this.userID;
	}
	
	/**
	 * 
	 * @return walletCounter
	 */
	public int getCounter(){
		return this.walletCounter;
	}
	
	public String getEmail(){
		return this.email;
	}
	
	/**
	 * 
	 * @return password
	 */
	public String getPassword(){
		return this.password;
	}
	
	/**
	 * 
	 * @return boolean
	 */
	public boolean counterUp()
	{
		if(this.walletCounter==10)
		{
			return false;
		}
		else 
		{
			this.walletCounter++;
			return true;
		}
	}
	
	/**
	 * 
	 * @return boolean
	 */ 
	public boolean counterDown()
	{
		if(this.walletCounter==0)
		{
			return false;
		}
		else 
		{
			this.walletCounter--;
			return true;
		}
	}
	
	/**
	 * 
	 * @param email
	 * @param password
	 * @return boolean
	 */
	public boolean verify(String email, String password)
	{
		if( this.email.equals(email) && this.password.equals(password)){
			return true;
		}
		return false;
	}

}
