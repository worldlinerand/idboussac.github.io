package com.breadwallet.presenter.fragments;

import android.app.Activity;
import android.app.Fragment;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ListView;
import android.widget.TextView;

import com.breadwallet.BreadWalletApp;
import com.breadwallet.R;
import com.breadwallet.presenter.activities.MainActivity;
import com.breadwallet.presenter.entities.BROpReturnTransactionEntity;
import com.breadwallet.presenter.entities.TransactionListItem;
import com.breadwallet.tools.adapter.IdBlockchainTxListAdapter;
import com.breadwallet.tools.adapter.MiddleViewAdapter;
import com.breadwallet.tools.animation.BRAnimator;
import com.breadwallet.tools.sqlite.SQLiteManager;
import com.breadwallet.tools.util.BRConstants;
import com.breadwallet.wallet.BRWalletManager;

import java.util.List;

/**
 * Created by A660904 on 26/04/2017.
 *idblockchain starter view and print an overview of claims registered
 */

public class FragmentMasterAccount extends Fragment {

    private static final String TAG = FragmentSettingsAll.class.getName();
    public static TextView login;
    public static TextView password;
    public static IdBlockchainTxListAdapter adapter;
    private static boolean refreshTransactionAvailable = true;  //enable or not view refresh

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {

        final View rootView = inflater.inflate(R.layout.fragment_idb, container, false);
        Button buttonMasterCount = (Button) rootView.findViewById(R.id.main_button_master_account);
        login = (TextView) rootView.findViewById(R.id.login_master_count);
        password = (TextView) rootView.findViewById(R.id.password_master_count);

        //refreshTransactions(getActivity());


        buttonMasterCount.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {                                              // on click, the fragment switch to a list a already known service provider
                if(BreadWalletApp.unlocked) {
                    FragmentMasterAccount fragmentMasterAccount = (FragmentMasterAccount) getActivity().
                            getFragmentManager().findFragmentByTag(FragmentIdBlockchain.class.getName());
                    FragmentSpList fragmentSpList = new FragmentSpList();
                    BRAnimator.animateSlideToLeft(MainActivity.app, fragmentSpList, fragmentMasterAccount);
                } else {
                    if (BRAnimator.checkTheMultipressingAvailability()) {
                        ((BreadWalletApp) MainActivity.app.getApplicationContext()).
                                promptForAuthentication(MainActivity.app, BRConstants.AUTH_FOR_GENERAL, null, null, null, null, false);
                    }
                }
            }
        });

        return rootView;
    }

    /*
    @Override
    public void onActivityCreated(Bundle savedInstanceState) {
        super.onActivityCreated(savedInstanceState);
    }

    @Override
    public void onResume() {
        super.onResume();
        MiddleViewAdapter.resetMiddleView(getActivity(), "id-blockchain");
        refreshUI();
    }

*/
    /**
     * refresh the list
     * @param ctx
     */
    /*
    public static void refreshTransactions(final Activity ctx) {
        if (refreshTransactionAvailable) {
            refreshTransactionAvailable = false;
            new Thread(new Runnable() {
                @Override
                public void run() {
                    int i = 0;
                    List<BROpReturnTransactionEntity> listTx = SQLiteManager.getInstance(ctx).getOpReturnTransactions();
                    claimObjects = new BROpReturnTransactionEntity[listTx.size()];
                    claimObjects = listTx.toArray(claimObjects);
                    transactionObjects = BRWalletManager.getInstance(ctx).getTransactions();
                    if (ctx != null && ctx instanceof MainActivity) {
                        ctx.runOnUiThread(new Runnable() {
                            @Override
                            public void run() {
                                refreshTransactionAvailable = true;
                                refreshUI();
                            }
                        });
                    }
                }
            }).start();
        }

    }

    public static void refreshUI() {
        if (BRAnimator.level != 1) return;
        if (adapter != null) {
            adapter.updateData(claimObjects, transactionObjects);
        }
    }*/

}
