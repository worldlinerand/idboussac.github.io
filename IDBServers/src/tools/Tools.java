package tools;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.Reader;
import java.io.UnsupportedEncodingException;
import java.math.BigInteger;
import java.net.HttpURLConnection;
import java.net.InetAddress;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;
import java.net.URLEncoder;
import java.net.UnknownHostException;
import java.security.KeyFactory;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.PublicKey;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.X509EncodedKeySpec;
import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import java.security.*;
import java.io.FileReader;
import java.io.BufferedReader;
import java.io.IOException;

import org.json.JSONException;
import org.json.JSONObject;

public class Tools {
	private final static char[] hexArray = "0123456789abcdef".toCharArray();
	/**
	 * create a hash from data by hashing separately each values in the JSONObject  and then hashing the concatenation of all these hashes 
	 * @param data
	 * 		a JSONObject containing the data to be hashed 
	 * @param isSp
	 * @return
	 * @throws UnsupportedEncodingException 
	 */
	

	
	public static String globalHash(JSONObject data, boolean isSp){
		MessageDigest digest = null;
		try{
			digest = MessageDigest.getInstance("SHA-256");
		}catch(NoSuchAlgorithmException e){
			e.printStackTrace();
		}
		//Catch order of claims
		String tmpOrder = data.getString("ordre");
		String[] order = tmpOrder.split(",");
		byte [] concatenateHash = null;
		String exception =null;
		
		if(isSp){
			exception = data.getString("hide");
		}
		
		for(int i = 0; i<order.length; i++){
			digest.reset();
			byte [] tmp = concatenateHash;
			byte[] tmpHash = null;
			try {
				if(isSp && exception != null){
					if(exception.contains(order[i]))
						tmpHash = hexStringToByteArray(data.getString(order[i]));
					else
						tmpHash = digest.digest(data.getString(order[i]).getBytes("UTF-8"));
				}
				else
					tmpHash = digest.digest(data.getString(order[i]).getBytes("UTF-8"));
			} catch (UnsupportedEncodingException e) {
				e.printStackTrace();
			} catch (JSONException e) {
				e.printStackTrace();
			}
			if(concatenateHash == null){
				concatenateHash = tmpHash;
			}else{
				concatenateHash = new byte[tmp.length + tmpHash.length];
				System.arraycopy(tmp, 0, concatenateHash, 0, tmp.length);
				System.arraycopy(tmpHash, 0, concatenateHash, tmp.length, tmpHash.length);
			}
		}
		digest.reset();
		return bytesToHex(digest.digest(concatenateHash));	
	}
	
	
	/**
	 * convert a byte array to a hexa string
	 * @param bytes
	 * @return
	 */
	public static String bytesToHex(byte[] bytes) {
	    char[] hexChars = new char[bytes.length * 2];
	    for ( int j = 0; j < bytes.length; j++ ) {
	        int v = bytes[j] & 0xFF;
	        hexChars[j * 2] = hexArray[v >>> 4];
	        hexChars[j * 2 + 1] = hexArray[v & 0x0F];
	    }
	    return new String(hexChars);
	}
	
	/**
	 * convert a hexa string to a byte array
	 * @param s
	 * @return
	 */
	public static byte[] hexStringToByteArray(String s) {
	    int len = s.length();
	    byte[] data = new byte[len / 2];
	    for (int i = 0; i < len; i += 2) {
	        data[i / 2] = (byte) ((Character.digit(s.charAt(i), 16) << 4)
	                             + Character.digit(s.charAt(i+1), 16));
	    }
	    return data;
	}
	
	

	public static PublicKey getPubKeyFromAddr(String addr){
		
		PublicKey pubkey = null;
		System.out.println(addr);
		try{		
			URL url = new URL(addr);
			HttpURLConnection con = (HttpURLConnection) url.openConnection();
			con.setDoOutput(true);
			con.setDoInput(true);
			con.setRequestProperty("Content-type", "application/json; charset=UTF-8");
			con.setRequestProperty("Accept", "application/json");
			con.setRequestMethod("GET");
			
			StringBuilder sb = new StringBuilder();
            int httpResult = con.getResponseCode();
            
            if(httpResult == HttpURLConnection.HTTP_OK){
            	BufferedReader br = new BufferedReader(new InputStreamReader(con.getInputStream(), "utf-8"));
                String line = null;
                while((line = br.readLine()) != null){
                    sb.append(line);
                }
                br.close();
                System.out.println(sb);
	            X509EncodedKeySpec formatted_pubkey = new X509EncodedKeySpec( hexStringToByteArray(sb.toString()));
	            try {
					KeyFactory kf = KeyFactory.getInstance("EC");
					pubkey = kf.generatePublic(formatted_pubkey);
					} catch (NoSuchAlgorithmException | InvalidKeySpecException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}  
            }
		}catch(IOException e){
			e.printStackTrace();	
		}
		return pubkey;

	}

