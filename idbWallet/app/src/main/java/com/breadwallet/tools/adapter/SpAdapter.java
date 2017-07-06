package com.breadwallet.tools.adapter;

import android.app.ActionBar;
import android.app.Activity;
import android.content.Context;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.RelativeLayout;
import android.widget.TextView;

import com.breadwallet.R;
import com.breadwallet.presenter.entities.BRGuarantorEntity;
import com.breadwallet.presenter.entities.SpEntity;
import com.breadwallet.tools.util.Utils;

import org.slf4j.helpers.Util;

import java.util.ArrayList;
import java.util.Collections;

/**
 * Created by a660904 on 24/05/2017.
 * adapter for the list in FragmentSpList
 * for each service provider recorded, it display his name and his url
 */

public class SpAdapter extends BaseAdapter {

    private String TAG = SpAdapter.class.getName();

    private Activity activity;
    private ArrayList<SpEntity> data;
    private static LayoutInflater inflater = null;

    public SpAdapter(Activity a, SpEntity[] d){
        activity = a;
        data = new ArrayList<>();
        if(d != null)
            Collections.addAll(data,d);

        inflater = (LayoutInflater) activity.getSystemService(Context.LAYOUT_INFLATER_SERVICE);

    }

    @Override
    public int getCount() {
        if(data.size() == 0)
            return 1;           //if there isn't any service provider in the database, display no service provider button
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

        View tmplayout = inflater.inflate(R.layout.sp_list_view, null);

        if(data.size() == 0 && position == 0){
            RelativeLayout noSp = (RelativeLayout) inflater.inflate(R.layout.button_no_sp,null);   //no sp button in case there isn't any service provider
           noSp.setLayoutParams(new ActionBar.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, Utils.getPixelsFromDps(activity, 70)));
            return noSp;
        }

        return getSpView(tmplayout,position);
    }


    /**
     * for each item, display his name and his url
     * @param tmpLayout
     * @param position
     * @return
     */
    private View getSpView(View tmpLayout, int position){
        TextView name = (TextView) tmpLayout.findViewById(R.id.sp_name_view);
        TextView uri = (TextView) tmpLayout.findViewById(R.id.sp_uri_view);

        Utils.overrideFonts(name,uri);
        tmpLayout.setBackgroundResource(R.drawable.clickable_layout);

        final SpEntity item = data.get(position);
        
        tmpLayout.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Log.d(TAG, "onClick: fido auth");
                //TODO fido auth
            }
        });

        name.setText(item.getName());
        uri.setText(item.getUri());

        return tmpLayout;
    }

}
