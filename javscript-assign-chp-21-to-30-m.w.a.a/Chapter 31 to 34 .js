// Javascript Chapter 31 to 34 All question solved 

// question no 1
var now = new Date();
document.write(now +"<hr>");

// question no 2
var now = new Date();
var month = now.getMonth();
var date = now.getDate();
document.write(" Current Month \n" +month +"\n"  );
document.write("Date\n" +date +"<hr>");

// question no 3
var now = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day =  days[now.getDay()];
document.write("Today day is\n:" +day +"<hr>");

// Question no 4