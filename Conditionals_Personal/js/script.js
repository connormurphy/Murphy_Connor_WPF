/*Connor Murphy
June 19, 2013
Conditionals Personal
*/

// I want to donate blood to United Blood Services.  This will calculate if I am able to do so based on a few variables.

var howOld = prompt ("How old are you?");
var weight = prompt ("How much do you weigh?");
var height = prompt ("How tall are you in feet?");

var qualify = howOld >= 16 && weight >= 100 && height >= 5;
var noQualify = howOld <= 16 && weight <= 100 && height <= 5;

if(qualify = true){
	console.log("You meet the qualifications to donate blood!");
}else{
	console.log("You dont meet the qualifications to donate blood, please try at a later time.");
}