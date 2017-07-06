package com.breadwallet.tools.threads;

import android.util.Log;

import com.breadwallet.presenter.entities.TransactionListItem;
import com.breadwallet.presenter.fragments.FragmentIdBlockchain;
import com.breadwallet.tools.sqlite.SQLiteManager;
import com.breadwallet.wallet.BRWalletManager;

import static com.breadwallet.presenter.activities.IDPActivity.idpApp;
import static com.breadwallet.presenter.activities.MainActivity.app;
import static com.breadwallet.tools.threads.PaymentProtocolTask.TAG;

/**
 * Created by A660904 on 10/05/2017.
 * thread t oadd a new op_return transaction in the database
 */

public class ThreadOpReturnData extends Thread {
    private String txHash;
    private byte[] buff;
    private int blockHeigth;
    private long timestamp;
    private String claimsName;
    private String claims;

    public void run() {

        SQLiteManager sqLiteManager = SQLiteManager.getInstance(app);
        sqLiteManager.insertOpReturnTransaction(buff,blockHeigth,timestamp,txHash,claimsName,claims);
        FragmentIdBlockchain.refreshTransactions(app);
        if(idpApp.isOpReturnTx) {
            try {
                sleep(5000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            app.tIDP.setHash(txHash);
            app.tIDP.start();
            idpApp.isOpReturnTx = false;
        }
    }

    public void setTxHash(String txHash_){
        txHash=txHash_;
    }

    public void setBuff(byte[] buff_){
        buff=buff_;
    }

    public void setBlockHeigth(int blockHeigth_){
        blockHeigth=blockHeigth_;
    }

    public void setTimestamp(long timestamp_){
        timestamp=timestamp_;
    }

    public void setClaimsName(String claimsName_){
        claimsName=claimsName_;
    }

    public void setClaims(String claims_){
        claims=claims_;
    }
}

