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