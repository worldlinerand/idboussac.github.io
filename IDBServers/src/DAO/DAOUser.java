package DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import Beans.User;

public class DAOUser extends DAO<User> {
/**
 * Constructeur
 * @param conn
 */
	public DAOUser(Connection conn) {
		super(conn);
		// TODO Auto-generated constructor stub
	}

	@Override
	public boolean create(User user) {
		// TODO Auto-generated method stub
		try {
			 
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
                                                    	"INSERT INTO users (userid,email,password,counter) "
                                                    		+"VALUES(?,?,?,?)");
    			prepare.setInt(1, id);
    			prepare.setString(2, user.getEmail());
    			prepare.setString(3, user.getPassword());
    			prepare.setInt(4, user.getCounter());
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
                 + user.getPassword()+ "', counter = '"+user.getCounter()+"'"
                	+" WHERE userid = " + user.getID()
                 );
		
            user = this.find(user.getID());
    } catch (SQLException e) {
            e.printStackTrace();
    }
    
		
		return false;
	}

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
	
	
	public int findIDMax()
	{
		int idMax=0;
		try {
			ResultSet result = this.connect.createStatement(
			ResultSet.TYPE_SCROLL_INSENSITIVE,
			ResultSet.CONCUR_READ_ONLY).executeQuery(
					"SELECT max(iduser) as idMax FROM Users ");
			if(result.first())
			{
				idMax = result.getInt("idMax");
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return idMax;

	}
	public User find(String email) {
		// TODO Auto-generated method stub
		User user = new User();
		   try {

			ResultSet result = this.connect.createStatement(
			ResultSet.TYPE_SCROLL_INSENSITIVE,
			ResultSet.CONCUR_READ_ONLY).executeQuery(
					"SELECT * FROM Users WHERE email = '" 
							+ email+"'");

			if( result.first() )
			{
				user = new User( Integer.parseInt(result.getString("USERID")),
						result.getString("email"),
						result.getString("password"),
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

	@Override
	public List findAll() {
		// TODO Auto-generated method stub
		return null;
	}

}
