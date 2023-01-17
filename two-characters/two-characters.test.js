'use strict'
const { alternate } = require('./two-characters')

describe('Alternate Letters Test Suite', () => {
  test('Should return 5', () => {
    expect(alternate('beabeefeab')).toStrictEqual(5)
  })
  test('Should return 8', () => {
    expect(alternate('asdcbsdcagfsdbgdfanfghbsfdab')).toStrictEqual(8)
  })
  test('Should return 0', () => {
    expect(alternate('asvkugfiugsalddlasguifgukvsa')).toStrictEqual(0)
  })
})
