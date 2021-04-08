'use strict';
const check = require('./palindrome');

describe('Palindrome Test Suite', () => {
  test('Should return true for "eye"', () => {
    expect(check.isPalindrome('eye')).toBe(true);
  });
  test('Should return true for "eye"', () => {
    expect(check.isPalindrome('_eye')).toBe(true);
  });
  test('Should return true for ""', () => {
    expect(check.isPalindrome('_eye')).toBe(true);
  });
  test('Should return true for ""', () => {
    expect(check.isPalindrome('1&$%!@)*)!@(*#$_eye1')).toBe(true);
  });
  test('Should return true for "race car"', () => {
    expect(check.isPalindrome('race car')).toBe(true);
  });
  test('Should return true for "RaCe CaR"', () => {
    expect(check.isPalindrome('RaCe CaR')).toBe(true);
  });
  test('Should return true for "A man, a plan, a canal. Panama"', () => {
    expect(check.isPalindrome('A man, a plan, a canal. Panama')).toBe(true);
  });
  test('Should return true for "My age is 0, 0 si ega ym."', () => {
    expect(check.isPalindrome('My age is 0, 0 si ega ym.')).toBe(true);
  });
  test('Should return true for "0_0 (: /- :) 0-0"', () => {
    expect(check.isPalindrome('0_0 (: /- :) 0-0')).toBe(true);
  });
  test('Should return false for "Not a palindrome"', () => {
    expect(check.isPalindrome('Not a palindrome')).toBe(false);
  });
  test('Should return false for "almostomla"', () => {
    expect(check.isPalindrome('almostomla')).toBe(false);
  });
});
