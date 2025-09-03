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
if (percentage >= 80){
   grade = "A-one";
}
else if (percentage >= 70){
   grade = "A";
}
else if (percentage >= 60){
   grade = "B";
}
else if (percentage >= 50){
   grade = "C";
}
else if (percentage >= 40){
    grade = "Fail";
}
document.write("Total Marks: " + totalmarks + "<br>");
document.write("Obtained Marks: " + obtainmarks + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
document.write("Grade: " + grade);
