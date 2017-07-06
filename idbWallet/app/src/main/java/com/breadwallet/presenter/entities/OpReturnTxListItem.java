package com.breadwallet.presenter.entities;

/**
 * Created by A660904 on 10/05/2017.
 * collect all details about an op_return transaction from database
 */

public class OpReturnTxListItem {
    public static final String TAG = TransactionListItem.class.getName();
    private long timeStamp;      //transaction timestamp
    private int blockHeight;     //transaction blockheight
    private String hash;         //transaction id
    private long sent;           //bitcoin amount sent
    private long received;       //bitcoin amount received
    private long fee;            //transaction fee
    private String to[];         //beneficiary address
    private String from[];       //sender address
    private long balanceAfterTx; //wallet balance after transaction
    private long outAmounts[];   //rest of wallet amount
    private String name;         //title of claims sent in the op_return transaction
    private String data;         //claims details

    private OpReturnTxListItem() {
    }

    public OpReturnTxListItem(long timeStamp, int blockHeight, String hash, long sent,
                               long received, long fee, String to[], String from[],
                               long balanceAfterTx, long[] outAmounts, String name, String data) {
        this.timeStamp = timeStamp;
        this.blockHeight = blockHeight;
        this.hash = hash;
        this.sent = sent;
        this.received = received;
        this.fee = fee;
        this.to = to;
        this.from = from;
        this.balanceAfterTx = balanceAfterTx;
        this.outAmounts = outAmounts;
        this.name = name;
        this.data = data;
    }

    public int getBlockHeight() {
        return blockHeight;
    }

    public long getFee() {
        return fee;
    }

    public String[] getFrom() {
        return from;
    }

    public String getHexId() {
        return hash;
    }

    public long getReceived() {
        return received;
    }

    public long getSent() {
        return sent;
    }

    public static String getTAG() {
        return TAG;
    }

    public long getTimeStamp() {
        return timeStamp;
    }

    public String[] getTo() {
        return to;
    }

    public long getBalanceAfterTx() {
        return balanceAfterTx;
    }

    public long[] getOutAmounts() {
        return outAmounts;
    }

    public String getName(){ return name; }

    public String getData(){ return data; }
}
