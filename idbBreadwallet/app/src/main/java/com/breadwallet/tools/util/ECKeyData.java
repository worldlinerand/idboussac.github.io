package com.breadwallet.tools.util;

import org.bitcoinj.core.ECKey;
import org.bitcoinj.params.MainNetParams;

import android.os.Parcel;
import android.os.Parcelable;

/**
 * BitID
 */

public class ECKeyData implements Parcelable {

    public static final String EXTRA_NAME = "ECKey";

    private byte[] privateKey;

    private byte[] publicKey;

    private String address;

    public static final Parcelable.Creator<ECKeyData> CREATOR
            = new Parcelable.Creator<ECKeyData>() {
        @Override
        public ECKeyData createFromParcel(Parcel parcel) {
            ECKeyData ecKey = new ECKeyData();
            ecKey.publicKey = new byte[parcel.readInt()];
            parcel.readByteArray(ecKey.publicKey);

            ecKey.privateKey = new byte[parcel.readInt()];
            parcel.readByteArray(ecKey.privateKey);

            ecKey.address = parcel.readString();

            return ecKey;
        }

        @Override
        public ECKeyData[] newArray(int size) {
            return new ECKeyData[size];
        }
    };

    public ECKeyData() {
    }

    public ECKeyData(byte[] publicKey, byte[] privateKey, String address) {
        this.publicKey = publicKey;
        this.privateKey = privateKey;
        this.address = address;
    }

    public ECKeyData(ECKey key) {
        this(key.getPubKey(), key.getPrivKeyBytes(), key.toAddress(MainNetParams.get()).toString());
    }

    public byte[] getPrivateKey() {
        return privateKey;
    }

    public byte[] getPublicKey() {
        return publicKey;
    }

    public String getAddress() {
        return address;
    }

    @Override
    public int describeContents() {
        return 0;
    }

    @Override
    public void writeToParcel(Parcel parcel, int i) {
        parcel.writeInt(publicKey.length);
        parcel.writeByteArray(publicKey);
        parcel.writeInt(privateKey.length);
        parcel.writeByteArray(privateKey);
        parcel.writeString(address);
    }

}
