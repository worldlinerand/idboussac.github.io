package idBlockchainbis;

import java.io.IOException;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Beans.PublicKey;
import Beans.User;
import tools.BDDManager;
import tools.BLCTools;
import tools.BitcoinOpReturnTX;
import tools.Validation;
import tools.BitcoinOpReturnTX.BitcoinNet;

public class AddPubKeyHashbis extends HttpServlet {
    public static final String VUE          = "/WEB-INF/PublicKeyTx.jsp";
    public static final String CHAMP_PublicKey = "pubKeyHashTx";
    public static final String ATT_ERREURS  = "erreurs";
    public static final String ATT_RESULTAT = "resultat";

    public void doGet( HttpServletRequest request, HttpServletResponse response ) throws ServletException, IOException{
        /* Affichage de la page d'inscription */
        this.getServletContext().getRequestDispatcher( VUE ).forward( request, response );
    }
    
    public void doPost( HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException{
        /* Récupération des champs du formulaire. */
        String pubKeyHashTx = request.getParameter( CHAMP_PublicKey );
        String resultat="Le hash de la clé publique est invalide.";
        Map<String,String> erreurs = new HashMap<String, String>();
        String pubkeyHash="";
        
        System.out.println("pubKeyHashTx : " + pubKeyHashTx);
        try {
        	
			pubkeyHash =BitcoinOpReturnTX.getOP_Return(pubKeyHashTx);
			
		} catch (Exception e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
			
		}
        
        try {
			pubkeyHash =BLCTools.getOP_return(pubKeyHashTx);
		} catch (Exception e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
	    PublicKey pk = new PublicKey(pubkeyHash);
		try {
			
			//Persister la clé
			BDDManager.createPK(pk);
			
			resultat="Le hash de la clé publique est valide.";
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

        /* Stockage du résultat et des messages d'erreur dans l'objet request */
		request.setAttribute( ATT_ERREURS, erreurs );
		request.setAttribute( ATT_RESULTAT, resultat );

        /* Transmission de la paire d'objets request/response à notre JSP */
        this.getServletContext().getRequestDispatcher( VUE ).forward( request, response );
    }
}
