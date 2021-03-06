'use strict';
const cv = require('./counting-valleys');

describe('Counting Valleys Test Suite', () => {
  test('Test string should return integer of 2', () => {
    expect(cv.countingValleys('DDUUDDUDUUUD')).toBe(2);
  });
  test('Test string should return integer of 4', () => {
    expect(cv.countingValleys('UDUUDDDUDUDUDDUU')).toBe(4);
  });
  test('Test string should return integer of 6', () => {
    expect(cv.countingValleys('DDUUDDUUDDUUDDUUDDUUDDUU')).toBe(6);
  });
});