	 public static String getHTML(String urlToRead) throws Exception {
	      StringBuilder result = new StringBuilder();
	      URL url = new URL(urlToRead);
	      HttpURLConnection conn = (HttpURLConnection) url.openConnection();
	      conn.setRequestMethod("GET");
	      BufferedReader rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
	      String line;
	      while ((line = rd.readLine()) != null) {
	         result.append(line);
	      }
	      rd.close();
	      return result.toString();
	   }
	 
	 
	 public static String postHTML(String urlToRead, Map<String,Object> params) throws IOException
	 {

		 	//= new LinkedHashMap<>();
	        URL url = new URL(urlToRead);
	        StringBuilder postData = new StringBuilder();
	        for (Map.Entry<String,Object> param : params.entrySet()) {
	            if (postData.length() != 0) postData.append('&');
	            postData.append(URLEncoder.encode(param.getKey(), "UTF-8"));
	            postData.append('=');
	            postData.append(URLEncoder.encode(String.valueOf(param.getValue()), "UTF-8"));
	        }
	        byte[] postDataBytes = postData.toString().getBytes("UTF-8");

	        HttpURLConnection conn = (HttpURLConnection)url.openConnection();
	        conn.setRequestMethod("POST");
	        conn.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
	        conn.setRequestProperty("Content-Length", String.valueOf(postDataBytes.length));
	        conn.setDoOutput(true);
	        conn.getOutputStream().write(postDataBytes);

	        BufferedReader rd = new BufferedReader(new InputStreamReader(conn.getInputStream(), "UTF-8"));
	        String result ="";
	        StringBuilder sb = new StringBuilder();
		      String line;
		      while ((line = rd.readLine()) != null) {
		    	  result+=line;
		      }
	        return result;
	 }
	 
	 public static boolean doPostReputation(String name,String txID, String cPKHash) throws IOException
	 {
			Map<String,Object> params = new LinkedHashMap<>();
			params.put("name",name );
			params.put("txID",txID );
			params.put("cPKHash",cPKHash );
			String data = Tools.postHTML("http://localhost:8085/IDBServers/AddReputation",params );
			if(data.contains("<p class="+"\"succes\""+">Succès de l'ajout de la réputation.</p> "))
			{
				return true;
			} else
			{
				return false;
			}
	 }
	 
	 public static boolean isvalidatePublicKey(String customerPublicKey) throws Exception
	 
	 {	System.out.println("====================================isvalidatePublicKey debut ====================");		
		 Map<String,Object> params = new LinkedHashMap<>();
	 	try {
			params.put("hash",Tools.getPKHash(customerPublicKey ));
		} catch (NoSuchAlgorithmException e2) {
			// TODO Auto-generated catch block
			e2.printStackTrace();
		} catch (JSONException e2) {
			// TODO Auto-generated catch block
			e2.printStackTrace();
		}
		String requieredData = Tools.postHTML("http://localhost:8085/IDBServers/VerificationPubKeyHash",params );
		
		String isvalidPKH = requieredData.substring(requieredData.indexOf("<div>") + 5, requieredData.indexOf("</div>"));
		
		
		 if(isvalidPKH.trim().equals("oui"))
		 {
			 System.out.println("====================================isvalidatePublicKey fin true ====================");
			 return true;
		 }
		 else{
			 System.out.println("====================================isvalidatePublicKey fin false ====================");
			 return false;
		 }
	 }

	    static String bin2hex(byte[] data){
	        return  String.format("%0" + (data.length * 2) +'x', new BigInteger(1,data));
	    }
	 
	    
	    
	    public static String getPKHash(String pubkey) throws NoSuchAlgorithmException
	    {
			byte[] data = Tools.hexStringToByteArray(pubkey);
			MessageDigest digest = MessageDigest.getInstance("SHA-256");
	        byte[] out = new byte[20];
	        synchronized(digest) {
	            digest.reset();
	            byte[] sha256 = digest.digest(data);
	            RIPEMD160Digest rDigest = new RIPEMD160Digest();
	            rDigest.update(sha256, 0, sha256.length);
	            rDigest.doFinal(out, 0);
	        }
	        return bin2hex(out);
	    }
	    
	    public static byte[] getPKHashByte(String pubkey) throws NoSuchAlgorithmException
	    {
			byte[] data = Tools.hexStringToByteArray(pubkey);
			MessageDigest digest = MessageDigest.getInstance("SHA-256");
	        byte[] out = new byte[20];
	        synchronized(digest) {
	            digest.reset();
	            byte[] sha256 = digest.digest(data);
	            RIPEMD160Digest rDigest = new RIPEMD160Digest();
	            rDigest.update(sha256, 0, sha256.length);
	            rDigest.doFinal(out, 0);
	        }
	        return out;
	    }
	    
	    public static String getIPAddress()
	    {
			  InetAddress ip;
			  try {
				ip = InetAddress.getLocalHost();

				  return ip.getHostAddress();
			  } catch (UnknownHostException e) {

				e.printStackTrace();
				return null;
			  }
	    	
	    }
	    
	    public static String[] VerificationPubKeyPaser(String hash) throws IOException
	    {
			String urlToRead="http://134.214.108.142:8085/IDBServers/VerificationPubKeyHash";
			Map<String,Object> params = new LinkedHashMap<>();
			String subdata="";
			String nbTX="";
			int inTX=0;
			params.put("hash", hash);
			
			String data =  Tools.postHTML(urlToRead,params );
			data =data.substring(data.indexOf("<p>") +3);
			nbTX=data.substring(0 , data.indexOf("<br/>") );
			inTX=Integer.parseInt(nbTX);
			String[] reputationPaser=new String[inTX*2];
			data=data.substring(data.indexOf("<br/>")+4);
			//System.out.println(inTX);
			for(int i=0;i<inTX*2;i++)
			{
				subdata=data.substring(1,data.indexOf("<br/>"));
				data=data.substring(data.indexOf("<br/>")+4);
				reputationPaser[i]=subdata;
			}
			
			return reputationPaser;
	    }
	    
}
