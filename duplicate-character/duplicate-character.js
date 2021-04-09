'use strict';

function checkDuplicate(str) {
  // Turns input string into an array of only lowercase letters from a-z
  const cleanArray = str.toLowerCase().match(/[a-z]/g);
  // If there are no lowercase letters at all matched above then cleanArray will be null. Handle it.
  if (!cleanArray) return 'No match found';
  // Start looping through the array at the first element and check against every subsequent element.
  for (let i = 0; i < cleanArray.length; i++) {
    /* j will be re-declared and initialized after every loop of i so j needs to initialize to i + 1 to always stay 1 ahead of i. Otherwise it will always match incorrectly on the second iteration of i and only appear to work for inputs where the one of the duplicate values is the first item. */
    for (let j = i + 1; j < cleanArray.length; j++) {
      if (cleanArray[i] === cleanArray[j]) {
        return cleanArray[i];
      }
    }
  }
  return 'No match found';
}

function checkMultipleDuplicates(str) {
  const cleanArray = str.toLowerCase().match(/[a-z]/g);
  const result = [];
  if (!cleanArray) return 'No match found';
  for (let i = 0; i < cleanArray.length; i++) {
    for (let j = i + 1; j < cleanArray.length; j++) {
      if (cleanArray[i] === cleanArray[j]) {
        result.push(cleanArray[i]);
      }
    }
  }
  return result;
}

module.exports = { checkDuplicate, checkMultipleDuplicates };
