package reputation;

public class Reputation {
	
	static public int GetReputation()
	{
		return 95;
	}
	
	public static byte[] intToByte(int x)
	{
		byte b[]= {(byte) x};
		return b;
	}
	
	public static int byteToUnsignedInt(Byte b[])
	{
		return b[0] &(0xFF);
	}
	
	public static byte[] SetReputation(int x) 
	{
		if(x > 100)
			x=100;
		else if(x<0)
			x=0;
		return intToByte(x);
	}
	
	public static int GetReputation(Byte b[])
	{
		int x =  byteToUnsignedInt(b);
		if(x > 100)
			x=100;
		else if(x<0);
			x=0;
		return x;
	}
	
	
}
