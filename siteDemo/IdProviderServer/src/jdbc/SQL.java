package jdbc;


import java.sql.Blob;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.HashMap;
import java.util.Map;

import javax.crypto.spec.IvParameterSpec;


import com.mysql.jdbc.PreparedStatement;

import tools.CredsData;

public class SQL {
	
	private static String url = "jdbc:mysql://localhost/idb";
	private String login = "root";
	private static String passwd = "idblockchain";
	static Connection cn = null;
	static Statement st = null;
	static ResultSet rs= null;
	
	public void insert(String user, String password){
		try{
			Class.forName("com.mysql.jdbc.Driver");
			
			cn = DriverManager.getConnection(url, login, passwd);
			
			st = cn.createStatement();
			
			String sql = "INSERT INTO `logins` (`login`, `mdp`) VALUES ('"+ user +"', '"+password+"')";
		
			st.executeUpdate(sql);
		}catch (SQLException e) {
			e.printStackTrace();
		}catch (ClassNotFoundException e) {
			e.printStackTrace();
		}finally {
			try{
			cn.close();
			st.close();
			}catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}
	
	
	public void insertProfile(int userId, String gender, String fname, String lname, String nationality, String dateOfBirth, String placeOfBirth, String postalAddress , String credentials, String iban ){
	
		try{
			Class.forName("com.mysql.jdbc.Driver");
			
			cn = DriverManager.getConnection(url, login, passwd);
			
			st = cn.createStatement();
			
			String sql = "INSERT INTO `customersclaims` (`idLogin`, `gender`,`firstName` , `lastName`, `nationality`, `dateOfBirth`, `placeOfBirth`, `postalAddress`, `credentials`, `IBAN`) VALUES ('"+ userId +"', '"+gender+"' , + '"+ fname + "' , '" + lname + "' , '" + nationality + "' , '"+ dateOfBirth +"' , '"+placeOfBirth+"', '"+postalAddress+"' , '" + credentials +"' , '"+iban+"' )";
		
			st.executeUpdate(sql);
		}catch (SQLException e) {
			e.printStackTrace();
		}catch (ClassNotFoundException e) {
			e.printStackTrace();
		}finally {
			try{
			cn.close();
			st.close();
			}catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}
	

	public String select(String user){
		try{
			Class.forName("com.mysql.jdbc.Driver");
			
			cn = DriverManager.getConnection(url, login, passwd);
			
			st = cn.createStatement();
			
			String sql = "SELECT mdp, login FROM `logins` WHERE login = '"+user+"'";
		
			rs = st.executeQuery(sql);
			
			if(rs.next())
				return rs.getString("mdp");
			
			
		}catch (SQLException e) {
			e.printStackTrace();
		}catch (ClassNotFoundException e) {
			e.printStackTrace();
		}finally {
			try{
			cn.close();
			st.close();
			}catch (SQLException e) {
				e.printStackTrace();
			}
		
		}
		
		return null;
	}
	
	
	public HashMap<String, String> selectCustomers(int userId){
		
		try{
			Class.forName("com.mysql.jdbc.Driver");
			
			cn = DriverManager.getConnection(url, login, passwd);
			
			st = cn.createStatement();
			String sql = "SELECT idLogin, gender, firstName, lastName, nationality, dateOfBirth, placeOfBirth, postalAddress, credentials, IBAN  FROM `customersclaims` WHERE idLogin = '"+userId+"'";
		
			rs = st.executeQuery(sql);
			
			HashMap<String, String> customers = new HashMap<>();
			
			if(rs.next()){
				customers.put("gender", rs.getString("gender"));
				customers.put("fname", rs.getString("firstName"));
				customers.put("lname",rs.getString("lastName"));
				customers.put("nationality", rs.getString("nationality"));
				customers.put("dateOfBirth", rs.getString("dateOfBirth"));
				customers.put("placeOfBirth", rs.getString("placeOfBirth"));
				customers.put("postalAddress", rs.getString("postalAddress"));
				customers.put("credentials", rs.getString("credentials"));
				customers.put("iban", rs.getString("IBAN"));
				return customers;
			}
			
			
		}catch (SQLException e) {
			e.printStackTrace();
		}catch (ClassNotFoundException e) {
			e.printStackTrace();
		}finally {
			try{
			cn.close();
			st.close();
			}catch (SQLException e) {
				e.printStackTrace();
			}
		
		}
		
		return null;
	}
	
	public int getUserId(String user){
		try{
			Class.forName("com.mysql.jdbc.Driver");
			
			cn = DriverManager.getConnection(url, login, passwd);
			
			st = cn.createStatement();
			
			String sql = "SELECT idLogins, login FROM `logins` WHERE login = '"+user+"'";
		
			rs = st.executeQuery(sql);
			
			if(rs.next())
				return rs.getInt("idLogins");
			
			
		}catch (SQLException e) {
			e.printStackTrace();
		}catch (ClassNotFoundException e) {
			e.printStackTrace();
		}finally {
			try{
			cn.close();
			st.close();
			}catch (SQLException e) {
				e.printStackTrace();
			}
		
		}
		
		return 0;
	}
	
	public CredsData getUserCreds(int idcred){
		try{

			Class.forName("com.mysql.jdbc.Driver");
			
			cn = DriverManager.getConnection(url, login, passwd);
			
			PreparedStatement s = null;
	
			String sql = "SELECT idcreds, img_name, img_file FROM `creds` WHERE idcreds = ?";
			
			s = (PreparedStatement) cn.prepareStatement(sql);
			
			s.setInt(1, idcred);
			
			ResultSet res = s.executeQuery();

			if(res.next()){
				Blob blob = res.getBlob("img_file");
				CredsData creds = new CredsData(res.getString("img_name"), blob.getBinaryStream());
				s.close();
				return creds;
			}
			s.close();
			
		}catch (SQLException e) {
			e.printStackTrace();
		}catch (ClassNotFoundException e) {
			e.printStackTrace();
		}finally {
			try{
			cn.close();
			}catch (SQLException e) {
				e.printStackTrace();
			}
		
		}
		
		return null;
	}
}
