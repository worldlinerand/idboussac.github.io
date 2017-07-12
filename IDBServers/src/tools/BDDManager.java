package tools;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import DAO.DAOUser;
import ObjetRemove.User;

public class BDDManager {

	
	static public boolean createUser(User user) throws SQLException
	{
	
	    try {
	    	  Class.forName("org.postgresql.Driver");
	  	      System.out.println("Driver O.K.");

	  	      String url = "jdbc:postgresql://localhost:5432/ID-Blockchain";
	  	      String usernameServer = "postgres";
	  	      String passwd = "0123456789";
	  	      
		      Connection conn = DriverManager.getConnection(url, usernameServer, passwd);
		      System.out.println("Connexion effective !");         
	      
		      DAOUser du = new DAOUser(conn);		      
	  	      return du.create(user);
	  	      
	  		} catch (ClassNotFoundException e) {
	  			// TODO Auto-generated catch block
	  			e.printStackTrace();
	  		}
		return false;
	}
	
	static public int updateUser(User user) throws SQLException
	{
	
	    try {
	    	  Class.forName("org.postgresql.Driver");
	  	      System.out.println("Driver O.K.");

	  	      String url = "jdbc:postgresql://localhost:5432/ID-Blockchain";
	  	      String usernameServer = "postgres";
	  	      String passwd = "0123456789";
	  	      
		      Connection conn = DriverManager.getConnection(url, usernameServer, passwd);
		      System.out.println("Connexion effective !");         
	      
		      DAOUser du = new DAOUser(conn);
		      //public User(int userID, String email, String password, String number,int walletCounter)
		      
		      du.update(user);
	  		} catch (ClassNotFoundException e) {
	  			// TODO Auto-generated catch block
	  			e.printStackTrace();
	  		}
		return 0;
	}
	
	static public int deleteUser(User user) throws SQLException
	{
	
	    try {
	    	  Class.forName("org.postgresql.Driver");
	  	      System.out.println("Driver O.K.");

	  	      String url = "jdbc:postgresql://localhost:5432/ID-Blockchain";
	  	      String usernameServer = "postgres";
	  	      String passwd = "0123456789";
		      Connection conn = DriverManager.getConnection(url, usernameServer, passwd);
		      System.out.println("Connexion effective !");         
	      
		      DAOUser du = new DAOUser(conn);
		      //public User(int userID, String email, String password, String number,int walletCounter)
		      du.delete(user);
	  		} catch (ClassNotFoundException e) {
	  			// TODO Auto-generated catch block
	  			e.printStackTrace();
	  		}
		return 0;
	}
	
	static public User connectionUser(String email, String password) throws SQLException
	{
		User user = null;
	    try {
	    	  Class.forName("org.postgresql.Driver");
	  	      System.out.println("Driver O.K.");
	  	      String url = "jdbc:postgresql://localhost:5432/ID-Blockchain";
	  	      String usernameServer = "postgres";
	  	      String passwd = "0123456789";
		      Connection conn = DriverManager.getConnection(url, usernameServer, passwd);
		      System.out.println("Connexion effective !");         
	      
		      DAOUser du = new DAOUser(conn);
		      
	  	      user = du.find(email, password);
	  		} catch (ClassNotFoundException e) {
	  			// TODO Auto-generated catch block
	  			e.printStackTrace();
	  		}
		return user;
	}
	
	static public boolean counterDown(User user) throws SQLException
	{
	    try {
	    	  Class.forName("org.postgresql.Driver");
	  	      System.out.println("Driver O.K.");

	  	      String url = "jdbc:postgresql://localhost:5432/ID-Blockchain";
	  	      String usernameServer = "postgres";
	  	      String passwd = "0123456789";
		      Connection conn = DriverManager.getConnection(url, usernameServer, passwd);
		      System.out.println("Connexion effective !");         
	      
		      DAOUser du = new DAOUser(conn);
		      boolean  starvation = user.counterDown();
		      if(starvation)
		      {
		    	  du.update(user);
		    	  return true;
		      }
		     
	  		} catch (ClassNotFoundException e) {
	  			// TODO Auto-generated catch block
	  			e.printStackTrace();
	  		}
		return false;
	}
	
	static public int counterUp(User user) throws SQLException
	{
	
	    try {
	    	  Class.forName("org.postgresql.Driver");
	  	      System.out.println("Driver O.K.");
	  	      String url = "jdbc:postgresql://localhost:5432/ID-Blockchain";
	  	      String usernameServer = "postgres";
	  	      String passwd = "0123456789";
		      Connection conn = DriverManager.getConnection(url, usernameServer, passwd);
		      System.out.println("Connexion effective !");         
	      
		      DAOUser du = new DAOUser(conn);
		      boolean  overload = user.counterUp();
		      if(overload)
		      {
		    	  du.update(user);
		    	  return 1;
		      }
		     
	  		} catch (ClassNotFoundException e) {
	  			// TODO Auto-generated catch block
	  			e.printStackTrace();
	  		}
		return 0;
	}
}
