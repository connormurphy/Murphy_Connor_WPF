/*Connor Murphy
June 26 2013
Functions Worksheet
*/

// Circumference of a circle


function circumference (){ // This is the function to run the circumference
	var radius = 6; // this is the radius of the circle, can be changed to anything
	var getCircum = 2 * 3.14 * radius; // calculation to get circumference of a circle.
	console.log("The circumference of the circle is " + getCircum + "") // this is the printout for the circumference of a circle.
	
}
circumference(); // This calls the function to display the console log printout

// Stung!


var killAnimal = function(){ // This is the function to figure out how many stings it takes
	var toKill = beeStings * weight; // this is what calculates what it takes to kill an animal
	return toKill;
}

var weight = prompt("How much does this animal weight? (lbs)"); // This asks the user to enter weight.
var beeStings = 8.666666667; // number of bee stings per pound to kill an animal
var numStings = killAnimal(beeStings, weight); // this calls the function.
console.log("It takes " + numStings + " stings to kill a " + weight + " pound animal."); // This prints out the result based on how many pounds the user enters.

	

