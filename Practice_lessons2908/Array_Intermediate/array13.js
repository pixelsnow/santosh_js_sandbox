"use strict";

/**
Complete the function getFreezingTemperatures such that it returns an array containing
the freezing temperatures (the temperatures that are below 0).

/**
 * @param {number[]} temperatures
 */
function getPositiveTemperatures(temperatures) {
  return temperatures.filter((temp) => {
    return temp < 0;
  });
}

// Sample usage - do not modify
console.log(getPositiveTemperatures([-5, 12, 3])); // [ -5 ]
console.log(getPositiveTemperatures([1, -3, -2, 4, 10])); // [ -3, -2 ]
