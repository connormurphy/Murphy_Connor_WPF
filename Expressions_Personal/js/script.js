/*Connor Murphy
June 11, 2013
Expressions Personal
*/




// How much chicken to buy for a family dinner
var how_many_people = parseInt(prompt("Enter the number of people in your family:"));  // This is the number of people in your immediate family.
var how_many_guests = parseInt(prompt("Enter the number of guests your having over:")); // Enter how many dinner guests you will be having.
var numPieces = parseInt(prompt("Enter the number of pieces each person will eat:")); // Number of pieces you'd like each person to have.

var people = how_many_people + how_many_guests;  // This gets you the total number of people.

var chicken = people * numPieces;  // This will calculate how many pieces of chicken by multiplying the number of people, and number of pieces each.

alert("You will need to buy " + chicken + " pieces of chicken for your family dinner")