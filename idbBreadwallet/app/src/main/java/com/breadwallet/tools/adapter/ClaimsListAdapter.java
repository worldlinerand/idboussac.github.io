package com.breadwallet.tools.adapter;

import android.app.ActionBar;
import android.app.Activity;
import android.content.Context;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.CheckBox;
import android.widget.CompoundButton;
import android.widget.RelativeLayout;
import android.widget.TextView;

import com.breadwallet.R;
import com.breadwallet.presenter.entities.BRGuarantorEntity;
import com.breadwallet.presenter.entities.ClaimsEntity;
import com.breadwallet.tools.util.Utils;

import org.json.JSONException;
import org.json.JSONObject;
import org.slf4j.helpers.Util;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;

/**
 * Created by a660904 on 17/05/2017.
 *
 * ListAdapter for FragmentListClaims
 * It displays the type and the value of each claims, and a checkbox to choose to share a ckaim with the service provider
 */

public class ClaimsListAdapter extends BaseAdapter {
    private String TAG = ClaimsListAdapter.class.getName();
    private Activity activity;
    private ArrayList<ClaimsEntity> data;
    private static LayoutInflater inflater = null;

    public ClaimsListAdapter(Activity a, JSONObject d){
        activity = a;
        data = jsonToArray(d);

        inflater = (LayoutInflater) activity.getSystemService(Context.LAYOUT_INFLATER_SERVICE);


    }





    @Override
    public int getCount() {
        if(data.size() == 0)
            return 1;               //if there isn't any data, the list is filled with a no data button
        return data.size();
    }

    @Override
    public ClaimsEntity getItem(int position) {
        return data.get(position);
    }

    @Override
    public long getItemId(int position) {
        return position;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        View tmplayout = inflater.inflate(R.layout.claim_list_view, null);

        if(data.size() == 0 && position == 0){
            RelativeLayout noGuarantors = (RelativeLayout) inflater.inflate(R.layout.button_no_data,null);                      // no data button in case there isn't any data
            noGuarantors.setLayoutParams(new ActionBar.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, Utils.getPixelsFromDps(activity, 70)));
            return noGuarantors;
        }


        return getClaimView(tmplayout, position);
    }

    /**
     * getClaims view add the data in the view and a checkbox the represent user's choice
     * @param tmpLayout
     *  temporary view for the list item
     * @param position
     *  position of the item in the list
     * @return the new view
     */
    public View getClaimView(View tmpLayout, int position ){
        TextView type = (TextView) tmpLayout.findViewById(R.id.claims_type);
        TextView value = (TextView) tmpLayout.findViewById(R.id.claims_value);
        CheckBox cb = (CheckBox) tmpLayout.findViewById(R.id.checkClaims);
        Utils.overrideFonts(type,value);
        tmpLayout.setBackgroundResource(R.drawable.clickable_layout);

        final ClaimsEntity item = data.get(position);

        type.setText(item.getType());
        value.setText(item.getValue());
        if(!item.getCheckBox())
            cb.setChecked(false);
        else
            cb.setChecked(true);

        cb.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {       // on change of the checkbox change the checkbox boolean in the item list
            @Override
            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
                item.setCheckBox(isChecked);
            }
        });
        return tmpLayout;
    }

    /**
     * change claims JSONObject into a ArrayList
     * @param d
     *      claims JSONObject
     * @return ArrayList of ClaimsEntity
     */

    private ArrayList<ClaimsEntity> jsonToArray(JSONObject d){

        ArrayList<ClaimsEntity> claims = new ArrayList<>();
        try {
            String order = d.getString("ordre");
            String[] claimsType = order.split(",");
            for(int i=0; i < claimsType.length; i++){
                claims.add(new ClaimsEntity(claimsType[i], d.getString(claimsType[i])));
            }
        } catch (JSONException e) {
            e.printStackTrace();
        }


        return claims;
    }


}
