'use strict';
const check = require('./palindrome');

describe('Palindrome Test Suite', () => {
  test('Should return true for "aa"', () => {
    expect(check.isPalindrome('aa')).toBe(true);
  });
  test('Should return true for "bob"', () => {
    expect(check.isPalindrome('bob')).toBe(true);
  });
  test('Should return true for "Race Car"', () => {
    expect(check.isPalindrome('Race Car')).toBe(true);
  });
  test('Should return true for "A man, a plan, a canal. Panama"', () => {
    expect(check.isPalindrome('A man, a plan, a canal. Panama')).toBe(true);
  });
  test('Should return true for "Do geese see God?"', () => {
    expect(check.isPalindrome('Do geese see God?')).toBe(true);
  });
  test('Should return true for "Never odd or even"', () => {
    expect(check.isPalindrome('Never odd or even')).toBe(true);
  });
  test('Should return true for "_eye"', () => {
    expect(check.isPalindrome('_eye')).toBe(true);
  });
  test('Should return true for "1&$%!@)*)!@(*#$_eye1"', () => {
    expect(check.isPalindrome('1&$%!@)*)!@(*#$_eye1')).toBe(true);
  });
  test('Should return true for "My age is 0, 0 si ega ym."', () => {
    expect(check.isPalindrome('My age is 0, 0 si ega ym.')).toBe(true);
  });
  test('Should return true for "0_0 (: /- :) 0-0"', () => {
    expect(check.isPalindrome('0_0 (: /- :) 0-0')).toBe(true);
  });
  test('Should return false for "a"', () => {
    expect(check.isPalindrome('a')).toBe(false);
  });
  test('Should return false for "0"', () => {
    expect(check.isPalindrome('0')).toBe(false);
  });
  test('Should return false for "29857239857"', () => {
    expect(check.isPalindrome('29857239857')).toBe(false);
  });
  test('Should return false for "*!(#@!)(!@)(&$&*@*"', () => {
    expect(check.isPalindrome('*!(#@!)(!@)(&$&*@*')).toBe(false);
  });
  test('Should return false for "Not a palindrome"', () => {
    expect(check.isPalindrome('Not a palindrome')).toBe(false);
  });
  test('Should return false for "almostomla"', () => {
    expect(check.isPalindrome('almostomla')).toBe(false);
  });
});
