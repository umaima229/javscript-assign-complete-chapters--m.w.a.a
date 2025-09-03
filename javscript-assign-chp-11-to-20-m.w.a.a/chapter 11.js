// ----------------------------------    Javscript Chapter 11 All Questions Solved -----------------------------------

// -----question no 4---------
var fuel = prompt("Enter remaining fuel in your car(in liters)");
 if (fuel < 0.25){
    alert("plz refill");
 }

//  ---------question no 5---------
// a)
var a = 4;
if (++a===5){
alert("Given condition for a variable a is true");
}

// b)
var b =82;
if(b++ ===83){     
        alert ("false condition")
} 
// b++ pahly compare krna = 82    us k bad ==== 83  bad man 83 hoa lakin condition pahly hi false thy

// c)
var c =12;
if(c++ ===13){             
    alert("no alert");
}
// ->c++ ===13 --> false
//   ->bad m c = 13 hoa 
var c = 13;
if (c ===13){
    alert ("show this ");
}
// ------>   13 ===13 ---- true
var c = 14;
if (++c <14){
    alert("No alert");
}       
// ++c pahly increamnet  us ka bad 14 ho gya 
//  ab 14 < 14 to ni hoga kiu k 14 say chotha nhi 
 var c = 14 ;
 if (c ===14){
    alert ("true condition");
 }
//  q ka 14 is equal to 14

// d)
var materialcost = 22000;
var laborcost= 22000;
var compare = 22000===22000;
alert("the cost equals " + compare );

// e)
var d = prompt("true");
if (d===true){
    alert("true");
 }

 var e = prompt ("false");
   if (e===false){
    alert("false");
 }

//  e)
 var name1 = "car";
 var name2= "cat";
 if ("car" < "cat" ){
    alert("car is smaller than cat ")
 }

// -----------questuion no 6-------------
 var subject1 = +prompt ("math marks 100 out of ?");
 var subject2 = +prompt ("English marks 100 out of ?");
 var subject3 = +prompt ("Science marks 100 out of ?");
 var totalmarks = +prompt("Enter Total Marks");
 var obtainmarks = subject1+ subject2 +subject3;
 var percentage= (obtainmarks / totalmarks)*100;

//  find grade
var grade;
var Remarks;
if (percentage >= 80){
   grade = "A-one";
   Remarks = "Excellent";
}
else if (percentage >= 70){
   grade = "A";
   Remarks = "Good";
}
else if (percentage >= 60){
   grade = "B";
   Remarks = "You Nedd to Improve";
}
else if (percentage >= 50){
   grade = "Fail";
   Remarks  = "Sorry";
}

document.write("Total Marks: " + totalmarks + "<br>");
document.write("Obtained Marks: " + obtainmarks + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
document.write("Grade: " + grade +"<br>");
document.write("Remarks : " + Remarks);

// ----------question no 7-------------
var secretnumber = 7;
var guess= +prompt("Guess The Number (1-10:) ");
if (guess === 7){
   alert("Bingo Correct Answer");
}
else if ( guess + 1 === 7){
   alert("Close Enough To the Correct Answer ");
}
else{
   alert("Sorry Try AGain");
}

// --------question no 8 --------
var num = +prompt("Enter A number");
if (num % 3 === 0){
   alert(num + " is divisible by 3");
}else{
   alert(num + " is NOt Divisible By 3 ");
}

// ----------question no 9--------------
var input = prompt("Enter Even Number AND Odd NUMBER ");
if (input === "" || isNaN(input)){
   alert("Invalid Intput");
}
else {
   input = +input;
  if (input % 2 === 0){
   alert("Even NUmber");
}
else{
   alert ("Odd Number ");
}
}

// ----------question no 10----------------
var weather = +prompt("Temperature kitna ha ");
if (weather > 40  ){
      alert(" 🔥 Its Too Hot Outside");
}
 else if(weather > 30 ){
   alert(" 🌤 Ther Weather Is Today Is Normal ");
}
 else if ( weather > 20 ){
   alert(" 🌥 Today Weather Is Cool ");
}
 else if (weather > 10){
   alert("❄️ OMG! Today's Weather is So Cool");
}
else  {
   alert("No Input Show" );
}
// --------------------question no 11-------------------
var firstnum = +prompt("Enter first number");
var secondnum = +prompt("Enter Second number");
var operation = prompt ("Enter Operation (+, -, *, /, %):");
if ( operation === "+"){
   alert(firstnum + secondnum );
}
else if (operation ===  "-"){
   alert(firstnum-secondnum);
}
else if ( operation === "*"){
   alert(firstnum*secondnum);
}
else if (operation === "/"){
   alert(firstnum/secondnum);
}
else if (operation === "%"){
   alert(firstnum%secondnum);
}
else{
   alert("No Input");
}


// ===================================================END================================================================