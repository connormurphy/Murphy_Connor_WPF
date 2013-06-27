/*Connor Murphy
June 26 2013
Functions Personal
*/

// This will calculate if you drink enough water each week.  It's recommended you drink 8, 8oz glasses each day.

var glasses = prompt("How many glasses of water do you drink daily?")
var weeks = 1;
var expected = 8;


var calcWater = function(weeks, glasses){
	var total = weeks * glasses;
	return total;
}

var totalGlasses = calcWater(weeks, glasses);

if(totalGlasses >= expected){
	console.log("You are on the right track and drink enough water throughout the week to stay hydrated!");}

else{
	console.log("You are only drinking " + glasses + " glasses of water daily.  It's recommended you drink 8 to stay hydrated!");
}
	