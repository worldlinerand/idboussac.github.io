package com.breadwallet.tools.threads;

import com.breadwallet.tools.util.WebClient;

import org.json.JSONObject;

/**
 * Created by a660904 on 12/05/2017.
 * thread to communicate with an identity provider or a service provider
 */

public class ThreadIDProviders extends Thread {

    private String idpName;
    private String hash;
    private JSONObject txIDs;
    private String validationTx;
    private String idpUrl;
    private String jsonData;
    private boolean runRefresh = true;

    public void run() {

     WebClient client = new WebClient();
        if(hash == null){   // if this is a service provider
            client.client(idpUrl,jsonData,txIDs);
        }else
            client.client(idpUrl,jsonData, hash, runRefresh);


    }

    public void setHash(String hash){
        this.hash = hash;
    }

    public void setIdpName(String name){
        this.idpName = name;
    }

    public  void setIdpUrl(String idpUrl){
        this.idpUrl = idpUrl;
    }

    public void setJsonData(String jsonData){
        this.jsonData = jsonData;
    }

    public void setTxIDs(JSONObject txIDs){
        this.txIDs = txIDs;
        hash =null;
    }

    public void setRunRefresh(boolean _runrefresh){ runRefresh = _runrefresh;}

}
