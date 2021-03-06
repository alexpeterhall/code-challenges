'use strict';
const match = require('./matching-pairs');

describe('Matching Pairs Test Suite', () => {
  test('Should return 3 matching pairs', () => {
    expect(match.matchPairs([10, 20, 20, 10, 10, 30, 50, 10, 20])).toBe(3);
  });
  test('Should return 4 matching pairs', () => {
    expect(
      match.matchPairs([
        'White',
        'White',
        'Black',
        'Black',
        'Black',
        'Black',
        'White',
        'Orange',
        'Orange',
        'Orange',
      ])
    ).toBe(4);
  });
});
