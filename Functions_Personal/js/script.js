/*Connor Murphy
June 26 2013
Functions Personal
*/

// This will calculate if you drink enough water each week.  It's recommended you drink 8, 8oz glasses each day.

var glasses = prompt("How many glasses of water do you drink daily?") // this asks the user how much water they drink per day
var weeks = 1; // this is over the course of a week
var expected = 8; // this is the expected amount of glasses of water per day.


var calcWater = function(weeks, glasses){ // defining the function
	var total = weeks * glasses; // getting calculation.
	return total;
}

var totalGlasses = calcWater(weeks, glasses); // named the function

if(totalGlasses >= expected){
	console.log("You are on the right track and drink enough water throughout the week to stay hydrated!");} // this tells user if they are drinking enough water

else{
	console.log("You are only drinking " + glasses + " glasses of water daily.  It's recommended you drink 8 to stay hydrated!");
} // if they arent drinking enough, this is the message they get
	