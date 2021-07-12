'use strict';
const { flattenArray } = require('./flatten-array');

describe('Flatten Array Test Suite', () => {
  test('Should return single array with 4 elements', () => {
    expect(flattenArray([1, [2], [3, [[4]]]])).toStrictEqual([1, 2, 3, 4]);
  });
  test('Should return single array with 2 elements', () => {
    expect(flattenArray([[['a']], [['b']]])).toStrictEqual(['a', 'b']);
  });
  test('Should return single array with 3 elements', () => {
    expect(flattenArray([1, [], [3, [[4]]]])).toStrictEqual([1, 3, 4]);
  });
  test('Should return single array with 4 elements', () => {
    expect(flattenArray([1, {}, [3, [[4]]]])).toStrictEqual([1, {}, 3, 4]);
  });
});
