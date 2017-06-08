package com.breadwallet.tools.util;

import android.app.Activity;

import java.security.interfaces.ECKey;

/**
 * Created by A660904 on 16/03/2017.
 * BitID
 */

public interface SignInCallback {

    void sendResultsBackToCaller(int resultCode, String message);

    void cancel();

    public void showLoading();

    public void hideLoading();

    void showChooseAddress(String bitID);

    void showCreateAddress(String bitID, ECKeyData keyData);

    void showSignInRequest(String bitID);

    void showSignInResponse(int responseCode, String message);

}