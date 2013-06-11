/*Connor Murphy
June 10, 2013
Expression Worksheet
*/



/* Dog Years */


var sparkysAge = 7; //This is human age of Sparky
var dogYears = 7 + sparkysAge;  // This shows how old Sparky is in "dog years"


console.log("Sparky is " + sparkysAge + " human years old which is " + dogYears + " in dog years")



//Slice of Pie Part 1

var numSlices = 8;  //This shows how many slices are in a pizza
var numPeople = 10;  // This the number of people at the party
var numPizzas = 4;   // This is the number of pizzas that were ordered

var slices_per_person = numSlices * numPizzas / numPeople; 


console.log("Each person ate " +slices_per_person + " slices at the party");  // This shows how many pieces each person will eat at the party.


//Slices of Pie part 2


var numSlices = 8;  //This shows how many slices are in a pizza
var numPeople = 10;  // This the number of people at the party
var numPizzas = 4;   // This is the number of pizzas that were ordered

var sparkysPizza = numPizzas * numSlices % numPeople;  // This shows remainder of pizza after its been evenly distributed to each person.


console.log("Sparky got " + sparkysPizza + " slices of pizza.")


//Average Shopping Bill

var groceryTotals = [190,  200, 185, 215, 210]; // This is money spent on groceries for the past 5 weeks
var total = groceryTotals[0] + groceryTotals[1] + groceryTotals[2] + groceryTotals[3] + groceryTotals[4];  // This adds up any of the numbers that are submitted into the groceryTotals var.  Total amount on groceries.

var averageWeekly = total / 5; 
//This gets the average weekly total spent on groceries  


console.log("You have spent a total of $ " + total + " on groceries over 5 weeks.  This is an average of $ " + averageWeekly + " per week.")



//Discounts

var originalPrice = 180;
var discountPercentage = .20;
// description: New Watch
var salesTax = .08;

var addDiscount = discountPercentage * originalPrice;  // Totals 36 dollars in discount price.
var add_sales_tax = salesTax * originalPrice;  // 14.40 in tax.

var price_with_tax = originalPrice - addDiscount + add_sales_tax;  // This is used to get price with tax.
var price_without_tax = originalPrice - addDiscount;  // Price without tax.



console.log(price_with_tax);
console.log(price_without_tax);



