package DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;

import Beans.Feedback;


public class DAOFB extends DAO<Feedback> {
/**
 * Constructeur
 * @param conn
 */
	public DAOFB(Connection conn) {
		super(conn);
		// TODO Auto-generated constructor stub
	}

	@Override
	public boolean create(Feedback fb) {
		// TODO Auto-generated method stub
		try {
			ResultSet result = this	.connect
                                    .createStatement(
                                    		ResultSet.TYPE_SCROLL_INSENSITIVE, 
                                    		ResultSet.CONCUR_UPDATABLE
                                    ).executeQuery(
                                    		"SELECT Max(idfb) as id from Feedbacks"
                                    );
			if(result.first()){
				int id = result.getInt("id") +1;
    			PreparedStatement prepare = this	.connect
                                                    .prepareStatement(
                                                    	"INSERT INTO Feedbacks (idfb,name) "
                                                    		+"VALUES(?,?)");
    			prepare.setInt(1, id);
    			prepare.setString(2, fb.getName());
				prepare.executeUpdate();
				fb = this.find(id);
				if(fb!=null){
					return true;
				}
				
			}
	    } catch (SQLException e) {
	            e.printStackTrace();
	    }
	    return false;
	}

	@Override
	public boolean delete(Feedback fb) {
		// TODO Auto-generated method stub
		try {
			
            this    .connect
                	.createStatement(
                         ResultSet.TYPE_SCROLL_INSENSITIVE, 
                         ResultSet.CONCUR_UPDATABLE
                    ).executeUpdate(
                         "DELETE FROM Feedbacks WHERE idfb = " + fb.getID()
                    );
		
    } catch (SQLException e) {
            e.printStackTrace();
    }
		return false;
	}

	@Override
	public boolean update(Feedback fb) {
		// TODO Auto-generated method stub
		try {
			
            this .connect	
                 .createStatement(
                	ResultSet.TYPE_SCROLL_INSENSITIVE, 
                    ResultSet.CONCUR_UPDATABLE
                 ).executeUpdate(
                	"UPDATE Feedbacks SET Name = '" + fb.getName() + "'"
                	+" WHERE idfb = " + fb.getID()
                 );
		
            fb = this.find(fb.getID());
    } catch (SQLException e) {
            e.printStackTrace();
    }
    
		
		return false;
	}

	
	@Override
	public Feedback find(int id) {
		// TODO Auto-generated method stub
		Feedback fb = null;
		   try {

			ResultSet result = this.connect.createStatement(
			ResultSet.TYPE_SCROLL_INSENSITIVE,
			ResultSet.CONCUR_READ_ONLY).executeQuery("SELECT * FROM Feedbacks WHERE idfb = " + id);
			if( result.first() )
			{
				fb = new Feedback(Integer.parseInt(result.getString("idfb")),result.getString("name"));
			}
		      result.close();
		   } catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return fb;
	}
	
	@Override
	public List findAll() {
		// TODO Auto-generated method stub
		Feedback fb = new Feedback();
		
		List allFb = new LinkedList();
		   try {

			ResultSet result = this.connect.createStatement(
			ResultSet.TYPE_SCROLL_INSENSITIVE,
			ResultSet.CONCUR_READ_ONLY).executeQuery("SELECT * FROM Feedbacks ");
			while(result.next())
			{
				fb = new Feedback(Integer.parseInt(result.getString("idfb")),result.getString("Name"));
				allFb.add(fb);
			}
		      result.close();
		   } catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return allFb;
	}
	
	
	public int findIDMax()
	{
		int idMax=0;
		try {
			ResultSet result = this.connect.createStatement(
			ResultSet.TYPE_SCROLL_INSENSITIVE,
			ResultSet.CONCUR_READ_ONLY).executeQuery(
					"SELECT max(idfb) as idMax FROM Feedbacks ");
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
	
	public int findCount()
	{
		int count=0;
		try {
			ResultSet result = this.connect.createStatement(
			ResultSet.TYPE_SCROLL_INSENSITIVE,
			ResultSet.CONCUR_READ_ONLY).executeQuery(
					"SELECT count(*) as c FROM Feedbacks ");
			if(result.first())
			{
				count = result.getInt("c");
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return count;
	}
	
	public Feedback find(String name) {
		// TODO Auto-generated method stub
		Feedback pk = null;
		   try {

			ResultSet result = this.connect.createStatement(
			ResultSet.TYPE_SCROLL_INSENSITIVE,
			ResultSet.CONCUR_READ_ONLY).executeQuery(
					"SELECT * FROM Feedbacks WHERE name = '" 
							+ name+"'");
			if( result.first() )
			{
				pk = new Feedback(
						Integer.parseInt(result.getString("idfb")),
						result.getString("name")
						);
			}
		      result.close();
		   } catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return pk;
	}

}
