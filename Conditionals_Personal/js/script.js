/*Connor Murphy
June 19, 2013
Conditionals Personal
*/

// I want to donate blood to United Blood Services.  This will calculate if I am able to do so based on a few variables.


var requiredAge = 16; // This is required age to donate blood.
var requiredWeight = 110; // This is required weight in pounds to donate blood.
var requiredHeight = 5; // Must be atleast 5' tall to donate blood.



var howOld = prompt ("How old are you?");
var weight = prompt ("How much do you weigh?");
var height = prompt ("How tall are you in feet?"); // These are all questions asked in order to see if you qualify.


var qualify = howOld > requiredAge && weight > requiredWeight && height > requiredHeight; // This calculates if what the user inputted is greated then the requirements.
var noQualify = howOld < requiredAge && weight < requiredWeight && height < requiredHeight; // This calculates if the user does not qualify to donate blood.


if(noQualify == true){
	console.log("You don't meet the qualifications to donate blood, sorry!"); // if the user doesn't qualify, this is the message they get
	
}else if(howOld < 16){
	console.log("You can donate blood, but only if you have a parent present."); // this says if the user is less then 16 years old, they can donate but only with a parent.
}

else if(weight < requiredWeight){
	console.log("You need to gain some weight before your able to donate blood!"); // this will tell a user if they need to gain more weight.
}

else if(height < requiredHeight){
	console.log("You need to gain a few inches before your able to donate blood!"); // this will tell a user if they need to be taller.
}


else{
	console.log("You meet the qualifications to donate blood!"); // if the else if conditions above are false, they will get this message.
}





