package com.breadwallet.tools.threads;

import com.breadwallet.tools.util.PostClaims;

/**
 * Created by a660904 on 04/07/2017.
 */

public class ThreadPostClaims extends Thread {

    private String uri;
    private String nonce;

    public void run() {
        PostClaims.httpGetter(uri, nonce);
    }

    public void setUri(String _uri){ uri = _uri; }
    public void setNonce(String _nonce){ nonce = _nonce; }
}
