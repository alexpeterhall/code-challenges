'use strict';
const match = require('./matching-pairs');

describe('Matching Pairs Test Suite', () => {
  test('Should return 3 matching pairs', () => {
    expect(match.matchPairs([10, 20, 20, 10, 10, 30, 50, 10, 20])).toBe(3);
  });
  test('Should return 4 matching pairs', () => {
    expect(
      match.matchPairs(['White', 'White', 'Black', 'Black', 'Black', 'Black', 'White', 'Orange', 'Orange', 'Orange'])
    ).toBe(4);
  });
  test('Should return 5 matching pairs', () => {
    expect(match.matchPairs([1, 2, 3, 'Four', 'Five', 'five', 'four', 3.8, 2.3, 1.111])).toBe(5);
  });
  test('Should return validation error for String input', () => {
    expect(match.matchPairs('This is an invalid String input')).toBe('Invalid input. Expected an array.');
  });
  test('Should return validation error for Number input', () => {
    expect(match.matchPairs(1, 2, 3, 4, 5)).toBe('Invalid input. Expected an array.');
  });
  test('Should return validation error for Object input', () => {
    expect(match.matchPairs({ key: 'value' })).toBe('Invalid input. Expected an array.');
  });
});
