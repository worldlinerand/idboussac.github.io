package com.breadwallet.presenter.fragments;

import android.app.Activity;
import android.app.DialogFragment;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;

import com.breadwallet.R;
import com.breadwallet.tools.animation.BRAnimator;
import com.breadwallet.tools.sqlite.SQLiteManager;
import com.breadwallet.tools.threads.ThreadIDProviders;

import static com.breadwallet.presenter.activities.MainActivity.app;


/**
 * Created by a660904 on 11/05/2017.
 *
 * display a dialog fragment to get the idprovider url
 * no longer used
 */

public class GuarantorDialogueFragment extends DialogFragment {
    public static final String TAG = GuarantorDialogueFragment.class.getName();
    private String hash;
    private String jsonData;
    private Activity activity;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

    }

    public static GuarantorDialogueFragment newInstance() {
        GuarantorDialogueFragment guarantorDialogueFragment = new GuarantorDialogueFragment();

        return guarantorDialogueFragment;
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        final View rootView = inflater.inflate(R.layout.fragment_guarantor_choice, container, false);

        Button cancel = (Button) rootView.findViewById(R.id.guarantor_dialogue_cancel);
        Button validate = (Button) rootView.findViewById(R.id.guarantor_dialogue_validate);
        Button scan = (Button) rootView.findViewById(R.id.button_scan_ipd);
        final EditText idpUrl = (EditText) rootView.findViewById(R.id.idp_url);


        cancel.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                getDialog().dismiss();
            }
        });

        validate.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String guarantorName = idpUrl.getText().toString();

                app.tIDP = new ThreadIDProviders();
                app.tIDP.setHash(hash);
                app.tIDP.setIdpName(guarantorName);
                app.tIDP.setIdpUrl(guarantorName);
                app.tIDP.setJsonData(jsonData);
                app.tIDP.start();
                getDialog().dismiss();

            }
        });

        scan.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (BRAnimator.checkTheMultipressingAvailability()) {
                    app.tIDP = new ThreadIDProviders();
                    app.tIDP.setHash(hash);
                    app.tIDP.setJsonData(jsonData);
                    app.isIDP = true;
                    BRAnimator.animateDecoderFragmentIdb((FragmentIdblockchainClaimsOverview)  activity.
                            getFragmentManager().findFragmentByTag(FragmentIdblockchainClaimsOverview.class.getName()));
                    getDialog().dismiss();
                }
            }
        });

        return rootView;
    }

    public void setHash(String hash){
        this.hash = hash;
    }

    public void setJsonData(String jsonData){
        this.jsonData = jsonData;
    }

    public void setActivity(Activity activity){ this.activity = activity; }

}
