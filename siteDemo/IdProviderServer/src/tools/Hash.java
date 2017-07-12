package tools;

import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class Hash {
	private final static char[] hexArray = "0123456789abcdef".toCharArray();
	public static String hashSHA256(String data){
		MessageDigest digest = null;
		try{
			digest = MessageDigest.getInstance("SHA-256");
			byte[] tmp = digest.digest(data.getBytes("UTF-8"));
			String result = bytesToHex(tmp);
			return result;
		}catch(NoSuchAlgorithmException | UnsupportedEncodingException e){
			e.printStackTrace();
		}
		return null;
	}
	
	public static String bytesToHex(byte[] bytes) {
	    char[] hexChars = new char[bytes.length * 2];
	    for ( int j = 0; j < bytes.length; j++ ) {
	        int v = bytes[j] & 0xFF;
	        hexChars[j * 2] = hexArray[v >>> 4];
	        hexChars[j * 2 + 1] = hexArray[v & 0x0F];
	    }
	    return new String(hexChars);
	}
}
