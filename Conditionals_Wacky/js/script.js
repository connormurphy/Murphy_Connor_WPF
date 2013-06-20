/*Connor Murphy
June 19, 2013
Conditional Wacky
*/

// Im going to create a Blood alcohol Content calculator that helps a person see the BAC %.  This is all based on a 12oz beer.


var beers = prompt ("How many beers have you had?");
var weight = prompt ("How much do you weigh?");
var gender = prompt ("Male or female?");
var hours = prompt ("How many hours has it been since you stopped drinking?");

var ozBeers = beers * 12 * 0.06;


var bacMale = (ozBeers * 5.14/weight * 0.73) - .015 * hours;

var bacFemale = (ozBeers * 5.14/weight * 0.66) - .015 * hours;

if(gender = "male"){
	console.log("Your BAC level is " + bacMale + "%");
}

else if(gender = "female"){
	console.log("Your BAC level is " + bacFemale + "%");
}