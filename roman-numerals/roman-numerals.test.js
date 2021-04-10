'use strict';
const convert = require('./roman-numerals');

describe('Convert to Roman Numeral Test Suite', () => {
  test('Should return "II" for 2', () => {
    expect(convert.convertToRoman(2)).toBe('II');
  });
  test('Should return "III" for 3', () => {
    expect(convert.convertToRoman(3)).toBe('III');
  });
  test('Should return "IV" for 4', () => {
    expect(convert.convertToRoman(4)).toBe('IV');
  });
  test('Should return "V" for 5', () => {
    expect(convert.convertToRoman(5)).toBe('V');
  });
  test('Should return "IX" for 9', () => {
    expect(convert.convertToRoman(9)).toBe('IX');
  });
  test('Should return "XII" for 12', () => {
    expect(convert.convertToRoman(12)).toBe('XII');
  });
  test('Should return "XVI" for 16', () => {
    expect(convert.convertToRoman(16)).toBe('XVI');
  });
  test('Should return "XXIX" for 29', () => {
    expect(convert.convertToRoman(29)).toBe('XXIX');
  });
  test('Should return "XLIV" for 44', () => {
    expect(convert.convertToRoman(44)).toBe('XLIV');
  });
  test('Should return "XLV" for 45', () => {
    expect(convert.convertToRoman(45)).toBe('XLV');
  });
  test('Should return "LXVIII" for 68', () => {
    expect(convert.convertToRoman(68)).toBe('LXVIII');
  });
  test('Should return "LXXXIII" for 83', () => {
    expect(convert.convertToRoman(83)).toBe('LXXXIII');
  });
  test('Should return "XCVII" for 97', () => {
    expect(convert.convertToRoman(97)).toBe('XCVII');
  });
  test('Should return "XCIX" for 99', () => {
    expect(convert.convertToRoman(99)).toBe('XCIX');
  });
  test('Should return "CD" for 400', () => {
    expect(convert.convertToRoman(400)).toBe('CD');
  });
  test('Should return "D" for 500', () => {
    expect(convert.convertToRoman(500)).toBe('D');
  });
  test('Should return "DI" for 501', () => {
    expect(convert.convertToRoman(501)).toBe('DI');
  });
  test('Should return "DCXLIX" for 649', () => {
    expect(convert.convertToRoman(649)).toBe('DCXLIX');
  });
  test('Should return "DCCXCVIII" for 798', () => {
    expect(convert.convertToRoman(798)).toBe('DCCXCVIII');
  });
  test('Should return "DCCCXCI" for 891', () => {
    expect(convert.convertToRoman(891)).toBe('DCCCXCI');
  });
  test('Should return "M" for 1000', () => {
    expect(convert.convertToRoman(1000)).toBe('M');
  });
  test('Should return "MIV" for 1004', () => {
    expect(convert.convertToRoman(1004)).toBe('MIV');
  });
  test('Should return "MVI" for 1006', () => {
    expect(convert.convertToRoman(1006)).toBe('MVI');
  });
  test('Should return "MXXIII" for 1023', () => {
    expect(convert.convertToRoman(1023)).toBe('MXXIII');
  });
  test('Should return "MMXIV" for 2014', () => {
    expect(convert.convertToRoman(2014)).toBe('MMXIV');
  });
  test('Should return "MMMCMXCIX" for 3999', () => {
    expect(convert.convertToRoman(3999)).toBe('MMMCMXCIX');
  });
  test('Should return "MMMMCMLII" for 4952', () => {
    expect(convert.convertToRoman(4952)).toBe('MMMMCMLII');
  });
});
