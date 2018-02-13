package Beans;

public class Feedback {
	
	private static int classFBID = 300;
	private int idFb = 0;
	private String name = "";
	
	
	public Feedback(){}
	
	
	public Feedback(int idFb, String name ){
		this.idFb=idFb;
		this.name=name;
	}
	
	public Feedback( String name ){
		this.idFb=classFBID++;
		this.name=name;
	}
	
	public int getID(){
		return this.idFb;
	}
	
	public String getName(){
		return this.name;
	}
	
	public void setName(String name)
	{
		this.name=name;
	}
	
	public void setID(int idFb)
	{
		this.idFb=idFb;
	}
}
