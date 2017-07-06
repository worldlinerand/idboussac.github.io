package com.breadwallet.presenter.fragments;

import android.app.Fragment;
import android.app.FragmentTransaction;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.ListView;
import android.widget.TextView;

import com.breadwallet.R;
import com.breadwallet.presenter.entities.BROpReturnTransactionEntity;
import com.breadwallet.presenter.entities.ClaimsEntity;
import com.breadwallet.tools.adapter.ClaimsListAdapter;
import com.breadwallet.tools.adapter.MiddleViewAdapter;
import com.breadwallet.tools.animation.BRAnimator;
import com.breadwallet.tools.threads.ThreadIDProviders;
import com.breadwallet.tools.util.WebClient;

import org.json.JSONException;
import org.json.JSONObject;

import static com.breadwallet.presenter.activities.MainActivity.app;

/**
 * Created by a660904 on 17/05/2017.
 * detailed list of claims for each identity providers
 */

public class FragmentListClaims extends Fragment {

    private static final String TAG = FragmentListClaims.class.getName();

    static View rootView;
    public ListView claimsList;
    public static ClaimsListAdapter adapter;
    private BROpReturnTransactionEntity opReturnObject;
    private String idpName;
    private String proofHash;
    private String txHash;


    @Override
    public View onCreateView(LayoutInflater inflater,
                             ViewGroup container, Bundle savedInstanceState) {

        rootView = inflater.inflate(R.layout.fragment_service_provider_choice, container, false);
        claimsList = (ListView) rootView.findViewById(R.id.sp_claims_list);
        JSONObject claimsData = null;
        try {
            claimsData = new JSONObject(opReturnObject.getData());
        } catch (JSONException e) {
            e.printStackTrace();
        }


        adapter = new ClaimsListAdapter(getActivity(), claimsData);


        if (claimsList != null)
            claimsList.setAdapter(adapter);

        Button submit = (Button) rootView.findViewById(R.id.button_send_sp);
        final JSONObject finalClaimsData = claimsData;
        submit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {               //on click the data choose by the user are identified, parsed and send to the service provider
                int nbClaims = adapter.getCount();
                String hide = "";
                View view;
                for (int i = 0; i < nbClaims; i++) {
                    ClaimsEntity item = adapter.getItem(i);
                    if (!item.getCheckBox()) {                          //collect all claims that need to be hide to the service provider

                        finalClaimsData.remove(item.getType());
                        hide = hide.concat(item.getType() + ",");       // create a string that contains all the hidden data
                        try {
                            finalClaimsData.put(item.getType(),FragmentOpReturn.bin2hex(FragmentOpReturn.getHash(item.getValue().getBytes())));
                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
                    }
                }
                try {
                    finalClaimsData.put("hide",hide);                   //add hidden data string in the json object
                    finalClaimsData.put("idpName", idpName );           //add the url of the idprovider in the json object to give it to the service provider. This is how the service provider can fetch the public key
                } catch (JSONException e) {
                    e.printStackTrace();
                }

                JSONObject txIds = new JSONObject();
                try {                                                   //create a second json object that contains the transaction ids to fetch the different proof on the blockchain
                    txIds.put("claimsTxID", txHash );
                    txIds.put("proofID", proofHash);
                } catch (JSONException e) {
                    e.printStackTrace();
                }

                app.tIDP = new ThreadIDProviders();
                app.tIDP.setTxIDs(txIds);
                app.tIDP.setJsonData(finalClaimsData.toString());
                app.isIDP = true;
                BRAnimator.animateDecoderFragmentIdb(null);
                BRAnimator.level--;

            }
        });


        return rootView;
    }

    public void setOpReturnObject(BROpReturnTransactionEntity opReturnObject) {
        this.opReturnObject = opReturnObject;
    }

    @Override
    public void onResume(){
        super.onResume();
        MiddleViewAdapter.resetMiddleView(getActivity(), "claims details");   //print "claims details" at the top of the screen
    }

    public void setIdpName(String idpName){
        this.idpName = idpName;
    }

    public void setProofHash(String proofHash) {this.proofHash = proofHash; }

    public void setTxHash(String txHash){ this.txHash = txHash; }

}