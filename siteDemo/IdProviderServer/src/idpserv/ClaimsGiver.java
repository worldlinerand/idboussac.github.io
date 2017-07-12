package idpserv;

import java.io.BufferedReader;
import java.io.IOException;
import java.net.URLEncoder;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import jdbc.SQL;

/**
 * Servlet implementation class ClaimsGiver
 */
@WebServlet("/ClaimsGiver")
public class ClaimsGiver extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		BufferedReader in = request.getReader();
		String s;
		s=in.readLine();
		
		SQL sql = new SQL();
		HashMap<String, String> customer = sql.selectCustomers(LoginServlet.userId);
		
		String idbURI = "idb://192.168.43.23:8081/IDBServers/IDPHandler";
		String idbData = "#Gender!"+customer.get("gender")+"#FirstName!"+customer.get("fname")+"#LastName!"+customer.get("lname")+"#Nationality!"+customer.get("nationality")+"#dateOfBirth!"+customer.get("dateOfBirth")+"#PlaceOfBirth!"+customer.get("placeOfBirth")+"#PostalAddress!"+customer.get("postalAddress")+"#IBAN!"+customer.get("iban");
		String idbEncoded = URLEncoder.encode(idbData,"UTF-8");
		idbURI += idbEncoded;
		
		if(LoginServlet.nonce.nonceCheck(s)){
			response.setStatus(HttpServletResponse.SC_OK);
			response.getWriter().write(idbURI);
			response.getWriter().flush();
			response.getWriter().close();
		}
		else {
			response.setStatus(HttpServletResponse.SC_FORBIDDEN);
			response.getWriter().write(idbURI);
			response.getWriter().flush();
			response.getWriter().close();
		}
	}

}
