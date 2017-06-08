package com.breadwallet.tools.sqlite;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.util.Log;

/**
 * BreadWallet
 * <p/>
 * Created by Mihail Gutan <mihail@breadwallet.com> on 9/25/15.
 * Copyright (c) 2016 breadwallet LLC
 * <p/>
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * <p/>
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * <p/>
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

class BRSQLiteHelper extends SQLiteOpenHelper {
    private static final String TAG = BRSQLiteHelper.class.getName();

    private static final String DATABASE_NAME = "breadwallet.db";
    private static final int DATABASE_VERSION = 10;

    /**
     * MerkleBlock table
     */
    public static final String MB_TABLE_NAME = "merkleBlockTable";
    public static final String MB_BUFF = "merkleBlockBuff";
    public static final String MB_HEIGHT = "merkleBlockHeight";

    public static final String MB_COLUMN_ID = "_id";

    private static final String MB_DATABASE_CREATE = "create table " + MB_TABLE_NAME + "(" +
            MB_COLUMN_ID + " integer primary key autoincrement, " +
            MB_BUFF + " blob, " +
            MB_HEIGHT + " integer);";

    /**
     * Transaction table
     */

    public static final String TX_TABLE_NAME = "transactionTable";
    public static final String TX_COLUMN_ID = "_id";
    public static final String TX_BUFF = "transactionBuff";
    public static final String TX_BLOCK_HEIGHT = "transactionBlockHeight";
    public static final String TX_TIME_STAMP = "transactionTimeStamp";

    private static final String TX_DATABASE_CREATE = "create table " + TX_TABLE_NAME + "(" +
            TX_COLUMN_ID + " text, " +
            TX_BUFF + " blob, " +
            TX_BLOCK_HEIGHT + " integer, " +
            TX_TIME_STAMP + " integer );";

    /**
     * Transaction OP_RETURN table
     */

    public static final String TX_OP_RETURN_TABLE_NAME = "transactionOpReturnTable";
    public static final String TX_OP_RETURN_COLUMN_ID = "_id";
    public static final String TX_OP_RETURN_BUFF = "transactionOpReturnBuff";
    public static final String TX_OP_RETURN_BLOCK_HEIGHT = "transactionOpReturnBlockHeight";
    public static final String TX_OP_RETURN_TIME_STAMP = "transactionOpReturnTimeStamp";
    public static final String TX_OP_RETURN_DATA = "transactionOpReturnData";
    public static final String TX_OP_RETURN_NAME = "transactionOpReturnName";


    private static final String TX_OP_RETURN_DATABASE_CREATE = "create table " + TX_OP_RETURN_TABLE_NAME + "(" +
            TX_OP_RETURN_COLUMN_ID + " text, " +
            TX_OP_RETURN_BUFF + " blob, " +
            TX_OP_RETURN_BLOCK_HEIGHT + " integer, " +
            TX_OP_RETURN_TIME_STAMP + " integer, " +
            TX_OP_RETURN_NAME + " text, " +
            TX_OP_RETURN_DATA + " text );";

    /**
     * Peer table
     */

    public static final String PEER_TABLE_NAME = "peerTable";
    public static final String PEER_COLUMN_ID = "_id";
    public static final String PEER_ADDRESS = "peerAddress";
    public static final String PEER_PORT = "peerPort";
    public static final String PEER_TIMESTAMP = "peerTimestamp";

    private static final String PEER_DATABASE_CREATE = "create table " + PEER_TABLE_NAME + "(" +
            PEER_COLUMN_ID + " integer primary key autoincrement, " +
            PEER_ADDRESS + " blob," +
            PEER_PORT + " blob," +
            PEER_TIMESTAMP + " blob );";

    /**
     * Guarantor Table
     */

    public static final String GUARANTOR_TABLE_NAME = "guarantorTable";
    public static final String GUARANTOR_COLUMN_ID = "_id";
    public static final String GUARANTOR_NAME = "guarantorName";
    public static final String GUARANTOR_VALIDATION_TX = "guarantorValidationTx";

    private static final String GUARANTOR_DATABASE_CREATE = "create table " + GUARANTOR_TABLE_NAME + "(" +
            GUARANTOR_COLUMN_ID + " text, " +
            GUARANTOR_NAME + " text," +
            GUARANTOR_VALIDATION_TX + " text );";


    /**
     * Service Providers Table
     */

    public static final String SP_TABLE_NAME = "SpTable";
    public static final String SP_COLUMN_ID = "_id";
    public static final String SP_NAME = "SpName";
    public static final String SP_URI = "SpURI";

    private static final String SP_DATABASE_CREATE = "create table " + SP_TABLE_NAME + "(" +
            SP_COLUMN_ID + " integer primary key autoincrement, " +
            SP_NAME + " text," +
            SP_URI + " text );";



    public BRSQLiteHelper(Context context) {
        super(context, DATABASE_NAME, null, DATABASE_VERSION);
    }

    @Override
    public void onCreate(SQLiteDatabase database) {
        database.execSQL(MB_DATABASE_CREATE);
        database.execSQL(TX_DATABASE_CREATE);
        database.execSQL(TX_OP_RETURN_DATABASE_CREATE);
        database.execSQL(PEER_DATABASE_CREATE);
        database.execSQL(GUARANTOR_DATABASE_CREATE);
        database.execSQL(SP_DATABASE_CREATE);
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
        Log.e(TAG, "Upgrading database from version " + oldVersion + " to "
                + newVersion + ", which will destroy all old data");
        db.execSQL("DROP TABLE IF EXISTS " + MB_TABLE_NAME);
        db.execSQL("DROP TABLE IF EXISTS " + TX_TABLE_NAME);
        db.execSQL("DROP TABLE IF EXISTS " + PEER_TABLE_NAME);
        db.execSQL("DROP TABLE IF EXISTS " + TX_OP_RETURN_TABLE_NAME);
        db.execSQL("DROP TABLE IF EXISTS " + GUARANTOR_TABLE_NAME);
        db.execSQL("DROP TABLE IF EXISTS " + SP_TABLE_NAME);
        //recreate the dbs
        onCreate(db);
    }
}
