'use strict';
const smallest = require('./smallest-common-multiple');

describe('Smallest Common Multiple Test Suite', () => {
  test('Should return 60', () => {
    expect(smallest.smallestCommonMultiple([1, 5])).toBe(60);
  });
  test('Should return 60', () => {
    expect(smallest.smallestCommonMultiple([5, 1])).toBe(60);
  });
  test('Should return 2520', () => {
    expect(smallest.smallestCommonMultiple([2, 10])).toBe(2520);
  });
  test('Should return 360360', () => {
    expect(smallest.smallestCommonMultiple([1, 13])).toBe(360360);
  });
  test('Should return 6056820', () => {
    expect(smallest.smallestCommonMultiple([23, 18])).toBe(6056820);
  });
});
