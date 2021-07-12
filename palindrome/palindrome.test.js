'use strict';
const { isPalindrome } = require('./palindrome');

describe('Palindrome Test Suite', () => {
  test('Should return true for "aa"', () => {
    expect(isPalindrome('aa')).toBe(true);
  });
  test('Should return true for "bob"', () => {
    expect(isPalindrome('bob')).toBe(true);
  });
  test('Should return true for "Race Car"', () => {
    expect(isPalindrome('Race Car')).toBe(true);
  });
  test('Should return true for "A man, a plan, a canal. Panama"', () => {
    expect(isPalindrome('A man, a plan, a canal. Panama')).toBe(true);
  });
  test('Should return true for "Do geese see God?"', () => {
    expect(isPalindrome('Do geese see God?')).toBe(true);
  });
  test('Should return true for "Never odd or even"', () => {
    expect(isPalindrome('Never odd or even')).toBe(true);
  });
  test('Should return true for "_eye"', () => {
    expect(isPalindrome('_eye')).toBe(true);
  });
  test('Should return true for "1&$%!@)*)!@(*#$_eye1"', () => {
    expect(isPalindrome('1&$%!@)*)!@(*#$_eye1')).toBe(true);
  });
  test('Should return true for "My age is 0, 0 si ega ym."', () => {
    expect(isPalindrome('My age is 0, 0 si ega ym.')).toBe(true);
  });
  test('Should return true for "0_0 (: /- :) 0-0"', () => {
    expect(isPalindrome('0_0 (: /- :) 0-0')).toBe(true);
  });
  test('Should return false for "a"', () => {
    expect(isPalindrome('a')).toBe(false);
  });
  test('Should return false for "0"', () => {
    expect(isPalindrome('0')).toBe(false);
  });
  test('Should return false for "29857239857"', () => {
    expect(isPalindrome('29857239857')).toBe(false);
  });
  test('Should return false for "*!(#@!)(!@)(&$&*@*"', () => {
    expect(isPalindrome('*!(#@!)(!@)(&$&*@*')).toBe(false);
  });
  test('Should return false for "Not a palindrome"', () => {
    expect(isPalindrome('Not a palindrome')).toBe(false);
  });
  test('Should return false for "almostomla"', () => {
    expect(isPalindrome('almostomla')).toBe(false);
  });
});
