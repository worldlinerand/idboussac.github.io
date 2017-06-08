package com.breadwallet.presenter.fragments;

import android.app.DialogFragment;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;

import com.breadwallet.R;

/**
 * Created by A660904 on 29/05/2017.
 * display a dialog fragment to add a new claims field in the FragmentOpReturn layout
 */

public class NewClaimsDialogFragment extends DialogFragment {

    private FragmentOpReturn opFrag;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

    }

    public static NewClaimsDialogFragment newInstance(){
        NewClaimsDialogFragment newClaimsDialogFragment= new NewClaimsDialogFragment();
        return newClaimsDialogFragment;
    }

    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState){
        final View rootView = inflater.inflate(R.layout.add_new_claims_dialog_fragment, container, false);

        Button cancel = (Button) rootView.findViewById(R.id.nc_dialog_cancel);
        Button validate = (Button) rootView.findViewById(R.id.nc_dialog_validate);

        final EditText claimName = (EditText) rootView.findViewById(R.id.nc_name);

        cancel.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                getDialog().dismiss();
            }
        });

        validate.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String newClaim = claimName.getText().toString();
                opFrag.addField(newClaim);                              // add a TextView and an EditText at the bottom of the FragmentOpReturn
                getDialog().dismiss();
            }
        });

        return rootView;
    }

    public void setOpFrag(FragmentOpReturn opFrag){ this.opFrag = opFrag; }
}
