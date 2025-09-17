// Javascript 21 TO 25 All questions Solved

// Question no 1
var input1 = prompt("Enter Your Firsth Name" );
var input2 = prompt("Enter Your Second Number");
var fullname = input1 +""+input2 ;
document.write(input1+ "\n" +input2 +"<br>" +"<hr>");

// question no 2
var favrt = prompt("Enter your favrt mobile");
document.write("your character lenght is\n " + favrt.length +"<hr>" );

// question no 3
var pak = "Pakistan";
var index = pak.indexOf("n")
document.write(" index of n is "+index + "<hr>" );

// question no 4
var string = "Hellow World";
var index = string.indexOf("d");
document.write("Last index of d is" +index  + "<hr>" );

// question no 5
var pak1 = "pakistani ";
var charat3=  pak1.charAt(3);
document.write(" index of 3 is\n" +charat3  + "<hr>" )

// question no 6 repeat question no 1
var ques1 = prompt("Enter your class");
var que2= prompt("Enter your intrest");
var ques3 = ques1+que2;
document.write(ques3+ "\n" +"<hr>");

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
var program = prompt("Enter Your Input In small");
var upercse = program.toUpperCase();
document.write(lowercase);

// question no 11
var prog = prompt("Enter Your Input in capital");
var lowercse = prog.toLowerCase();
document.write(lowercse) ;

// question no 12
var num = 35.36;
var num1 = num.toString();
var result = num1.replace(".","");
document.write("value is\n" +result +"<hr>");

// question no 13
var user = prompt("Enter Your Input");
var isvalid = true;
for (var i = 0; i < user.length; i++){
    var charcode = user.charCodeAt(i);

if (charcode === 33 || charcode === 44 || charcode === 46 || charcode ===64){
    isvalid = false;
    break;
}
}
if (isvalid){
    document.write("Valid username\n " +user +"<br>");
}else{
    document.write("Please enter a valid username without [@ . , !\n" +"<hr>");

}

// question no 14
var array =["cake", "apple", "cookie", "chips", "patties"];
var input = prompt("Enter your input");
input = input.toLowerCase();
var found = false;
for (var i = 0;  i < array.length; i++){
    if(array[i].toLowerCase()=== input){
        found = true;
        break;
    }
}
if (found) {
    document.write(input + "\navailable at index of\n" +i+ "\nin our bakrey\n" +"<br>");
}else{
    document.write("Sorry not available\n" +input+ "\nin our bakrey\n" +"<hr>");
}

// question no 15
var pasword = prompt("Enter Your Pasword in numbers and letters mix okay  no start with number and must be 6 letters okay");
if (pasword.length < 6){
    document.write("pasword must be 6 characters long " +"<br>"+"<hr>");
}
else if (!isNaN(pasword.charAt(0))){
    document.write ("pasword cannot start with number" +"<br>" +"<hr>");
}
else {
    var hasletter = false;
    var hasnumber = false;
    for (var i = 0; i < pasword.length; i++){
        var charcode= pasword.charCodeAt(i);

        if ((charcode >=65 && charcode <= 90) || (charcode >= 97 && charcode<= 122)){
            hasletter = true;
        }
        else if (charcode >= 48 && charcode <= 57){
            hasnumber=true;
        }
    }
    if(hasletter&&hasnumber){
        document.write("Valid Pasword\n" + pasword+"<br>"+"<hr>");
    }else{
       document.write("pasword must be contain both letters and numbers" +"<br>"+"<hr>");
    }
}

// question no 16
var uni = prompt("Enter You any words ");
var element = uni.split("");
for (var i = 0; i < element.length; i++)
document.write(element[i] +"<br>");
document.write("<hr>");

// question no 17
var inp=prompt("Enter your input");
var charac= inp.lastIndexOf("");
document.write("Last index of your input is " + charac +"<hr>");

// question no 18 
var sen = "The quick brown fox jumps over the lazy dog";
var sen1 = sen.toLowerCase();
var word = "the";
var count = 0 ;
var words = sen1.split("");
for (var i = 0; i< word.length; i++){
    if (word[i]===word){
        count++;
    }
}
document.write("Text" + sen +"<br>");
document.write("There are" +count+ " occurrence(s) of word 'the'<hr>");


// ====================================================END===================================================================