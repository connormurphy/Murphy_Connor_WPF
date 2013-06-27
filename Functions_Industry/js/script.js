/*Connor Murphy
June 26 2013
Functions Industry
*/

	// How to find the volume of our backroom at work.
	

var length = prompt("What is the length of the room? (inches)"); // length of room
var width = prompt("What is the width of the room? (inches)"); // width of room
var height = prompt("What is the height of the room? (inches)"); // height of room

var getVolume = function(length, width, height){ // function
	var volume = length * width * height; // calculation to get volume
	return volume; // this returns the information to the printout
	
}

var useFunction = getVolume(length, width, height); // this is used to call the function and printout what the actual calculation is.

console.log("The volume of this room is " + useFunction + " cubic inches.  The length was " + length + "
