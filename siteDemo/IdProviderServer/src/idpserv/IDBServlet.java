package idpserv;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.util.Base64;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.zxing.qrcode.QRCodeWriter;
import com.google.zxing.qrcode.encoder.QRCode;

import jdbc.SQL;
import tools.Hash;
import tools.QrGen;

/**
 * Servlet implementation class IDBServlet
 */
@WebServlet("/IDBServlet")
public class IDBServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		PrintWriter out=response.getWriter();
		
		HttpSession session=request.getSession(false);
		if(session!=null){
			SQL sql = new SQL();
			HashMap<String, String> customer = sql.selectCustomers(sql.getUserId((String)session.getAttribute("name")));
			String idbURI = "idb://192.168.43.23:8081/IDBServers/IDPHandler";
			String idbData = "#Gender!"+customer.get("gender")+"#FirstName!"+customer.get("fname")+"#LastName!"+customer.get("lname")+"#Nationality!"+customer.get("nationality")+"#dateOfBirth!"+customer.get("dateOfBirth")+"#PlaceOfBirth!"+customer.get("placeOfBirth")+"#PostalAddress!"+customer.get("postalAddress")+"#Credentials!"+customer.get("credentials")+"#IBAN!"+customer.get("iban");
			String idbEncoded = URLEncoder.encode(idbData,"UTF-8");
			idbURI += idbEncoded;
			System.out.println(idbURI);
			System.out.println(URLDecoder.decode(idbURI, "UTF-8"));
			
			
			
			
			ByteArrayOutputStream qrout = QrGen.qrGen(idbURI, 400);
			//response.setContentType("image/png");
			//response.setContentLength(qrout.size());
			
			//OutputStream outStream = response.getOutputStream();

			//outStream.write(qrout.toByteArray());
			String qrcode = Base64.getEncoder().encodeToString(qrout.toByteArray());
			//outStream.flush();
			//outStream.close();
			
			request.setAttribute("uri", idbURI);
			request.setAttribute("qrcode", qrcode);
			request.getRequestDispatcher("qrcode.jsp").include(request, response);
		}
		else{
			
			out.print("Please login first");
			request.getRequestDispatcher("login.html").include(request, response);
		}
		out.close();
	}


}
