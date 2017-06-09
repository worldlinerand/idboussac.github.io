package serviceProvider;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.security.KeyFactory;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.PublicKey;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.X509EncodedKeySpec;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import tools.ECDSA;
import tools.Tools;
import tools.BitcoinOpReturnTX;

/**
 * Servlet implementation class SpHandler
 */
@WebServlet("/SpHandler")
public class SpHandler extends HttpServlet {
	private static final long serialVersionUID = 1L;
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SpHandler() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		BufferedReader in = request.getReader();
		String s;
		s=in.readLine();
		System.out.println(s);
		
		
		JSONObject global = new JSONObject(s);
		JSONObject txIds = global.getJSONObject("txId");
		JSONObject data = global.getJSONObject("data");
		
		try {
			String signature = BitcoinOpReturnTX.getOP_Return(txIds.getString("claimsTxID"));
			String proofSign = BitcoinOpReturnTX.getOP_Return(txIds.getString("proofID"));
			String calculateHash = Tools.globalHash(data);
			
			PublicKey pubKeyIdp = Tools.getPubKeyFromAddr(data.getString("idpName"));

			//PublicKey pubKey = getPubKeyFromAddr(data.getString(""))
			
			byte[] enc_key = Tools.hexStringToByteArray(global.getString("pubkey"));
			System.out.println(global.getString("pubkey"));
			X509EncodedKeySpec formatted_public = new X509EncodedKeySpec(enc_key);
			
	        KeyFactory kf;
	        PublicKey pubkey = null;
			try {
				kf = KeyFactory.getInstance("EC");
				 pubkey = kf.generatePublic(formatted_public);
			} catch (NoSuchAlgorithmException | InvalidKeySpecException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			byte[] sign = Tools.hexStringToByteArray(signature);
			
			if(ECDSA.verify(Tools.hexStringToByteArray(proofSign.substring(2)), calculateHash, pubKeyIdp) && ECDSA.verify(sign, calculateHash, pubkey)){
				System.out.println("ok !");
				response.setStatus(HttpServletResponse.SC_OK);
				response.getWriter().write("BanqueBlesoise");
				response.getWriter().flush();
				response.getWriter().close();
				} else
					response.setStatus(HttpServletResponse.SC_NOT_ACCEPTABLE);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			response.setStatus(HttpServletResponse.SC_NOT_ACCEPTABLE);
		}
		
		
		
	}
		

}