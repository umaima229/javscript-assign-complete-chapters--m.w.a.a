// Javascript 21 TO 25 All questions Solved

// Question no 1
// var input1 = prompt("Enter Your Firsth Name" );
// var input2 = prompt("Enter Your Second Number");
// var fullname = input1 +""+input2 ;
// document.write(input1+ "\n" +input2 +"<br>" +"<hr>");

// // question no 2
// var favrt = prompt("Enter your favrt mobile");
// document.write("your character lenght is\n " + favrt.length +"<hr>" );

// // question no 3
// var pak = "Pakistan";
// var index = pak.indexOf("n")
// document.write(" index of n is "+index + "<hr>" );

// // question no 4
// var string = "Hellow World";
// var index = string.indexOf("d");
// document.write("Last index of d is" +index  + "<hr>" );

// // question no 5
// var pak1 = "pakistani ";
// var charat3=  pak1.charAt(3);
// document.write(" index of 3 is\n" +charat3  + "<hr>" )

// // question no 6 repeat question no 1
// var ques1 = prompt("Enter your class");
// var que2= prompt("Enter your intrest");
// var ques3 = ques1+que2;
// document.write(ques3+ "\n" +"<hr>");

// question no 7 
var word = "Hyderabad";
var word2 = word.replace( "Hyder","Islam");
var show = ("The replace value is " + word2 +"<hr>");
document.write(show);

// question no 8
var senten = "Ali and Sami are best friends. They play cricket and football together."
var replace = senten.replace(/and/g , "&");
var simple = ("The rewrite sentence is " +replace+"<hr>");
document.write(simple);

// question no 9 
var string = "472";
var num = Number(string);
document.write("Value" +string +"<br>");
document.write("Type " +typeof string + "<br>");
document.write("Value" +num +"<br>");
document.write("Type " +typeof num +"<hr>");

// question no 10 
var program = prompt("Enter Your Input");
var lowercase = program.toUpperCase();
document.write(lowercase);