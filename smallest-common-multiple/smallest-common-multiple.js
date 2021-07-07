'use strict';

function smallestCommonMultiple(multiples) {
  if (!Array.isArray(multiples) || multiples.length !== 2) {
    return 'Invalid Input. Expected an array with two number values.';
  }

  const [smallMultiple, largeMultiple] = [...multiples.sort((a, b) => a - b)];

  if (typeof smallMultiple !== 'number' || typeof largeMultiple !== 'number') {
    return 'Invalid Input. Expected an array with two number values.';
  }

  let resultFound = false;
  let currentValue = largeMultiple;

  while (resultFound === false) {
    if (currentValue % smallMultiple === 0) {
      isCommon(largeMultiple - 1);
    } else {
      currentValue += largeMultiple;
    }
  }

  function isCommon(num) {
    if (num === smallMultiple) {
      resultFound = true;
      return;
    } else if (currentValue % num !== 0) {
      currentValue += largeMultiple;
      return;
    } else {
      return isCommon(num - 1);
    }
  }

  return currentValue;
}

module.exports = { smallestCommonMultiple };
