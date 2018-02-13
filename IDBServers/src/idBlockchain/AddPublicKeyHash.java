package idBlockchain;

import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Beans.PublicKey;
import Beans.User;
import tools.BDDManager;
import tools.BitcoinOpReturnTX;
import tools.Validation;
import tools.BitcoinOpReturnTX.BitcoinNet;
import tools.BitcoinOpReturnTX.EmptyBitcoinAccountException;
import tools.Tools;

public class AddPublicKeyHash extends HttpServlet {
    public static final String VUE          = "/WEB-INF/PublicKey.jsp";
    public static final String CHAMP_EMAIL  = "email";
    public static final String CHAMP_PASS   = "motdepasse";
    public static final String CHAMP_PublicKeyHash = "pubKeyHash";
    public static final String ATT_ERREURS  = "erreurs";
    public static final String ATT_RESULTAT = "resultat";
    private static BitcoinOpReturnTX bot;

    public AddPublicKeyHash() {
        super();
        bot = new BitcoinOpReturnTX(BitcoinNet.TEST);
        // TODO Auto-generated constructor stub
    }
    
    public void doGet( HttpServletRequest request, HttpServletResponse response ) throws ServletException, IOException{
        /* Affichage de la page d'inscription */
        this.getServletContext().getRequestDispatcher( VUE ).forward( request, response );
    }
    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    public void doPost( HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException{
        /* Récupération des champs du formulaire. */
        String email = request.getParameter( CHAMP_EMAIL );
        String password = request.getParameter( CHAMP_PASS );
        String pubKeyHash = request.getParameter( CHAMP_PublicKeyHash );
        System.out.println(" pubKeyHash " + pubKeyHash);
        String resultat;
        String validatedTx = null;
        byte[] byt_pKHash = null;
        /* Initialisation du résultat global de la validation. */

        	resultat = "Succès de l'ajout de la clé publique.";
            User user= new User();
			try {
				user = BDDManager.findUser(email);
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
            if(user.verify(email, password))
            {
            	if(user.getCounter()==0)
            	{
            		resultat="Vous avez épuisés tout vos emplacements";
            	} else{
            		
	            	try {
	            		
						BDDManager.counterDown( user );
						
						//Changing format & record information
						byt_pKHash = Tools.hexStringToByteArray(pubKeyHash);
						
						validatedTx = bot.recordSign(null, byt_pKHash);
						
						System.out.println("validatedTx  " +validatedTx);
						
						//doPost to idblockchainbis
						Map<String,Object> params = new LinkedHashMap<>();
						
						params.put("pubKeyHashTx", validatedTx);
						PublicKey pk= new PublicKey(validatedTx);
						BDDManager.createPK(pk);
						
						//String data = Tools.postHTML("http://localhost:8085/IDBServers/AddPubKeyHashbis",params );
					} catch (SQLException | EmptyBitcoinAccountException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
            	}
            }
            else
            {
            	resultat = "mot de passe erroné.";
            }

        /* Stockage du résultat et des messages d'erreur dans l'objet request */
        
        request.setAttribute( ATT_RESULTAT, resultat );

        /* Transmission de la paire d'objets request/response à notre JSP */
        this.getServletContext().getRequestDispatcher( VUE ).forward( request, response );
    }
}
