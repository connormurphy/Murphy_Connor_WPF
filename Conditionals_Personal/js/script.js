/*Connor Murphy
June 19, 2013
Conditionals Personal
*/

// I want to donate blood to United Blood Services.  This will calculate if I am able to do so based on a few variables.


var requiredAge = 16;
var requiredWeight = 110;
var requiredHeight = 5;



var howOld = prompt ("How old are you?");
var weight = prompt ("How much do you weigh?");
var height = prompt ("How tall are you in feet?");


var qualify = howOld > requiredAge && weight > requiredWeight && height > requiredHeight;
var noQualify = howOld < requiredAge && weight < requiredWeight && height < requiredHeight;


if(noQualify == true){
	console.log("You don't meet the qualifications to donate blood, sorry!");
	
}else if(howOld < 16){
	console.log("You can donate blood, but only if you have a parent present.");
}

else if(weight < requiredWeight){
	console.log("You need to gain some weight before your able to donate blood!");
}

else if(height < requiredHeight){
	console.log("You need to gain a few inches before your able to donate blood!");
}


else{
	console.log("You meet the qualifications to donate blood!");
}





