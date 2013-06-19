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