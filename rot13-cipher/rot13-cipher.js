'use strict';

function decodeROT13Cipher(encodedString) {
  const encodedArray = [...encodedString];

  function decodeCharacter(char) {
    const charCode = char.charCodeAt(0);
    // Unicode decimal representing first 13 characters of the alphabet in ALL CAPS
    if (charCode >= 65 && charCode <= 77) {
      return String.fromCharCode(charCode + 13);
    }
    // Unicode decimal representing last 13 characters of the alphabet in ALL CAPS
    else if (charCode >= 78 && charCode <= 90) {
      return String.fromCharCode(charCode - 13);
    }
    // Maintain other characters as is (spaces, punctuation, etc.)
    else {
      return String.fromCharCode(charCode);
    }
  }

  const result = encodedArray.map((element) => {
    return decodeCharacter(element);
  });

  return result.join('');
}

module.exports = { decodeROT13Cipher };
