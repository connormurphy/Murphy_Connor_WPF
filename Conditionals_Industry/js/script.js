/*Connor Murphy
June 19, 2013
Conditionals Industry
*/

// Conditionals Industry.  Im creating a script to be used by a client that will tell me what kind of website they need designed, and how much money it will cost them.  The user will be able to input how many pages they need, and what their budget is.  The script will print out if they have enough, or if they need more.

var pages = prompt ("How many pages do you need designed and developed?");
var budget = prompt ("What is your budget for this project?");

//var moneyResponsive = 120;
//var moneyCms = 300;
var totalPages = pages * 90;


(totalPages <= budget) ? console.log("You entered a total of " + pages + " pages, and said your budget is $" + budget + ".  You have enough money!") : console.log("You entered a total of " + pages + " pages, and said your budget is $" + budget + ".  You need more money, sorry!");



//var responsiveCms = responsive == "yes" && cms == "yes";



