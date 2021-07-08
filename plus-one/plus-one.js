'use strict';

/**
 * @param {number[]} numbers
 * @return {number[]}
 */

const plusOne = function (numbers) {
  let numberOfTrailingNines = 0;
  const result = [];

  for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] === 9) {
      numberOfTrailingNines++;
    } else {
      break;
    }
  }

  if (numbers.length === 1 && numbers[0] !== 9) {
    result.push(numbers[0] + 1);
  } else if (numberOfTrailingNines === numbers.length) {
    result.push(1);
    for (let i = 0; i < numberOfTrailingNines; i++) {
      result.push(0);
    }
  } else if (numberOfTrailingNines > 0 && numberOfTrailingNines < numbers.length) {
    result.push(...numbers.slice(0, numbers.length - numberOfTrailingNines));
    result[result.length - 1] += 1;
    for (let i = 0; i < numberOfTrailingNines; i++) {
      result.push(0);
    }
  } else {
    result.push(...numbers);
    result[result.length - 1] += 1;
  }
  return result;
};

module.exports = { plusOne };
