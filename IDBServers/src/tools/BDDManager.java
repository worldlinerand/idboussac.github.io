package tools;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.List;

import DAO.DAOFB;
import DAO.DAOPK;
import DAO.DAOReputationTX;
import DAO.DAOUser;
import ObjetRemove.Feedback;
import ObjetRemove.PublicKey;
import ObjetRemove.ReputationTX;
import ObjetRemove.User;

public class BDDManager {

      static String url = "jdbc:postgresql://localhost:5432/ID-Blockchain";
      static String usernameServer = "postgres";
      static String passwd = "0123456789";
	
      
      /**
       * Ajouter la réputation à la base de donnée idBlockchain
       * @param name
       * @param txID
       * @param cPKHash
       * @return
       * @throws Exception
       */
      static public boolean createReputationTX(String name, String txID, String cPKHash)  throws Exception{
      	  Class.forName("org.postgresql.Driver");
    	  System.out.println("Driver O.K.");
          Connection conn = DriverManager.getConnection(url, usernameServer, passwd);
          System.out.println("Connexion effective !");   
          
          DAOFB dfb = new DAOFB(conn);
          DAOPK dpk = new DAOPK(conn);
          DAOReputationTX drtx = new DAOReputationTX(conn);

          Feedback fb = dfb.find(name);
          PublicKey pk = BLCTools.isValidatedHash(cPKHash);
          
          if( fb==null)
          {
        	  fb = new Feedback(name);
        	  dfb.create(fb);
        	  fb = dfb.find(name);
          } 
          
          ReputationTX rt = new ReputationTX( txID,fb.getID(), pk.getID());
          drtx.create(rt);
          rt= drtx.find(txID);
    	  return true;
      }
      
      /**
       * Retourne la liste de l'ensemble des public keys.
       * @return
       * @throws ClassNotFoundException
       * @throws SQLException
       */
      static public List findAllPK() throws ClassNotFoundException, SQLException{
      	  Class.forName("org.postgresql.Driver");
    	  System.out.println("Driver O.K.");
          Connection conn = DriverManager.getConnection(url, usernameServer, passwd);
          System.out.println("Connexion effective !");     
          
    		DAOPK dpk = new DAOPK(conn);
    		PublicKey pk=new PublicKey();
    		List allPK = dpk.findAll();
    		for(int i =0;i<allPK.size();i++)
    		{
    			pk = (PublicKey) allPK.get(i);
    			System.out.println(pk.getTransaction());
    		}
    		return allPK;
        }
/**
 * @param pk : public key
 * @return List : Liste de transactions de réputation liées à pk.
 * @throws ClassNotFoundException
 * @throws SQLException
 */
      static public List findAllReputationTXOf(PublicKey pk) throws ClassNotFoundException, SQLException{
      	  Class.forName("org.postgresql.Driver");
    	  System.out.println("Driver O.K.");
          Connection conn = DriverManager.getConnection(url, usernameServer, passwd);
          System.out.println("Connexion effective !");     
          	
          DAOReputationTX drtx = new DAOReputationTX(conn);
	      List allRTX = drtx.findAll(pk.getID());
	      ReputationTX rt;
	      
	      for(int i = 0; i < allRTX.size();i++)
	      {
	    	  rt = (ReputationTX) allRTX.get(i);
	    	  
	      }
	      
          return allRTX;
        }
    
  /**
   * Retourne une liste de string contenant pour chaque réputation, le nom du feedbacker puis l'adresse de la transaction.
   * @param l
   * @return
   * @throws SQLException
   */
    static public String[] reputationParser(List l) throws SQLException
    {
    	if(l.size()==0)
    	{
    		return null;
    	}
    	String rpar[] = new String [l.size()*2];
    	ReputationTX rtx=null;
    	for(int i =0;i<l.size();i++)
    	{
    		rtx = (ReputationTX) l.get(i);
    		/**
    		 * Stock le Nom du feedbacker
    		 */
    		rpar[i*2]= BDDManager.findFB(   rtx.getIDFB()   ).getName();
    		/**
    		 * Stock l'adresse de la transaction
    		 */
    		rpar[i*2+1]= rtx.getTx();
    		
    	}
    	
    	return rpar;
    }
    
