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
import java.util.LinkedHashMap;
import java.util.Map;

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

		try {
			PublicKey pubkey = ECDSA.getKeyPairFromKeyStore().getPublic();//La clé publique issu de ecKeyStore.jks
			byte [] encodedKey = pubkey.getEncoded();
			StringBuilder key_builder = new StringBuilder();

			for(byte b : encodedKey){
			    key_builder.append(String.format("%02x", b));
			}
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
		BufferedReader in = request.getReader();
		String s;
		s=in.readLine();
		
		JSONObject customerData = new JSONObject(s);
		JSONObject hashData = customerData.getJSONObject("data");
		
		String calculatedHash = Tools.globalHash(hashData,false);
		String customerPublicKey = customerData.getString("pubkey");
		//System.out.println(calculatedHash);
		String signature = null;
		//System.out.println(customerData.getString("txId"));
		
		try {
			//Customer'signature 
			signature = BitcoinOpReturnTX.getOP_Return(customerData.getString(("txId")));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		byte[] sign = Tools.hexStringToByteArray(signature);
		byte[] enc_key = Tools.hexStringToByteArray(customerPublicKey);
		
		try {
			System.out.println("hash clé publique du client : " + Tools.getPKHash(customerPublicKey));
			
		} catch (NoSuchAlgorithmException e3) {
			// TODO Auto-generated catch block
			e3.printStackTrace();
		}		
		
		
		try {
			
			if(!Tools.isvalidatePublicKey(customerPublicKey))
			{
				response.setStatus(HttpServletResponse.SC_NOT_ACCEPTABLE);
				return;
			}
			System.out.println("customerPublicKey a été validée");
		} catch (Exception e2) {
			// TODO Auto-generated catch block
			e2.printStackTrace();
		} 
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
		// is calculatedHash hashs of received claims ?
		if(ECDSA.verify(sign, calculatedHash,pubkey)){
			System.out.println("hash ok");
			ECDSA ecdsa = new ECDSA();

			String validateTx = null;
			try {
				System.out.println("hash calculated : "+calculatedHash);
				byte[] signProof = ecdsa.signature(calculatedHash);
				byte[] data = new byte[signProof.length+1];// data saved on blockchain
				
				//value of reputation
				data[0] = (byte) Reputation.GetReputation();
				System.out.println("Valeur de la réputation : " + Reputation.GetReputation());
				for(int i =0;i<signProof.length; i++)
				{
					data[1+i]=signProof[i];
				}
				
				validateTx = bot.recordSign(null, data);
				
				System.out.println("Validate tx : "+ validateTx);
				
				
				// doPost AddReputationbis
				boolean reputed = Tools.doPostReputation("http://localhost:8085/IDBServers/IDPHandler",
						validateTx,
						Tools.getPKHash(customerPublicKey ));
				
				
				if(!reputed){
					System.out.println("La réputation n'a pas été enregistré");
					response.setStatus(HttpServletResponse.SC_NOT_ACCEPTABLE);
				}
				
			response.setStatus(HttpServletResponse.SC_OK);
			response.getWriter().write(validateTx);
			response.getWriter().flush();
			response.getWriter().close();
			} catch (EmptyBitcoinAccountException e) {
				response.setStatus(HttpServletResponse.SC_NOT_ACCEPTABLE);
				e.printStackTrace();
			} catch (NoSuchAlgorithmException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} 	
		}
		else 
			response.setStatus(HttpServletResponse.SC_NOT_ACCEPTABLE);
	}

}
