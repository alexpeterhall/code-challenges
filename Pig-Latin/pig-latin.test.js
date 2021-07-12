'use strict';
const { translateToPigLatin } = require('./pig-latin');

describe('Pig Latin Test Suite', () => {
  test('"california" should return the string "aliforniacay"', () => {
    expect(translateToPigLatin('california')).toBe('aliforniacay');
  });
  test('"paragraphs" should return the string "aragraphspay"', () => {
    expect(translateToPigLatin('paragraphs')).toBe('aragraphspay');
  });
  test('"glove" should return the string "oveglay"', () => {
    expect(translateToPigLatin('glove')).toBe('oveglay');
  });
  test('"algorithm" should return the string "algorithmway"', () => {
    expect(translateToPigLatin('algorithm')).toBe('algorithmway');
  });
  test('"eight" should return the string "eightway"', () => {
    expect(translateToPigLatin('eight')).toBe('eightway');
  });
  test('"schwartz" should return the string "artzschway"', () => {
    expect(translateToPigLatin('schwartz')).toBe('artzschway');
  });
  test('"rhythm" should return the string "rhythmay"', () => {
    expect(translateToPigLatin('rhythm')).toBe('rhythmay');
  });
  test('"consonant" should return the string "onsonantcay"', () => {
    expect(translateToPigLatin('consonant')).toBe('onsonantcay');
  });
});
