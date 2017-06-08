package com.breadwallet.tools.sqlite;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.util.Log;

import com.breadwallet.presenter.entities.BRPeerEntity;
import com.breadwallet.presenter.entities.SpEntity;
import com.google.firebase.crash.FirebaseCrash;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by a660904 on 24/05/2017.
 * this class allows to interact with Service providers table in the database
 */

public class SpDataSource {

    private static final String TAG = SpDataSource.class.getName();

    private SQLiteDatabase database;
    private final BRSQLiteHelper dbHelper;
    private final String[] allColumns = {
            BRSQLiteHelper.SP_COLUMN_ID,
            BRSQLiteHelper.SP_NAME,
            BRSQLiteHelper.SP_URI,
    };

    public SpDataSource(Context context) {dbHelper = new BRSQLiteHelper(context);}

    /**
     * add a new service provider in the database
     * @param spEntity
     */
    public void putSp(SpEntity[] spEntity){
        database = dbHelper.getWritableDatabase();
        database.beginTransaction();
        try{
            for (SpEntity sp : spEntity){

                ContentValues values = new ContentValues();
                values.put(BRSQLiteHelper.SP_NAME, sp.getName());
                values.put(BRSQLiteHelper.SP_URI, sp.getUri());
                database.insert(BRSQLiteHelper.SP_TABLE_NAME, null, values);
            }
            database.setTransactionSuccessful();
        } catch(Exception e){
            FirebaseCrash.report(e);
            Log.e(TAG, "Error inserting into SQLite", e );
        }finally {
            database.endTransaction();
        }
    }

    /**
     * delete  a service provider from the table
     */
    public void deleteSp(SpEntity spEntity) {
        database = dbHelper.getWritableDatabase();
        long id = spEntity.getId();
        Log.e(TAG, "Sp deleted with id: " + id);
        database.delete(BRSQLiteHelper.SP_TABLE_NAME, BRSQLiteHelper.SP_COLUMN_ID
                + " = " + id, null);
    }

    /**
     * flush service providers table
     */
    public void deleteAllSp() {
        database = dbHelper.getWritableDatabase();
        database.delete(BRSQLiteHelper.SP_TABLE_NAME, BRSQLiteHelper.SP_COLUMN_ID + " <> -1", null);
    }


    /**
     * get all the service providers records
     * @return list of service providers
     */
    public List<SpEntity> getAllSp() {
        database = dbHelper.getReadableDatabase();
        List<SpEntity> sp = new ArrayList<>();

        Cursor cursor = database.query(BRSQLiteHelper.SP_TABLE_NAME,
                allColumns, null, null, null, null, null);

        cursor.moveToFirst();
        while (!cursor.isAfterLast()) {
            SpEntity spEntity = cursorToSp(cursor);
            sp.add(spEntity);
            cursor.moveToNext();
        }
        // make sure to close the cursor

        Log.e(TAG, "peers: " + sp.size());
        cursor.close();
        return sp;
    }
    /**
     * get an item from a row in the table
     * @param cursor
     *          a cursor positioned in a row of the table
     * @return service provider data
     */
    private SpEntity cursorToSp(Cursor cursor) {
        SpEntity spEntity = new SpEntity(cursor.getString(1), cursor.getString(2));
        spEntity.setId(cursor.getInt(0));
        return spEntity;
    }

}
