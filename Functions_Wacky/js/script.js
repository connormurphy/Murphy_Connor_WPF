/*Connor Murphy
June 27, 2013
Functions Wacky
*/

// This calculator tells you how many months you will work throughout your life, and how much time you have left after you retire before you die.  This is all based on an average life expectancy of 79 years old.

var fact = alert("The average life expectancy in the US as of 2013 is about 79 years old.");

var startWork = prompt("What age did you start working?");
var age = prompt("How old are you now?");
var retire = prompt("What age do you plan to retire?");

var yearsToMonths1 = yearsWorked * 12;
var yearsToMonths2 = yearsLeft * 12;

var totalTimeWorked = retire - startWork * 12;
var monthsLeft = 79 - retire * 12;


var totalYearsWorked = calcYearsWorked (age, startWork, retire);
var totalYearsLeft = calcYearsLeft (age, startWork, retire);



var calcYearsWorked = function (age, startWork, retire){
	var yearsWorked = age - startWork;
	return yearsWorked;
}

var calcYearsLeft = function (age, startWork, retire){
	var yearsLeft = 79 - yearsWorked;
	return yearsLeft;
}



console.log("So far, you've been working for " + totalYearsWorked + " years.  Since your planning to retire at age " + retire + ", you will work for a total of " + totalTimeWorked + " months in your life.  This leaves you with " + monthsLeft + " months to do whatever you want to do!");
