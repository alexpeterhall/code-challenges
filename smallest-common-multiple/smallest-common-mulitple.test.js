'use strict';
const { smallestCommonMultiple } = require('./smallest-common-multiple');

describe('Smallest Common Multiple Test Suite', () => {
  test('Should return 60', () => {
    expect(smallestCommonMultiple([1, 5])).toBe(60);
  });
  test('Should return 60', () => {
    expect(smallestCommonMultiple([5, 1])).toBe(60);
  });
  test('Should return 2520', () => {
    expect(smallestCommonMultiple([2, 10])).toBe(2520);
  });
  test('Should return 360360', () => {
    expect(smallestCommonMultiple([1, 13])).toBe(360360);
  });
  test('Should return 6056820', () => {
    expect(smallestCommonMultiple([23, 18])).toBe(6056820);
  });
  test('Should return Invalid Input warning for Number input', () => {
    expect(smallestCommonMultiple(123, 456)).toBe('Invalid Input. Expected an array with two number values.');
  });
  test('Should return Invalid Input warning for String input', () => {
    expect(smallestCommonMultiple('This is an invalid input')).toBe(
      'Invalid Input. Expected an array with two number values.'
    );
  });
  test('Should return Invalid Input warning for shorter than expected input array', () => {
    expect(smallestCommonMultiple([10])).toBe('Invalid Input. Expected an array with two number values.');
  });
  test('Should return Invalid Input warning for longer than expected input array', () => {
    expect(smallestCommonMultiple([10, 2, 20, 78])).toBe('Invalid Input. Expected an array with two number values.');
  });
  test('Should return Invalid Input warning for array with non-number values', () => {
    expect(smallestCommonMultiple(['Two', 'Ten'])).toBe('Invalid Input. Expected an array with two number values.');
  });
  test('Should return Invalid Input warning for array with non-number values', () => {
    expect(smallestCommonMultiple([['Two', 'Ten'], 10])).toBe(
      'Invalid Input. Expected an array with two number values.'
    );
  });
});
