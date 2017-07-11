package DAO;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;

import ObjetRemove.User;

public class DAOUser extends DAO<User> {

	public DAOUser(Connection conn) {
		super(conn);
		// TODO Auto-generated constructor stub
	}

	@Override
	public boolean create(User obj) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean delete(User obj) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean update(User obj) {
		// TODO Auto-generated method stub
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

}
