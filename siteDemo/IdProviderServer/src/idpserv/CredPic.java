package idpserv;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.HashMap;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import jdbc.SQL;
import tools.CredsData;

/**
 * Servlet implementation class CredPic
 */
@WebServlet("/CredPic")
public class CredPic extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static final int BUFFER_SIZE = 8096;
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			HttpSession session = request.getSession();
			String userName = (String) session.getAttribute("name");
			
			SQL sql = new SQL();
			
			int userID = sql.getUserId(userName);
			System.out.println(userID);
			HashMap userDate = sql.selectCustomers(userID);
			System.out.println(userDate.get("credentials"));
			CredsData cred = sql.getUserCreds(new Integer(userDate.get("credentials").toString()));
			if(cred != null){
			String fileName = cred.getImg_name();
			InputStream inputStream = cred.getImg_file();
			int fileLength = inputStream.available();
			
			ServletContext context = getServletContext();
			 
            // sets MIME type for the file download
            String mimeType = context.getMimeType(fileName);
            if (mimeType == null) {        
                mimeType = "application/octet-stream";
            }        
            
            response.setContentType(mimeType);
            response.setContentLength(fileLength);
            String headerKey = "Content-Disposition";
            String headerValue = String.format("attachment; filename=\"%s\"", fileName);
            response.setHeader(headerKey, headerValue);
            
            OutputStream outStream = response.getOutputStream();
            
            byte[] buffer = new byte[BUFFER_SIZE];
            int bytesRead = -1;
             
            while ((bytesRead = inputStream.read(buffer)) != -1) {
                outStream.write(buffer, 0, bytesRead);
            }
             
            inputStream.close();
            outStream.close();              
			} else {
				response.getWriter().print("filenotfound");
			}
	}

}
