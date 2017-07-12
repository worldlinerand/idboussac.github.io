package tools;

import java.io.InputStream;

public class CredsData {

	private String img_name;
	private InputStream img_file;
	
	public CredsData(String name, InputStream file){
		img_name = name;
		img_file = file;
	}
	
	public String getImg_name(){ return img_name; }
	
	public InputStream getImg_file(){ return img_file; } 
	
}
