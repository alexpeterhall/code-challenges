'use strict';
const smallestCommonMultiple = require('./smallest-common-multiple');

describe('Smallest Common Multiple Test Suite', () => {
  test('Should return 60', () => {
    expect(smallestCommonMultiple.smallestCommon([1, 5])).toBe(60);
  });
  test('Should return 60', () => {
    expect(smallestCommonMultiple.smallestCommon([5, 1])).toBe(60);
  });
  test('Should return 2520', () => {
    expect(smallestCommonMultiple.smallestCommon([2, 10])).toBe(2520);
  });
  test('Should return 360360', () => {
    expect(smallestCommonMultiple.smallestCommon([1, 13])).toBe(360360);
  });
  test('Should return 6056820', () => {
    expect(smallestCommonMultiple.smallestCommon([23, 18])).toBe(6056820);
  });
});
