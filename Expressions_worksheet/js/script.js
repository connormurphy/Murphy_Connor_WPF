/*Connor Murphy
June 10, 2013
Expression Worksheet
*/



/* Dog Years */


var sparkysAge = 7; //This is human age of Sparky
var dogYears = 7 + sparkysAge;  // This shows how old Sparky is in "dog years"



console.log(dogYears);



//Slice of Pie Part 1

var numSlices = 8;  //This shows how many slices are in a pizza
var numPeople = 10;  // This the number of people at the party
var numPizzas = 4;   // This is the number of pizzas that were ordered

var slices_per_person = numSlices * numPizzas / numPeople; 

console.log(slices_per_person);  // This shows how many pieces each person will eat at the party.


//Slices of Pie part 2


var numSlices = 8;  //This shows how many slices are in a pizza
var numPeople = 10;  // This the number of people at the party
var numPizzas = 8;   // This is the number of pizzas that were ordered

var sparkysPizza = numPizzas * numSlices % numPeople;  // This shows remainder of pizza after its been evenly distributed to each person.

console.log(sparkysPizza);


//Average Shopping Bill

var groceryTotals = [190,  200, 185, 215, 210]; // This is money spent on groceries for the past 5 weeks
var total = groceryTotals[0] + groceryTotals[1] + groceryTotals[2] + groceryTotals[3] + groceryTotals[4];  // This adds up any of the numbers that are submitted into the groceryTotals var.

var averageWeekly = total / 5; //
//This gets the average weekly total spent on groceries  

console.log(averageWeekly);

