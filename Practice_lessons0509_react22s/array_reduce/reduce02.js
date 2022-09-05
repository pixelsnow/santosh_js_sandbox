"use strict";

/**
Calculate the sum of the grades array and store it in a variable called sum.

/**
 *
 */
let grades = [10, 5, 15, 20];

// calculate the sum of these grades
const sum = grades.reduce((total, current) => total + current, 0);
console.log(sum);
