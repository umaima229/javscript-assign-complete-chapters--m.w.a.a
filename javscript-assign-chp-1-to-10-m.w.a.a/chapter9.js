// -------------chapter 9 all questions solved----------------------

// -------------question no 3-----------

// ======Example 1===
var question = prompt ("YOUR NAME");

// ========Example 2 ======
var question =  ("YOUR NAME");
var ans = ("Umaima");
var spec = prompt(question,ans);

// question no 4 no answer cuz ya loop wala ha or abhi tak loop wala chapter ni aya ok

// question no 5
var english = 100;
    var math = 100;
    var physics = 100;
    var obtain = english + math + physics;

    var obtain1 = 85;
    var obtain2 = 90;
    var obtain3 = 80;
    var total = obtain1 + obtain2 + obtain3;

    var final = (total / obtain) * 100;

    document.write("<h2>Result Card</h2>");

    document.write("<table border='1' cellpadding='10'>");
    document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");

    document.write("<tr><td>English</td><td>" + english + "</td><td>" + obtain1 + "</td></tr>");
    document.write("<tr><td>Math</td><td>" + math + "</td><td>" + obtain2 + "</td></tr>");
    document.write("<tr><td>Physics</td><td>" + physics + "</td><td>" + obtain3 + "</td></tr>");

    document.write("<tr><th>Total</th><th>" + obtain + "</th><th>" + total + "</th></tr>");
    document.write("</table>");

    document.write("<h3>Percentage = " + final + "%</h3>");

