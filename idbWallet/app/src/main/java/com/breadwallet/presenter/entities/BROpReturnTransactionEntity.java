package com.breadwallet.presenter.entities;

/**
 * Created by A660904 on 10/05/2017.
 * this class is used to collect op_return transaction data in the database
 */

public class BROpReturnTransactionEntity {
    private byte[] buff;                //transaction data
    private int blockheight;            //blockchain block height
    private long timestamp;             // transaction timestamp
    private String txHash;              // transaction id
    private String name;                //claims title
    private String data;                //claims

    private BROpReturnTransactionEntity(){

    }

    public long getBlockheight() {
        return blockheight;
    }

    public void setBlockheight(int blockheight) {
        this.blockheight = blockheight;
    }

    public long getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(long timestamp) {
        this.timestamp = timestamp;
    }

    public String getTxHash() {
        return txHash;
    }

    public void setTxHash(String txHash) {
        this.txHash = txHash;
    }

    public String getName(){ return name; }

    public void setName(String name){ this.name=name; }

    public String getData(){ return data; }

    public void setData(String data){ this.data=data; }

    public BROpReturnTransactionEntity(byte[] txBuff, int blockheight, long timestamp, String txHash, String name, String data) {
        this.blockheight = blockheight;
        this.timestamp = timestamp;
        this.buff = txBuff;
        this.txHash = txHash;
        this.name = name;
        this.data = data;
    }

    public byte[] getBuff() {
        return buff;
    }

}
