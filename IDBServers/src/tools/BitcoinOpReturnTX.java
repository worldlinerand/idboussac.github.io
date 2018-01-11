package tools;

import java.io.BufferedReader;
import java.io.File;
import java.io.InputStreamReader;
import java.net.URL;
import java.nio.charset.StandardCharsets;

import org.bitcoinj.core.Address;
import org.bitcoinj.core.Coin;
import org.bitcoinj.core.InsufficientMoneyException;
import org.bitcoinj.core.NetworkParameters;
import org.bitcoinj.core.Transaction;
import org.bitcoinj.kits.WalletAppKit;
import org.bitcoinj.params.MainNetParams;
import org.bitcoinj.params.TestNet3Params;
import org.bitcoinj.script.ScriptBuilder;
import org.bitcoinj.wallet.DeterministicSeed;
import org.bitcoinj.wallet.SendRequest;
import org.bitcoinj.wallet.Wallet;
import org.json.JSONArray;
import org.json.JSONObject;


public class BitcoinOpReturnTX {
	private static final File POSIX_TEMP_DIRECTORY = new File("/tmp");
	private static final int SHA256_LENGTH = 32;
	private static final int MAX_PREFIX_LENGTH = 8;
	private static final byte NULL_BYTE = (byte) '\0';
	public enum BitcoinNet { MAIN, TEST };

	private WalletAppKit walletAppKit;
	
	public BitcoinOpReturnTX(BitcoinNet bitcoinNet){
		System.out.println("bitcoinNet : " + bitcoinNet.toString());
		NetworkParameters params;
		if(bitcoinNet.equals(BitcoinNet.TEST)) {
			params = TestNet3Params.get();
		} else if (bitcoinNet.equals(BitcoinNet.MAIN)) {
			params = MainNetParams.get();
		} else {
			throw new RuntimeException("Programmer error.");
		}
		
		// Generate a wallet from the given seed values
		DeterministicSeed seed = null;
		try {
			seed = new DeterministicSeed("idblockchainWallet", null, "",  System.currentTimeMillis());
		} catch (Exception uwe) {
			throw new RuntimeException(uwe);
		}
		walletAppKit = new WalletAppKit(params, POSIX_TEMP_DIRECTORY, ".spv");
		//walletAppKit.restoreWalletFromSeed(seed);
		initialise();
		waitUntilReady();
		System.out.println("Wallet address : "+walletAppKit.wallet().getChangeAddress());
		System.out.println("containt :  "+walletAppKit.wallet().getBalance());
	}

	public Address getPubAddress()
	{
		return walletAppKit.wallet().getChangeAddress();
	}
	
	public void initialise() {

		walletAppKit.setAutoSave(true);
		walletAppKit.setBlockingStartup(true);

		walletAppKit.startAsync();

	}

	public void stop() {


		walletAppKit.stopAsync();
		
	}

	public boolean isReady() {
	
		return walletAppKit.isRunning();

	}

	public void waitUntilReady() {
		
		walletAppKit.awaitRunning();
		
	}
	
	
	/**
	 * send a signature on the bitcoin blockchain
	 * @param prefix
	 * 		op_return prefix
	 * @param data
	 * 		signature to be sent 
	 * @return
	 * 		bitcoin transaction id
	 * @throws EmptyBitcoinAccountException
	 */
	public String recordSign(String prefix, byte[] data) throws EmptyBitcoinAccountException{

		final Wallet wallet = walletAppKit.wallet();
		if(data.length>80)
		{
			return null;
		}
		byte[] opReturnValue;
		if(prefix == null){
			opReturnValue = new byte[data.length];
			System.arraycopy(data, 0, opReturnValue, 0, data.length);
		}else{
			byte[] prefixBytes = prefix.getBytes(StandardCharsets.US_ASCII);
			
			
			if(MAX_PREFIX_LENGTH < prefix.length()) {
				throw new IllegalArgumentException("OP_RETURN prefix is too long: " + prefix);
			}
			opReturnValue = new byte[prefixBytes.length + data.length];
			System.arraycopy(prefixBytes, 0, opReturnValue, 0, prefixBytes.length);
			System.arraycopy(data, 0, opReturnValue, prefixBytes.length, data.length);
		}
				Transaction transaction = new Transaction(wallet.getParams());
				transaction.addOutput(
						Coin.ZERO,
						ScriptBuilder.createOpReturnScript(opReturnValue)
				);
		SendRequest sendRequest = SendRequest.forTx(transaction);
	
		// Fill-in the missing details for our wallet, eg. fees.
				try {
					wallet.completeTx(sendRequest);
				} catch (InsufficientMoneyException e) {
					throw new EmptyBitcoinAccountException();
				}

				// Broadcast and commit transaction
				walletAppKit.peerGroup().broadcastTransaction(transaction);
				wallet.commitTx(transaction);
				
				// Return a reference to the caller
				return transaction.getHashAsString();
	}
	
