/*Connor Murphy
June 11, 2013
Expressions Wacky
*/



// How many boxes of jello would it take to fill your entire pool?

//  There are 128oz in a a gallon
// 8 oz of water in a cup
// Each box of jello takes 2.5 cups of water.
// If you have a 20,000 gallon pool thats roughly $96,000 in jello.




var gallons = prompt("How many gallons of water does your pool hold?"); // Enter any number here for the size of your pool.
var inCup = prompt("How many ounces are in a cup?");  // Enter however many ounces of water for the cups your using.
var inGallon = prompt("How many ounces in a gallon?"); // Enter however many ounces are in a gallon.

var gallon = 128; // 128oz of water is in a typical gallon
var getOunces = gallon * gallons;  //  This gets the number of ounces of water from the amount your pool can hold.

var num_of_gallons = 20;  // This is divided by the number of ounces to get you the number of boxes of jello you will need.

var getBoxes = getOunces / num_of_gallons;  
// This calculates how many boxes of jello you will need depending on how much water your pool can hold.



alert("To fill up your entire pool of jello, it would take " + getBoxes + " boxes of jello.");  //  Final printout of how many boxes you will need to fill your entire pool with jello based on how many gallons of water it can hold.

