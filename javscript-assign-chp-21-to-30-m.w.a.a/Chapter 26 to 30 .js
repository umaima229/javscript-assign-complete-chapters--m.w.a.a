// Javascript Chapter 26 to 30 ALL questions Solved okay

// question no 1
var user = prompt("Enter positive integer in decimal");
document.write("Number" +user +"<br>");
document.write("Round of is " +Math.round(user)+"<br>");
document.write("Floor value is" +Math.floor(user)+"<br>");
document.write("Ceil value is " +Math.ceil(user)+"<br>" +"<hr>");

// question no 2
var user = prompt("Enter negative integer in decimal");
user = Number(user);
document.write("Number is " +user +"<br>");
document.write("Round off value is"+ Math.round(user)+"<br>");
document.write("Floor value is" +Math.floor(user)+"<br>");
document.write("Ceil value is " +Math.ceil(user)+"<br>" +"<hr>");

// question no 3
var user1 = +prompt("Enter any number");
document.write("Number is"+user1+"<br>");
document.write("Absolute value is " +Math.abs(user1)+"<br>"+"<hr>");

// question no 4
var dice1 = Math.floor(Math.random()*6)+1;
var dice = Math.floor(Math.random()*6)+1;
document.write(" 1st Dice is "+dice1 +"<br>");
document.write("2nd dice is " +dice+"<hr>");

// question no 5
var tail = Math.random();
if (tail< 0.5){
    document.write("tail"+"<hr>");
}else{
    document.write("head"+"<hr>")
}

// question no 6
var num = Math.floor(Math.random() * 100) +1;
document.write("Random number between 1 to 100 is:"+num+"<hr>");

// question no 7
var user2= prompt("Enter YoUR Weight");
var us = parseFloat(user2);
document.write("Your weight is :" +us +"kgs<hr>");

// question no 8
var secret = 7;
var inp = +prompt("Enter Your NUMBER(1 to 10)");
if (secret === inp ){
    document.write("Congratulations winner");
}
else{
    document.write("Try Again")
}


// ====================================================END====================================================================