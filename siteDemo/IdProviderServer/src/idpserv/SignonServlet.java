package idpserv;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import jdbc.SQL;
import tools.Hash;

/**
 * Servlet implementation class SignonServlet
 */
@WebServlet("/SignonServlet")
public class SignonServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static final String blank = "";
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		PrintWriter out=response.getWriter();

		String name=request.getParameter("name");
		String password=request.getParameter("password");
		String confirmation = request.getParameter("confirmation_passwd");
		SQL sql = new SQL();
		if(!name.equals(blank) && !password.equals(blank) && password.equals(confirmation)){
			sql.insert(name, Hash.hashSHA256(password));
			HttpSession session=request.getSession();
			session.setAttribute("name",name);
			request.getRequestDispatcher("register.jsp").include(request, response);
		}
		else{
			request.getRequestDispatcher("link.jsp").include(request, response);
			out.print("Sorry, username or password blank!");
			request.getRequestDispatcher("signon.html").include(request, response);
		}
		out.close();
	}

}
