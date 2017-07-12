package DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import ObjetRemove.User;

public class DAOUser extends DAO<User> {

	public DAOUser(Connection conn) {
		super(conn);
		// TODO Auto-generated constructor stub
	}

	@Override
	public boolean create(User user) {
		// TODO Auto-generated method stub
		try {
			 
			//Vu que nous sommes sous postgres, nous allons chercher manuellement
			//la prochaine valeur de la séquence correspondant à l'id de notre table
			ResultSet result = this	.connect
                                    .createStatement(
                                    		ResultSet.TYPE_SCROLL_INSENSITIVE, 
                                    		ResultSet.CONCUR_UPDATABLE
                                    ).executeQuery(
                                    		"SELECT Max(userid) as id from users"
                                    );
			if(result.first()){
				int id = result.getInt("id") +1;
    			PreparedStatement prepare = this	.connect
                                                    .prepareStatement(
                                                    	"INSERT INTO users (userid,email,password,number,counter) "
                                                    		+"VALUES(?,?,?,?,?)");
    			prepare.setInt(1, user.getID());
    			prepare.setString(2, user.getEmail());
    			prepare.setString(3, user.getPassword());
    			prepare.setString(4, user.getNumber());
    			prepare.setInt(5, user.getCounter());
				prepare.executeUpdate();
				user = this.find(id);
				if(user!=null){
					return true;
				}
				
			}
	    } catch (SQLException e) {
	            e.printStackTrace();
	    }
	    return false;
	}

	@Override
	public boolean delete(User user) {
		// TODO Auto-generated method stub
		try {
			
            this    .connect
                	.createStatement(
                         ResultSet.TYPE_SCROLL_INSENSITIVE, 
                         ResultSet.CONCUR_UPDATABLE
                    ).executeUpdate(
                         "DELETE FROM Users WHERE userid = " + user.getID()
                    );
		
    } catch (SQLException e) {
            e.printStackTrace();
    }
		return false;
	}

	@Override
	public boolean update(User user) {
		// TODO Auto-generated method stub
		try {
			
            this .connect	
                 .createStatement(
                	ResultSet.TYPE_SCROLL_INSENSITIVE, 
                    ResultSet.CONCUR_UPDATABLE
                 ).executeUpdate(
                	"UPDATE users SET email = '" + user.getEmail() + "', password = '"
                 + user.getPassword()+ "', number = '"
                			+user.getNumber()+ "', counter = '"+user.getCounter()+"'"
                	+" WHERE userid = " + user.getID()
                 );
		
            user = this.find(user.getID());
    } catch (SQLException e) {
            e.printStackTrace();
    }
    
		
		return false;
	}

	//User(int id,String email, String password, String number,int counter)
	@Override
	public User find(int id) {
		// TODO Auto-generated method stub
		User user = new User();
		   try {

			ResultSet result = this.connect.createStatement(
			ResultSet.TYPE_SCROLL_INSENSITIVE,
			ResultSet.CONCUR_READ_ONLY).executeQuery("SELECT * FROM Users WHERE USERID = " + id);

			if( result.first() )
			{
				user = new User( Integer.parseInt(result.getString("USERID")),
						result.getString("email"),
						result.getString("password"),
						result.getString("number"),
						 Integer.parseInt(result.getString("counter"))
						);
			}
		      result.close();
		   } catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return user;
	}
	
	public User find(String email, String password) {
		// TODO Auto-generated method stub
		User user = new User();
		   try {

			ResultSet result = this.connect.createStatement(
			ResultSet.TYPE_SCROLL_INSENSITIVE,
			ResultSet.CONCUR_READ_ONLY).executeQuery(
					"SELECT * FROM Users WHERE email = '" 
							+ email +"' and password = '" + password +"'");

			if( result.first() )
			{
				user = new User( Integer.parseInt(result.getString("USERID")),
						result.getString("email"),
						result.getString("password"),
						result.getString("number"),
						 Integer.parseInt(result.getString("counter"))
						);
			}
		      result.close();
		   } catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return user;
	}

}
