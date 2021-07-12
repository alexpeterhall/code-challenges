'use strict';
const { checkDuplicate, checkMultipleDuplicates } = require('./duplicate-character.js');

describe('Duplicate Character Test Suite', () => {
  test('Should return the letter "t" for "test"', () => {
    expect(checkDuplicate('test')).toBe('t');
  });
  test('Should return the letter "w" for "Wow"', () => {
    expect(checkDuplicate('Wow')).toBe('w');
  });
  test('Should return the letter "a" for "JavaScript"', () => {
    expect(checkDuplicate('JavaScript')).toBe('a');
  });
  test('Should return the letter "l" for "I love LAMP!"', () => {
    expect(checkDuplicate('I love LAMP!')).toBe('l');
  });
  test('Should return the letter "i" for "Codility"', () => {
    expect(checkDuplicate('Codility')).toBe('i');
  });
  test('Should return the letter "m" for "1m3Q&$^Q*&$1askdjf24719824M"', () => {
    expect(checkDuplicate('1m3Q&$^Q*&$1askdjf24719824M')).toBe('m');
  });
  test('Should return "a" for "asdfqwerzxcvuiophjklavbnm"', () => {
    expect(checkDuplicate('asdfqwerzxcvuiophjklavbnm')).toBe('a');
  });
  test('Should return "a" for "abcdabcd"', () => {
    expect(checkDuplicate('abcdabcd')).toBe('a');
  });
  test('Should return "No match found" for "abcdefghijklmnopqrstuvwxyz"', () => {
    expect(checkDuplicate('abcdefghijklmnopqrstuvwxyz')).toBe('No match found');
  });
  test('Should return "Invalid input. No letters found to try matching." for "a"', () => {
    expect(checkDuplicate('a')).toBe('Invalid input. No letters found to try matching.');
  });
  test('Should return "Invalid input. No letters found to try matching." for "123456789"', () => {
    expect(checkDuplicate('123456789')).toBe('Invalid input. No letters found to try matching.');
  });
  test('Should return "Invalid input. No letters found to try matching." for "5718235728(*&%^$%$%^$^("', () => {
    expect(checkDuplicate('5718235728(*&%^$%$%^$^(')).toBe('Invalid input. No letters found to try matching.');
  });
});

describe('Multiple Duplicate Character Test Suite', () => {
  test('Should return matching array for "tests"', () => {
    expect(checkMultipleDuplicates('tests')).toStrictEqual(['t', 's']);
  });
  test('Should return matching array for "abcdabcd"', () => {
    expect(checkMultipleDuplicates('abcdabcd')).toStrictEqual(['a', 'b', 'c', 'd']);
  });
  test('Should return matching array for "aabcdefghhijklmnoppqrstuvwxyz"', () => {
    expect(checkMultipleDuplicates('aabcdefghhijklmnoppqrstuvwxyz')).toStrictEqual(['a', 'h', 'p']);
  });
  test('Should return matching array for "a"', () => {
    expect(checkMultipleDuplicates('a')).toBe('Invalid input. No letters found to try matching.');
  });
  test('Should return matching array for "0123456789"', () => {
    expect(checkMultipleDuplicates('0123456789')).toBe('Invalid input. No letters found to try matching.');
  });
  test('Should return matching array for "#%@*%^!#%!))#*_"', () => {
    expect(checkMultipleDuplicates('#%@*%^!#%!))#*_')).toBe('Invalid input. No letters found to try matching.');
  });
});
