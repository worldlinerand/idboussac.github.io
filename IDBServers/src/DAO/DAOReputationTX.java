package DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;

import Beans.ReputationTX;


public class DAOReputationTX extends DAO<ReputationTX> {
/**
 * Constructeur
 * @param conn
 */
	public DAOReputationTX(Connection conn) {
		super(conn);
		// TODO Auto-generated constructor stub
	}

	@Override
	public boolean create(ReputationTX rt) {
		// TODO Auto-generated method stub
		try {
			 
			ResultSet result = this	.connect
                                    .createStatement(
                                    		ResultSet.TYPE_SCROLL_INSENSITIVE, 
                                    		ResultSet.CONCUR_UPDATABLE
                                    ).executeQuery(
                                    		"SELECT Max(idrt) as id from ReputationTXs"
                                    );
			if(result.first()){
				int id = result.getInt("id") +1;
    			PreparedStatement prepare = this	.connect
                                                    .prepareStatement(
                                                    	"INSERT INTO ReputationTXs (idrt,idpk,idfb,tx) "
                                                    		+"VALUES(?,?,?,?)");
    			prepare.setInt(1, id);
    			prepare.setLong(2, rt.getIDPK());
    			prepare.setLong(3, rt.getIDFB());
    			prepare.setString(4, rt.getTx());
				prepare.executeUpdate();
				rt = this.find(id);
				if(rt!=null){
					return true;
				}
				
			}
	    } catch (SQLException e) {
	            e.printStackTrace();
	    }
	    return false;
	}

	@Override
	public boolean delete(ReputationTX rt) {
		// TODO Auto-generated method stub
		try {
			
            this    .connect
                	.createStatement(
                         ResultSet.TYPE_SCROLL_INSENSITIVE, 
                         ResultSet.CONCUR_UPDATABLE
                    ).executeUpdate(
                         "DELETE FROM ReputationTXs WHERE idrt = " + rt.getIDRT()
                    );
		
    } catch (SQLException e) {
            e.printStackTrace();
    }
		return false;
	}


	@Override
	public ReputationTX find(int id) {
		// TODO Auto-generated method stub
		ReputationTX rt = new ReputationTX();
		   try {

			ResultSet result = this.connect.createStatement(
			ResultSet.TYPE_SCROLL_INSENSITIVE,
			ResultSet.CONCUR_READ_ONLY).executeQuery("SELECT * FROM ReputationTXs WHERE idrt = " + id);
			if( result.first() )
			{
				
				rt = new ReputationTX(Integer.parseInt(result.getString("idrt")),
						result.getString("tx"),
						Integer.parseInt(result.getString("idfb")),
						Integer.parseInt(result.getString("idpk"))
						);
			}
		      result.close();
		   } catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return rt;
	}
	
	@Override
	public List findAll() {
		// TODO Auto-generated method stub
		ReputationTX rt = new ReputationTX();
		
		List allRt= new LinkedList();
		   try {

			ResultSet result = this.connect.createStatement(
			ResultSet.TYPE_SCROLL_INSENSITIVE,
			ResultSet.CONCUR_READ_ONLY).executeQuery("SELECT * FROM ReputationTXs ");
			while(result.next())
			{
				rt = new ReputationTX(Integer.parseInt(result.getString("idrt")),
						result.getString("tx"),
						Integer.parseInt(result.getString("idfb")),
						Integer.parseInt(result.getString("idpk"))
						);
				allRt.add(rt);
			}
		      result.close();
		   } catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return allRt;
	}
	
	
	public List findAll(int idpk) {
		// TODO Auto-generated method stub
		ReputationTX rt = new ReputationTX();
		
		List allRt= new LinkedList();
		   try {

			ResultSet result = this.connect.createStatement(
			ResultSet.TYPE_SCROLL_INSENSITIVE,
			ResultSet.CONCUR_READ_ONLY).executeQuery("SELECT * FROM ReputationTXs where idpk="+idpk);
			while(result.next())
			{
				rt = new ReputationTX(Integer.parseInt(result.getString("idrt")),
						result.getString("tx"),
						Integer.parseInt(result.getString("idfb")),
						Integer.parseInt(result.getString("idpk"))
						);
				allRt.add(rt);
			}
		      result.close();
		   } catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return allRt;
	}
	
	
	public int findIDMax()
	{
		int idMax=0;
		try {
			ResultSet result = this.connect.createStatement(
			ResultSet.TYPE_SCROLL_INSENSITIVE,
			ResultSet.CONCUR_READ_ONLY).executeQuery(
					"SELECT max(idrt) as idMax FROM ReputationTXs ");
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
					"SELECT count(*) as c FROM ReputationTXs ");
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
	
	public ReputationTX find(String tx) {
		// TODO Auto-generated method stub
		ReputationTX rt = null;
		   try {

			ResultSet result = this.connect.createStatement(
			ResultSet.TYPE_SCROLL_INSENSITIVE,
			ResultSet.CONCUR_READ_ONLY).executeQuery(
					"SELECT * FROM ReputationTXs WHERE tx = '" 
							+ tx+"'");
			if( result.first() )
			{
				rt = new ReputationTX(Integer.parseInt(result.getString("idrt")),
						result.getString("tx"),
						Integer.parseInt(result.getString("idfb")),
						Integer.parseInt(result.getString("idpk"))
						);
			}
		      result.close();
		   } catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return rt;
	}

	@Override
	public boolean update(ReputationTX obj) {
		// TODO Auto-generated method stub
		return false;
	}

}
