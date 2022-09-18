"use strict";

/**
Write the Recipe class such that it logs the name and the calories every time
a new instance of the class is being created..
**/

// write class definition
class Recipe {
  name;
  calories;
  constructor(name, calories) {
    this.name = name;
    this.calories = calories;
    console.log(this.name, this.calories);
  }
}

// Class usage
let pasta = new Recipe("Pasta", 600);
console.log("---");
let salad = new Recipe("Salad", 400);
