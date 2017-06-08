package com.breadwallet.tools.util;


import android.app.AlertDialog;
import android.content.DialogInterface;
import android.util.Log;
import android.widget.Toast;

import com.breadwallet.R;
import com.breadwallet.presenter.entities.SpEntity;
import com.breadwallet.presenter.fragments.FragmentIdblockchainClaimsOverview;
import com.breadwallet.tools.security.KeyStoreManager;
import com.breadwallet.tools.sqlite.SQLiteManager;
import com.breadwallet.wallet.BRWalletManager;

import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;

import static com.breadwallet.presenter.activities.MainActivity.app;
import static com.breadwallet.wallet.BRWalletManager.onBalanceChanged;
import static com.breadwallet.wallet.BRWalletManager.showSentReceivedToast;

/**
 * Created by a660904 on 12/05/2017.
 * web communication with identity providers and service providers
 */

public class WebClient {
    private static final String TAG = WebClient.class.getName();


    /**
     * send datas to an identity provider
     * @param url
     *      identity provider url
     * @param data
     *      data to communicate (claims)
     * @param hash
     *      transaction id od the op_return data
     */
    public void client (String url, String data, String hash) {

        String sb = httpSender(url, data, BRWalletManager.getInstance(app).reverseTxHash(hash));
        if (sb != null){
            SQLiteManager.getInstance(app).insertGuarantor(hash, url, sb.toString());
            FragmentIdblockchainClaimsOverview.refreshGuarantors(app);
        }

    }

    /**
     * send datas to a service provider
     * @param url
     *      service provider url
     * @param data
     *      data to communication (claims)
     * @param jsonHash
     *      json object that contains transaction ids of the different proof
     */

    public void client (String url, String data, JSONObject jsonHash){


        String sb = httpSender(url,data,jsonHash);
        if(sb != null) {
            SpEntity sp = new SpEntity(sb.toString(), url);
            SQLiteManager.getInstance(app).insertSp(new SpEntity[]{sp});
            showSentReceivedToast("successfully register");
        }

    }


    /**
     * request an identity provider or a service provider with claims and transactions id
     * @param url
     *      addressee url
     * @param data
     *      claims
     * @param txProof
     *      transaction id(s) to get signatures
     * @return  data return by the provider
     */
    private String httpSender(String url, String data, Object txProof ){
        try{
            URL destUrl = new URL(url);
            HttpURLConnection con = (HttpURLConnection) destUrl.openConnection();
            con.setDoOutput(true);
            con.setDoInput(true);
            con.setRequestProperty("Content-type", "application/json; charset=UTF-8");
            con.setRequestProperty("Accept", "application/json");
            con.setRequestMethod("POST");

            JSONObject jsonTx = new JSONObject();
            JSONObject jsonData = new JSONObject(data);

            jsonTx.put("txId", txProof);
            jsonTx.put("data", jsonData);
            byte[] enc_key = KeyStoreManager.getOwnerPub(app);          // add public key to the provider to check signature or challenge the owner

            StringBuilder key_builder = new StringBuilder();

            for(byte b : enc_key){
                key_builder.append(String.format("%02x", b));
            }

            String serialized_key = key_builder.toString();

            jsonTx.put("pubkey", serialized_key);

            OutputStreamWriter ow = new OutputStreamWriter(con.getOutputStream());
            ow.write(jsonTx.toString());
            ow.flush();

            StringBuilder sb = new StringBuilder();
            int httpResult = con.getResponseCode();

            if(httpResult == HttpURLConnection.HTTP_OK){
                BufferedReader br = new BufferedReader(new InputStreamReader(con.getInputStream(), "utf-8"));
                String line = null;
                while((line = br.readLine()) != null){
                    sb.append(line );

                }
                br.close();

               return sb.toString();

            }else {
                showSentReceivedToast(app.getString(R.string.sp_error));
            }

        } catch(Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}
