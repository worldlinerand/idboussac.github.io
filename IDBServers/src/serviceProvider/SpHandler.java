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

import tools.BitcoinOpReturnTX;
import tools.ECDSA;
import tools.Tools;

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
		System.out.println("========================== DEBUT Methode doGet SpHandler ====================================");
		System.out.println("request : "+ request );
		System.out.println("response : "+ response );
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
		System.out.println("========================== FIN Methode doGet SpHandler ====================================");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		System.out.println("========================== DEBUT Methode doPost SpHandler ====================================");
		System.out.println("request : "+ request );
		System.out.println("response : "+ response );
		BufferedReader in = request.getReader();
		String s;
		s=in.readLine();
		System.out.println(s);
		
		
		JSONObject global = new JSONObject(s);
		//A modifier, recevoir un ensemble de txIDs puis les découper, exemple avec un espace entre chaque txId
		JSONObject txIds = global.getJSONObject("txId");
		JSONObject data = global.getJSONObject("data");
		
		try {
			//Récupération des informations
			String signature = BitcoinOpReturnTX.getOP_Return(txIds.getString("claimsTxID"));
			String proofSign = BitcoinOpReturnTX.getOP_Return(txIds.getString("proofID"));
			System.out.println("VALEUR DE REPUTATION  :   " + proofSign.substring(1, 3));
			String calculateHash = Tools.globalHash(data, true);
			
			PublicKey pubKeyIdp = Tools.getPubKeyFromAddr(data.getString("idpName"));
			
			byte[] enc_key = Tools.hexStringToByteArray(global.getString("pubkey"));
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
			
			if(ECDSA.verify(Tools.hexStringToByteArray(proofSign.substring(4)), calculateHash, pubKeyIdp) && ECDSA.verify(sign, calculateHash, pubkey)){
				System.out.println("ok !");
				response.setStatus(HttpServletResponse.SC_OK);
				response.getWriter().write("BanqueBlesoise");
				System.out.println("========================== FIN  Methode doPost SpHandler ====================================");
				
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
