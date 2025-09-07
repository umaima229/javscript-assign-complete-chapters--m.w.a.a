// -------------------Javascript Chapter 13 All Questions Solved----------------------------------

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