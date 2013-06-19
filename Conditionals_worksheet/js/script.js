/*Connor Murphy
June 18, 2013
Conditionals Worksheet
*/

// Stuff your face I

var weight = 252;

if(weight >= 250){
	console.log("The competitor qualifies for the heavyweight division.");


}else{
	console.log("The competitor needs to gain some weight");
}



// Last chance for gas


// can go 300miles if mpg is 25 and gas tank holds 12 gallons.

var mpg = 25; // miles per gallon
var gauge = 50;  // % of gas left
var gasTank = 12;  // gallons


var gasLeft = gasTank * gauge/100;
var milesLeft = gasLeft * mpg;

if(milesLeft < 200) {
	console.log("You only have " + gasLeft + " gallons of gas left in your tank, better get gas now while you can!");
	
}else{ 
	console.log("Yes you can make it without getting gas!");
}




// Grade letter calculator

var A = 95 - 100;
var B = 85 - 94;
var C = 75-84;
var D = 70 - 74;
var F = 0 - 69;

var studentGrade = 86;

if(studentGrade < 100 && studentGrade > 95){
	console.log("You have a " + studentGrade + "% which means you earned a A in the class!");
}

else if (studentGrade > 85 && studentGrade < 94){
	console.log("You have a " + studentGrade + "% which means you earned a B in the class!");
}

else if (studentGrade > 75 && studentGrade < 84){
	console.log("You have a " + studentGrade + "% which means you earned a C in the class!");
}

else if (studentGrade > 70 && studentGrade < 74){
	console.log("You have a " + studentGrade + "% which means you earned a D in the class!");
}

else if (studentGrade > 0 && studentGrade < 69){
	console.log("You have a " + studentGrade + "% which means you earned a F in the class!");
}