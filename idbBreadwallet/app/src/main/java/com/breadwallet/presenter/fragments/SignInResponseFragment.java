package com.breadwallet.presenter.fragments;

import android.app.DialogFragment;
import android.app.Fragment;
import android.app.FragmentTransaction;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.Gravity;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.widget.Button;
import android.widget.TextView;

import com.breadwallet.R;
import com.breadwallet.tools.security.RequestHandler;
import com.breadwallet.tools.util.ResultCode;

/**
 * Created by A660904 on 16/03/2017.
 */
public class SignInResponseFragment extends DialogFragment {

    public static SignInResponseFragment newInstance(int resultCode, String message) {
        SignInResponseFragment signInResponseFragment = new SignInResponseFragment();
        Bundle bundle = new Bundle();
        bundle.putInt("resultCode", resultCode);
        if (!TextUtils.isEmpty(message)) {
            bundle.putString("message", message);
        }

        signInResponseFragment.setArguments(bundle);
        return signInResponseFragment;
    }

    private String getMessageValue(String message) {
        return TextUtils.isEmpty(message) ? "Unknown Error" : message;
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {


        View view = inflater.inflate(R.layout.fragment_signin_response, container, false);
        TextView messageView = (TextView) view.findViewById(R.id.message);

        final String message = getArguments().getString("message");
        final int resultCode = getArguments().getInt("resultCode");
        if (resultCode == ResultCode.OK) {
            messageView.setText("Login successful");
        } else {
            messageView.setText(getMessageValue(message));
        }

        Button done = (Button) view.findViewById(R.id.doneBtn);
        done.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {
                getDialog().dismiss();
            }
        });

        return view;
    }



}
