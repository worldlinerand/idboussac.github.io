package idBlockchain;

import java.io.IOException;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Beans.User;
import tools.BDDManager;
import tools.Validation;

public class Inscription extends HttpServlet {
    public static final String VUE          = "/WEB-INF/inscription.jsp";
    public static final String CHAMP_EMAIL  = "email";
    public static final String CHAMP_PASS   = "motdepasse";
    public static final String CHAMP_CONF   = "confirmation";
    public static final String ATT_ERREURS  = "erreurs";
    public static final String ATT_RESULTAT = "resultat";
	
    public void doGet( HttpServletRequest request, HttpServletResponse response ) throws ServletException, IOException{
        /* Affichage de la page d'inscription */
        this.getServletContext().getRequestDispatcher( VUE ).forward( request, response );
    }
    
    public void doPost( HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException{
        /* Récupération des champs du formulaire. */
        String email = request.getParameter( CHAMP_EMAIL );
        String motDePasse = request.getParameter( CHAMP_PASS );
        String confirmation = request.getParameter( CHAMP_CONF );
        String resultat;
        Map<String,String> erreurs = new HashMap<String, String>();
        
        /* Validation du champ email. */
        try {
            Validation.validationEmail( email );
        } catch ( Exception e ) {
            erreurs.put( CHAMP_EMAIL, e.getMessage() );
        }

        /* Validation des champs mot de passe et confirmation. */
        try {
        	Validation.validationMotsDePasse( motDePasse, confirmation );
        } catch ( Exception e ) {
            erreurs.put( CHAMP_PASS, e.getMessage() );
        }


        /* Initialisation du résultat global de la validation. */
        if ( erreurs.isEmpty() ) {
            resultat = "Succès de l'inscription.";
            User user = new User(email,motDePasse,10);
            try {
				BDDManager.createUser(user);
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
        } else {
            resultat = "Échec de l'inscription.";
        }

        /* Stockage du résultat et des messages d'erreur dans l'objet request */
        request.setAttribute( ATT_ERREURS, erreurs );
        request.setAttribute( ATT_RESULTAT, resultat );

        /* Transmission de la paire d'objets request/response à notre JSP */
        this.getServletContext().getRequestDispatcher( VUE ).forward( request, response );
    }
}
