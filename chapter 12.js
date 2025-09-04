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
