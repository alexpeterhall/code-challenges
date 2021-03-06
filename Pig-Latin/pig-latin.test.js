'use strict';
const pigLatin = require('./pig-latin');

describe('Pig Latin Test Suite', () => {
  test('"california" should return the string "aliforniacay"', () => {
    expect(pigLatin.translatePigLatin('california')).toBe('aliforniacay');
  });
  test('"paragraphs" should return the string "aragraphspay"', () => {
    expect(pigLatin.translatePigLatin('paragraphs')).toBe('aragraphspay');
  });
  test('"glove" should return the string "oveglay"', () => {
    expect(pigLatin.translatePigLatin('glove')).toBe('oveglay');
  });
  test('"algorithm" should return the string "algorithmway"', () => {
    expect(pigLatin.translatePigLatin('algorithm')).toBe('algorithmway');
  });
  test('"eight" should return the string "eightway"', () => {
    expect(pigLatin.translatePigLatin('eight')).toBe('eightway');
  });
  test('"schwartz" should return the string "artzschway"', () => {
    expect(pigLatin.translatePigLatin('schwartz')).toBe('artzschway');
  });
  test('"rhythm" should return the string "rhythmay"', () => {
    expect(pigLatin.translatePigLatin('rhythm')).toBe('rhythmay');
  });
  test('"consonant" should return the string "onsonantcay"', () => {
    expect(pigLatin.translatePigLatin('consonant')).toBe('onsonantcay');
  });
});
