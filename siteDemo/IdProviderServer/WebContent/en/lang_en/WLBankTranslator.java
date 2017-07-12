/**
 * 
 */
package com.atosworldline.wlbank;

import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.StringWriter;
import java.util.Enumeration;
import java.util.Hashtable;
import java.util.Collections;
import java.util.ArrayList;
import java.util.Properties;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import com.atosworldline.wlbank.myCompare;

/**
 * @author FR22749
 *
 */
public class WLBankTranslator
{

	static Hashtable patterns = new Hashtable();
	
	/** Chemin vers le dossier source */
	static String path = null;
	
	/** Dossier cible */
	static String newPath = null;
	
	/** Fichier CSV contenant les chaines a chercher (optionnel)*/
	static String csvFile = null;
	
	/** Filtre pour les fichiers sur lesquels appliquer la traduction (optionnel)*/
	static String filtre = null;
	
	static final String OLD_PATH_KEY="path";
	static final String NEW_PATH_KEY="newPath";
	static final String CSV_FILE_KEY="csvFile";
	static final String FILTER_KEY="filter";
	
	/** Filtre par défaut */
	static final String DEFAULT_FILTER="\\w*.html|\\w*.js|\\w*.xml";
	
	
	
	
	/**
	 * Lancement du traitement.
	 * 
	 * @param args le premier argument est le fichier de propriété
	 */
	public static void main(String[] args)
	{
		// Récupère le fichier de properties en paramètre
		if (args!=null && args.length!=0)
		{
			log("Fichier Properties : " + args[0]);
			String propertiesFile = args[0];
			loadConfig(propertiesFile);
			
			if(csvFile == null)
			{
				log("On charge les textes depuis le fichier de properties.");
				loadProp(propertiesFile);
			}
			else
			{
				log("On charge les textes depuis le fichier CSV.");
				loadCSV(csvFile);
			}
		}
		
		File rootPath = new File(path);
		if (rootPath.exists())
		{
			processFile(rootPath);
		}
		else
		{
			log("Le fichier " + rootPath + " n'existe pas");
		}
		
		log("Fin de traitement");
	}

	/**
	 * Ecris une trace
	 * @param string
	 */
	private static void log(String value)
	{
		System.out.println(value);
	}
	
