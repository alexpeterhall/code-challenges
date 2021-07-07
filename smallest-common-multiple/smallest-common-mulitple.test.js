'use strict';
const validate = require('./smallest-common-multiple');

describe('Smallest Common Multiple Test Suite', () => {
  test('Should return 60', () => {
    expect(validate.smallestCommonMultiple([1, 5])).toBe(60);
  });
  test('Should return 60', () => {
    expect(validate.smallestCommonMultiple([5, 1])).toBe(60);
  });
  test('Should return 2520', () => {
    expect(validate.smallestCommonMultiple([2, 10])).toBe(2520);
  });
  test('Should return 360360', () => {
    expect(validate.smallestCommonMultiple([1, 13])).toBe(360360);
  });
  test('Should return 6056820', () => {
    expect(validate.smallestCommonMultiple([23, 18])).toBe(6056820);
  });
  test('Should return Invalid Input warning for Number input', () => {
    expect(validate.smallestCommonMultiple(123, 456)).toBe('Invalid Input. Expected an array with two number values.');
  });
  test('Should return Invalid Input warning for String input', () => {
    expect(validate.smallestCommonMultiple('This is an invalid input')).toBe(
      'Invalid Input. Expected an array with two number values.'
    );
  });
  test('Should return Invalid Input warning for shorter than expected input array', () => {
    expect(validate.smallestCommonMultiple([10])).toBe('Invalid Input. Expected an array with two number values.');
  });
  test('Should return Invalid Input warning for longer than expected input array', () => {
    expect(validate.smallestCommonMultiple([10, 2, 20, 78])).toBe(
      'Invalid Input. Expected an array with two number values.'
    );
  });
  test('Should return Invalid Input warning for array with non-number values', () => {
    expect(validate.smallestCommonMultiple(['Two', 'Ten'])).toBe(
      'Invalid Input. Expected an array with two number values.'
    );
  });
  test('Should return Invalid Input warning for array with non-number values', () => {
    expect(validate.smallestCommonMultiple([['Two', 'Ten'], 10])).toBe(
      'Invalid Input. Expected an array with two number values.'
    );
  });
});
