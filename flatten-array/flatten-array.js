'use strict';

function flattenArray(inputArray) {
  // Uses the reduce() method to "map" through all elements and concatenate result to the accumulator
  return inputArray.reduce((accumulator, element) => {
    /* Ternary statement checks if the current element is itself an array. If it is, it recursively calls the flattenArray function to flatten it. If the element value is not an array it concatenates the value to our accumulator array. */
    return accumulator.concat(Array.isArray(element) ? flattenArray(element) : element);
  }, []);
}

module.exports = { flattenArray };
