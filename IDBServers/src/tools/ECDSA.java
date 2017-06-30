package tools;

import java.io.File;
import java.io.FileInputStream;

import java.security.KeyPair;
import java.security.KeyStore;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.Signature;


public class ECDSA {
	

    void getSign() {
        

    }
	public static KeyPair getKeyPairFromKeyStore() throws Exception {
		System.out.println("========================== DEBUT Methode getKeyPairFromKeyStore ECDSA ====================================");
	    FileInputStream ins = new FileInputStream(new File("C:/ecKeyStore.jks"));
	    KeyStore keyStore = KeyStore.getInstance("JCEKS");
	    keyStore.load(ins, "123456".toCharArray());   //Keystore password
	    KeyStore.PasswordProtection keyPassword =       //Key password
	            new KeyStore.PasswordProtection("123456".toCharArray());

	    KeyStore.PrivateKeyEntry privateKeyEntry = (KeyStore.PrivateKeyEntry) keyStore.getEntry("ec", keyPassword);

	    java.security.cert.Certificate cert = keyStore.getCertificate("ec");
	    PublicKey publicKey = cert.getPublicKey();
	    PrivateKey privateKey = privateKeyEntry.getPrivateKey();
	    System.out.println("========================== FIN Methode getKeyPairFromKeyStore ECDSA ====================================");
	    
	    return new KeyPair(publicKey, privateKey);
	}
	
	
	public static Boolean verify(byte[] sgn, String msg, PublicKey pubkey){
		System.out.println("========================== DEBUT Methode verify ECDSA ====================================");
		System.out.println("sgn : " + sgn.toString());
		System.out.println("msg : " + msg);
		if(pubkey !=null){System.out.println("pubkey : " + pubkey.toString());}
		try{
			Signature ecdsaSign = Signature.getInstance("SHA256withECDSA");
			ecdsaSign.initVerify(pubkey);
			ecdsaSign.update(msg.getBytes("UTF-8"));
            if (ecdsaSign.verify(sgn))
            {
            	System.out.println("========================== FIN Methode verify ECDSA ====================================");
            	System.out.println("return : true");
                return true;
            }
            else
            {
            	System.out.println("========================== FIN Methode verify ECDSA ====================================");
            	System.out.println("return : false");
                return false;
            }
		} catch(Exception e){
			e.printStackTrace();
		}
		System.out.println("========================== FIN Methode verify ECDSA ====================================");
    	System.out.println("return : false");
		return false;
	}
	
	public static byte[] signature(String msg){
		System.out.println("========================== DEBUT Methode signature ECDSA ====================================");
		System.out.println("msg : " + msg);
		try {
			KeyPair pair = getKeyPairFromKeyStore();
			 Signature ecdsaSign = Signature.getInstance("SHA256withECDSA");
	         ecdsaSign.initSign(pair.getPrivate());
	         ecdsaSign.update(msg.getBytes("UTF-8"));
	         System.out.println("========================== FIN Methode signature ECDSA ====================================");
	          return ecdsaSign.sign();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println("========================== FIN Methode signature ECDSA ====================================");
		System.out.println("return : null");
		return null;
	}

}

