// --------------------------------------------------Chapter 19 All questions Solved------------------------------------------

// Question no 5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i=0; i < fruits.length; i++){
    document.write(fruits[i] +"<br>");
}
document.write("<hr>");


// question no 6
// a) Counting numbers
document.write("<h1> Counting numbers is:</h1>")
for (var i =0; i < 11; i++){
    document.write("Counting Numbers Is:"+i+"<br>" );
}

// b) Reverse Counting
document.write("<h1> Reverse Counting is:</h1>")
for (var i=10; i >= 1 ; i--){
    document.write( " Reverse Counting is: " +i+ "<br>")
}

// c) Even number is 
document.write("<h1> Even Number is:</h1>")
for (var i = 0; i<=20; i +=2){
    document.write("Even Number Is " +i+"<br>" );
}

// d)Odd Number 
document.write("<h1> Odd Number is:</h1>")
for (var i = 1 ; i<=20 ; i+=2){
    document.write("Odd Number Is" +i+ "<br>" );
}

// e)Series with k 
document.write("<h1> Series k  Number is:</h1>")
var k  =2 
for (var i = k ; i<=20 ; i+=k){
    document.write("Series k  Number Is" +i+ "<br>" );
}

// ====================================================================END====================================================