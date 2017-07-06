package com.breadwallet.tools.adapter;

import android.app.ActionBar;
import android.app.Activity;
import android.content.Context;
import android.graphics.Color;
import android.support.v4.content.ContextCompat;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.RelativeLayout;
import android.widget.TextView;

import com.breadwallet.BreadWalletApp;
import com.breadwallet.R;
import com.breadwallet.presenter.activities.MainActivity;
import com.breadwallet.presenter.entities.BROpReturnTransactionEntity;
import com.breadwallet.presenter.entities.OpReturnTxListItem;
import com.breadwallet.presenter.entities.TransactionListItem;
import com.breadwallet.presenter.fragments.FragmentIdBlockchain;
import com.breadwallet.presenter.fragments.FragmentIdblockchainClaimsOverview;
import com.breadwallet.presenter.fragments.FragmentSettings;
import com.breadwallet.presenter.fragments.FragmentSettingsAll;
import com.breadwallet.presenter.fragments.FragmentTransactionExpanded;
import com.breadwallet.presenter.fragments.FragmentWebView;
import com.breadwallet.tools.animation.BRAnimator;
import com.breadwallet.tools.manager.SharedPreferencesManager;
import com.breadwallet.tools.util.BRConstants;
import com.breadwallet.tools.util.BRStringFormatter;
import com.breadwallet.tools.util.Utils;
import com.breadwallet.wallet.BRWalletManager;
import com.platform.APIClient;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.ListIterator;

/**
 * Created by A660904 on 10/05/2017.
 *
 */

public class IdBlockchainTxListAdapter extends BaseAdapter {
    public static final String TAG = IdBlockchainTxListAdapter.class.getName();

    private Activity activity;
    private ArrayList<BROpReturnTransactionEntity> data;
    private ArrayList<TransactionListItem> additionalData;
    private static LayoutInflater inflater = null;
    private static int unconfirmedColor;
    private static int sentColor;
    private static int receivedColor;
    public static boolean showAllTx = false;



    public IdBlockchainTxListAdapter(Activity a, BROpReturnTransactionEntity[] d, TransactionListItem[] transactionObjects) {
        activity = a;
        data = new ArrayList<>();
        additionalData = new ArrayList<>();
        if (d != null && transactionObjects != null) {
            Collections.addAll(data, d);
            Collections.addAll(additionalData,transactionObjects);
        }
        inflater = (LayoutInflater) activity.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        unconfirmedColor = ContextCompat.getColor(a, R.color.white);
        sentColor = Color.parseColor("#FF5454");
        receivedColor = Color.parseColor("#00BF00");

    }

    public void updateData(BROpReturnTransactionEntity[] d, TransactionListItem[] transactionObjects) {
        if (d != null && transactionObjects != null) {
            if (d.length != data.size() && transactionObjects.length != additionalData.size()) {
                data.clear();
                additionalData.clear();
                Collections.addAll(data, d);
                Collections.addAll(additionalData,transactionObjects);
            }
        }
        showAllTx = false;
        notifyDataSetChanged();
    }

    @Override
    public int getCount() {

        if (!BreadWalletApp.unlocked) {
            return 1;               //if breadwallet is locked, the list is filled with a more item button
        }
        if (data.size() == 0) return 1;  //if there isn't any data, the list is filled with a no transaction button
        return showAllTx ? (data.size()) : (data.size() > 5) ? (6 ) : (data.size());    // if there are more than 5 item in the list 5 transaction view are displayed in the list with a claims history button at the end
    }

    @Override
    public Object getItem(int position) {
        return data.get(position);
    }

    @Override
    public long getItemId(int position) {
        return position;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup viewGroup) {
        View tmpLayout = inflater.inflate(R.layout.idblockchain_list_item, null);
        if (data.size() == 0 && position == 0) {
            RelativeLayout noTransactions = (RelativeLayout) inflater.inflate(R.layout.button_no_transactions, null);       //no transaction button if there isn't any data
            noTransactions.setLayoutParams(new ActionBar.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, Utils.getPixelsFromDps(activity, 70)));
            return noTransactions;
        }

