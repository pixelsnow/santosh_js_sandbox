"use strict";

/**
Complete the function such that it returns the sum of the numbers it receives as a parameter.
/**
 *
 */

/**
 * @param {number[]} numbers
 */
const sumNumbers = (numbers) => {
  return numbers.reduce((total, current) => total + current, 0);
};

// Sample usage - do not modify
console.log(sumNumbers([10, 20, 30])); // 60
console.log(sumNumbers([2, 4, 2, 10])); // 18
