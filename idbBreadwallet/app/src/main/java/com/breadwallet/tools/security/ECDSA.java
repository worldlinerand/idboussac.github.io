package com.breadwallet.tools.security;

import java.security.InvalidAlgorithmParameterException;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.NoSuchAlgorithmException;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.SecureRandom;
import java.security.Signature;
import java.security.spec.ECGenParameterSpec;

import javax.crypto.KeyGenerator;

/**
 * Created by a660904 on 19/05/2017.
 * ECDSA tools to sign, verify signature and generate keys
 */

public class ECDSA {



    public ECDSA(){}

    /**
     * sign msg with privKey
     * @param msg
     *      String message to be sign
     * @param privKey
     *      ECDSA private key
     * @return
     *      msg signature
     */
    public static byte[] signature(String msg, PrivateKey privKey){
        try {
            Signature ecdsaSign = Signature.getInstance("SHA256withECDSA");
            ecdsaSign.initSign(privKey);
            ecdsaSign.update(msg.getBytes("UTF-8"));

            return ecdsaSign.sign();
        } catch (Exception e) {
            e.printStackTrace();
        }

        return null;
    }


    /**
     * verify msg signature sgn with the pubKey
     * @param sgn
     *      signature to check
     * @param msg
     *      original message
     * @param pubkey
     *       ECDSA public key
     * @return true if the signature is good else false
     */
    public static Boolean verify(byte[] sgn, String msg,PublicKey pubkey ){
        try{
            Signature ecdsaSign = Signature.getInstance("SHA256withECDSA");
            ecdsaSign.initVerify(pubkey);
            ecdsaSign.update(msg.getBytes("UTF-8"));
            if (ecdsaSign.verify(sgn))
                return true;
            else
                return false;

        } catch(Exception e){
            e.printStackTrace();
        }

        return false;

    }

    /**
     * generate a ECSDA key pair
     * @return key pair
     */

    public static KeyPair keyGen(){

        try {
            KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("EC");
            SecureRandom random = SecureRandom.getInstance("SHA1PRNG");

            keyPairGenerator.initialize(256, random);
            return keyPairGenerator.generateKeyPair();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        return null;
    }


}
