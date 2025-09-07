
// -------------------Javascript Chapter 14 All Questions Solved----------------------------------

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