// -------------------------------------------Chapter 20 All questions Solved------------------------------

// question no 7
var item = ["cake", "applepie ", "cookie", "chips", "patties"];
var input = prompt("Enter any item");
var found = false;

for (var i = 0 ; i < item.length; i++){
   if (item[i] === input){
    alert( input + "\nis available ", + i);
    found = true;
    break;
   }
}
   if (found === false ){
    alert(input + "\nNo item found" );
   }

//    question no 8 
var A = [ 23,45,56,78,987];
var largest = A[0];

for (var i = 1; i < A.length ; i++){
    if( A[i] > largest){
        largest = A [i]
    }
}
document.write(A+ "<br>");
document.write("The Largest Number is " + largest +"<br>"+ "<hr>");

// question no 9
var b = [74,65,655,546,343,56 ,7,];
var smallest = b[0];

for (var i = 1 ; i < b.length; i++){
    if (b[i] < smallest){
        smallest = b[i];
    }
}
document.write(b + "<br>");
document.write("The smallest number is " + smallest+"<hr>");

// question no 10
for (var i = 1; i <= 100; i++) {
    if (i % 5 === 0) {  
        document.write(i + "<br>");
    }
}

// ============================================================END============================================================