/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

const numberToString = (n) => n.toString();

console.log(numberToString(100));

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

const increase = (n) => n + 1;

console.log(increase(10));

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

const decrease = (n) => n - 1;

console.log(decrease(10));

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

const add = (x = 0, y = 0) => x + y;

console.log(add(10, 10));
console.log(add(10));
console.log(add());

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

const subtract = (x = 0, y = 0) => x - y;

console.log(subtract(35, 5));

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

const multiply = (x, y) => x * y;

console.log(multiply(5, 5));

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

const divide = (x, y) => x / y;

console.log(divide(100, 10));

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

const square = (x) => x * x;

console.log(square(2));

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

const calculate = (operation, x, y) => {
  let symbol, res;
  switch (operation) {
    case "add":
      res = add(x, y);
      symbol = "+";
      break;
    case "subtract":
      res = subtract(x, y);
      symbol = "-";
      break;
    case "multiply":
      res = multiply(x, y);
      symbol = "*";
      break;
    case "divide":
      res = divide(x, y);
      symbol = "/";
      break;
  }
  console.log(`${x} ${symbol} ${y} = ${res}`);
  return res;
};

console.log(calculate("add", 2, 2));
console.log(calculate("subtract", 10, 5));
console.log(calculate("multiply", 2, 5));
console.log(calculate("divide", 100, 10));

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
const isGreaterThan = (a, b) => a > b;

console.log(isGreaterThan(200, 100));

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

const isLessThan = (a, b) => a < b;

console.log(isLessThan(100, 200));

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

const areEqual = (a, b) => a === b;

console.log(areEqual(100, 100));

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
const minimum = (x, y) => (x > y ? y : x);

console.log(minimum(100, 10));

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

const maximum = (x, y) => (x < y ? y : x);

console.log(maximum(100, 10));

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

const isEven = (n) => !(n % 2);

console.log(isEven(10));

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

const isOdd = (n) => !!(n % 2);

console.log(isOdd(12));

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

const combine = (word1, word2) => word1 + " " + word2;

console.log(combine("hello", "world"));

/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

const createCircle = (radius) => {
  const circle = {
    circumference: 2 * Math.PI * radius,
    area: Math.PI * radius * radius,
  };
  return circle;
};

console.log(createCircle(3));
