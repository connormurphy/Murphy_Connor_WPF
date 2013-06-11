/*Connor Murphy
June 11, 2013
Expressions Personal
*/




// How much chicken to buy for a family dinner
var how_many_people = parseInt(prompt("Enter the number of people in your family:"));
var how_many_guests = parseInt(prompt("Enter the number of guests your having over:"));
var numPieces = parseInt(prompt("Enter the number of pieces each person will eat:"));

var people = how_many_people + how_many_guests;

var chicken = people * numPieces;

alert("You will need to buy " + chicken + " pieces of chicken for your family dinner")