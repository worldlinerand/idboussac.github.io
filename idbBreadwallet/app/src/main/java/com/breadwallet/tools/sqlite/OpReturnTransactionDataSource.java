package com.breadwallet.tools.sqlite;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.util.Log;

import com.breadwallet.presenter.entities.BROpReturnTransactionEntity;
import com.breadwallet.presenter.entities.BRTransactionEntity;
import com.google.firebase.crash.FirebaseCrash;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by A660904 on 10/05/2017.
 * this class allows to interact with transaction OP_RETURN table in the database
 */

public class OpReturnTransactionDataSource {
    private static final String TAG = OpReturnTransactionDataSource.class.getName();

    // Database fields
    private SQLiteDatabase database;
    private final BRSQLiteHelper dbHelper;
    private final String[] allColumns = {
            BRSQLiteHelper.TX_OP_RETURN_COLUMN_ID,
            BRSQLiteHelper.TX_OP_RETURN_BUFF,
            BRSQLiteHelper.TX_OP_RETURN_BLOCK_HEIGHT,
            BRSQLiteHelper.TX_OP_RETURN_TIME_STAMP,
            BRSQLiteHelper.TX_OP_RETURN_NAME,
            BRSQLiteHelper.TX_OP_RETURN_DATA,
    };


    public OpReturnTransactionDataSource(Context context) {
        dbHelper = new BRSQLiteHelper(context);
    }


    /**
     * add a new transaction in the database
     * @param opReturnTransactionEntity
     * @return
     */
    public BROpReturnTransactionEntity createOpReturnTransaction(BROpReturnTransactionEntity opReturnTransactionEntity) {
        database = dbHelper.getWritableDatabase();
        ContentValues values = new ContentValues();
        values.put(BRSQLiteHelper.TX_OP_RETURN_COLUMN_ID, opReturnTransactionEntity.getTxHash());
        values.put(BRSQLiteHelper.TX_OP_RETURN_BUFF, opReturnTransactionEntity.getBuff());
        values.put(BRSQLiteHelper.TX_OP_RETURN_BLOCK_HEIGHT, opReturnTransactionEntity.getBlockheight());
        values.put(BRSQLiteHelper.TX_OP_RETURN_TIME_STAMP, opReturnTransactionEntity.getTimestamp());
        values.put(BRSQLiteHelper.TX_OP_RETURN_NAME, opReturnTransactionEntity.getName());
        values.put(BRSQLiteHelper.TX_OP_RETURN_DATA, opReturnTransactionEntity.getData());


        database.beginTransaction();
        try {
            database.insert(BRSQLiteHelper.TX_OP_RETURN_TABLE_NAME, null, values);
            Cursor cursor = database.query(BRSQLiteHelper.TX_OP_RETURN_TABLE_NAME,
                    allColumns, null, null, null, null, null);
            cursor.moveToFirst();
            BROpReturnTransactionEntity opReturnTransactionEntity1 = cursorToOpReturnTransaction(cursor);
            cursor.close();
            database.setTransactionSuccessful();
            return opReturnTransactionEntity1;
        } catch (Exception ex) {
            FirebaseCrash.report(ex);
            Log.e(TAG, "Error inserting into SQLite", ex);
            //Error in between database transaction
        } finally {
            database.endTransaction();
        }
        return null;


    }

    /**
     * delete a transaction from the table
     */
    public void deleteOpReturnTransaction(BROpReturnTransactionEntity transaction) {
        database = dbHelper.getWritableDatabase();
        String strHash = transaction.getTxHash();
        Log.e(TAG, "transaction deleted with id: " + strHash);
        database.delete(BRSQLiteHelper.TX_OP_RETURN_TABLE_NAME, BRSQLiteHelper.TX_OP_RETURN_COLUMN_ID
                + " = \'" + strHash + "\'", null);
    }


    /**
     * delete all the transaction from table
     */
    public void deleteAllOpReturnTransactions() {
        database = dbHelper.getWritableDatabase();
        database.delete(BRSQLiteHelper.TX_OP_RETURN_TABLE_NAME, null, null);
    }

    /**
     * get all the transaction from the table
     * @return a list of transaction
     */
    public List<BROpReturnTransactionEntity> getAllOpReturnTransactions() {
        database = dbHelper.getReadableDatabase();
        List<BROpReturnTransactionEntity> transactions = new ArrayList<>();

        Cursor cursor = database.query(BRSQLiteHelper.TX_OP_RETURN_TABLE_NAME,
                allColumns, null, null, null, null, null);

        cursor.moveToFirst();
        while (!cursor.isAfterLast()) {
            BROpReturnTransactionEntity opReturnTransactionEntity = cursorToOpReturnTransaction(cursor);
            transactions.add(opReturnTransactionEntity);
            cursor.moveToNext();
        }
        // make sure to close the cursor

        Log.e(TAG, "transactions: " + transactions.size());
        cursor.close();
        return transactions;
    }

    /**
     * get an item from a row in the table
     * @param cursor
     *          a cursor positioned in a row of the table
     * @return transaction data
     */
    private BROpReturnTransactionEntity cursorToOpReturnTransaction(Cursor cursor) {
        return new BROpReturnTransactionEntity(cursor.getBlob(1), cursor.getInt(2), cursor.getLong(3), cursor.getString(0), cursor.getString(4), cursor.getString(5));
    }

    /**
     * update transaction data where id is hash, with a new blockHeight and timestamp
     * @param hash
     * @param blockHeight
     * @param timeStamp
     */
    public void updateOpReturnTxBlockHeight(String hash, int blockHeight, int timeStamp) {
        database = dbHelper.getWritableDatabase();
        Log.e(TAG, "transaction deleted with id: " + hash);
        String strFilter = "_id=\'" + hash + "\'";
        ContentValues args = new ContentValues();
        args.put(BRSQLiteHelper.TX_OP_RETURN_BLOCK_HEIGHT, blockHeight);
        args.put(BRSQLiteHelper.TX_OP_RETURN_TIME_STAMP, timeStamp);

        database.update(BRSQLiteHelper.TX_OP_RETURN_TABLE_NAME,args , strFilter, null);
    }

    /**
     * delete transaction from table where column id = hash
     * @param hash
     */
    public void deleteOpReturnTxByHash(String hash) {
        database = dbHelper.getWritableDatabase();
        Log.e(TAG, "transaction deleted with id: " + hash);
        database.delete(BRSQLiteHelper.TX_OP_RETURN_TABLE_NAME, BRSQLiteHelper.TX_OP_RETURN_COLUMN_ID
                + " = \'" + hash + "\'", null);
    }

    /**
     * get transaction where column id = hash
     * @param hash
     * @return return transaction data
     */

    public List<BROpReturnTransactionEntity> getOpReturnTxByHash(String hash){
        database = dbHelper.getReadableDatabase();
        List<BROpReturnTransactionEntity> opReturnTx = new ArrayList<>();
        Cursor cursor = database.query(BRSQLiteHelper.TX_OP_RETURN_TABLE_NAME,allColumns, BRSQLiteHelper.TX_OP_RETURN_COLUMN_ID +" = ?",new String[]{hash},null,null,null);
        cursor.moveToFirst();

        while (!cursor.isAfterLast()) {
            BROpReturnTransactionEntity opReturnEntity = cursorToOpReturnTransaction(cursor);
            opReturnTx.add(opReturnEntity);
            cursor.moveToNext();
        }
        cursor.close();
        return opReturnTx;
    }


}
