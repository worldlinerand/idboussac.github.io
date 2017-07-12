package idBlockchain;

import java.io.BufferedReader;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

import ObjetRemove.User;
import tools.BDDManager;
import tools.BitcoinOpReturnTX;
import tools.BitcoinOpReturnTX.BitcoinNet;
import tools.BitcoinOpReturnTX.EmptyBitcoinAccountException;

@WebServlet("/IDBHandler")
public class IDBHandler extends HttpServlet {
	
	
	private static final long serialVersionUID = 1L;
	private  BitcoinOpReturnTX bot;
	
	
    public  IDBHandler() {
        super();
        bot = new BitcoinOpReturnTX(BitcoinNet.TEST);
        // TODO Auto-generated constructor stub
    }
	
    
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		BufferedReader in = request.getReader();
		String s;
		s=in.readLine();
		System.out.println(s);
		
		JSONObject customerData = new JSONObject(s);
		JSONObject email = customerData.getJSONObject("email");
		JSONObject password = customerData.getJSONObject("password");
		JSONObject walletAdress = customerData.getJSONObject("walletAdress");
		
		try {
			User user = BDDManager.connectionUser(email.toString(), password.toString());
			if(user != null)
			{
				
				boolean starvation = BDDManager.counterDown(user);
				
				if(starvation)
				{
					String strData =  "OK " + walletAdress.toString() + " " + " adresseDuIDBlockchain";
					byte[] byteData = strData.getBytes();
					String validateTx = bot.recordSign(null, byteData);
					response.setStatus(HttpServletResponse.SC_OK);
					response.getWriter().write(validateTx);
					response.getWriter().flush();
					response.getWriter().close();
				}
			}
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		/*
		validateTx = bot.recordSign(null, data);
		System.out.println("validateTx : "+ validateTx);
		*/ catch (EmptyBitcoinAccountException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
    
    
}
