package ObjetRemove;

public class User {
	
	private static int classUserID = 256;
	private int userID = 0;
	private String email = "";
	private String password = "";
	private String number = "";
	private int walletCounter = 0;
	
	public User(String email, String password, String number,int walletCounter){
		this.userID=classUserID++;
		this.email=email;
		this.password=password;
		this.number=number;
		this.walletCounter=walletCounter;
	}
	
	public User(int userID, String email, String password, String number,int walletCounter){
		this.userID=userID;
		this.email=email;
		this.password=password;
		this.number=number;
		this.walletCounter=walletCounter;
	}
	
	public User(){}
	
	//SET
	public void setEmail(String email){
		this.email=email;
	}
	
	public void setPassword(String password){
		this.password=password;
	}
	
	public void setNumber(String number){
		this.number=number;
	}
	
	//GET
	public int getID(){
		return this.userID;
	}
	
	public int getCounter(){
		return this.walletCounter;
	}
	
	public String getEmail(){
		return this.email;
	}
	
	public String getNumber(){
		return this.number;
	}
	
	//OPERATION on counter
	
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
	
	public boolean verify(String email, String password)
	{
		if( this.email.equals(email) && this.password.equals(password)){
			return true;
		}
		return false;
	}

}
