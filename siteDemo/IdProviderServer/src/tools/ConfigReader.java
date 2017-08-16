package tools;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

import javax.servlet.ServletContext;

import org.json.JSONObject;



public class ConfigReader {
	
	public ConfigReader(){
		
	}
	
	public JSONObject read(ServletContext servletContext){
		

		
		
		try{
			InputStream flux= servletContext.getResourceAsStream("config.json");
			InputStreamReader lecture=new InputStreamReader(flux);
			BufferedReader buff=new BufferedReader(lecture);
			String jsonStream = "";
			String ligne;
			while ((ligne=buff.readLine())!=null){
				jsonStream = jsonStream.concat(ligne);
			}
			buff.close();
			
			
			JSONObject json = new JSONObject(jsonStream);        
	        

	        return json;
		}		
			catch (Exception e){
			System.out.println(e.toString());
			}
		
		return null;
		
	}


	 
	
}
	

