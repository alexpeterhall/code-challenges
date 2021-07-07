'use strict';

function translateToPigLatin(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let positionOfFirstVowel = null;

  for (const currentVowel of vowels) {
    if (word.includes(currentVowel)) {
      if (positionOfFirstVowel === 0) {
        break;
      } else if (positionOfFirstVowel === null || word.indexOf(currentVowel) < positionOfFirstVowel) {
        positionOfFirstVowel = word.indexOf(currentVowel);
      }
    }
  }

  if (positionOfFirstVowel === null) {
    return word.concat('ay');
  } else if (positionOfFirstVowel === 0) {
    return word.concat('way');
  } else {
    let first = word.slice(0, positionOfFirstVowel);
    let rest = word.slice(positionOfFirstVowel);
    return rest.concat(first, 'ay');
  }
}

module.exports = { translateToPigLatin };
