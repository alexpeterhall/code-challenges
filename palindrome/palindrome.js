'use strict';

function isPalindrome(inputString) {
  const cleanArray = inputString.toLowerCase().match(/[a-z\d]/g);
  const cleanArrayBackwards = [];
  if (!cleanArray || cleanArray.length < 2) return false;
  // Loop through cleanArray backwards and push each element onto our backwards array.
  for (let i = cleanArray.length - 1; i >= 0; i--) {
    cleanArrayBackwards.push(cleanArray[i]);
  }
  // Compare the original and backwards arrays. They should be the same if it's a palindrome.
  for (let j = 0; j < cleanArray.length; j++) {
    if (cleanArray[j] !== cleanArrayBackwards[j]) {
      return false;
    }
  }
  return true;
}

module.exports = { isPalindrome };
