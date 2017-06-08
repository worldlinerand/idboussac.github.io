
package com.breadwallet.presenter.fragments;

import android.app.Activity;
import android.app.AlertDialog;
import android.app.Fragment;
import android.app.FragmentTransaction;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Bundle;
import android.os.Handler;
import android.os.SystemClock;
import android.provider.Settings;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.text.Html;
import android.util.Base64;
import android.util.Log;
import android.util.TypedValue;
import android.view.Gravity;
import android.view.KeyEvent;
import android.view.LayoutInflater;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.WindowManager;
import android.view.inputmethod.EditorInfo;
import android.view.inputmethod.InputMethodManager;
import android.widget.AdapterView;
import android.widget.AutoCompleteTextView;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.breadwallet.R;
import com.breadwallet.BreadWalletApp;
import com.breadwallet.presenter.activities.IntroActivity;
import com.breadwallet.presenter.activities.MainActivity;
import com.breadwallet.presenter.entities.BROpReturnTransactionEntity;
import com.breadwallet.presenter.entities.TransactionListItem;
import com.breadwallet.tools.adapter.MiddleViewAdapter;
import com.breadwallet.tools.adapter.PlaceArrayAdapter;
import com.breadwallet.tools.animation.BRAnimator;
import com.breadwallet.tools.crypto.Base58;
import com.breadwallet.tools.manager.SharedPreferencesManager;
import com.breadwallet.tools.security.ECDSA;
import com.breadwallet.tools.sqlite.SQLiteManager;
import com.breadwallet.tools.threads.ThreadOpReturnData;
import com.breadwallet.tools.util.Utils;
import com.breadwallet.tools.security.KeyStoreManager;
import com.breadwallet.tools.util.WordsReader;
import com.breadwallet.wallet.BRPeerManager;
import com.breadwallet.wallet.BRWalletManager;
import com.google.android.gms.common.ConnectionResult;
import com.google.android.gms.common.api.GoogleApiClient;
import com.google.android.gms.common.api.PendingResult;
import com.google.android.gms.common.api.ResultCallback;
import com.google.android.gms.location.places.Place;
import com.google.android.gms.location.places.PlaceBuffer;
import com.google.android.gms.location.places.Places;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.gms.maps.model.LatLngBounds;
import com.google.firebase.crash.FirebaseCrash;

import java.io.UnsupportedEncodingException;
import java.math.BigInteger;
import java.security.KeyFactory;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.PublicKey;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.ListIterator;
import java.util.Vector;

import static android.content.Context.INPUT_METHOD_SERVICE;
import static android.content.Context.SYSTEM_HEALTH_SERVICE;
import static com.breadwallet.presenter.activities.MainActivity.app;

import com.google.android.gms.maps.model.LatLngBounds;

/**
 * FragmentOpReturn is a fragment to get the user's claims and prepare them before sending them on the blockchain
 */

