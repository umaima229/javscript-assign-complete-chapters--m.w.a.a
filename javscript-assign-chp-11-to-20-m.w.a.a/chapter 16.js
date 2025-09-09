// ------------------------------Javascript Chapter 16 All Questions Solved--------------------------------------

// question no 9
// a)
var colors = ["Red", "Green" , "Purple"];
document.write(colors +"<br>");

// b) add a color beginnig
var addstart =prompt("Enter  Color beginnig");
colors.unshift(addstart);
document.write("After adding color at the beginnig:" +colors+ "<br>");
 
// b) add color ending
var end = prompt("Enter Color ending");
colors.push(end);
document.write("After add color at the end" +colors+ "<br>");

// c) Now add more colors
colors.unshift("Yellow" , "Orange");
document.write("After adding two more colors at the starting:" +colors+ "<br>" );

// d) delete the first color/element
colors.shift();
document.write("After deleting the first color is :" +colors+"<br>");

// e)delete the last element
colors.pop();
document.write("After deleting the last element:" +colors+ "<br>");

// f) add color at the specific index
var indexadd = +prompt("at which index you want to add in colors?");
var colorname= prompt("how many colors you want to add");
colors.splice(indexadd, 0 ,colorname);
document.write("After adding color at index" + indexadd+ ":" + colors +"<br>");

// g) dlete color from specific index
var indexdel= +prompt("at which index you want to delete ?");
var countdelete= +prompt("How many color you want to delete");
colors.splice(indexdel,countdelete);
document.write("After Deleting " +countdelete+"colors form index" +indexdel+ ":"+colors+ "<br>" +"<hr>");

// question no 10 
var scroes= [450,340,230,578];
scroes.sort();
document.write(scroes+ "<br>" +"<hr>");

// question no 11
var citie= ["karachi", "islamabad" , "lahore", "Multan" ,"peshawar"];
var selectedcites= [citie[0], citie[1], citie[2]];
document.write( "Cities list " +citie +"<br>");
document.write("selected cities\n" +selectedcites + "<br>" +"<hr>");

// question no 12
var join = ["This", "is" , "my", "cat"];
var sentence= join.join(" ");
document.write(sentence +"<br>" +"<hr>");

// question no 13
var question = [];

// value store kara 
question.push("apple");
question.push("banana");
question.push("orange");

document.write("Origanal values is "+ question+ "<br>");

// values nikalna
var firstout = question.shift();
document.write ("Removed\n:" +firstout +"<br>");
document.write("Updated question:\n" +question+ "<br>" +"<hr>");

// question no 14
var stack = [];

// values stor krna
stack.push("Pen");
stack.push("Book");
stack.push("Bag");
document.write("Orignal stack:\n" +stack+ "<br>" );

// values nikalna
var lastout  = stack.pop();
document.write("Removed:\n" +lastout+"<br>");
document.write("Update stack:\n"+stack+"<br>"+"<hr>");

// question no 15 ya loop chapter ka 
var phone = ["Apple","Samsung","Motrola","Nokia", "Sony", "Haier"];

document.write("<select>");
document.write("<option>" + phone[0] + "</option>");
document.write("<option>" + phone[1] + "</option>");
document.write("<option>" + phone[2] + "</option>");
document.write("<option>" + phone[3] + "</option>");
document.write("<option>" + phone[4] + "</option>");
document.write("<option>" + phone[5] + "</option>");
document.write("<select>");

// =========================================================END===============================================================

