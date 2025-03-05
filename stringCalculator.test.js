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

test('returns sum of multiple numbers', () => {
  expect(add('1,2,3,4')).toBe(10)
})

test('handles new lines between numbers', () => {
  expect(add('1\n2,3')).toBe(6)
})

test('supports custom delimiter', () => {
  expect(add('//;\n1;2')).toBe(3)
})

test('throws an error for negative numbers', () => {
  expect(() => add('1,-2,3,-4')).toThrow('Negative numbers not allowed: -2, -4')
})
