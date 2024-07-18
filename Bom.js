 
 //---------------------------------String ----------------------------
 stringname="string value";   // string literal
var str="This is string literal";  
document.write(str);  

var stringname=new String("hello javascript string");   // with help of new keyword
document.write(stringname); 

var str="Javatpoint";  
document.writeln(str.charAt(4));   // charAt() method

var x="Javatpoint";  
var y=".com";  
document.writeln(x.concat(y));  // concat() method

var web="Learn JavaScript on Javatpoint";  
document.write(web.indexOf('a'));  // indexOf()method

document.write(web.lastIndexOf('a'));  // lastIndexOf() method

var str="Javatpoint";  
document.writeln(str.replace("tpoint","Script"));  // replace() method

var str="Javatpoint";  
document.writeln(str.substr(0,4));   // substr() method

var s1="abcdefgh";  
var s2=s1.slice(2,5);  
document.write(s2); // slice() method

var s1="     javascript trim    ";  
var s2=s1.trim();  
document.write(s2);  // trim() method

var str="This is JavaTpoint website";  
document.write(str.split(" ")); //splits the given string.  

//------------------------------------------DATE OBJECT-------------------------------

/*
there are 4 ways of creatinh date object
Date()
Date(milliseconds)
Date(dateString)
Date(year, month, day, hours, minutes, seconds, milliseconds)
 */

var date=new Date();  
document.writeln("Today's day: "+date.getDate());   // getDate() method 
var year=new Date();  
document.writeln("Year value : "+year.getUTCFullYear());  // getFullYear() method
// setDate() method :- setting date for our convinece

// ----------------------Math Object --------------------
document.getElementById('p1').innerHTML=Math.sqrt(17);   

document.getElementById('p2').innerHTML=Math.random();   

document.getElementById('p3').innerHTML=Math.pow(3,4); 

document.getElementById('p4').innerHTML=Math.floor(4.6);    

document.getElementById('p6').innerHTML=Math.round(4.3);   
document.getElementById('p7').innerHTML=Math.round(4.7);   

document.getElementById('p8').innerHTML=Math.abs(-4);   

// --------------------------number------------------------

// function check(x,y)  
// {  
//   return x/y;  
// }  
// document.writeln(Number.isFinite(check(0,10)));  
// document.writeln(Number.isFinite(check(10,0)));   
function check(x,y)  
{  
  return x/y;  
}  

document.writeln(Number.isInteger(check(12,2)));  
document.writeln(Number.isInteger(check(12,5))); 

var a="50";  
var b="50.25"  
var c="String";  
var d="50String";  
var e="50.25String"  
document.writeln(Number.parseInt(a)+"<br>");  
document.writeln(Number.parseInt(b)+"<br>");  
document.writeln(Number.parseInt(c)+"<br>");  
document.writeln(Number.parseInt(d)+"<br>");  
document.writeln(Number.parseInt(e));   
