package tools;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.security.KeyFactory;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.PublicKey;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.X509EncodedKeySpec;
import java.util.Arrays;

import org.json.JSONException;
import org.json.JSONObject;

public class Tools {
	private final static char[] hexArray = "0123456789abcdef".toCharArray();
	/**
	 * create a hash from data by hashing separately each values in the JSONObject  and then hashing the concatenation of all these hashes 
	 * @param data
	 * 		a JSONObject containing the data to be hashed 
	 * @return
	 */
	public static String globalHash(JSONObject data){
		MessageDigest digest = null;
		try{
			digest = MessageDigest.getInstance("SHA-256");
		}catch(NoSuchAlgorithmException e){
			e.printStackTrace();
		}
		
		String tmpOrder = data.getString("ordre");
		String[] order = tmpOrder.split(",");
		byte [] concatenateHash =null;
		
		for(int i = 0; i<order.length; i++){
			digest.reset();
			byte [] tmp = concatenateHash;
			byte[] tmpHash = null;
			try {
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


}
