/*Connor Murphy
June 11, 2013
Expressions Industry
*/



// I work at a grocery store as an Assistant Grocery Manager and often have to write orders.  This problem will calculate how to order a specific item and how much you need of it.

// Going to use Maxwell House Coffee for the example.

//How many cases to order to last you for the next 3 days.

var cases_in_back = prompt("Enter the number of cases you have in your backroom already:")
var cases_sold_per_day = prompt("Enter the number of cases you sell per day:")
var anticipated = prompt("Enter the number of cases you intend to sell in the next 3 days:")

var what_to_order = anticipated - cases_in_back;

alert("You will need to order " + what_to_order +" cases of coffee to last you the next 3 days");