public class FragmentOpReturn extends Fragment implements
        GoogleApiClient.OnConnectionFailedListener,
        GoogleApiClient.ConnectionCallbacks{
    private static final String TAG = FragmentOpReturn.class.getName();
    private EditText opReturnDataText;
    private Button cancelButton;
    private Button submit;
    private Button addField;
    private BRWalletManager m;
    private boolean allowSubmitButtonPress = true;
    private AlertDialog alertDialog;
    private List<EditText> editTexts;
    private List<String> claimsNames;
    private View rootView;
    private FragmentOpReturn opFrag;
    private AutoCompleteTextView pobAutocompleteTextView;
    private AutoCompleteTextView paAutoCompleteTextView;
    private PlaceArrayAdapter mPlaceArrayAdapter;
    private static final int GOOGLE_API_CLIENT_ID = 0;
    private static GoogleApiClient mGoogleApiClient;
    private static String prefixe = "IDB";


    @Override
    public View onCreateView(LayoutInflater inflater,
                             ViewGroup container, Bundle savedInstanceState) {


       rootView = inflater.inflate(
                R.layout.fragment_new_claim, container, false);
        m = BRWalletManager.getInstance(getActivity());
        submit = (Button) rootView.findViewById(R.id.claim_submit);
        addField = (Button) rootView.findViewById(R.id.button_new_flied);
        editTexts = new ArrayList<>();
        editTexts.add((EditText) rootView.findViewById(R.id.claim_title));
        editTexts.add((EditText) rootView.findViewById(R.id.claim_sexe));
        editTexts.add((EditText) rootView.findViewById(R.id.claim_fname));
        editTexts.add((EditText) rootView.findViewById(R.id.claim_sname));
        editTexts.add((EditText) rootView.findViewById(R.id.claim_nationality));
        editTexts.add((EditText) rootView.findViewById(R.id.claim_date_of_birth));
        editTexts.add((EditText) rootView.findViewById(R.id.claim_place_of_birth));
        editTexts.add((EditText) rootView.findViewById(R.id.claim_postal_address));
        editTexts.add((EditText) rootView.findViewById(R.id.claim_credentials));

        claimsNames = new ArrayList<>();
        claimsNames.add("gender");
        claimsNames.add("firstName");
        claimsNames.add("lastName");
        claimsNames.add("nationality");
        claimsNames.add("dateOfBirth");
        claimsNames.add("placeOfBirth");
        claimsNames.add("postalAddress");
        claimsNames.add("credentials");

        opFrag = this;

        if(mGoogleApiClient == null)                                    // use google place api to autocomplete the place of birth and the postal address
            mGoogleApiClient = new GoogleApiClient.Builder(app)
                .addApi(Places.GEO_DATA_API)
                .enableAutoManage(app, GOOGLE_API_CLIENT_ID, this)
                .addConnectionCallbacks(this)
                .build();



        paAutoCompleteTextView = (AutoCompleteTextView) rootView.findViewById(R.id.claim_postal_address);
        paAutoCompleteTextView.setThreshold(2);
        paAutoCompleteTextView.setOnItemClickListener(mAutocompleteClickListener);
        mPlaceArrayAdapter = new PlaceArrayAdapter(app, android.R.layout.simple_list_item_1,
                null, null);
        paAutoCompleteTextView.setAdapter(mPlaceArrayAdapter);
        mPlaceArrayAdapter.setGoogleApiClient(mGoogleApiClient);
        pobAutocompleteTextView = (AutoCompleteTextView) rootView.findViewById(R.id.claim_place_of_birth);
        pobAutocompleteTextView.setThreshold(2);
        pobAutocompleteTextView.setOnItemClickListener(mAutocompleteClickListener);
        pobAutocompleteTextView.setAdapter(mPlaceArrayAdapter);


        addField.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {                                                                   //open a dialog fragment to create a new data field in the form
                NewClaimsDialogFragment newClaimsDialogFragment = NewClaimsDialogFragment.newInstance();
                newClaimsDialogFragment.setOpFrag(opFrag);

                FragmentTransaction ft = getFragmentManager().beginTransaction();
                Fragment dial = getFragmentManager().findFragmentByTag(NewClaimsDialogFragment.class.getName());
                if (dial != null)
                    ft.remove(dial);
                ft.addToBackStack(null);
                newClaimsDialogFragment.show(ft, GuarantorDialogueFragment.class.getName());
            }
        });

        submit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {       //parse data and give them to the thread that send them to the blockchain

                if (!allowSubmitButtonPress) return;
                allowSubmitButtonPress = false;
                new Handler().postDelayed(new Runnable() {
                    @Override
                    public void run() {
                        allowSubmitButtonPress = true;
                    }
                }, 500);

                String title_ = editTexts.get(0).getText().toString();

                List<String> claims = new ArrayList<String>();

                for(int i = 1; i< editTexts.size() ; i++)
                    claims.add((editTexts.get(i).getText().toString()));


                String claimsJSON = "{ ";  //create a json object that contains all claims
                String order = "";         //this string gives the order in which the data are hashed
                for (int i = 0; i< claims.size() ; i++){
                   claimsJSON = claimsJSON.concat("\"" + claimsNames.get(i) +"\" : \"" + claims.get(i) +"\" ,");
                    order = order.concat(claimsNames.get(i)+",");
                }

                claimsJSON = claimsJSON.concat("\"ordre\" : \"" + order +"\" }");


                byte[] concatenateHash=null;

                for(int i = 0;  i<claims.size(); i++) {   //hash and concatenate claims
                    byte [] tmp = concatenateHash;
                    byte [] hash = new byte[0];
                    try {
                        hash = getHash(claims.get(i).getBytes("UTF-8"));
                    } catch (UnsupportedEncodingException e) {
                        e.printStackTrace();
                    }
                    if(concatenateHash == null)
                        concatenateHash=hash;
                    else {
                        concatenateHash = new byte[tmp.length + hash.length];
                        System.arraycopy(tmp, 0, concatenateHash, 0, tmp.length);
                        System.arraycopy(hash, 0, concatenateHash, tmp.length, hash.length);
                    }

                }


                byte[] finalHash = getHash(concatenateHash);            //hash the concatenate hashes
                byte[] encoded_key = KeyStoreManager.getOwnerPriv(app);             //get private key from the keystore

                PKCS8EncodedKeySpec formatted_private = new PKCS8EncodedKeySpec(encoded_key);
                KeyFactory kf = null;
                try {
                    kf = KeyFactory.getInstance("EC");
                } catch (NoSuchAlgorithmException e) {
                    e.printStackTrace();
                }
                byte []sign = null;
                try {
                    sign = ECDSA.signature(bin2hex(finalHash), kf.generatePrivate(formatted_private));      //sign the final hash
                } catch (InvalidKeySpecException e) {
                    e.printStackTrace();
                }
                app.isOPReturnTx = true;

                if(sign.length<80) {        //send signature in the bitcoin blockchain
                    //TODO ajouter l'entete
                    BRWalletManager.getInstance(app).op_returnTx(SharedPreferencesManager.getReceiveAddress(getActivity()), null, false, sign, sign.length);

                    getActivity().onBackPressed();

                    app.tOpData = new ThreadOpReturnData();

                    app.tOpData.setClaimsName(title_);
                    app.tOpData.setClaims(claimsJSON);


                }
            }
        });


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
        MiddleViewAdapter.resetMiddleView(getActivity(), "claims");
    }


    /**
     *hash the input data
     * @param input
     * @return hash of input
     */
    public static byte[] getHash(byte[] input){
        MessageDigest digest = null;
        try {
            digest = MessageDigest.getInstance("SHA-256");
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        digest.reset();
        return digest.digest(input);
    }

    static String bin2hex(byte[] data){
        return  String.format("%0" + (data.length * 2) +'x', new BigInteger(1,data));
    }

    /**
     *add a new textview in the layout
     * @param newClaim
     *          name of the new textview
     */

    public void addField(String newClaim){
        claimsNames.add(newClaim);
        LinearLayout claimsAddLayout = (LinearLayout) rootView.findViewById(R.id.claim_add_layout);
        claimsAddLayout.setGravity(Gravity.CENTER);

        TextView texte = new TextView(getContext());
        texte.setText(newClaim +" :");
        texte.setTextSize(TypedValue.COMPLEX_UNIT_DIP,getResources().getDimension(R.dimen.claim_size));
        texte.setTextColor(getResources().getColor(R.color.light_gray,null));
        LinearLayout.LayoutParams params = new LinearLayout.LayoutParams(LinearLayout.LayoutParams.MATCH_PARENT,LinearLayout.LayoutParams.MATCH_PARENT);
        int margin15dp =(int) getResources().getDimension(R.dimen.claim_margin15);
        int margin25dp =(int) getResources().getDimension(R.dimen.claim_margin25);
        texte.setPadding(margin15dp,0,0,0);



        claimsAddLayout.addView(texte,claimsAddLayout.getChildCount()-2,params);

        EditText edit = new EditText(getContext());
        params.setMargins(margin15dp,0,margin25dp,margin15dp);
        claimsAddLayout.addView(edit,claimsAddLayout.getChildCount()-2,params);
        editTexts.add(edit);
    }

    /**
     * google place api item click listener
     */

    private AdapterView.OnItemClickListener mAutocompleteClickListener
            = new AdapterView.OnItemClickListener() {
        @Override
        public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
            final PlaceArrayAdapter.PlaceAutocomplete item = mPlaceArrayAdapter.getItem(position);
            final String placeId = String.valueOf(item.placeId);
            PendingResult<PlaceBuffer> placeResult = Places.GeoDataApi
                    .getPlaceById(mGoogleApiClient, placeId);
            placeResult.setResultCallback(mUpdatePlaceDetailsCallback);

        }
    };

    private ResultCallback<PlaceBuffer> mUpdatePlaceDetailsCallback
            = new ResultCallback<PlaceBuffer>() {
        @Override
        public void onResult(PlaceBuffer places) {
            if (!places.getStatus().isSuccess()) {
                return;
            }
            // Selecting the first object buffer.
            final Place place = places.get(0);
            CharSequence attributions = places.getAttributions();


        }
    };

    @Override
    public void onConnected(@Nullable Bundle bundle) {
        mPlaceArrayAdapter.setGoogleApiClient(mGoogleApiClient);
    }

    @Override
    public void onConnectionSuspended(int i) {
        mPlaceArrayAdapter.setGoogleApiClient(null);
    }

    @Override
    public void onConnectionFailed(@NonNull ConnectionResult connectionResult) {
        Toast.makeText(app,
                "Google Places API connection failed with error code:" +
                        connectionResult.getErrorCode(),
                Toast.LENGTH_LONG).show();
    }
}
