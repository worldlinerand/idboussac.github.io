package com.breadwallet.tools.util;

import android.util.Log;

import com.breadwallet.R;
import com.breadwallet.tools.security.KeyStoreManager;

import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;

import static com.breadwallet.presenter.activities.IDPActivity.idpApp;
import static com.breadwallet.presenter.activities.MainActivity.app;
import static com.breadwallet.wallet.BRWalletManager.showSentReceivedToast;
import static com.breadwallet.wallet.BRWalletManager.showWritePhraseDialog;

/**
 * Created by a660904 on 04/07/2017.
 */

public class PostClaims {

    private static final String TAG = PostClaims.class.getName();

    public static void httpGetter(String url, String data ){
        try{
            URL destUrl = new URL(url);
            HttpURLConnection con = (HttpURLConnection) destUrl.openConnection();
            con.setDoOutput(true);
            con.setDoInput(true);
            con.setRequestProperty("Content-type", "application/json; charset=UTF-8");
            con.setRequestProperty("Accept", "application/json");
            con.setRequestMethod("POST");



            OutputStreamWriter ow = new OutputStreamWriter(con.getOutputStream());
            ow.write(data);
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
                Log.d(TAG, "httpGetter: " + sb.toString());
                idpApp.claimsUri = sb.toString();

            }else {
                idpApp.claimsUri = null;
                showSentReceivedToast(app.getString(R.string.sp_error));
            }

        } catch(Exception e) {
            e.printStackTrace();
        }
        Log.d(TAG, "httpGetter: ");

    }
}
