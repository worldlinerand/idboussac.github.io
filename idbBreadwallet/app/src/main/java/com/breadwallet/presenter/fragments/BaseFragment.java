package com.breadwallet.presenter.fragments;

/**
 * Created by A660904 on 16/03/2017.
 */

import android.app.Activity;
import android.app.Fragment;
import android.content.Context;
import android.os.Bundle;

import com.breadwallet.tools.util.SignInCallback;


public class BaseFragment extends Fragment {
    protected Activity mAuthCallbacks;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        this.setRetainInstance(true);
    }

    @Override
    public void onAttach(Context context) {
        super.onAttach(context);
        mAuthCallbacks = (Activity)context;
    }

    @Override
    public void onDetach() {
        super.onDetach();
        mAuthCallbacks = null;
    }
}