    /**
     * 
     * @param user
     * @return
     * @throws SQLException
     */
	static public boolean createUser(User user) throws SQLException
	{
	
	    try {
	    	  Class.forName("org.postgresql.Driver");
	  	      System.out.println("Driver O.K.");


	  	      
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
	
	/**
	 * 
	 * @param pk
	 * @return
	 * @throws SQLException
	 */
	static public boolean createPK(PublicKey pk) throws SQLException
	{
	
	    try {
	    	  Class.forName("org.postgresql.Driver");
	  	      System.out.println("Driver O.K.");
	  	      
		      Connection conn = DriverManager.getConnection(url, usernameServer, passwd);
		      System.out.println("Connexion effective !");         
	      
		      DAOPK du = new DAOPK(conn);		      
	  	      return du.create(pk);
	  	      
	  		} catch (ClassNotFoundException e) {
	  			// TODO Auto-generated catch block
	  			e.printStackTrace();
	  		}
		return false;
	}
	/**
	 * 
	 * @param email
	 * @return User
	 * @throws SQLException
	 */
	static public User findUser(String email) throws SQLException
	{
		User user= null; 
	    try {
	    	  Class.forName("org.postgresql.Driver");
	  	      System.out.println("Driver O.K.");
	  	      
		      Connection conn = DriverManager.getConnection(url, usernameServer, passwd);
		      System.out.println("Connexion effective !");         
	      
		      DAOUser du = new DAOUser(conn);		      
	  	      user= du.find(email);
	  	      
	  		} catch (ClassNotFoundException e) {
	  			// TODO Auto-generated catch block
	  			e.printStackTrace();
	  		}
		return user;
	}
	
	/**
	 * 
	 * @param id
	 * @return
	 * @throws SQLException
	 */
	static public Feedback findFB(int id) throws SQLException
	{
		Feedback fb= null; 
	    try {
	    	  Class.forName("org.postgresql.Driver");
	  	      System.out.println("Driver O.K.");
	  	      
		      Connection conn = DriverManager.getConnection(url, usernameServer, passwd);
		      System.out.println("Connexion effective !");         
	      
		      DAOFB dfb = new DAOFB(conn);		      
		      fb= dfb.find(id);
	  	      
	  		} catch (ClassNotFoundException e) {
	  			// TODO Auto-generated catch block
	  			e.printStackTrace();
	  		}
		return fb;
	}
	
	/**
	 * 
	 * @param hashTransaction
	 * @return PublicKey
	 * @throws SQLException
	 */
	static public PublicKey findPK(String hashTransaction) throws SQLException
	{
		PublicKey pk= null; 
	    try {
	    	  Class.forName("org.postgresql.Driver");
	  	      System.out.println("Driver O.K.");
	  	      
		      Connection conn = DriverManager.getConnection(url, usernameServer, passwd);
		      System.out.println("Connexion effective !");         
	      
		      DAOPK du = new DAOPK(conn);		      
	  	      pk = du.find(hashTransaction);
	  	      
	  		} catch (ClassNotFoundException e) {
	  			// TODO Auto-generated catch block
	  			e.printStackTrace();
	  		}
		return pk;
	}
	
	/**
	 * 
	 * @param user
	 * @return 
	 * @throws SQLException
	 */
	static public int updateUser(User user) throws SQLException
	{
	
	    try {
	    	  Class.forName("org.postgresql.Driver");
	  	      System.out.println("Driver O.K.");
	  	      
		      Connection conn = DriverManager.getConnection(url, usernameServer, passwd);
		      System.out.println("Connexion effective !");         
	      
		      DAOUser du = new DAOUser(conn);
		      //public User(int userID, String email, String password, String number,int walletCounter)
		      
		      du.update(user);
		      return 1;
	  		} catch (ClassNotFoundException e) {
	  			// TODO Auto-generated catch block
	  			e.printStackTrace();
	  		}
		return 0;
	}
	/**
	 * 
	 * @param user
	 * @return
	 * @throws SQLException
	 */
	static public int deleteUser(User user) throws SQLException
	{
	
	    try {
	    	  Class.forName("org.postgresql.Driver");
	  	      System.out.println("Driver O.K.");

		      Connection conn = DriverManager.getConnection(url, usernameServer, passwd);
		      System.out.println("Connexion effective !");         
	      
		      DAOUser du = new DAOUser(conn);
		      //public User(int userID, String email, String password, String number,int walletCounter)
		      du.delete(user);
		      return 1;
	  		} catch (ClassNotFoundException e) {
	  			// TODO Auto-generated catch block
	  			e.printStackTrace();
	  		}
		return 0;
	}

	/**
	 * 
	 * @param email
	 * @param password
	 * @return
	 * @throws SQLException
	 */
	static public User connectionUser(String email, String password) throws SQLException
	{
		User user = null;
	    try {
	    	  Class.forName("org.postgresql.Driver");
	  	      System.out.println("Driver O.K.");

		      Connection conn = DriverManager.getConnection(url, usernameServer, passwd);
		      System.out.println("Connexion effective !");         
	      
		      DAOUser du = new DAOUser(conn);
		      
	  	      user = du.find(email);
	  		} catch (ClassNotFoundException e) {
	  			// TODO Auto-generated catch block
	  			e.printStackTrace();
	  		}
		return user;
	}
	
	/**
	 * Diminuer le classUserID de la classe User
	 * @param user
	 * @return
	 * @throws SQLException
	 */
	static public boolean counterDown(User user) throws SQLException
	{
	    try {
	    	  Class.forName("org.postgresql.Driver");
	  	      System.out.println("Driver O.K.");

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
	/**
	 * Augmenter le classUserID de la classe User
	 * @param user
	 * @return
	 * @throws SQLException
	 */
	static public int counterUp(User user) throws SQLException
	{
	    try {
	    	  Class.forName("org.postgresql.Driver");
	  	      System.out.println("Driver O.K.");

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
	
	/**
	 * l'id maximal des objets de la classe User.
	 * @return 
	 * @throws SQLException
	 */
	static public int findMaxId() throws SQLException
	{
		int idMax = 0;
	    try {
	    	  Class.forName("org.postgresql.Driver");
	  	      System.out.println("Driver O.K.");

		      Connection conn = DriverManager.getConnection(url, usernameServer, passwd);
		      System.out.println("Connexion effective !"); 
		      DAOUser du = new DAOUser(conn);
		      idMax = du.findIDMax();
  		} catch (ClassNotFoundException e) {
  			// TODO Auto-generated catch block
  			idMax = 1;
  			e.printStackTrace();
  		}
	    return idMax;
	}
	
}
