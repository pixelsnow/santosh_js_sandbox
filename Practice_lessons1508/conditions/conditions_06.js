"use strict";

/**
Write a function named assignGrade that:
takes 1 argument, a number score.
returns a grade for the score, either "A", "B", "C", "D", or "F".
Call that function for a few different scores and log the result to make sure it works.

/**
 * @param {string}
 */

function assignGrade(score) {
    if (score >= 9) return 'A';
    else if (score >= 8) return 'B';
    else if (score >= 7) return 'C';
    else if (score >= 6) return 'D';
    else if (score >= 5) return 'E';
    else return 'F';
}

console.log("You got a " + assignGrade(9));
console.log("You got a " + assignGrade(6));
console.log("You got a " + assignGrade(5.5));
console.log("You got a " + assignGrade(4.6));
