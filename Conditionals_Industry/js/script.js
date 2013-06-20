/*Connor Murphy
June 19, 2013
Conditionals Industry
*/

// Conditionals Industry.  Im creating a script to be used by a client that will tell me what kind of website they need designed, and how much money it will cost them.  The user will be able to input how many pages they need, and what their budget is.  The script will print out if they have enough, or if they need more.

var pages = prompt ("How many pages do you need designed and developed?");
var budget = prompt ("What is your budget for this project?");

var totalPages = pages * 90;
var discount = totalPages * .10;


(totalPages <= budget) ? console.log("You entered a total of " + pages + " pages, and said your budget is $" + budget + ".  I would charge you $" + totalPages + ".  You have enough money!" ) : console.log("You entered a total of " + pages + " pages, and said your budget is $" + budget + ".  You need a total of $" + totalPages + " for me to start your project. ");








