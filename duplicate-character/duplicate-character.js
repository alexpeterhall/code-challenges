'use strict';

function checkDuplicate(inputString) {
  const cleanArray = inputString.toLowerCase().match(/[a-z]/g);
  if (!cleanArray || cleanArray.length < 2) return 'Invalid input. No letters found to try matching.';
  // Check every element against every subsequent element.
  for (let i = 0; i < cleanArray.length; i++) {
    //j needs to initialize to i + 1 to always stay 1 element ahead of i.
    for (let j = i + 1; j < cleanArray.length; j++) {
      if (cleanArray[i] === cleanArray[j]) {
        return cleanArray[i];
      }
    }
  }
  return 'No match found';
}

function checkMultipleDuplicates(inputString) {
  const cleanArray = inputString.toLowerCase().match(/[a-z]/g);
  const result = [];
  if (!cleanArray || cleanArray.length < 2) return 'Invalid input. No letters found to try matching.';
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
