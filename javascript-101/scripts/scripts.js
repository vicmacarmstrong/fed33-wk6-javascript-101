// PROGRAMMING BASICS!!
console.log("hello world!");

// COMMENTS ===============================================
// My one line comment
/*
  My
  multiline
  comment
*/

// VARIABLES ===============================================
// Create a variable named `x`
var x = 10;

// console.log(x +5);

// Have multiple words? Camel-case it!
var PowerRangersAreCool = true;

// Create another variable, assign it to a Boolean
var aFalseyVariable = false;

// Variables are case sensitive:
var apples = 5;
var Apples = 10;

// Other ways of creating variables
const chair = 5;
let table = 4;

// BASIC MATH ===============================================
// Simple math between numbers
var sum = 4 + 4;
var difference = 10 - 5;
var product = 2 * 3;
var quotient = 20 / 4;
//  Math with variables
var equation = sum + difference - product;

// BEDMAS
var value = (10 - 2) * 5;

// STRINGS ===============================================
// Simple string
var name = "My name is Victoria";
var dinosaur = 'My favourite dino is pteradactyl';

var SingleQuotedString = 'It\'s cold outside';
var DoubleQuotedString = "\"Sally said, \"Ew\".";


// String concatenation
// "Your bank balance is $10000000!"
var bankAccount = 10;
var bankStatement = "Your bank accound balance is $" + bankAccount + ". You're rich!";
// The + opperator allows you to add more to the strings

//What's your age?
// Store this year in a variable
// Store your birth year in a variables
// Calculate your age and print out a sentence that says:
// "you are <x> years old."

var thisYear = 2019;
var myBirthYear = 1991;
var myAge = "You are " + (thisYear - myBirthYear) + " years old.";

console.log(myAge);

var coolNewString = `Your are ${myAge} years old.`;

//alternate
// var age = thisYear - myBirthYear;
// var myAge = "You are " + age + " years old.";

// Adding numbers vs. Adding strings

"4" + 5 //returns a string of "45"
10 + "6" //returns a string of 106

// ARRAY ===============================================
// A list of fruits
var fruits = ["apple", "banana", "pear", "orange", "kiwi"];
// index positions: 0   1         2         3         4

//fruits[2] calls out "pear"
//the first item in the array is counted as '0'

console.log(fruits[4]);


// All the data types in this list! Try to include at least:
// 1) Number (Integer)
// 2) String
// 3) Variable
// 4) Boolean

// Get the first item from the list
console.log(fruits[0]);
// Get the third item from the list
console.log(fruits[2]);
// Get the last item from the list
console.log(fruits[4]);


console.log(fruits[fruits.length - 1]);
// Append another item to the end of the list with `push`
fruits.push("peach");

// Add an item at the beginning of the list with `unshift`
fruits.unshift("plum")
// ["more mango lol", apple", "banana", "peach", "orange", "kiwi", "berry", "mango"]

// To reassign an item in a list
fruits[2] = "grape";


// ARRAY::Loops (Bonus)
// Print each item in the list
var colours = ["red", "green", "blue", "yellow", "purple"];

// keyword => 'for'
// The 'for' loop needs to know 3 things:
// 1. where to start (initial value)
// 2. condition for when it should continue looping
// 3. how to increment

for(var i = 0; i < colours.length; i = i + 1) {console.log(colours[i])}

//i += 1;
//i++
//Those are other ways to add by 1

// Object ===============================================
// Create a car. It should have a few properties:
// 1) name - string
// 2) brand - string
// 3) wheels - integer
// 4) passengers - list
// 5) park - boolean

// Access values from the car
// Use square bracket notation & dot notation

// Update the 'colour' property's value

// FLOW CONTROL::If/else ===============================================
// See project files

if (9 > 10) {
  console.log("this is true");
}
else {
  console.log("this is false")
}
