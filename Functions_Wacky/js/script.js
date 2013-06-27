/*Connor Murphy
June 27, 2013
Functions Wacky
*/

// This calculator tells you how many months you will work throughout your life, and how much time you have left after you retire before you die.  This is all based on an average life expectancy of 79 years old.

var fact = alert("The average life expectancy in the US as of 2013 is about 79 years old.");

var startWork = prompt("What age did you start working?");
var age = prompt("How old are you now?");
var retire = prompt("What age do you plan to retire?");

var calcMonthsWorked = function (age, startWork, retire){
	var monthsWorked = age - startWork;
	return monthsWorked;
}

var calcMonthsLeft = function (age, startWork, retire){
	var monthsLeft = 79 - monthsWorked;
	return monthsLeft;
}

var totalMonthsWorked = calcMonthsWorked (age, startWork, retire);
var totalMonthsLeft = calcMonthsLeft (age, startWork, retire);

