/*Connor Murphy
June 27, 2013
Functions Wacky
*/

// This calculator tells you how many months you will work throughout your life, and how much time you have left after you retire before you die.  This is all based on an average life expectancy of 79 years old.

var fact = alert("The average life expectancy in the US as of 2013 is about 79 years old."); // This is to tell the user this script is based on a person living until they are 79.

var startWork = prompt("What age did you start working?"); // prompt questions to gather user information
var age = prompt("How old are you now?");
var retire = prompt("What age do you plan to retire?");


var totalSoFar = yearsSoFar(startWork, age, retire); // calls the function

function yearsSoFar (startWork, age, retire){ // function for years worked so far
	var soFar = age - startWork; // calculation for how long user has worked so far
	return soFar; // returns to totalSoFar above.
}



var totalTimeWorked = startToRetire(startWork, age, retire); // Calls the function

function startToRetire (startWork, age, retire){ // This function tells how many months you will work in your life based on when you started working and when you want to be retired by
	var startToFinish = retire - startWork;
	var startToFinish2 = startToFinish * 12; // Takes retired age, and when you started and multiplies by 12 to get month count.
	return startToFinish2;
	
}




var whatsLeft = monthsLeft (startWork, age, retire); // Calls the function

function monthsLeft (startWork, age, retire){ // This function tells you how many months you have left after you retire. 
	var timeLeft = 79 - retire // average life expectancy minus the desired retire age.
	var timeLeft2 = timeLeft * 12; // gets month count.
	return timeLeft2; // returns to whatsLeft variable.
}




console.log("So far, you've worked for " + totalSoFar + " years.  Since your planning on retiring at age " + retire + ", you will work for a total of " + totalTimeWorked + " months in your life.  This leaves you with " + whatsLeft + " months of free time to do whatever you want to before you die!");

//console printout message 
	