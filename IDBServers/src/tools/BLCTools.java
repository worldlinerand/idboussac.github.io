package tools;

import tools.BitcoinOpReturnTX.EmptyBitcoinAccountException;

import java.util.List;

import org.bitcoinj.core.InsufficientMoneyException;

import Beans.PublicKey;

public class BLCTools {
    
	static public PublicKey isValidatedHash(String hash) throws Exception{
		List allPK = BDDManager.findAllPK();
		PublicKey pk=new PublicKey();

		for(int i =0;i<allPK.size();i++)
		{
			pk = (PublicKey) allPK.get(i);
			String hashpk = null;
			try {
				hashpk = BitcoinOpReturnTX.getOP_Return( pk.getTransaction());
				hashpk= hashpk.substring(2);
				System.out.println("hashpk : "+hashpk);
				System.out.println("hash   : "+hash);
				if(hashpk.equals(hash))
				{
					return pk;
				}
			} catch (Exception e) {
			    System.out.println("URL NON DISPONIBLE");

			  }
		}
		return null;
	}
    
    public static String getOP_return(String tx) throws Exception
    {
		String urlToRead= "https://api.blocktrail.com/v1/tbtc/transaction/"+tx+"?api_key=8d33fdcc2c596bafde45df806f6d1b63b777330d";
		String data =Tools.getHTML(urlToRead);
		String requieredData = data.substring(data.indexOf("\"script\":\"OP_RETURN") +19);
		requieredData = requieredData.substring(1,requieredData.indexOf("\",\"script_hex\"") );
		 System.out.println(requieredData);
		 return requieredData;
    }
}
