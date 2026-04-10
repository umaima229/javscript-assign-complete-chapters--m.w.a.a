// Javascript Chapter 31 to 34 All question solved 

// question no 1...............
var now = new Date();
document.write(now +"<hr>");

// question no 2...................
var now = new Date();
var month = now.getMonth();
var date = now.getDate();
document.write(" Current Month \n" +month +"\n"  );
document.write("Date\n" +date +"<hr>");

// question no 3..................
var now = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day =  days[now.getDay()];
document.write("Today day is\n:" +day +"<hr>");

// Question no 4...................

// Get the current day
var  today = new Date();
var day = today.getDay(); // getDay() returns 0 for Sunday, 1 for Monday, ..., 6 for Saturday

// Check if it's Saturday (6) or Sunday (0)
if (day === 0 || day === 6) {
    console.log("It’s Fun day");
} else {
    console.log("It’s not a Fun day");
}

// Question no 5..............

// Current date ko get karo
var today1 = new Date();
var  dayOfMonth = today.getDate(); // getDate() se current date milti hai

// Agar date 15 se kam hai, toh pehla message dikhaye, warna doosra message
if (dayOfMonth < 16) {
    console.log("First fifteen days of the month");
} else {
    console.log("Last days of the month");
}

// Question no 6......................

// Current time ko nikaalo (milliseconds since Jan 1, 1970)
var currentTime = new Date();

// Milliseconds ko minutes mein convert karo
var minutesSinceEpoch = Math.floor(currentTime.getTime() / 60000);

console.log(minutesSinceEpoch);

// Question no 7...................

// Current time ko get karo
var currentTime = new Date();
var hours = currentTime.getHours(); // getHours() se current hour milta hai (0 se 23 tak)

// Agar hour 12 se kam hai, toh AM, warna PM
if (hours < 12) {
    alert("Its AM");
} else {
    alert("Its PM");
}

// Question no 8....................

// December 31, 2020 ko represent karne wala Date object create karo
var laterDate = new Date(2020, 11, 31); // 11 because months are 0-based, so 11 = December

console.log(laterDate); // Output: Thu Dec 31 2020 00:00:00 GMT+0000 (Coordinated Universal Time)

// Question no 9 ................

// 1st Ramadan on June 18, 2015
var ramadanStart = new Date(2015, 5, 18); // Month is 0-based, so 5 = June

// Current date
var currentDate = new Date();

// Calculate the difference in milliseconds
var timeDifference = currentDate.getTime() - ramadanStart.getTime();

// Convert milliseconds to days
var daysPassed = Math.floor(timeDifference / (1000 * 3600 * 24)); // 1000 ms = 1 second, 3600 sec = 1 hour, 24 hours = 1 day

// Show the number of days passed in an alert
alert("Days passed since 1st Ramadan: " + daysPassed);


// Questin no 10 ...............

// Reference date (January 1, 2015)
var startDate = new Date(2015, 0, 1); // 0 = January, 1 is the day

// Current date and time
var currentDate = new Date();

// Calculate the difference in milliseconds
var timeDifference = currentDate.getTime() - startDate.getTime();

// Convert milliseconds to seconds
var secondsElapsed = Math.floor(timeDifference / 1000);

// Display the result in the browser (using alert or console.log)
alert("Seconds elapsed since the beginning of 2015: " + secondsElapsed);

// Question NO 11......................

// Step 1: Create a Date object for the current date and time
var currentDate = new Date();

// Step 2: Extract the current hours
var currentHours = currentDate.getHours();
console.log("Current hours: " + currentHours);

// Step 3: Add 1 hour to the current date object (reset the time)
currentDate.setHours(currentDate.getHours() + 1);

// Step 4: Display the updated date object in the browser (using alert)
alert("Updated Date and Time (1 hour ahead): " + currentDate);

// Question no 12.....................
// Step 1: Current date aur time ko Date object mein store karo
var currentDate = new Date();

// Step 2: 100 saal peeche ki tareekh set karo
currentDate.setFullYear(currentDate.getFullYear() - 100);

// Step 3: Updated date ko alert mein dikhaye
alert("The date 100 years ago was: " + currentDate);

//  Question no 13...............

// Step 1: User se age input karwana
var userAge = prompt("Please enter your age:");

// Step 2: Current year nikaalna
var currentYear = new Date().getFullYear(); // current year ko get karna

// Step 3: Birth year calculate karna
var birthYear = currentYear - userAge;

// Step 4: Birth year ko alert mein show karna
alert("You were born in the year: " + birthYear);

// Question no 14...................

// Step 1: Customer Name aur Current Month ka input lena
var customerName = prompt("Apna naam daalein:");
var currentMonth = new Date().toLocaleString('default', { month: 'long' }); // Current month ka name

// Step 2: Number of units aur Charges per unit ka input lena
var numberOfUnits = parseFloat(prompt("Kitne units consume kiye hain?"));
var chargesPerUnit = parseFloat(prompt("Har unit ki charges kitni hain?"));

// Step 3: Net Amount calculate karna
var netAmountPayable = numberOfUnits * chargesPerUnit;

// Step 4: Late Payment Surcharge ka value (maan lo 50)
var latePaymentSurcharge = 50;  // Yeh surcharge tum change kar sakte ho

// Step 5: Gross Amount calculate karna (Net Amount + Late Payment Surcharge)
var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

// Step 6: Amount ko 2 decimal places tak round karna
netAmountPayable = netAmountPayable.toFixed(2);
grossAmountPayable = grossAmountPayable.toFixed(2);

// Step 7: Alert box mein bill dikhana
alert(
    "K-Electric Bill\n\n" +
    "Customer Name: " + customerName + "\n" +
    "Current Month: " + currentMonth + "\n" +
    "Number of Units: " + numberOfUnits + "\n" +
    "Charges per Unit: " + chargesPerUnit + "\n" +
    "Net Amount Payable (within Due Date): " + netAmountPayable + "\n" +
    "Late Payment Surcharge: " + latePaymentSurcharge + "\n" +
    "Gross Amount Payable (after Due Date): " + grossAmountPayable
);