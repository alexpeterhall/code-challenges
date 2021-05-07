/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
  let count = 0;
  const result = [];
  // Start at the end of the array and find out how many trailing digits are 9s
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      count++;
    } else {
      break;
    }
  }
  // If there is only 1 digit in the array and it's not a 9 just increment it and push to the result array.
  if (digits.length === 1 && digits[0] !== 9) {
    result.push(digits[0] + 1);
  }
  // If every digit in the array is a 9 they all need to roll over to 0's and add a leading 1.
  else if (count === digits.length) {
    result.push(1);
    for (let j = 0; j < count; j++) {
      result.push(0);
    }
  }
  // If we have some trailing 9s
  else if (count > 0 && count < digits.length) {
    // Push the first section of the array up to but not including our trailing 9s
    result.push(...digits.slice(0, digits.length - count));
    // Increment the last digit on the first subsection
    result[result.length - 1] = result[result.length - 1] + 1;
    // Replace the trailing 9s with 0s
    for (let j = 0; j < count; j++) {
      result.push(0);
    }
  }
  // Push a copy of the whole input array onto the result array and increment the last digit
  else {
    result.push(...digits);
    result[result.length - 1] = result[result.length - 1] + 1;
  }
  return result;
};

module.exports = { plusOne };
