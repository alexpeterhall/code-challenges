'use strict';
const validate = require('./pig-latin');

describe('Pig Latin Test Suite', () => {
  test('"california" should return the string "aliforniacay"', () => {
    expect(validate.translateToPigLatin('california')).toBe('aliforniacay');
  });
  test('"paragraphs" should return the string "aragraphspay"', () => {
    expect(validate.translateToPigLatin('paragraphs')).toBe('aragraphspay');
  });
  test('"glove" should return the string "oveglay"', () => {
    expect(validate.translateToPigLatin('glove')).toBe('oveglay');
  });
  test('"algorithm" should return the string "algorithmway"', () => {
    expect(validate.translateToPigLatin('algorithm')).toBe('algorithmway');
  });
  test('"eight" should return the string "eightway"', () => {
    expect(validate.translateToPigLatin('eight')).toBe('eightway');
  });
  test('"schwartz" should return the string "artzschway"', () => {
    expect(validate.translateToPigLatin('schwartz')).toBe('artzschway');
  });
  test('"rhythm" should return the string "rhythmay"', () => {
    expect(validate.translateToPigLatin('rhythm')).toBe('rhythmay');
  });
  test('"consonant" should return the string "onsonantcay"', () => {
    expect(validate.translateToPigLatin('consonant')).toBe('onsonantcay');
  });
});
