"use strict";

/**
Task 1;
let myAlphabet = ['A', 'B', 'C', 'D','E','F', 'G'];
What is the length of the array?
Write a function called myAlphabetLength which console.logs the length of the array
Within the function also use an if-conditional statement that checks if the number of items within the array are less than 5
**/
let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];
const myAlphabetLength = (myAlphabet) => {
  console.log(myAlphabet.length);
  if (myAlphabet.length < 5) return true;
  else return false;
};
console.log(myAlphabetLength(myAlphabet));
/**
Task 2;
Declare a arrow function checkFunc that takes a string and a boolean as parameters
Call the function using 2 arguments
**/
const checkFunc = (str, bool) => {};
checkFunc("heya", false);
/**
Task 3;
Declare and initialize an array called Planets with 5 string values
console.log each item in the array
Also console.log the index in each iteration
**/
const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];
planets.forEach((planet) => {
  console.log(planet, planets.indexOf(planet));
});
/**
Task 4:
Declare and initialize an array called wowDatatypes
The array must have 5 different data types (NOT objects)
Iterate over the array and console.log each item in the array + it’s index and data type in the array
**/
const wowDatatypes = [10, true, "heya", undefined, NaN];
wowDatatypes.forEach((dataType) => {
  console.log(dataType, wowDatatypes.indexOf(dataType), typeof dataType);
});
/**
Task 5:
console.log each item in this array WITHOUT using a for loop
   let myArr = [ 1, 2, 'One', true];
**/
let myArr = [1, 2, "One", true];

/**
Task 6:
let student1Courses = ['Math', 'English', 'JSProgramming'];
let student2Courses = ['Geography', 'Spanish', 'JSProgramming'];
Loop over the 2 arrays and if there are any common courses, if so console.log them
**/
let student1Courses = ["Math", "English", "JSProgramming", "Biology"];
let student2Courses = ["Geography", "Biology", "Spanish", "JSProgramming"];
student1Courses.forEach((course1) => {
  if (student2Courses.includes(course1)) console.log(course1);
});

/*

Task 7:
let furniture = ['Table', 'Chairs','Couch'];
For each item in this array console.log the letters in each item
**/
let furniture = ["Table", "Chairs", "Couch"];
furniture.forEach((item) => {
  for (let i = 0; i < item.length; i++) console.log(item[i]);
});
