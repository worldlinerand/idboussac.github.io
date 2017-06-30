package com.breadwallet.presenter.activities;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.FragmentActivity;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;


import com.breadwallet.R;
import com.breadwallet.presenter.entities.ClaimsEntity;
import com.breadwallet.tools.adapter.IdentityProviderAdapter;
import com.breadwallet.tools.manager.SharedPreferencesManager;
import com.breadwallet.tools.security.ECDSA;
import com.breadwallet.tools.security.KeyStoreManager;
import com.breadwallet.tools.threads.ThreadIDProviders;
import com.breadwallet.tools.threads.ThreadOpReturnData;
import com.breadwallet.wallet.BRWalletManager;

import java.io.UnsupportedEncodingException;
import java.math.BigInteger;
import java.net.URLDecoder;
import java.security.KeyFactory;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.PKCS8EncodedKeySpec;

import static com.breadwallet.presenter.activities.MainActivity.app;



/**
 * Created by a660904 on 08/06/2017.
 */

public class IDPActivity extends FragmentActivity {


    private static final String TAG = IDPActivity.class.getName();
    private ClaimsEntity[] idpClaim;
    private ListView claimsList;
    private IdentityProviderAdapter adapter;
    public static IDPActivity idpApp;
    public static boolean isOpReturnTx = false;
    public static ThreadOpReturnData tOpRet;
    public String callbackURI;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_idp);

        idpApp = this;

        final Intent intent = getIntent();
        final EditText title = (EditText) findViewById(R.id.idp_claim_title);

        setClaims(intent);
        Button submit = (Button) findViewById(R.id.idp_submit_button);


        submit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String title_ = title.getText().toString();

                String claimsJSON = "{ ";  //create a json object that contains all claims
                String order = "";         //this string gives the order in which the data are hashed
                for (int i = 0; i< idpClaim.length ; i++){
                    claimsJSON = claimsJSON.concat("\"" + idpClaim[i].getType() +"\" : \"" + idpClaim[i].getValue() +"\" ,");
                    order = order.concat(idpClaim[i].getType()+",");
                }

                claimsJSON = claimsJSON.concat("\"ordre\" : \"" + order +"\" }");

                byte[] concatenateHash=null;

                for(int i = 0;  i<idpClaim.length; i++) {   //hash and concatenate claims
                    byte[] tmp = concatenateHash;
                    byte[] hash = new byte[0];
                    try {
                        hash = getHash(idpClaim[i].getValue().getBytes("UTF-8"));
                    } catch (UnsupportedEncodingException e) {
                        e.printStackTrace();
                    }
                    if (concatenateHash == null)
                        concatenateHash = hash;
                    else {
                        concatenateHash = new byte[tmp.length + hash.length];
                        System.arraycopy(tmp, 0, concatenateHash, 0, tmp.length);
                        System.arraycopy(hash, 0, concatenateHash, tmp.length, hash.length);
                    }
                }
                    byte[] finalHash = getHash(concatenateHash);            //hash the concatenate hashes
                    byte[] encoded_key = KeyStoreManager.getOwnerPriv(app);             //get private key from the keystore

                    PKCS8EncodedKeySpec formatted_private = new PKCS8EncodedKeySpec(encoded_key);
                    KeyFactory kf = null;
                    try {
                        kf = KeyFactory.getInstance("EC");
                    } catch (NoSuchAlgorithmException e) {
                        e.printStackTrace();
                    }
                    byte[] sign = null;
                    try {
                        sign = ECDSA.signature(bin2hex(finalHash), kf.generatePrivate(formatted_private));      //sign the final hash
                    } catch (InvalidKeySpecException e) {
                        e.printStackTrace();
                    }
                    isOpReturnTx = true;


                    if (sign.length < 80) {        //send signature in the bitcoin blockchain
                        //TODO ajouter l'entete
                        BRWalletManager.getInstance(app).op_returnTx(SharedPreferencesManager.getReceiveAddress(app), null, false, sign, sign.length);

                        tOpRet= new ThreadOpReturnData();
                        tOpRet.setClaimsName(title_);
                        tOpRet.setClaims(claimsJSON);

                        app.tIDP = new ThreadIDProviders();
                        app.tIDP.setJsonData(claimsJSON);
                        app.tIDP.setIdpUrl(callbackURI);
                        app.tIDP.setIdpName(callbackURI);
                        cancel();

                    }
                }

        });

        Button close = (Button) findViewById(R.id.idp_request_close);

        close.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent;
                intent = new Intent(idpApp,MainActivity.class);
                startActivity(intent);
                if (!IDPActivity.this.isDestroyed()) {
                    finish();
                }
            }
        });


    }



    @Override
    protected void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        setClaims(intent);


    }

    private void setClaims(Intent intent) {
        Uri uriEncoded = intent.getData();

        if(uriEncoded == null){
            String extra = intent.getExtras().getString("uri");
            uriEncoded = Uri.parse(extra);
        }

        Uri uri = null;
        try {
            uri = Uri.parse(URLDecoder.decode(uriEncoded.toString(),"UTF-8"));
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        Log.d(TAG, "setUrlHandler: " + uri.getFragment());
        callbackURI = "http://" + uri.getAuthority() + uri.getPath();
        String claims = uri.getFragment();
        String claimsData[] = claims.split("#");
        Log.d(TAG, "setUrlHandler: " + claimsData.length);
        idpClaim = new ClaimsEntity[claimsData.length];
        for (int i = 0; i < claimsData.length; i++) {
            String[] tmpClaim = claimsData[i].split("!");
            idpClaim[i] = new ClaimsEntity(tmpClaim[0], tmpClaim[1]);
        }
        claimsList = (ListView) findViewById(R.id.idp_claims_list);

        adapter = new IdentityProviderAdapter(this, idpClaim);

        if(claimsList != null)
            claimsList.setAdapter(adapter);
    }

    /**
     *hash the input data
     * @param input
     * @return hash of input
     */
    public static byte[] getHash(byte[] input){
        MessageDigest digest = null;
        try {
            digest = MessageDigest.getInstance("SHA-256");
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        digest.reset();
        return digest.digest(input);
    }


    static String bin2hex(byte[] data){
        return  String.format("%0" + (data.length * 2) +'x', new BigInteger(1,data));
    }


    public void cancel(){
        Intent intent;
        intent = new Intent(app,MainActivity.class);
        startActivity(intent);
        if (!IDPActivity.this.isDestroyed()) {
            finish();
        }
    }
}
