package com.breadwallet.presenter.entities;

/**
 * Created by a660904 on 24/05/2017.
 * SpEntity is used to collect service providers data in the database
 */

public class SpEntity {

    String name;    //service provider name
    String uri;     //servcie provider usri
    int id;         //database primary key

    public SpEntity(String name, String uri){
        this.name = name;
        this.uri = uri;
    }

    public String getName(){ return name;  }

    public void setName(String name){ this.name = name; }

    public String getUri(){ return uri; }

    public void setUri(String uri){ this.uri = uri; }

    public int getId(){ return id; }

    public void setId(int id){ this.id = id; };
}
