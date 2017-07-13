package idBlockchain;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
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
import tools.BitcoinOpReturnTX.EmptyBitcoinAccountException;
import tools.BitcoinOpReturnTX.BitcoinNet;


@WebServlet("/IDBHandler")
public class IDBHandler extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private  BitcoinOpReturnTX bot;
	
	
    public  IDBHandler() {
        super();
        bot = new BitcoinOpReturnTX(BitcoinNet.TEST);
    }
	public void doGet( HttpServletRequest request, HttpServletResponse response ) throws ServletException, IOException{
		response.setContentType("text/html");
		response.setCharacterEncoding( "UTF-8" );
		PrintWriter out = response.getWriter();
		out.println("<!DOCTYPE html>");
		out.println("<html>");
		out.println("<head>");
		out.println("<meta charset=\"utf-8\" />");
		out.println("<title>Test</title>");
		out.println("</head>");
		out.println("<body>");
		out.println("<p>Ceci est une page générée depuis une servlet.</p>");
		out.println("</body>");
		out.println("</html>");
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
		 catch (EmptyBitcoinAccountException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
