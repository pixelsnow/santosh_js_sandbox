"use strict";

/**
Implement a function wait(milliseconds) that returns a promise and fulfills after milliseconds have elapsed.
Look at the sample usage to see how the function is being used.*/
/* THERE WAS WRONG CODE FOR THE TASK x*/

const wait = (milliseconds) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
};

// Sample usage - do not modify
wait(3000).then(() => {
  console.log("Done waiting.");
});
