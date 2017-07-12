package idpserv;


import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import jdbc.SQL;
public class ProfileServlet extends HttpServlet {
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		PrintWriter out=response.getWriter();
		
		HttpSession session=request.getSession(false);
		if(session!=null){
			
		SQL sql = new SQL();
		HashMap<String, String> customer = sql.selectCustomers(sql.getUserId((String)session.getAttribute("name")));
		String name=(String)session.getAttribute("name");
		request.setAttribute( "gender", customer.get("gender"));
		request.setAttribute( "fname", customer.get("fname") );
		request.setAttribute( "lname", customer.get("lname") );
		request.setAttribute( "nationality", customer.get("nationality") );
		request.setAttribute( "dateOfBirth", customer.get("dateOfBirth") );
		request.setAttribute( "placeOfBirth", customer.get("placeOfBirth") );
		request.setAttribute( "postalAddress", customer.get("postalAddress") );
		request.setAttribute( "credentials", customer.get("credentials") );
		request.setAttribute( "iban", customer.get("iban") );
		request.getRequestDispatcher("profile.jsp").include(request, response);
		}
		else{
			out.print("Please login first");
			request.getRequestDispatcher("login.html").include(request, response);
		}
		out.close();
	}
}
