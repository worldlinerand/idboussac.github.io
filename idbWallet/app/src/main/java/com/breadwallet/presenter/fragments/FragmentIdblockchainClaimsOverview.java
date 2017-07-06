package com.breadwallet.presenter.fragments;

import android.app.Activity;
import android.app.DialogFragment;
import android.app.Fragment;
import android.app.FragmentTransaction;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.ListView;
import android.widget.RelativeLayout;
import android.widget.TextView;

import com.breadwallet.R;
import com.breadwallet.presenter.activities.MainActivity;
import com.breadwallet.presenter.entities.BRGuarantorEntity;
import com.breadwallet.presenter.entities.OpReturnTxListItem;
import com.breadwallet.presenter.entities.TransactionListItem;
import com.breadwallet.tools.adapter.GuarantorListAdapter;
import com.breadwallet.tools.adapter.MiddleViewAdapter;
import com.breadwallet.tools.animation.BRAnimator;
import com.breadwallet.tools.manager.CurrencyManager;
import com.breadwallet.tools.manager.SharedPreferencesManager;
import com.breadwallet.tools.sqlite.SQLiteManager;
import com.breadwallet.tools.threads.ThreadIDProviders;
import com.breadwallet.tools.util.BRStringFormatter;
import com.breadwallet.tools.util.Utils;
import com.breadwallet.wallet.BRWalletManager;

import org.json.JSONException;
import org.json.JSONObject;

import java.math.BigDecimal;
import java.util.Locale;

import static com.breadwallet.presenter.activities.MainActivity.app;

/**
 * Created by a660904 on 11/05/2017.
 * claims sum up interface
 *
 */

public class FragmentIdblockchainClaimsOverview extends Fragment {
    private static final String TAG = FragmentTransactionExpanded.class.getName();
    private static OpReturnTxListItem item;  //op_return transaction data
    private static BRGuarantorEntity[] guarantorObject; //guarantor list
    static View rootView;
    static int nbGuarantors;        // guarantor number
    public static GuarantorListAdapter adapter; //list adapter
    public static ListView guarantorsList;  //guarantor list view
    public LinearLayout claimsOverviewFragment; //this fragment layout
    public static boolean refreshGuarantorsAvailable = true; //enable or not UI refresh

    @Override
    public View onCreateView(LayoutInflater inflater,
                             ViewGroup container, Bundle savedInstanceState) {


        rootView = inflater.inflate(R.layout.idblockchain_claim_overview, container, false);
        guarantorsList = (ListView) rootView.findViewById(R.id.guarantor_list);

        claimsOverviewFragment = (LinearLayout) rootView.findViewById(R.id.idb_items);

        claimsOverviewFragment.setPadding(0, MainActivity.screenParametersPoint.y / 9, 0, 0); //set paddint to reveal navbar


        adapter = new GuarantorListAdapter(getActivity(), guarantorObject);
        adapter.notifyDataSetChanged();
        if (guarantorObject != null) {
            if (guarantorObject.length == 0) guarantorObject = null;
        }

        if (guarantorsList != null)
            guarantorsList.setAdapter(adapter);

        refreshGuarantors(app);
        final TextView hashText = (TextView) rootView.findViewById(R.id.idb_claims_id);
        TextView nameText = (TextView) rootView.findViewById(R.id.idb_name);
        BRAnimator.showCopyBubble(getActivity(), rootView.findViewById(R.id.idb_tx_id), hashText);


        String rawHash = BRWalletManager.getInstance(getActivity()).reverseTxHash(item.getHexId());
        final int mid = rawHash.length() / 2;
        String hashString = rawHash.substring(0, mid) + "\n" + rawHash.substring(mid);

        hashText.setText(hashString);
        nameText.setText(item.getName());
        BRAnimator.showCopyBubble(getActivity(), rootView.findViewById(R.id.tx_id), hashText);


        Button validation = (Button) rootView.findViewById(R.id.button_claims_validation);
        validation.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {                           // start thread that run the identity provider validation

                if (BRAnimator.checkTheMultipressingAvailability()) {
                    app.tIDP = new ThreadIDProviders();
                    app.tIDP.setHash(item.getHexId());
                    app.tIDP.setJsonData(item.getData());
                    app.isIDP = true;
                    BRAnimator.animateDecoderFragmentIdb((FragmentIdblockchainClaimsOverview)  getActivity().                       //switch to the qrcode reader fragment to get the identity provider url
                            getFragmentManager().findFragmentByTag(FragmentIdblockchainClaimsOverview.class.getName()));
                }
            }

        });



        return rootView;
    }


    @Override
    public void onResume() {
        super.onResume();
        refreshGuarantors(app);
        MiddleViewAdapter.resetMiddleView(getActivity(), "claims overview"); //print "claims overview" at the top of the screen
    }

    @Override
    public void onPause() {
        super.onPause();
        BRAnimator.hideCopyBubble(getActivity());
    }


    public void setCurrentObject(OpReturnTxListItem item) {
        this.item = item;
        refreshGuarantors(app);
    }


    /**
     * refresh view
     */
    public static void refreshGuarantors(final Activity ctx) {
        if (refreshGuarantorsAvailable) {
            refreshGuarantorsAvailable = false;
            new Thread(new Runnable() {
                @Override
                public void run() {
                    guarantorObject = SQLiteManager.getInstance(ctx).selectGuarantorByHash(item.getHexId());
                    if (ctx != null) {
                        ctx.runOnUiThread(new Runnable() {
                            @Override
                            public void run() {
                                refreshGuarantorsAvailable = true;
                                refreshUI();
                            }
                        });
                    }
                }
            }).start();
        }
    }


    /**
     * refresh  garantors listview
     */
    public static void refreshUI() {
        if (adapter != null) {
            adapter.updateData(guarantorObject);
            Log.d(TAG, "refreshUI ");
        }
    }

}
