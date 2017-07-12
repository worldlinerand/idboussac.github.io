package com.atosworldline.wlbank;

import java.util.Comparator;
import java.util.regex.Pattern;

public class myCompare implements Comparator {
   public int compare(Object o1, Object o2) throws ClassCastException {
     String s1 = ((Pattern) o1).pattern() ;
     String s2 = ((Pattern) o2).pattern() ;
     return -(s1.length()-s2.length()) ;
   }
}
