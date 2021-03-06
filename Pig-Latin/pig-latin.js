'use strict';

function translatePigLatin(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let position = null;
  for (let letter of vowels) {
    if (str.includes(letter)) {
      if (position === 0) {
        break;
      } else if (position === null || position > str.indexOf(letter)) {
        position = str.indexOf(letter);
      }
    }
  }
  if (position === null) {
    return str.concat('ay');
  } else if (position === 0) {
    return str.concat('way');
  } else {
    let first = str.slice(0, position);
    let rest = str.slice(position);
    return rest.concat(first, 'ay');
  }
}

module.exports = {
  translatePigLatin: translatePigLatin,
};
