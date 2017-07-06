package com.breadwallet.tools.util;

import android.net.Uri;
import android.text.TextUtils;

import java.net.URI;
import java.net.URISyntaxException;

/**
 * Created by A660904 on 16/03/2017.
 * BitID
 */

public class BitID {

        public static final String EXTRA_NAME = "bitID";

        protected Uri mUri;

        protected boolean mIsSecured;

        protected String mNonce;

        protected String mRawUri;

        protected BitID() {
        }

        public static BitID parse(String bitID) throws URISyntaxException {
            if (TextUtils.isEmpty(bitID)) {
                throw new IllegalArgumentException("bitID is null");
            }

            BitID bitId = new BitID();
            bitId.mRawUri = bitID;
            bitId.mUri = Uri.parse(bitID);
            checkIfValid(bitId.mUri);

            bitId.mNonce = bitId.mUri.getQueryParameter("x");
            String uValue = bitId.mUri.getQueryParameter("u");
            bitId.mIsSecured = TextUtils.isEmpty(uValue) || uValue.equals("0");

            return bitId;
        }

        private static void checkIfValid(Uri uri) throws URISyntaxException {
            if (!"bitid".equals(uri.getScheme())) {
                throw new URISyntaxException(uri.toString(), "Invalid scheme");
            }
            if (TextUtils.isEmpty(uri.getQueryParameter("x"))) {
                throw new URISyntaxException(uri.toString(), "Missing x parameter");
            }

            String uValue = uri.getQueryParameter("u");
            if (!TextUtils.isEmpty(uValue) && (!uValue.equals("0")) && !uValue.equals("1")) {
                throw new URISyntaxException(uValue, "Illegal value for u param");
            }
        }

        public boolean isSecured() {
            return mIsSecured;
        }

        public String getNonce() {
            return mNonce;
        }

        public Uri getUri() {
            return mUri;
        }

        public String getRawUri() {
            return mRawUri;
        }

        public URI toCallbackURI() throws URISyntaxException {
            return new URI(mIsSecured ? "https" : "http", null, mUri.getHost(), mUri.getPort(),
                    mUri.getPath(), null, null);
        }

        @Override
        public String toString() {
            String url = null;
            try {
                url = toCallbackURI().toString();
            } catch (URISyntaxException e) {

            }

            return "BitID{" +
                    "mRawUri='" + mRawUri + '\'' +
                    ", callbackUri=" + url +
                    '}';
        }
}
