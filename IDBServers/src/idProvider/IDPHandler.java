package idProvider;

import java.io.BufferedReader; 
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.URL;
import java.security.KeyFactory;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.PublicKey;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.X509EncodedKeySpec;
import java.util.Arrays;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import reputation.Reputation;
import tools.BitcoinOpReturnTX;
import tools.Tools;
import tools.BitcoinOpReturnTX.BitcoinNet;
import tools.BitcoinOpReturnTX.EmptyBitcoinAccountException;
import tools.ECDSA;

/**
 * Servlet implementation class IDPHandler
 */
@WebServlet("/IDPHandler")
public class IDPHandler extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private  BitcoinOpReturnTX bot;
    /**
     * @see HttpServlet#HttpServlet()
     */
    public IDPHandler() {
        super();
        bot = new BitcoinOpReturnTX(BitcoinNet.TEST);
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		System.out.println("========================== DEBUT Methode doGet IDPHandler ====================================");
		System.out.println("request : "+ request );
		System.out.println("response : "+ response );
		try {
			PublicKey pubkey = ECDSA.getKeyPairFromKeyStore().getPublic();//La cl� publique issu de ecKeyStore.jks
			byte [] encodedKey = pubkey.getEncoded();
			StringBuilder key_builder = new StringBuilder();

			for(byte b : encodedKey){
			    key_builder.append(String.format("%02x", b));
			}
			
			System.out.println("========================== FIN Methode doGet IDPHandler ====================================");
			response.getWriter().append(key_builder.toString());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//doGet(request, response);
		System.out.println("========================== DEBUT Methode doPost IDPHandler ====================================");
		System.out.println("request : "+ request );
		System.out.println("response : "+ response );
		BufferedReader in = request.getReader();
		String s;
		s=in.readLine();
		System.out.println(s);
		
		
		JSONObject customerData = new JSONObject(s);
		JSONObject hashData = customerData.getJSONObject("data");
		
		String calculatedHash = Tools.globalHash(hashData,false);
		System.out.println(calculatedHash);
		String signature = null;
		System.out.println(customerData.getString("txId"));
		
		try {
			signature = BitcoinOpReturnTX.getOP_Return(customerData.getString(("txId")));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		byte[] sign = Tools.hexStringToByteArray(signature);
		byte[] enc_key = Tools.hexStringToByteArray(customerData.getString("pubkey"));
		
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
		
		if(ECDSA.verify(sign, calculatedHash,pubkey)){
			System.out.println("hash ok");
			ECDSA ecdsa = new ECDSA();
			
			String validateTx = null;
		
			try {
				
				System.out.println(calculatedHash);
				byte[] signProof = ecdsa.signature(calculatedHash);
				byte[] data = new byte[signProof.length+1];// data saved on blockchain
				
				
				data[0] = (byte) Reputation.GetReputation();//value of reputation
				for(int i =0;i<signProof.length; i++)
				{
					data[1+i]=signProof[i];
				}
				System.out.println("data : "+ Tools.bytesToHex(data));
				validateTx = bot.recordSign(null, data);
				System.out.println("validateTx : "+ validateTx);
				
			response.setStatus(HttpServletResponse.SC_OK);
			response.getWriter().write(validateTx);
			response.getWriter().flush();
			response.getWriter().close();
			} catch (EmptyBitcoinAccountException e) {
				response.setStatus(HttpServletResponse.SC_NOT_ACCEPTABLE);
				e.printStackTrace();
			} 	
		}
		else 
			response.setStatus(HttpServletResponse.SC_NOT_ACCEPTABLE);
		System.out.println("========================== FIN  Methode doPost IDPHandler ====================================");
		
	
	}
	
		
		

}
