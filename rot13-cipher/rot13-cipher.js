'use strict';

function decodeROT13Cipher(encodedString) {
  let result = '';
  for (const character of encodedString) {
    result += decodeCharacter(character);
  }
  return result;
}

function decodeCharacter(character) {
  const charCode = character.charCodeAt(0);
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

module.exports = { decodeROT13Cipher };
