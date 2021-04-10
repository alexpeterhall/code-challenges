'use strict';

function rot13(str) {
  // Spread iterable string argument into an array
  const strArray = [...str];
  function transformChar(char) {
    const charCode = char.charCodeAt(0);
    // Unicode decimal representing first 13 characters of the alphabet in ALL CAPS
    if (charCode >= 65 && charCode <= 77) {
      return String.fromCharCode(parseInt(charCode) + 13);
    }
    // Unicode decimal representing last 13 characters of the alphabet in ALL CAPS
    else if (charCode >= 78 && charCode <= 90) {
      return String.fromCharCode(parseInt(charCode) - 13);
    }
    // Maintain other characters as is (spaces, punctuation, etc.)
    else {
      return String.fromCharCode(charCode);
    }
  }
  // Map through the array and return the transformed character for each element.
  const result = strArray.map((el) => {
    return transformChar(el);
  });
  // Join the result back to a String before returning.
  return result.join('');
}

module.exports = { rot13 };
