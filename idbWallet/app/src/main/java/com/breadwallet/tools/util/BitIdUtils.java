package com.breadwallet.tools.util;

import android.os.Bundle;
import android.text.TextUtils;

import java.net.URISyntaxException;

/**
 * Created by A660904 on 16/03/2017.
 * BitID
 */

public class BitIdUtils {
    public static Bundle createBundleWithBitID(String bitID) {
        if (TextUtils.isEmpty(bitID)) {
            throw new IllegalArgumentException("bitID is null");
        }
        Bundle bundle = new Bundle();
        bundle.putString("bitID", bitID);
        return bundle;
    }

    public static BitID getID(String bitID) {
        if(bitID.startsWith("tidbit://")) {
            return getTidBit(bitID);
        } else {
            return getBitID(bitID);
        }
    }

    public static BitID getBitID(String bitID) {
        BitID bitId = null;
        try {
            bitId = BitID.parse(bitID);
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }

        return bitId;
    }

    public static BitID getTidBit(String tidbit) {
        TidBit tb = null;
        try {
            tb = TidBit.parse(tidbit);
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }

        return tb;
    }

    public static int getCodeFromMessage(String message) {
        //Try some common ones [these should be standardized]
        if (TextUtils.isEmpty(message)) {
            return ResultCode.UNKNOWN_ERROR;
        }

        if ("BitID URI is invalid or not legal".equals(message)) {
            return ResultCode.INVALID_BITID;
        } else if ("NONCE is illegal".equals(message)) {
            return ResultCode.INVALID_NONCE;
        } else if ("NONCE has expired".equals(message)) {
            return ResultCode.NONCE_EXPIRED;
        } else if ("Signature is incorrect".equals(message)) {
            return ResultCode.INVALID_SIGNATURE;
        }

        return ResultCode.UNKNOWN_ERROR;

    }
}
