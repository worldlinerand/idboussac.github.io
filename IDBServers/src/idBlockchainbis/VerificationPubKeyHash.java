package idBlockchainbis;

import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Beans.PublicKey;
import Beans.ReputationTX;
import tools.BDDManager;
import tools.BLCTools;


public class VerificationPubKeyHash extends HttpServlet {
	public static final String VUE          = "/WEB-INF/VerificationPubKeyHash.jsp";
	public static final String CHAMP_PubKeyHash = "hash";
	public static final String CHAMP_Message = "message";
	public static final String CHAMP_Reputations = "reputations";
    
	/**
	 * @see doGet( HttpServletRequest request, HttpServletResponse response )
	 */
	public void doGet( HttpServletRequest request, HttpServletResponse response ) throws ServletException, IOException{
		//Redirection vers la page JSP
		this.getServletContext().getRequestDispatcher( VUE ).forward( request, response );
	}
	
	/**
	 * @see doPost( HttpServletRequest request, HttpServletResponse response )
	 */
	public void doPost( HttpServletRequest request, HttpServletResponse response ) throws ServletException, IOException{
		
		String message = "";
		String hash =  (String) request.getParameter(CHAMP_PubKeyHash);
		List allReputation = null;
		String[] reputationParser = null;
		int id=0;
		System.out.println("hash : " +hash);
		PublicKey pk = null;
		
		if(hash==null){
			message="Entrez le hash d'une clef publique";
		} else{
			
				try {
					pk = BLCTools.isValidatedHash(hash);
					System.out.println("id : egale ==== "+pk.getID());
					System.out.println("tx : egale ==== "+pk.getTransaction());
				} catch (Exception e1) {
					// TODO Auto-generated catch block
					e1.printStackTrace();
				}
				
				if(pk==null )
				{	
					message = "Non\r\n";
				} else
				{
					message = "oui\r\n";
					try {
						
						allReputation = BDDManager.findAllReputationTXOf(pk);
						for(int i =0; i<allReputation.size();i++)
						{
							ReputationTX rt = ((ReputationTX) allReputation.get(i));
							System.out.println("la "+i+" eme transaction : "+rt.getTx());
						}
						
						reputationParser=BDDManager.reputationParser(allReputation);
					} catch (ClassNotFoundException | SQLException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}		
				}
		}
		System.out.println("message : " + message);
		request.setAttribute(CHAMP_Message, message);
		request.setAttribute(CHAMP_Reputations, reputationParser);
		//Redirection vers la page JSP
		this.getServletContext().getRequestDispatcher( VUE ).forward( request, response );
	}
}