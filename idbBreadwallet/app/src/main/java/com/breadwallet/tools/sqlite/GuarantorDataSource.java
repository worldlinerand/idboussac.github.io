package com.breadwallet.tools.sqlite;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.util.Log;

import com.breadwallet.presenter.entities.BRGuarantorEntity;
import com.breadwallet.presenter.entities.BROpReturnTransactionEntity;
import com.google.firebase.crash.FirebaseCrash;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by a660904 on 11/05/2017.
 * this class allows to interact with guarantors table in the database
 */

public class GuarantorDataSource {

    private static final String TAG = GuarantorDataSource.class.getName();

    // Database fields
    private SQLiteDatabase database;
    private final BRSQLiteHelper dbHelper;
    private final String[] allColumns = {
            BRSQLiteHelper.GUARANTOR_COLUMN_ID,
            BRSQLiteHelper.GUARANTOR_NAME,
            BRSQLiteHelper.GUARANTOR_VALIDATION_TX,

    };


    public GuarantorDataSource(Context context) {
        dbHelper = new BRSQLiteHelper(context);
    }


    /**
     * add a new guarantor guarantorEntity in the database
     * @param guarantorEntity
     * @return
     */
    public BRGuarantorEntity createGuarantor(BRGuarantorEntity guarantorEntity) {
        database = dbHelper.getWritableDatabase();
        ContentValues values = new ContentValues();
        values.put(BRSQLiteHelper.GUARANTOR_COLUMN_ID, guarantorEntity.getTxHash());
        values.put(BRSQLiteHelper.GUARANTOR_NAME, guarantorEntity.getName());
        values.put(BRSQLiteHelper.GUARANTOR_VALIDATION_TX, guarantorEntity.getValidationTx());


        database.beginTransaction();
        try {
            database.insert(BRSQLiteHelper.GUARANTOR_TABLE_NAME, null, values);
            Cursor cursor = database.query(BRSQLiteHelper.GUARANTOR_TABLE_NAME,
                    allColumns, null, null, null, null, null);
            cursor.moveToFirst();
            BRGuarantorEntity guarantorEntity1 = cursorToGuarantor(cursor);
            cursor.close();
            database.setTransactionSuccessful();
            return guarantorEntity1;
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
     * delete the guarantor guarantor from the database
     * @param guarantor
     */
    public void deleteGuarantor(BRGuarantorEntity guarantor) {
        database = dbHelper.getWritableDatabase();
        String strHash = guarantor.getTxHash();
        Log.e(TAG, "transaction deleted with id: " + strHash);
        database.delete(BRSQLiteHelper.GUARANTOR_TABLE_NAME, BRSQLiteHelper.GUARANTOR_COLUMN_ID
                + " = \'" + strHash + "\'", null);
    }


    /**
     * flush guarantors table
     */
    public void deleteAllGuarantor() {
        database = dbHelper.getWritableDatabase();
        database.delete(BRSQLiteHelper.GUARANTOR_TABLE_NAME, null, null);
    }


    /**
     * get all the guarantors from guarantor table
     * @return list of all the guarantors
     */
    public List<BRGuarantorEntity> getAllGuarantor() {
        database = dbHelper.getReadableDatabase();
        List<BRGuarantorEntity> guarantors = new ArrayList<>();

        Cursor cursor = database.query(BRSQLiteHelper.GUARANTOR_TABLE_NAME,
                allColumns, null, null, null, null, null);

        cursor.moveToFirst();
        while (!cursor.isAfterLast()) {
            BRGuarantorEntity guarantorEntity = cursorToGuarantor(cursor);
            guarantors.add(guarantorEntity);
            cursor.moveToNext();
        }
        // make sure to close the cursor

        Log.e(TAG, "transactions: " + guarantors.size());
        cursor.close();
        return guarantors;
    }

    /**
     *
     * @param cursor
     * @return
     */
    private BRGuarantorEntity cursorToGuarantor(Cursor cursor) {
        return new BRGuarantorEntity(cursor.getString(0), cursor.getString(1), cursor.getString(2));
    }

    /**
     * delete a guarantor where the id  is hash
     * @param hash
     *      guarantor transaction id
     */

    public void deleteGuarantorByHash(String hash) {
        database = dbHelper.getWritableDatabase();
        Log.e(TAG, "transaction deleted with id: " + hash);
        database.delete(BRSQLiteHelper.TX_OP_RETURN_TABLE_NAME, BRSQLiteHelper.TX_OP_RETURN_COLUMN_ID
                + " = \'" + hash + "\'", null);
    }


    /**
     * find a guarantor in the guarantors table with a  transaction hash
     * @param hash
     * @return
     */
    public List<BRGuarantorEntity> getGuarantorByHash(String hash){
        database = dbHelper.getReadableDatabase();
        List<BRGuarantorEntity> guarantors = new ArrayList<>();
        Cursor cursor = database.query(BRSQLiteHelper.GUARANTOR_TABLE_NAME,allColumns, BRSQLiteHelper.GUARANTOR_COLUMN_ID +" = ?",new String[]{hash},null,null,null);
        cursor.moveToFirst();

        while (!cursor.isAfterLast()) {
            BRGuarantorEntity guarantorEntity = cursorToGuarantor(cursor);
            guarantors.add(guarantorEntity);
            cursor.moveToNext();
        }
        cursor.close();
        return guarantors;

    }
}
