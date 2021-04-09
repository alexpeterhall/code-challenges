'use strict';
const dupe = require('./duplicate-character.js');

describe('Duplicate Character Test Suite', () => {
  test('Should return the letter "t" for "test"', () => {
    expect(dupe.checkDuplicate('test')).toBe('t');
  });
  test('Should return the letter "w" for "Wow"', () => {
    expect(dupe.checkDuplicate('Wow')).toBe('w');
  });
  test('Should return the letter "a" for "JavaScript"', () => {
    expect(dupe.checkDuplicate('JavaScript')).toBe('a');
  });
  test('Should return the letter "l" for "I love LAMP!"', () => {
    expect(dupe.checkDuplicate('I love LAMP!')).toBe('l');
  });
  test('Should return the letter "i" for "Codility"', () => {
    expect(dupe.checkDuplicate('Codility')).toBe('i');
  });
  test('Should return the letter "m" for "1m3Q&$^Q*&$1askdjf24719824M"', () => {
    expect(dupe.checkDuplicate('1m3Q&$^Q*&$1askdjf24719824M')).toBe('m');
  });
  test('Should return "a" for "asdfqwerzxcvuiophjklavbnm"', () => {
    expect(dupe.checkDuplicate('asdfqwerzxcvuiophjklavbnm')).toBe('a');
  });
  test('Should return "a" for "abcdabcd"', () => {
    expect(dupe.checkDuplicate('abcdabcd')).toBe('a');
  });
  test('Should return "No match found" for "abcdefghijklmnopqrstuvwxyz"', () => {
    expect(dupe.checkDuplicate('abcdefghijklmnopqrstuvwxyz')).toBe('No match found');
  });
  test('Should return "No match found" for "123456789"', () => {
    expect(dupe.checkDuplicate('123456789')).toBe('No match found');
  });
  test('Should return "No match found" for "5718235728(*&%^$%$%^$^("', () => {
    expect(dupe.checkDuplicate('5718235728(*&%^$%$%^$^(')).toBe('No match found');
  });
});

describe('Multiple Duplicate Character Test Suite', () => {
  test('Should return matching array for "tests"', () => {
    expect(dupe.checkMultipleDuplicates('tests')).toStrictEqual(['t', 's']);
  });
  test('Should return matching array for "abcdabcd"', () => {
    expect(dupe.checkMultipleDuplicates('abcdabcd')).toStrictEqual(['a', 'b', 'c', 'd']);
  });
  test('Should return matching array for "aabcdefghhijklmnoppqrstuvwxyz"', () => {
    expect(dupe.checkMultipleDuplicates('aabcdefghhijklmnoppqrstuvwxyz')).toStrictEqual(['a', 'h', 'p']);
  });
});
