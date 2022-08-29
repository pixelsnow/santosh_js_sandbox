"use strict";

/**

For each of the exercises below only 11 simple excercises, assume you are starting with the following people array.

let people = ["Sergei", "Mariia", "Boris", "Abel"];
/**
 */

/**
 * @param {people[]} strings
 */

const people = ["Sergei", "Mariia", "Boris", "Abel"];

/* 1. Using a loop, iterate through this array and console.log all of the people (also rewrite it using arrow function). */
people.forEach((person) => console.log(person));

/* 2. Write the command to remove "Sergei" from the array. */
people.shift();

/* 3. Write the command to remove "Abel" from the array. */
people.pop();

/* 4. Write the command to add "Mahalete" to the front of the array. */
people.unshift("Mahalete");

/* 5. Write the command to add your name to the end of the array. */
people.push("Valeria");

/* 6. Write the command to make a copy of the array using slice. The copy should NOT include "Sergei" or "Mariia". */
console.log(people.slice(2));

/* 7. Write the command that gives the indexOf where "Mariia" is located. */
console.log(people.indexOf("Mariia"));

/* 8. Write the command that gives the indexOf where "Foo" is located (this should return -1). */
console.log(people.indexOf("Foo"));

/* 9. Redefine the people variable with the value you started with. Using the splice command, remove "Boris" from the array and add "Rakhi" and "Yulia". Your array should look like this when you are done ["Sergei", "Mariia", "Rakhi", "Yulia", "Abel"]. */
while (people.length) people.pop();
people.push("Sergei");
people.push("Mariia");
people.push("Boris");
people.push("Abel");
console.log(people);
people.splice(2, 1, "Rakhi", "Yulia");
console.log(people);

/* 10. Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob". */
const withBob = people.concat("Bob");
console.log(withBob);
