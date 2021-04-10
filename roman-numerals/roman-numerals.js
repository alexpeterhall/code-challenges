'use strict';

// This seems like the least elegant solution possible. Maybe I'll revisit it some day.  ¯\_(ツ)_/¯
function convertToRoman(num) {
  const thousands = Math.floor(num / 1000);
  const hundreds = Math.floor((num % 1000) / 100);
  const tens = Math.floor((num % 100) / 10);
  const ones = num % 10;
  let result = [];
  const lookup = new Map([
    ['1', 'I'],
    ['2', 'II'],
    ['3', 'III'],
    ['4', 'IV'],
    ['5', 'V'],
    ['6', 'VI'],
    ['7', 'VII'],
    ['8', 'VIII'],
    ['9', 'IX'],
    ['10', 'X'],
    ['50', 'L'],
    ['100', 'C'],
    ['500', 'D'],
    ['1000', 'M'],
  ]);
  if (thousands !== 0) {
    result.push(lookup.get('1000').repeat(thousands));
  }
  if (hundreds !== 0) {
    if (hundreds === 4) {
      result.push(lookup.get('100'));
      result.push(lookup.get('500'));
    } else if (hundreds === 9) {
      result.push(lookup.get('100'));
      result.push(lookup.get('1000'));
    } else if (hundreds === 5) {
      result.push(lookup.get('500'));
    } else if (hundreds > 5 && hundreds < 9) {
      result.push(lookup.get('500'));
      result.push(lookup.get('100').repeat(hundreds - 5));
    } else if (hundreds < 4) {
      result.push(lookup.get('100').repeat(hundreds));
    }
  }
  if (tens !== 0) {
    if (tens === 4) {
      result.push(lookup.get('10'));
      result.push(lookup.get('50'));
    } else if (tens === 9) {
      result.push(lookup.get('10'));
      result.push(lookup.get('100'));
    } else if (tens === 5) {
      result.push(lookup.get('50'));
    } else if (tens > 5 && tens < 9) {
      result.push(lookup.get('50'));
      result.push(lookup.get('10').repeat(tens - 5));
    } else if (tens < 4) {
      result.push(lookup.get('10').repeat(tens));
    }
  }
  if (ones !== 0) {
    result.push(lookup.get(ones.toString()));
  }
  return result.join('');
}

module.exports = { convertToRoman };
