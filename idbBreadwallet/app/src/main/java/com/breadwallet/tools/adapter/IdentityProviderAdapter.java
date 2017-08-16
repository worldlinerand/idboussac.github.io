package com.breadwallet.tools.adapter;

import android.app.Activity;
import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.util.Base64;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import com.breadwallet.R;
import com.breadwallet.presenter.entities.ClaimsEntity;
import com.breadwallet.tools.util.Utils;

import java.util.ArrayList;
import java.util.Collections;

/**
 * Created by A660904 on 07/06/2017.
 */

public class IdentityProviderAdapter extends BaseAdapter {

    private String TAG = IdentityProviderAdapter.class.getName();
    private Activity activity;
    private ArrayList<ClaimsEntity> data;
    private static LayoutInflater inflater = null;
    private double maxHeigth = 100.0;

    public IdentityProviderAdapter(Activity a, ClaimsEntity[] d){
        activity = a;
        data = new ArrayList<>();
        if(d != null)
            Collections.addAll(data,d);

        inflater = (LayoutInflater) activity.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
    }

    @Override
    public int getCount() {
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
        View tmpLayout = inflater.inflate(R.layout.claims_ipd_list_view, null);

        return getIDPClaimsView(tmpLayout, position);
    }

    private View getIDPClaimsView(View tmpLayout, int position){
        TextView type = (TextView) tmpLayout.findViewById(R.id.claims_idp_type);
        TextView value = (TextView) tmpLayout.findViewById(R.id.claims_idp_value);

        Utils.overrideFonts(type,value);
        tmpLayout.setBackgroundResource(R.drawable.clickable_layout);

        final ClaimsEntity item = data.get(position);

        type.setText(item.getType());
        if(item.getType().equals("Creds")){
            ImageView credsimg = (ImageView) tmpLayout.findViewById(R.id.credspic);
            String imgStr = item.getValue();
            byte imgBytes[] = Base64.decode(imgStr,Base64.DEFAULT);
            Bitmap bmp = BitmapFactory.decodeByteArray(imgBytes,0,imgBytes.length);
            double ratio = maxHeigth/(double)bmp.getHeight();
            Bitmap resized = Bitmap.createScaledBitmap(bmp,(int)(bmp.getWidth()*ratio), (int)(bmp.getHeight()*ratio), true);
            credsimg.setImageBitmap(resized);
        } else
            value.setText(item.getValue());

        return tmpLayout;
    }
}
