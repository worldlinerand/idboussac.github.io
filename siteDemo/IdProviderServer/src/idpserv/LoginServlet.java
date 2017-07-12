package idpserv;


import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.net.URLEncoder;
import java.util.Base64;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import jdbc.SQL;
import tools.CredsData;
import tools.Hash;
import tools.Nonce;
import tools.QrGen;
public class LoginServlet extends HttpServlet {
	
	public static Nonce nonce;
	public static int userId;
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		PrintWriter out=response.getWriter();
		
		
		String name=request.getParameter("textfield");
		String password=request.getParameter("paswordfield");
		SQL sql = new SQL();
		if(Hash.hashSHA256(password).equals(sql.select(name))){
		
		HttpSession session=request.getSession();
		userId = sql.getUserId(name);
		HashMap<String, String> customer = sql.selectCustomers(userId);
		CredsData cred = sql.getUserCreds(new Integer(customer.get("credentials").toString()));
		
		
		session.setAttribute("name",name);
		request.setAttribute("username", customer.get("fname")+ " " + customer.get("lname"));
		
		nonce = new Nonce(Nonce.nonceGen());
		
		String idbURI = "idb://192.168.43.23:7080/IdProviderServer/ClaimsServlet";
		String idbData = "#" + nonce.getNonce();
		String idbEncoded = URLEncoder.encode(idbData,"UTF-8");
		idbURI += idbEncoded;
		
		ByteArrayOutputStream qrout = QrGen.qrGen(idbURI, 400);
		String qrcode = Base64.getEncoder().encodeToString(qrout.toByteArray());
		
		request.setAttribute("uri", idbURI);
		request.setAttribute("qrcode", qrcode);
		request.setAttribute("gender", customer.get("gender"));
		request.setAttribute("fname", customer.get("fname"));
		request.setAttribute("lname", customer.get("lname"));
		request.setAttribute("nationality", customer.get("nationality"));
		request.setAttribute("dateOfBrith", customer.get("dateOfBirth"));
		request.setAttribute("placeOfBirth", customer.get("placeOfBirth"));
		request.setAttribute("postalAddress", customer.get("postalAddress"));
		request.setAttribute("credentials", cred.getImg_name());
		request.getRequestDispatcher("index-client.jsp").include(request, response);
		}
		else{
		//	request.getRequestDispatcher("link.jsp").include(request, response);
			out.print("Sorry, username or password error!");
		//	request.getRequestDispatcher("login.html").include(request, response);
		}
		out.close();
	}

}
