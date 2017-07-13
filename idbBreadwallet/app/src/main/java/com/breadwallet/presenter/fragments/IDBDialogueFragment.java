package com.breadwallet.presenter.fragments;

import android.app.Activity;
import android.app.DialogFragment;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;

import com.breadwallet.R;
import com.breadwallet.tools.animation.BRAnimator;
import com.breadwallet.tools.threads.ThreadIDProviders;

import org.json.JSONObject;

import static com.breadwallet.presenter.activities.MainActivity.app;

/**
 * Created by a660904 on 18/05/2017.
 * display a dialog fragment to get service providers url
 * no longer used
 */

public class IDBDialogueFragment extends DialogFragment {

    private JSONObject hash;
    private String jsonData;
    private Activity activity;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

    }

    public static IDBDialogueFragment newInstance() {
        IDBDialogueFragment spDialogueFragment = new IDBDialogueFragment();

        return spDialogueFragment;
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        final View rootView = inflater.inflate(R.layout.fragment_dialogue_service_provider, container, false);

        Button cancel = (Button) rootView.findViewById(R.id.sp_dialogue_cancel);
        Button validate = (Button) rootView.findViewById(R.id.sp_dialogue_validate);
        Button scan = (Button) rootView.findViewById(R.id.button_scan_sp);
        final EditText idpUrl = (EditText) rootView.findViewById(R.id.sp_url);


        cancel.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                getDialog().dismiss();
            }
        });

        validate.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String spName = idpUrl.getText().toString();

                ThreadIDProviders t = new ThreadIDProviders();

                t.setTxIDs(hash);
                t.setIdpName(spName);
                t.setIdpUrl(spName);
                t.setJsonData(jsonData);
                t.start();
                getDialog().dismiss();
                activity.onBackPressed();

            }
        });

        scan.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                app.tIDP = new ThreadIDProviders();
                app.tIDP.setTxIDs(hash);
                app.tIDP.setJsonData(jsonData);
                app.isIDP = true;
                BRAnimator.animateDecoderFragmentIdb(null);//(FragmentListClaims) activity.getFragmentManager().findFragmentByTag(FragmentListClaims.class.getName()));
                getDialog().dismiss();
                BRAnimator.level--;
            }

        });

        return rootView;
    }

    public void setHash(JSONObject hash){
        this.hash = hash;
    }

    public void setJsonData(String jsonData){
        this.jsonData = jsonData;
    }

    public void setActivity(Activity activity){ this.activity = activity; };
}
