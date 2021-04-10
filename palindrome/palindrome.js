'use strict';

function isPalindrome(str) {
  let result = true;
  // Clean up the input string. Only include lowercase alphanumeric characters. match() returns an array.
  let cleanArray = str.toLowerCase().match(/[a-z\d]/g);
  let cleanArrayReversed = [];
  // Loop through the cleanArray from last to first and push each element to our a new array. Reverses the order of the array.
  for (let i = cleanArray.length - 1; i >= 0; i--) {
    cleanArrayReversed.push(cleanArray[i]);
  }
  // Both arrays should now have the same characters in the same order if this is a palindrome. If any one element does not match it is not a palindrome and we set result to false.
  for (let j = 0; j < cleanArray.length; j++) {
    if (cleanArray[j] !== cleanArrayReversed[j]) {
      result = false;
    }
  }
  return result;
}

module.exports = { isPalindrome };
