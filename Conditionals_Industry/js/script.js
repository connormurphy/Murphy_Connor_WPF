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
var milesLeft = gasLeft * mpg;  // this shows how many miles are left

if(milesLeft < 200) { // this tells you if you need any gas based on how many miles you have left and how much gas you have
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

var studentGrade = 86;  // Put number here and you will see what grade you get.

if(studentGrade < 100 && studentGrade > 95){
	console.log("You have a " + studentGrade + "% which means you earned a A in the class!"); // This is the range to get an A
}

else if (studentGrade > 85 && studentGrade < 94){
	console.log("You have a " + studentGrade + "% which means you earned a B in the class!"); // This is the range to get an B
}

else if (studentGrade > 75 && studentGrade < 84){
	console.log("You have a " + studentGrade + "% which means you earned a C in the class!"); // This is the range to get an C
}

else if (studentGrade > 70 && studentGrade < 74){
	console.log("You have a " + studentGrade + "% which means you earned a D in the class!"); // This is the range to get an D
}

else if (studentGrade > 0 && studentGrade < 69){
	console.log("You have a " + studentGrade + "% which means you earned a F in the class!"); // This is the range to get an E
}







// Tire pressure


var frontLeft = 32;  // all variables measured in PSI
var frontRight = 32;
var backLeft = 36;
var backRight = 36;


var frontGood = frontLeft === frontRight;  // this makes sure both front tires are the same PSI
var backGood = backLeft === backRight;  // this makes sure both back tires are the same PSI

if(frontGood  && backGood ===true){   // If both front tires equal same PSI, and both back tires have the same PSI, the car passes spec
	console.log("The tires pass spec!");

}else{
	console.log("Get your tires checked out!"); // If one number is off from the front set or back set, it will not pass spec.
}