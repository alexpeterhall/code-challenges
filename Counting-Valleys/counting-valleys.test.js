'use strict';
const { countingValleys } = require('./counting-valleys');

describe('Counting Valleys Test Suite', () => {
  test('Test string should return integer of 2', () => {
    expect(countingValleys('DDUUDDUDUUUD')).toBe(2);
  });
  test('Test string should return integer of 4', () => {
    expect(countingValleys('UDUUDDDUDUDUDDUU')).toBe(4);
  });
  test('Test string should return integer of 6', () => {
    expect(countingValleys('DDUUDDUUDDUUDDUUDDUUDDUU')).toBe(6);
  });
});
