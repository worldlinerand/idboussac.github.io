package com.breadwallet.presenter.fragments;

/**
 * Created by A660904 on 16/03/2017.
 */
import com.breadwallet.R;
import com.breadwallet.tools.security.RequestHandler;
import com.breadwallet.tools.util.BitID;
import com.breadwallet.tools.util.BitIdUtils;

import android.app.DialogFragment;
import android.app.Fragment;
import android.app.FragmentManager;
import android.app.FragmentTransaction;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;

import org.bitcoinj.wallet.Protos;

import java.net.URISyntaxException;

import okhttp3.Response;

import static com.breadwallet.tools.animation.BackgroundMovingAnimator.TAG;

public class SignInRequestFragment extends DialogFragment {

    private Button mYesBtn;

    private TextView mSite;

    private Button mNoBtn;

    private int mode = -1;

    private static String _bitid;


    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

    }


    public static SignInRequestFragment newInstance(String bitID) {
        SignInRequestFragment signInRequestFragment = new SignInRequestFragment();
        signInRequestFragment.setArguments(BitIdUtils.createBundleWithBitID(bitID));
        return signInRequestFragment;
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        final String bitID = getArguments().getString(BitID.EXTRA_NAME);

        final View view = inflater.inflate(R.layout.fragment_sigin_request, container, false);
        mSite = (TextView) view.findViewById(R.id.site);
        try {
            mSite.setText(BitIdUtils.getID(bitID).toCallbackURI().getHost());
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }
        mYesBtn = (Button) view.findViewById(R.id.yesBtn);
        mYesBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                RequestHandler.processBitIdResponse(getActivity());


                Response res = RequestHandler.getResp();
                goToSignInResponse(res);
            }
        });

        mNoBtn = (Button) view.findViewById(R.id.noBtn);
        mNoBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                   getDialog().dismiss();
            }
        });

        return view;
    }



    public void goToSignInResponse(Response res){
        if(getDialog() != null){

            getDialog().cancel();
        }
        SignInResponseFragment signinres = SignInResponseFragment.newInstance(res.code(),res.message());
        FragmentManager fm = getActivity().getFragmentManager();
        signinres.show(fm,SignInRequestFragment.class.getName());


    }


}
