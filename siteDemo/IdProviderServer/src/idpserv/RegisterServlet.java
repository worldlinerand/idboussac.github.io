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

/**
 * Servlet implementation class RegisterServlet
 */
@WebServlet("/RegisterServlet")
public class RegisterServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public RegisterServlet() {
        super();

    }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			response.setContentType("text/html");
			PrintWriter out=response.getWriter();
			String gender = request.getParameter("gender");
			String fname = request.getParameter("fname");
			String lname = request.getParameter("lname");
			String nationality = request.getParameter("nationality");
			String dateOfBirth = request.getParameter("dateOfBirth");
			String placeOfBirth = request.getParameter("placeOfBirth");
			String postalAddress = request.getParameter("postalAddress");
			String credentials = request.getParameter("credentials");
			System.out.println(dateOfBirth);
			HttpSession session=request.getSession(false);
			
			if(session!=null){
				SQL sql = new SQL();
				sql.insertProfile(sql.getUserId((String)session.getAttribute("name")), gender, fname, lname, nationality, dateOfBirth, placeOfBirth, postalAddress, credentials, "FR9586532435626525542365221554");
				request.getRequestDispatcher("main.jsp").include(request, response);
			}else {
				request.getRequestDispatcher("link.jsp").include(request, response);
				out.println("authentication error");
			}
			out.close();
	}

}
