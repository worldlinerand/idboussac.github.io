package idBlockchainbis;

import java.io.IOException;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Beans.User;
import DAO.DAOUser;
import tools.BDDManager;
import tools.Validation;

public class AddReputation extends HttpServlet {
    public static final String VUE          = "/WEB-INF/AddReputation.jsp";
    public static final String CHAMP_NAME  = "name";
    public static final String CHAMP_TXID   = "txID";
    public static final String CHAMP_PKCHASH   = "cPKHash";// customer's Public key hash
    public static final String ATT_ERREURS  = "erreurs";
    public static final String ATT_RESULTAT = "resultat";
	
    /**
     * @see doGet( HttpServletRequest request, HttpServletResponse response )
     */
    public void doGet( HttpServletRequest request, HttpServletResponse response ) throws ServletException, IOException{
        /* Affichage de la page d'inscription */
        this.getServletContext().getRequestDispatcher( VUE ).forward( request, response );
    }
    /**
     * @see doPost( HttpServletRequest request, HttpServletResponse response)
     */
    public void doPost( HttpServletRequest request, HttpServletResponse response)
    
    throws ServletException, IOException{
        /* Récupération des champs du formulaire. */
        String name = request.getParameter( CHAMP_NAME );
        String txID = request.getParameter( CHAMP_TXID );
        String cPKHash = request.getParameter( CHAMP_PKCHASH );
        String resultat;
        Map<String,String> erreurs = new HashMap<String, String>();
        
        
        
        /* Validation du champ nom. */
        try {
            Validation.validationNom( name );
        } catch ( Exception e ) {
            erreurs.put( CHAMP_NAME, e.getMessage() );
        }
        
        /* Validation du champ txID. */
        try {
            Validation.validationTxID( txID );
        } catch ( Exception e ) {
            erreurs.put( CHAMP_TXID, e.getMessage() );
        }

        /* Validation du champ cPKHash. */
        try {
            Validation.validationcPKHash( cPKHash );
        } catch ( Exception e ) {
            erreurs.put( CHAMP_PKCHASH, e.getMessage() );
        }
        

        /* Initialisation du résultat global de la validation. */
        if ( erreurs.isEmpty() ) {
            resultat = "Succès de l'ajout de la réputation.";
            
            	try {
					BDDManager.createReputationTX( name,  txID,  cPKHash);
				} catch (ClassNotFoundException | SQLException e) {
					// TODO Auto-generated catch block
					resultat = "Échec de l'ajout de la réputation.";
					e.printStackTrace();
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}

        } else {
            resultat = "Échec de l'ajout de la réputation.";
        }

        /* Stockage du résultat et des messages d'erreur dans l'objet request */
        request.setAttribute( ATT_ERREURS, erreurs );
        request.setAttribute( ATT_RESULTAT, resultat );

        /* Transmission de la paire d'objets request/response à notre JSP */
        this.getServletContext().getRequestDispatcher( VUE ).forward( request, response );
    }
    

}
