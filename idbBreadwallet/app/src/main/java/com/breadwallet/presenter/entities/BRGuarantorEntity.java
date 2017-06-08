package com.breadwallet.presenter.entities;

/**
 * Created by a660904 on 11/05/2017.
 * BRGuarantor is used to collect guarantor data in the database
 */

public class BRGuarantorEntity {


    private String txHash;              //claims transaction hash, primary key
    private String name;                //title of claims registration
    private String validationTx;        //transaction id of the guarantor validation

    private BRGuarantorEntity(){

    }



    public String getTxHash() {
        return txHash;
    }

    public void setTxHash(String txHash) {
        this.txHash = txHash;
    }

    public String getName(){ return name; }

    public void setName(String name){ this.name=name; }

    public String getValidationTx(){ return validationTx; }

    public void setValidationTx(String validationTx){ this.validationTx=validationTx; }

    public BRGuarantorEntity(String txHash, String name, String validationTx) {

        this.txHash = txHash;
        this.name = name;
        this.validationTx = validationTx;
    }


}
