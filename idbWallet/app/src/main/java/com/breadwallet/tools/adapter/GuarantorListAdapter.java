package com.breadwallet.tools.adapter;

import android.app.ActionBar;
import android.app.Activity;
import android.app.Fragment;
import android.app.FragmentTransaction;
import android.content.Context;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.RelativeLayout;
import android.widget.TextView;

import com.breadwallet.R;
import com.breadwallet.presenter.activities.MainActivity;
import com.breadwallet.presenter.entities.BRGuarantorEntity;
import com.breadwallet.presenter.entities.BROpReturnTransactionEntity;
import com.breadwallet.presenter.fragments.FragmentIdblockchainClaimsOverview;
import com.breadwallet.presenter.fragments.FragmentListClaims;
import com.breadwallet.tools.animation.BRAnimator;
import com.breadwallet.tools.sqlite.SQLiteManager;
import com.breadwallet.tools.util.Utils;
import com.breadwallet.wallet.BRWalletManager;

import java.util.ArrayList;
import java.util.Collections;

import static com.breadwallet.presenter.activities.MainActivity.app;


/**
 * Created by a660904 on 15/05/2017.
 * Display claims data in a list in the FragmentIdblockchainClaimsOverview
 */

public class GuarantorListAdapter extends BaseAdapter {
    public static final String TAG = GuarantorListAdapter.class.getName();
    private Activity activity;
    private ArrayList<BRGuarantorEntity> data;
    private static LayoutInflater inflater = null;


    public GuarantorListAdapter(Activity a, BRGuarantorEntity[] d){
        activity = a;
        data = new ArrayList<>();
        if(d != null)
            Collections.addAll(data,d);

        inflater = (LayoutInflater) activity.getSystemService(Context.LAYOUT_INFLATER_SERVICE);

    }

    public void updateData(BRGuarantorEntity [] d){
        if(d != null){
            if(d.length != data.size()){
                data.clear();
                Collections.addAll(data,d);
            }
        }
        notifyDataSetChanged();
    }

    @Override
    public int getCount() {
        if(data.size() == 0) return 1; //if there isn't any data, the list is filled with a no guarantor button
        return data.size();
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
    public View getView(int position, View convertView, ViewGroup parent) {
        View tmpLayout = inflater.inflate(R.layout.guarantor_name, null);
        if(data.size() == 0 && position == 0){
            RelativeLayout noGuarantors = (RelativeLayout) inflater.inflate(R.layout.button_no_guarantor,null);   // no guarantor button in case there isn't any data
            noGuarantors.setLayoutParams(new ActionBar.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, Utils.getPixelsFromDps(activity, 70)));
            return noGuarantors;
        }

        return getGuarantorsView(tmpLayout, position);

    }

    /**
     * add in the temporary view guarantor data at the position position
     * on click on this view it switch on FragmentListClaims
     * @param tmpLayout
     *  temporary view for the list item
     * @param position
     *  position of the item in the list
     * @return
     */
    public View getGuarantorsView(View tmpLayout, int position){

        TextView name = (TextView) tmpLayout.findViewById(R.id.name_guarantor);
        TextView tx = (TextView) tmpLayout.findViewById(R.id.tx_guarantor);

        Utils.overrideFonts(name,tx);
        tmpLayout.setBackgroundResource(R.drawable.clickable_layout);

        final BRGuarantorEntity item = data.get(position);

        name.setText(item.getName());
        tx.setText(item.getValidationTx());

        BRAnimator.showCopyBubble(app, tmpLayout, tx);

        tmpLayout.setOnClickListener(new View.OnClickListener() {           //switch to FragmentListClaims
            @Override
            public void onClick(View v) {

                BROpReturnTransactionEntity[] txTab = SQLiteManager.getInstance(app).selectTxOpReturnByHash(item.getTxHash());
                if (BRAnimator.checkTheMultipressingAvailability()) {
                    FragmentIdblockchainClaimsOverview fragmentIdblockchainClaimsOverview = (FragmentIdblockchainClaimsOverview) activity.
                            getFragmentManager().findFragmentByTag(FragmentIdblockchainClaimsOverview.class.getName());
                    FragmentListClaims fragmentListClaims = new FragmentListClaims();
                    fragmentListClaims.setOpReturnObject(txTab[0]);
                    fragmentListClaims.setIdpName(item.getName());
                    fragmentListClaims.setProofHash(item.getValidationTx());
                    fragmentListClaims.setTxHash(BRWalletManager.getInstance(app).reverseTxHash(item.getTxHash()));
                    BRAnimator.animateSlideToLeft((MainActivity) activity, fragmentListClaims, fragmentIdblockchainClaimsOverview);
                }
            }
        });


        return tmpLayout;
    }
}
