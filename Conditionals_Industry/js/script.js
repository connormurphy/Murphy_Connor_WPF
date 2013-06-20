/*Connor Murphy
June 19, 2013
Conditionals Industry
*/

// Conditionals Industry.  Im creating a script to be used by a client that will tell me what kind of website they need designed, and how much money it will cost them.  The user will be able to input how many pages they need, and what their budget is.  The script will print out if they have enough, or if they need more.

var pages = prompt ("How many pages do you need designed and developed?"); // This asks a user to input how many pages they need for the project.
var budget = prompt ("What is your budget for this project?"); // This asks a user for their budget

var totalPages = pages * 90; // This takes what the user inputs for pages, and multiplies by 90.  Each page is $90.



(totalPages <= budget) ? console.log("You entered a total of " + pages + " pages, and said your budget is $" + budget + ".  I would charge you $" + totalPages + ".  You have enough money!" ) : console.log("You entered a total of " + pages + " pages, and said your budget is $" + budget + ".  You need a total of $" + totalPages + " for me to start your project. "); // ternary operator to show if they have enough money, or to tell them how much they need total.








