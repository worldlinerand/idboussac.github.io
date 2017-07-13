package com.breadwallet.presenter.entities;

/**
 * Created by ahamroun on 13/07/2017.
 */

public class User {
    String password="";
    String login = "";

    public User(String password, String login)
    {
        this.login=login;
        this.password=password;
    }

    String getPassword()
    {
        return this.password;
    }

    String getLogin()
    {
        return this.login;
    }

}
