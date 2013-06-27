/*Connor Murphy
June 27, 2013
Functions Wacky
*/

// This calculator tells you how many months you will work throughout your life, and how much time you have left after you retire before you die.  This is all based on an average life expectancy of 79 years old.

var fact = alert("The average life expectancy in the US as of 2013 is about 79 years old.");

var startWork = prompt("What age did you start working?");
var age = prompt("How old are you now?");
var retire = prompt("What age do you plan to retire?");


var totalSoFar = yearsSoFar(startWork, age, retire);

function yearsSoFar (startWork, age, retire){
	var soFar = age - startWork;
	return soFar;
}

console.log("So far, you've worked for " + totalSoFar + " years.");

var totalTimeWorked = startToRetire(startWork, age, retire);

function startToRetire (startWork, age, retire){
	var startToFinish = retire - startWork;
	var startToFinish2 = startToFinish * 12;
	return startToFinish2;
	
}


console.log("Since your planning on retiring at age " + retire + ", you will work for a total of " + totalTimeWorked + " months in your life.");

var whatsLeft = monthsLeft (startWork, age, retire);

function monthsLeft (startWork, age, retire){
	var timeLeft = 79 - retire
	var timeLeft2 = timeLeft * 12;
	return timeLeft2;
}

console.log("This leaves you with " + whatsLeft + " months to do whatever you want to!");

	

























//var totalTimeWorked = retire - startWork * 12;
//var monthsLeft = 79 - retire * 12;


/*var totalYearsWorked = calcYearsWorked (age, startWork, retire);

function calcYearsWorked (age, startWork, retire){
	var yearsWorked = age - startWork;
	return yearsWorked;
}

var totalYearsLeft = calcYearsLeft (age, startWork, retire);

function calcYearsLeft (age, startWork, retire){
	var yearsLeft = 79 - yearsWorked;
	return yearsLeft;
}

function totalTimeWorked(){
	var totalTime = retire - startWork *12;
	var monthsLeft = 79 - retire *12;
	return totalTime;
	return monthsLeft;
}

*/