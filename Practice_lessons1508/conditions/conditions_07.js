"use strict";

/**
Write a function named pluralize that:
takes 2 arguments, a noun and a number.
returns the number and pluralized form, like "5 cats" or "1 dog".
Call that function for a few different scores and log the result to make sure it works.
Bonus: Make it handle a few collective nouns like "sheep" and "geese".

/**
 * @param {string}
 */

function pluralize(noun, number) {
    if (number == 1)
        return (number + ' ' + noun);
    else switch(noun){
        case "fish":
        case "sheep":
        case "deer":
        case "shrimp": 
        case "tuna":
        case "swine":
        case "moose":
            return number + ' ' + noun;
        case "fox":
        case "octopus":
            return number + ' ' + noun + 'es';
        case "goose": return number + ' geese';
        case "mouse": return number + ' mice';
        case "wolf": return number + ' wolves';
        case "fungus": return number + ' fungi';
        case "person": return number + ' people';
        default: return number + ' ' + noun + 's';
    }
}

console.log("I have " + pluralize("fungus", 0));
console.log("I have " + pluralize("cat", 1));
console.log("I have " + pluralize("wolf", 2));
console.log("I have " + pluralize("goose", 21));
console.log("I have " + pluralize("sheep", 11));
console.log("I have " + pluralize("octopus", 2));
console.log("I have " + pluralize("person", 15));
console.log("I have " + pluralize("mouse", 4));