	public String recordSign(String prefix, byte[] data,byte[] receivedAddress ) throws EmptyBitcoinAccountException{
		final Wallet wallet = walletAppKit.wallet();
		Address recAdd = new Address(wallet.getParams(),receivedAddress);
		if(data.length>80)
		{
			return null;
		}
		
		byte[] opReturnValue;
		if(prefix == null){
			opReturnValue = new byte[data.length];
			System.arraycopy(data, 0, opReturnValue, 0, data.length);
		}else{
			byte[] prefixBytes = prefix.getBytes(StandardCharsets.US_ASCII);
			System.out.println("prefixBytes : " + prefixBytes.toString());
			
			if(MAX_PREFIX_LENGTH < prefix.length()) {
				throw new IllegalArgumentException("OP_RETURN prefix is too long: " + prefix);
			}
			opReturnValue = new byte[prefixBytes.length + data.length];
			System.arraycopy(prefixBytes, 0, opReturnValue, 0, prefixBytes.length);
			System.arraycopy(data, 0, opReturnValue, prefixBytes.length, data.length);
		}
		// Construct a OP_RETURN transaction
				Transaction transaction = new Transaction(wallet.getParams());
				transaction.addOutput(Coin.SATOSHI,recAdd);
				transaction.addOutput(
						Coin.ZERO,
						ScriptBuilder.createOpReturnScript(opReturnValue));
		SendRequest sendRequest = SendRequest.forTx(transaction);
	
		// Fill-in the missing details for our wallet, eg. fees.
				try {
					wallet.completeTx(sendRequest);
				} catch (InsufficientMoneyException e) {
					throw new EmptyBitcoinAccountException();
				}

				// Broadcast and commit transaction
				walletAppKit.peerGroup().broadcastTransaction(transaction);
				wallet.commitTx(transaction);
				
				// Return a reference to the caller
				return transaction.getHashAsString();
	}
	
	
	/**
	 * get the bitcoin transaction with the id txId and extract op_return field
	 * @param txId
	 * 		transaction id 
	 * @return
	 * 		op_return value
	 * @throws Exception
	 */
	public static String getOP_Return(String txId) throws Exception {
		System.out.println("========================== DEBUT Methode getOP_Return BitcoinOpReturnTX ====================================");
		System.out.println("txId : "  + txId);
		
			
			String urlToRead = "https://api.blocktrail.com/v1/tbtc/transaction/" + txId + "?api_key=8d33fdcc2c596bafde45df806f6d1b63b777330d";
			URL url = new URL(urlToRead);
			JSONObject tx = null;
			try (BufferedReader reader = new BufferedReader(new InputStreamReader(url.openStream(), "UTF-8"))) {
			    for (String line; (line = reader.readLine()) != null;) {
			    	tx = new JSONObject(line);
			    }
			    if(tx != null){
			    	JSONArray arr = tx.getJSONArray("outputs");
			    	boolean isOPReturn = false;
			    	int i =0;
			    	while(!isOPReturn){
			    		if(arr.getJSONObject(i).getString("type").equals("op_return")){
			    			isOPReturn =true;
			    		}else
			    			i++;
			    	}
			    	System.out.println("========================== FIN Methode getOP_Return BitcoinOpReturnTX ====================================");
			    	return arr.getJSONObject(i).getString("script_hex").substring(2);
			    }
			   }
			System.out.println("========================== FIN Methode getOP_Return BitcoinOpReturnTX ====================================");
			System.out.println("return  : null" );
			return null;
			}
		
			private static String toAscii(String hex){
				   StringBuilder output = new StringBuilder();
				    for (int i = 0; i < hex.length(); i+=2) {
				        String str = hex.substring(i, i+2);
				        output.append((char)Integer.parseInt(str, 16));
				    }
				    System.out.println("========================== FIN Methode getOP_Return BitcoinOpReturnTX ====================================");
				    return output.toString();
	}
	
	
	@Override
	public void finalize() throws Throwable {

		
		this.stop();
		super.finalize();
		
	}

	public class EmptyBitcoinAccountException extends Exception {}
	
}
