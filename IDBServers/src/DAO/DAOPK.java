package DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;

import Beans.PublicKey;
import Beans.User;

public class DAOPK extends DAO<PublicKey> {
/**
 * Constructeur
 * @param conn
 */
	public DAOPK(Connection conn) {
		super(conn);
		// TODO Auto-generated constructor stub
	}

	@Override
	public boolean create(PublicKey pk) {
		// TODO Auto-generated method stub
		try {
			ResultSet result = this	.connect
                                    .createStatement(
                                    		ResultSet.TYPE_SCROLL_INSENSITIVE, 
                                    		ResultSet.CONCUR_UPDATABLE
                                    ).executeQuery(
                                    		"SELECT Max(idpk) as id from publickeys"
                                    );
			if(result.first()){
				int id = result.getInt("id") +1;
    			PreparedStatement prepare = this	.connect
                                                    .prepareStatement(
                                                    	"INSERT INTO publickeys (idPK,transaction) "
                                                    		+"VALUES(?,?)");
    			prepare.setInt(1, id);
    			prepare.setString(2, pk.getTransaction());
				prepare.executeUpdate();
				pk = this.find(id);
				if(pk!=null){
					return true;
				}
				
			}
	    } catch (SQLException e) {
	            e.printStackTrace();
	    }
	    return false;
	}

	@Override
	public boolean delete(PublicKey pk) {
		// TODO Auto-generated method stub
		try {
			
            this    .connect
                	.createStatement(
                         ResultSet.TYPE_SCROLL_INSENSITIVE, 
                         ResultSet.CONCUR_UPDATABLE
                    ).executeUpdate(
                         "DELETE FROM publickeys WHERE idpk = " + pk.getID()
                    );
		
    } catch (SQLException e) {
            e.printStackTrace();
    }
		return false;
	}

	@Override
	public boolean update(PublicKey pk) {
		// TODO Auto-generated method stub
		try {
			
            this .connect	
                 .createStatement(
                	ResultSet.TYPE_SCROLL_INSENSITIVE, 
                    ResultSet.CONCUR_UPDATABLE
                 ).executeUpdate(
                	"UPDATE publickeys SET transaction = '" + pk.getTransaction() + "'"
                	+" WHERE idpk = " + pk.getID()
                 );
		
            pk = this.find(pk.getID());
    } catch (SQLException e) {
            e.printStackTrace();
    }
    
		
		return false;
	}

	@Override
	public PublicKey find(int id) {
		// TODO Auto-generated method stub
		PublicKey pk = new PublicKey();
		   try {

			ResultSet result = this.connect.createStatement(
			ResultSet.TYPE_SCROLL_INSENSITIVE,
			ResultSet.CONCUR_READ_ONLY).executeQuery("SELECT * FROM PublicKeys WHERE idpk = " + id);
			if( result.first() )
			{
				pk = new PublicKey(Integer.parseInt(result.getString("idpk")),result.getString("transaction"));
			}
		      result.close();
		   } catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return pk;
	}
	
	@Override
	public List findAll() {
		// TODO Auto-generated method stub
		PublicKey pk = new PublicKey();
		
		List allPk = new LinkedList();
		   try {

			ResultSet result = this.connect.createStatement(
			ResultSet.TYPE_SCROLL_INSENSITIVE,
			ResultSet.CONCUR_READ_ONLY).executeQuery("SELECT * FROM PublicKeys ");
			while(result.next())
			{
				pk = new PublicKey(Integer.parseInt(result.getString("idpk")),result.getString("transaction"));
				allPk.add(pk);
			}
		      result.close();
		   } catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return allPk;
	}
	
	
	public int findIDMax()
	{
		int idMax=0;
		try {
			ResultSet result = this.connect.createStatement(
			ResultSet.TYPE_SCROLL_INSENSITIVE,
			ResultSet.CONCUR_READ_ONLY).executeQuery(
					"SELECT max(idpk) as idMax FROM PublicKeys ");
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
					"SELECT count(*) as c FROM PublicKeys ");
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
	
	public PublicKey find(String transaction) {
		// TODO Auto-generated method stub
		PublicKey pk = null;
		   try {

			ResultSet result = this.connect.createStatement(
			ResultSet.TYPE_SCROLL_INSENSITIVE,
			ResultSet.CONCUR_READ_ONLY).executeQuery(
					"SELECT * FROM PublicKeys WHERE transaction = '" 
							+ transaction+"'");
			if( result.first() )
			{
				pk = new PublicKey(
						Integer.parseInt(result.getString("idpk")),
						result.getString("transaction")
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
