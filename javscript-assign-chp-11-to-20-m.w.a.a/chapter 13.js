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


// ==================================================END========================================================================