	/**
	 * Charge les textes à changer depuis un fichier
	 * de propriété
	 * @param propFile
	 */
	public static void loadProp(String propFile)
	{
		FileInputStream fis;
		try
		{
			fis = new FileInputStream(propFile);
			BufferedInputStream bis = new BufferedInputStream(fis);
			Properties prop = new Properties();
			prop.load(bis);
			Enumeration keys = prop.keys();
			while (keys.hasMoreElements())
			{
				String key = (String)keys.nextElement();
				if (!key.equals(OLD_PATH_KEY)&&!key.equals(NEW_PATH_KEY))
				{
					String value = prop.getProperty(key);
					log ("Key : " + key + " Value : " + value);
					Pattern pattern = Pattern.compile(key);
					patterns.put(pattern, value);
				}
			}
		}
		catch (FileNotFoundException e)
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		catch (IOException e)
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	/**
	 * Charge les chemins vers l'application a traduire
	 * @param propFile
	 */
	public static void loadConfig(String propFile)
	{
		FileInputStream fis;
		try
		{
			fis = new FileInputStream(propFile);
			BufferedInputStream bis = new BufferedInputStream(fis);
			Properties prop = new Properties();
			prop.load(bis);
			path = prop.getProperty(OLD_PATH_KEY);
			newPath = prop.getProperty(NEW_PATH_KEY);
			csvFile = prop.getProperty(CSV_FILE_KEY);
			String filter=prop.getProperty(FILTER_KEY);
			
			if(filter==null)
			{
				filtre=DEFAULT_FILTER;
			}
			else
			{
				filtre=filter;
			}
			
			log("***** CONFIG *******");
			log("Source:"+path);
			log("Cible:"+newPath);
			log("fichier csv:"+csvFile);
			log("Filtre utilisé:"+filtre);
			log("*******************");
			
			
		}
		catch (FileNotFoundException e)
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		catch (IOException e)
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	
	/**
	 * Lis les valeurs dans un fichier csv
	 * @param csvFile
	 */
	public static void loadCSV(String csvFile)
	{
		log("***********************");
		log("Chargement CSV....");
		log("Note: pour que les accents soient bien pris en compte dans les chaines à remplacer");
		log("il faut que le fichier csv soit en UTF-8 !");
		log("");
		
		BufferedReader lecteurAvecBuffer = null;
		String ligne;

		 
		try
		{
			lecteurAvecBuffer = new BufferedReader(new FileReader(csvFile));

			while ((ligne = lecteurAvecBuffer.readLine()) != null)
			{
				String[] mySplit = ligne.split(";");
				if (mySplit.length >= 2)
				{
					String textOrigin=mySplit[0];
					
					String textOriginUnicode=processFrenchCharaters(textOrigin);
					
					log(textOriginUnicode);
					
					int indexSplit=ligne.indexOf(";");
					String textTarget=ligne.substring(indexSplit+1);
					
					Pattern pattern = Pattern.compile(textOriginUnicode);
					//log("["+pattern+"=>"+textTarget+"]");
					
					patterns.put(pattern, textTarget);
				}
				else
				{
					log("Le fichier csv doit être constitué de au moins 2 colonnes");
				}
			}
			lecteurAvecBuffer.close();
			
			
		}
		catch (FileNotFoundException e) 
		{
			e.printStackTrace();
		}
		catch (IOException e) 
		{
			e.printStackTrace();
		}
		log("Fin chargement");
		log("***********************");
	}
	

	/**
	 * Transforme les caratères "francais" en code unicode.
	 * Les caratères transformé sont: é,è,ç,à,ù,ë,ï et ê
	 * @return
	 */
	public static String processFrenchCharaters(String inStr)
	{
		String result=inStr;
		return result;
	}
	
	
	public static void processFile(File file)
	{
		//log("Traitement de " + file.getAbsolutePath());
		String[] arrayFiles = file.list();
		if (arrayFiles==null)
		{
			replaceAll(file);
		}
		else
		{
			for (int i=0;i<arrayFiles.length;i++)
			{
				File newFile = new File(file.getAbsolutePath()+File.separator+arrayFiles[i]);
				if (newFile.exists())
				{
					processFile(newFile);
				}
			}
		}
	}
	
	public static void replaceAll(File file)
	{
	
		Pattern p = Pattern.compile(filtre); 
		String name = file.getName();

		//Reecriture du fichier dans le nouveau chemin
		String completePath = file.getAbsolutePath();
		String filePath = completePath.substring(path.length());
		
		String newFilePath = newPath+filePath;
		File newFile = new File(newFilePath);
		newFile.getParentFile().mkdirs();

		Matcher m = p.matcher(file.getName());
		
		if (m.matches())
		{
			log("Replace dans " + file.getAbsolutePath());
			// File declared to search string in it
			try
			{
				FileInputStream fis = new FileInputStream(file);
		
				StringWriter sw = new StringWriter();

				while (fis.available() != 0) 
				{
					int c = fis.read();
					sw.write(c);
				}
				
				// dispose all the resources after using them.
				fis.close();
				
				String result=sw.toString();
				ArrayList keys = new ArrayList(patterns.keySet()) ;
				myCompare monComparateur = new myCompare(); 
				Collections.sort(keys, monComparateur);
				int nbCles = keys.size();

				for(int i=0;i<nbCles;i++)
				{
					Pattern pattern = (Pattern)keys.get(i);
					//log("Le pattern recherche dans le resultat est :"+pattern.pattern());
					Matcher matcher = pattern.matcher(result);
					
					if(matcher.find())
					{
						log("Pattern "+pattern.toString()+" trouvé.");
					}
					
					result = matcher.replaceAll((String)patterns.get(pattern));
				}
				
				if (!newFilePath.equals(completePath))
				{
					FileOutputStream fos = new FileOutputStream(newFile);
					
					fos.write(result.getBytes());
					fos.close();
				}
				else
				{
					log ("fichier identique !");
				}
			}
			catch (FileNotFoundException e)
			{
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			catch (IOException e)
			{
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

		}
		else
		{
			//log ("On copie " + name );
			copyfile(file.getAbsolutePath(),newFile.getAbsolutePath()); 
		}
	}
	
	
	/**
	 * Copy a File
	 * @param srFile source file
	 * @param dtFile dest file
	 */
	private static void copyfile(String srFile, String dtFile)
	{
	    try
	    {
	      File f1 = new File(srFile);
	      File f2 = new File(dtFile);
	      InputStream in = new FileInputStream(f1);

	      //For Overwrite the file.
	      OutputStream out = new FileOutputStream(f2);

	      byte[] buf = new byte[1024];
	      int len;
	      while ((len = in.read(buf)) > 0)
	      {
	        out.write(buf, 0, len);
	      }
	      in.close();
	      out.close();
	    }
	    catch(FileNotFoundException ex)
	    {
	      log(ex.getMessage() + " in the specified directory.");
	    }
	    catch(IOException e)
	    {
	      log(e.getMessage());      
	    }
	  }
	
}
