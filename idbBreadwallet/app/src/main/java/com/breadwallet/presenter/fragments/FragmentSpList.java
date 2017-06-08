package com.breadwallet.presenter.fragments;

import android.app.Fragment;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.WindowManager;
import android.widget.ListView;

import com.breadwallet.BreadWalletApp;
import com.breadwallet.R;
import com.breadwallet.presenter.entities.SpEntity;
import com.breadwallet.tools.adapter.MiddleViewAdapter;
import com.breadwallet.tools.adapter.SpAdapter;
import com.breadwallet.tools.sqlite.SQLiteManager;

import java.util.List;

/**
 * Created by A660904 on 23/05/2017.
 *
 * service providers list view
 */

public class FragmentSpList extends Fragment {

    public static SpAdapter adapter;
    private static SpEntity[] spObject;
    public ListView splist;


    @Override
    public View onCreateView(LayoutInflater inflater,
                             ViewGroup container, Bundle savedInstanceState) {

        final View rootView = inflater.inflate(
                R.layout.fragment_sp_list, container, false);
        splist = (ListView) rootView.findViewById(R.id.sp_listview);

        List<SpEntity> spList = SQLiteManager.getInstance(getActivity()).getSp();  //get the service providers list from the database

        spObject = new SpEntity[spList.size()];
        spObject = spList.toArray(spObject);

        adapter = new SpAdapter(getActivity(), spObject);

        if(splist != null)
            splist.setAdapter(adapter);

        return rootView;
    }

    @Override
    public void onPause() {
        super.onPause();
        ((BreadWalletApp) getActivity().getApplication()).hideKeyboard(getActivity());
        getActivity().getWindow().clearFlags(WindowManager.LayoutParams.FLAG_SECURE);

    }

    @Override
    public void onResume() {
        super.onResume();
        MiddleViewAdapter.resetMiddleView(getActivity(), "service providers");   //print "service providers" at the top of the screen
    }

}
