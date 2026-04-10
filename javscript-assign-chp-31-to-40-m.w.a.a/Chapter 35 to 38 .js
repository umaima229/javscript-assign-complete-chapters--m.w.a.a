// Javascript Chapter 35 to 38 All question solved

// Question no 1 ...........

function displayCurrentDateTime() {
    // Current date aur time nikaalna
    var currentDateTime = new Date();

    // Display the current date and time in the browser (console or alert)
    alert("Current Date and Time: " + currentDateTime);
}

// Call the function to display the current date and time
displayCurrentDateTime();

// Question no 2 ...........

function greetUser() {
    // User se first name aur last name lena
    var firstName = prompt("Enter your first name:");
    var lastName = prompt("Enter your last name:");

    // Full name bana ke greet karna
    var fullName = firstName + " " + lastName;

    // User ko greet karna
    alert("Hello, " + fullName + "! Welcome!");
}

// Call the function to greet the user
greetUser();

// Question no 3 ............

function addTwoNumbers() {
    // User se do numbers input karwana
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));

    // Dono numbers ko add karna
    var sum = num1 + num2;

    // Sum ko return karna
    return sum;
}

// Call the function and show the result
var result = addTwoNumbers();
alert("The sum of the two numbers is: " + result);

// Question no 4....................
// Calculator is done 

// Question no 5 ..........
function square(number) {
    return number * number; // Square karna: number ko apne aap se multiply karna
}

// Example usage
var result = square(5);
alert("The square of 5 is: " + result); // Output: The square of 5 is: 25

// Question no 6 .............
function factorial(num) {
    var result = 1; // Initialize result to 1 (factorial of 0 is 1)
    
    // Loop to multiply all numbers from 1 to num
    for (var i = 1; i <= num; i++) {
        result *= i; // Multiply result with current i
    }

    return result;
}

// Example usage
var num = 5;
var result = factorial(num);
alert("The factorial of " + num + " is: " + result); // Output: The factorial of 5 is: 120

// Question no 7 ..............
function displayCounting(start, end) {
    // Loop to display numbers from start to end
    for (var i = start; i <= end; i++) {
        document.write(i + "<br>"); // Display each number in a new line
    }
}

// Example usage
var start = 1;
var end = 10;

// Call the function to display the counting
displayCounting(start, end);

// Question no 8 .............

function calculateHypotenuse(base, perpendicular) {
    // Inner function to calculate square of a number
    function calculateSquare(x) {
        return x * x; // Return the square of x
    }

    // Calculate square of base and perpendicular using the inner function
    var baseSquare = calculateSquare(base);
    var perpendicularSquare = calculateSquare(perpendicular);

    // Hypotenuse^2 = Base^2 + Perpendicular^2
    var hypotenuseSquare = baseSquare + perpendicularSquare;

    // Calculate hypotenuse by taking square root of hypotenuseSquare
    var hypotenuse = Math.sqrt(hypotenuseSquare);

    return hypotenuse; // Return the hypotenuse value
}

// Example usage
var base = parseFloat(prompt("Enter the base of the triangle:"));
var perpendicular = parseFloat(prompt("Enter the perpendicular of the triangle:"));

var result = calculateHypotenuse(base, perpendicular);
alert("The hypotenuse of the triangle is: " + result);

// Question no 9...........

function calculateArea(width, height) {
    return width * height; // Area ka formula: width * height
}

// Example: Direct values pass kar rahe hain
var area = calculateArea(5, 10); // 5 width aur 10 height ke liye area calculate ho raha hai
alert("The area of the rectangle is: " + area); // Output: 50

// Questuion no 10 ............
function isPalindrome(str) {
    // Convert string to lowercase and remove non-alphanumeric characters (optional)
    var cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

    // Reverse the cleaned string
    var reversedStr = cleanedStr.split("").reverse().join("");

    // Check if the original cleaned string is equal to the reversed string
    if (cleanedStr === reversedStr) {
        return true; // String is a palindrome
    } else {
        return false; // String is not a palindrome
    }
}

// Example usage
var word = prompt("Enter a word to check if it's a palindrome:");
if (isPalindrome(word)) {
    alert(word + " is a palindrome.");
} else {
    alert(word + " is not a palindrome.");
}

// Question no 11.........
function isPalindrome(str) {
    // Convert string to lowercase and remove non-alphanumeric characters (optional)
    var cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

    // Reverse the cleaned string
    var reversedStr = cleanedStr.split("").reverse().join("");

    // Check if the original cleaned string is equal to the reversed string
    if (cleanedStr === reversedStr) {
        return true; // String is a palindrome
    } else {
        return false; // String is not a palindrome
    }
}

// Example usage
var word = prompt("Enter a word to check if it's a palindrome:");
if (isPalindrome(word)) {
    alert(word + " is a palindrome.");
} else {
    alert(word + " is not a palindrome.");
}

// Question no 12...........
function findLongestWord(str) {
    // Split the string into an array of words
    var words = str.split(" ");

    // Initialize a variable to hold the longest word
    var longestWord = "";

    // Loop through the words array and find the longest word
    for (var i = 0; i < words.length; i++) {
        // If the current word is longer than the longestWord, update it
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord; // Return the longest word
}

// Example usage
var exampleString = "Web Development Tutorial";
var result = findLongestWord(exampleString);
alert("The longest word is: " + result); // Output: 'Development'


// Question no 13...............
function countOccurrences(str, letter) {
    // Convert the string to an array of characters and filter by the specified letter
    var count = str.split("").filter(function(char) {
        return char === letter; // Check if the character matches the specified letter
    }).length; // The length of the filtered array gives the count

    return count;
}

// Example usage
var sampleString = "JSResourceS.com";
var sampleLetter = "o";
var result = countOccurrences(sampleString, sampleLetter);
alert("The letter '" + sampleLetter + "' appears " + result + " times in the string.");

// Question no 14............

function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;  // Formula for circumference
    console.log("The circumference is " + circumference);  // Output the circumference
}

function calcArea(radius) {
    var area = Math.PI * radius * radius;  // Formula for area
    console.log("The area is " + area);  // Output the area
}

// Example usage
var radius = 5;
calcCircumference(radius);  // Output: The circumference is 31.41592653589793
calcArea(radius);  // Output: The area is 78.53981633974483