        if (!BreadWalletApp.unlocked) {
            if (getUnconfirmedCount(data) == 0 && position == 0) {
                RelativeLayout txHistory = (RelativeLayout) inflater.inflate(R.layout.button_claims_history, null);         //display history button if the wallet is locked and there isn't any unconfirmed transaction
                txHistory.setLayoutParams(new RelativeLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, Utils.getPixelsFromDps(activity, 40)));
                txHistory.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        if (BRAnimator.checkTheMultipressingAvailability()) {
                            ((BreadWalletApp) activity.getApplicationContext()).
                                    promptForAuthentication(activity, BRConstants.AUTH_FOR_GENERAL, null, null, null, null, false);
                        }
                    }
                });
                return txHistory;
            } else {
                    RelativeLayout moreAuth = (RelativeLayout) inflater.inflate(R.layout.button_more, null);        //if there are unconfirmed transactions display a more button in the list
                    moreAuth.setLayoutParams(new RelativeLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, Utils.getPixelsFromDps(activity, 40)));
                    moreAuth.setOnClickListener(new View.OnClickListener() {
                        @Override
                        public void onClick(View v) {
                            if (BRAnimator.checkTheMultipressingAvailability()) {
                                ((BreadWalletApp) activity.getApplicationContext()).
                                        promptForAuthentication(activity, BRConstants.AUTH_FOR_GENERAL, null, null, null, null, false);
                            }
                        }
                    });
                    return moreAuth;
            }
        } else {
            if (showAllTx) return getTxView(tmpLayout, position);       //display all the transaction
            if (data.size() > 5) {          //display the last five transactions with a more button at the end
                if (position < 5) {
                    return getTxView(tmpLayout, position);
                } else {
                    RelativeLayout more = (RelativeLayout) inflater.inflate(R.layout.button_more, null);
                    more.setLayoutParams(new RelativeLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, Utils.getPixelsFromDps(activity, 40)));
                    more.setOnClickListener(new View.OnClickListener() {
                        @Override
                        public void onClick(View v) {
                            showAllTx = true;
                            notifyDataSetChanged();
                        }
                    });
                    return more;
                }
            } else {                    //display all the transactions if there are less than 5 transactions
                return getTxView(tmpLayout, position);
            }
        }
    }

    /**
     * count the transaction whose the number of confirmation is lower than 5
     * @param items
     *          list of transactions
     * @return
     */
    public int getUnconfirmedCount(List<BROpReturnTransactionEntity> items) {
        int count = 0;
        for (BROpReturnTransactionEntity t : items) {
            if (t == null) continue;
            int blockHeight = (int) t.getBlockheight();
            int confirms = blockHeight == Integer.MAX_VALUE ? 0 : SharedPreferencesManager.getLastBlockHeight(activity) - blockHeight + 1;
            if (blockHeight != Integer.MAX_VALUE && confirms < 6) {
                count++;
            }
        }
        return count;
    }

    @Override
    public int getViewTypeCount() {
        return 2;
    }


    /**
     * for each claims records in the list display the title, the date of the op_return transaction and number of confirmations
     * @param tmpLayout
     * @param position
     * @return
     */
    public View getTxView(View tmpLayout, int position) {




        TextView sentReceivedTextView = (TextView) tmpLayout.findViewById(R.id.idblockchain_sent_received_label);
        TextView dateTextView = (TextView) tmpLayout.findViewById(R.id.idblockchain_date);
        TextView claimNameTextView = (TextView) tmpLayout.findViewById(R.id.idblockchain_claims_name);

        Utils.overrideFonts(sentReceivedTextView, dateTextView, claimNameTextView);
        tmpLayout.setBackgroundResource(R.drawable.clickable_layout);



        claimNameTextView.setVisibility(BreadWalletApp.unlocked ? View.VISIBLE : View.INVISIBLE);
        final BROpReturnTransactionEntity item = data.get(data.size() - position - 1 );

        final TransactionListItem txData = matchTx(item.getTxHash());  //get the transaction the match with this claims record

        tmpLayout.setOnClickListener(new View.OnClickListener() {  //on click on the layout switc hto FragmentIdblockchainClaimsOverview
            @Override
            public void onClick(View v) {
                if (BRAnimator.checkTheMultipressingAvailability()) {
                    FragmentIdBlockchain fragmentIdblockchain = (FragmentIdBlockchain) activity.
                            getFragmentManager().findFragmentByTag(FragmentIdBlockchain.class.getName());
                    FragmentIdblockchainClaimsOverview fragmentIdblockchainClaimsOverview = new FragmentIdblockchainClaimsOverview();
                    OpReturnTxListItem itemFrag = new OpReturnTxListItem(item.getTimestamp(),txData.getBlockHeight(), item.getTxHash(),txData.getSent(),txData.getReceived(),txData.getFee(),txData.getTo(),txData.getFrom(),txData.getBalanceAfterTx(), txData.getOutAmounts(), item.getName(), item.getData());
                    fragmentIdblockchainClaimsOverview.setCurrentObject(itemFrag);
                    BRAnimator.animateSlideToLeft((MainActivity) activity, fragmentIdblockchainClaimsOverview, fragmentIdblockchain);
                }
            }
        });
        if(txData != null) {
            boolean received = txData.getSent() == 0;
            int blockHeight = txData.getBlockHeight();

            int confirms = blockHeight == Integer.MAX_VALUE ? 0 : SharedPreferencesManager.getLastBlockHeight(activity) - blockHeight + 1;


            //display the status of the transaction, sent or received, confirmed or not, number of confirmation.
            if (txData.getSent() > 0 && txData.getSent() == txData.getReceived()) {
                sentReceivedTextView.setBackgroundResource(R.drawable.unconfirmed_label);
                sentReceivedTextView.setText(R.string.moved);
                sentReceivedTextView.setTextColor(unconfirmedColor);
            } else if (blockHeight != Integer.MAX_VALUE && confirms >= 6) {
                sentReceivedTextView.setBackgroundResource(received ? R.drawable.received_label : R.drawable.sent_label);
                sentReceivedTextView.setText(received ? R.string.received : R.string.sent);
                sentReceivedTextView.setTextColor(received ? receivedColor : sentColor);
            } else {
                sentReceivedTextView.setBackgroundResource(R.drawable.unconfirmed_label);
                sentReceivedTextView.setTextColor(unconfirmedColor);
                if (!BRWalletManager.getInstance(activity).transactionIsVerified(txData.getHexId())) {
                    sentReceivedTextView.setText(R.string.unverified);
                } else {
                    int confsNr = confirms >= 0 && confirms <= 5 ? confirms : 0;
                    String message = confsNr == 0 ? activity.getString(R.string.nr_confirmations0) :
                            (confsNr == 1 ? activity.getString(R.string.nr_confirmations1) : String.format(activity.getString(R.string.nr_confirmations), confsNr));

                    sentReceivedTextView.setText(message);
                }
            }

        }
        long itemTimeStamp = item.getTimestamp();           //display transaction timestamp
        dateTextView.setText(itemTimeStamp != 0 ? Utils.getFormattedDateFromLong(itemTimeStamp * 1000) : Utils.getFormattedDateFromLong(System.currentTimeMillis()));

        String name = item.getName();       //display claims record name
        claimNameTextView.setText(name);

        return tmpLayout;
    }


    /**
     * find in the wallet transaction history transactions that match with the hash of the op_return transaction
      * @param hash
     * @return
     */

    private TransactionListItem matchTx(String hash){

        ListIterator<TransactionListItem> it = additionalData.listIterator();

        TransactionListItem result;

        while(it.hasNext()){
            result = it.next();
            if(result.getHexId().equals(hash))
                return result;
        }
        return null;

    }

}
