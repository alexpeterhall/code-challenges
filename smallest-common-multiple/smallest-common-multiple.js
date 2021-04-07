'use strict';

function smallestCommonMultiple(arr) {
  // Uses destructuring to assign our two input elements from the argument array (sorted smallest to largest) to variables.
  const [smallMultiple, largeMultiple] = [...arr.sort((a, b) => a - b)];
  // Flag to track if we've found our answer yet.
  let resultFound = false;
  // Initializes result to start with our large multiple.
  let result = largeMultiple;
  // Once we have a potential result that is evenly divisible by both the small and large multiples from our while loop below, we can start recursively calling isCommon() to check if it's also evenly divisible by all values between the small and large multiples.
  function isCommon(x) {
    // If isCommon() is called with a value that has successfully decremented down to the smallMultiple, we've found our answer. This is our base case.
    if (x === smallMultiple) {
      resultFound = true;
      return;
    }
    // If our current potential result is not evenly divisible by one of the numbers between the small and large multiples, increment by largeMultiple, break the recursive call, and end up back in our while loop to keep searching.
    else if (result % x !== 0) {
      result += largeMultiple;
      return;
    }
    // Value is a common multiple. Recursively call isCommon() decrementing by 1 to check remaining values.
    else {
      return isCommon(x - 1);
    }
  }
  // Keep running this until we've found our result.
  while (resultFound === false) {
    // If our current potential "result" is also evenly divisible by the smallMultiple, we can start calling the isCommon() function to also check if it's evenly divisible by all values in between the small and large multiples.
    if (result % smallMultiple === 0) {
      isCommon(largeMultiple - 1);
    }
    // If our current potential "result" is not evenly divisible by the smallMultiple, increment by largeMultiple and try again.
    else {
      result += largeMultiple;
    }
  }
  return result;
}

module.exports = { smallestCommonMultiple };
