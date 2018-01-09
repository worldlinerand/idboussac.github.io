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
	    FileInputStream ins = new FileInputStream(new File("C:/ecKeyStore.jks"));
	    KeyStore keyStore = KeyStore.getInstance("JCEKS");
	    keyStore.load(ins, "123456".toCharArray());   //Keystore password
	    KeyStore.PasswordProtection keyPassword =       //Key password
	            new KeyStore.PasswordProtection("123456".toCharArray());

	    KeyStore.PrivateKeyEntry privateKeyEntry = (KeyStore.PrivateKeyEntry) keyStore.getEntry("ec", keyPassword);

	    java.security.cert.Certificate cert = keyStore.getCertificate("ec");
	    PublicKey publicKey = cert.getPublicKey();
	    PrivateKey privateKey = privateKeyEntry.getPrivateKey();
	    
	    return new KeyPair(publicKey, privateKey);
	}
	
	
	public static Boolean verify(byte[] sgn, String msg, PublicKey pubkey){
		System.out.println("sgn : " + sgn.toString());
		System.out.println("msg : " + msg);
		if(pubkey !=null){System.out.println("pubkey : " + pubkey.toString());}
		try{
			Signature ecdsaSign = Signature.getInstance("SHA256withECDSA");
			ecdsaSign.initVerify(pubkey);
			ecdsaSign.update(msg.getBytes("UTF-8"));
            if (ecdsaSign.verify(sgn))
            {
                return true;
            }
            else
            {
                return false;
            }
		} catch(Exception e){
			e.printStackTrace();
		}
		return false;
	}
	
	public static byte[] signature(String msg){

		try {
			KeyPair pair = getKeyPairFromKeyStore();
			 Signature ecdsaSign = Signature.getInstance("SHA256withECDSA");
	         ecdsaSign.initSign(pair.getPrivate());
	         ecdsaSign.update(msg.getBytes("UTF-8"));
	          return ecdsaSign.sign();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

}

