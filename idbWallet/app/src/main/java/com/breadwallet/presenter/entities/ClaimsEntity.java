package com.breadwallet.presenter.entities;

import android.renderscript.Sampler;

/**
 * Created by a660904 on 17/05/2017.
 * ClaimsEntity is used to parse claims data and store users choice to share or not each claims
 */

public class ClaimsEntity {
    String type;                    //type of claims(gender, firstname, lastname, postal address ....)
    String value;                   //value that match with type
    boolean checkBox = false;       //sharing choice

    public ClaimsEntity(String type, String value){
        this.type = type;
        this.value = value;
    }

    public void setType(String type){
        this.type = type;
    }

    public void setValue(String value){
        this.value = value;
    }

    public String getType(){
        return type;
    }

    public String getValue(){
        return value;
    }

    public void setCheckBox(boolean checkBox){ this.checkBox = checkBox; }

    public boolean getCheckBox(){ return checkBox; }

}
