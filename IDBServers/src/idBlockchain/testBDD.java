package idBlockchain;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;

import DAO.DAOUser;
import ObjetRemove.User;

public class testBDD {

	
	
	static void testa() throws SQLException
	{
		
	      try {
			Class.forName("org.postgresql.Driver");

	      System.out.println("Driver O.K.");

	      String url = "jdbc:postgresql://localhost:5432/ID-Blockchain";
	      String user = "postgres";
	      String passwd = "0123456789";

	      Connection conn = DriverManager.getConnection(url, user, passwd);
	      System.out.println("Connexion effective !");         
	         
	      
	      DAOUser du = new DAOUser(conn);
	      
	      
	      User u=du.find(2);
	      
	      System.out.println(u.getEmail() + "  " + u.getID());
	      
	      
			} catch (ClassNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		
	}
	
	static void testb()
	{
			    try {
			      Class.forName("org.postgresql.Driver");
			         
			      String url = "jdbc:postgresql://localhost:5432/ID-Blockchain";
			      String user = "postgres";
			      String passwd = "0123456789";
			         
			      Connection conn = DriverManager.getConnection(url, user, passwd);
			         
			      //Création d'un objet Statement
			      Statement state = conn.createStatement();
			      //L'objet ResultSet contient le résultat de la requête SQL
			      ResultSet result = state.executeQuery("SELECT * FROM users");
			      //On récupère les MetaData
			      ResultSetMetaData resultMeta = result.getMetaData();
			         
			      System.out.println("\n**********************************");
			      //On affiche le nom des colonnes
			      for(int i = 1; i <= resultMeta.getColumnCount(); i++)
			        System.out.print("\t" + resultMeta.getColumnName(i).toUpperCase() + "\t *");
			         
			      System.out.println("\n**********************************");
			         
			      while(result.next()){         
			        for(int i = 1; i <= resultMeta.getColumnCount(); i++)
			          System.out.print("\t" + result.getObject(i).toString() + "\t |");
			            
			        System.out.println("\n---------------------------------");

			      }

			      result.close();
			      state.close();
			         
			    } catch (Exception e) {
			      e.printStackTrace();
			    } 
	}
	
	public static void main(String[] args) throws SQLException {      

		testa();

	}

}
