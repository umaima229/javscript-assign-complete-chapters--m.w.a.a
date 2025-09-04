// -------------------Javascript All Questions Solved----------------------------------
// ---------question no 1-----------

var ch = prompt("Enter any character (A-Z, a-z, or 0-9)");
 var code = ch.charCodeAt(0);

if (code >= 48 && code <= 57){
    alert("its a Number");
}
else if (code >= 65 && code <= 90){
    alert("ye uppercase hai");
}
else if (code >= 97 && code <= 122){
    alert("ye lowercase hay");
}
else{
    alert("invalid input");
} 

// ------question no 2-----------
var numb = prompt("enter first number");
var numb2= prompt("enter second number");

if (numb > numb2){
    alert( numb + " is larger");
}
else if (numb2 < numb){
    alert( numb2 + " is larger");
}
else{
    alert("both are eqaul");
}

// ---------question no 3---------
var num = prompt("Enter any number");
if (num > 0){
    alert("Nummber Is Positive");
}
else if (num < 0 ){
    alert("Number Is Negative");
}
else {
    alert("No Input");
}

// --------------question no 4-------------
var letter = prompt("Enter Any Alphabet");
if( letter === "a" || letter === "e" || letter  === "i" || letter === "o" || letter === "u" ){   
    alert("small vowel letter");
}
else if (letter === "A" || letter === "E" || letter ==="I" || letter === "O" || letter === "U"){
    alert("Capital vowel");
}
else{
    alert("Not a vowel word");
}

// -------------question no 5----------
var pasword = "12345";
var pasw = prompt("Enter Your Pasword");

if(!pasw){
    alert("Please Enter Your Pasword");
}
else if (pasw === pasword){
    alert("Correct  Pasword");
}
else{
    alert("Incorrecet Pasword");
}

// --------------question no 6--------------
var greeting;
var hour = 13;

if (hour < 18) {
   greeting = "Good day";
}
else{
    greeting = "Good evening";
}
alert(greeting);

// ------------question no 7-------------
var time = +prompt("Enter a Time");
if(time >= 0000 && time  <1200 ){
      alert("Good morning!");
}
else if (time >= 1200 && time < 2100){
    alert("Good Afternoon");
}
else if (time >= 1700 && time < 2100){
    alert("Good Evening");
}
else if (time >= 2100 && time <=2359){
    alert("Good Night");
}
else {
    alert("Invalid Output");
}


// ==================================================END========================================================================