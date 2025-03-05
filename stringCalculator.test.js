const add = require('./stringCalculator')

test('returns 0 for an empty string', () => {
  expect(add('')).toBe(0)
})

test('returns the number itself when only one number is provided', () => {
  expect(add('1')).toBe(1)
})

test('returns sum of two numbers separated by a comma', () => {
  expect(add('1,5')).toBe(6)
})
