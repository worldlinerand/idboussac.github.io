package tools;

import java.io.UnsupportedEncodingException;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Calendar;
import java.util.Random;
import java.util.TimeZone;

public class Nonce {
	
	private static String nonce;
	private static int EXPIRATION_DELAY = 600;
	private static long startTimer;

	public Nonce(String _nonce) {
		nonce = _nonce;
		Calendar calendar = Calendar.getInstance(TimeZone.getTimeZone("UTC"));
		startTimer = calendar.getTimeInMillis() / 1000;
	}
		
	
	public static String nonceGen() {
		byte[] randByte = new byte[32];
		new Random().nextBytes(randByte);
		BigInteger randInt = new BigInteger(256, new Random());
		Calendar calendar = Calendar.getInstance(TimeZone.getTimeZone("UTC"));
		long time = (long) Math.pow((calendar.getTimeInMillis() / 1000), 7);

		try {
			String entropi = new String(randByte, "UTF-8") + randInt.toString()
					+ new Long(time).toString();
			MessageDigest sha = MessageDigest.getInstance("SHA-256");
			byte[] digest = sha.digest(entropi.getBytes());
			String fulnonce = bytesToHex(digest);
			return fulnonce.substring(0, 16).toLowerCase();
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		}
		return null;
	}

	public boolean nonceCheck(String receivedNonce) {
		Calendar calendar = Calendar.getInstance(TimeZone.getTimeZone("UTC"));
		long currentTime = calendar.getTimeInMillis() / 1000;
		return (receivedNonce.compareTo(nonce) == 0 && ((currentTime - startTimer) < EXPIRATION_DELAY));
	}

	final protected static char[] hexArray = "0123456789ABCDEF".toCharArray();

	public static String bytesToHex(byte[] bytes) {
		char[] hexChars = new char[bytes.length * 2];
		for (int j = 0; j < bytes.length; j++) {
			int v = bytes[j] & 0xFF;
			hexChars[j * 2] = hexArray[v >>> 4];
			hexChars[j * 2 + 1] = hexArray[v & 0x0F];
		}
		return new String(hexChars);
	}

	public String getNonce(){
		return nonce;
	}
	
}
