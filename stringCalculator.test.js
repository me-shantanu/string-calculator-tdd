const add = require('./stringCalculator')

// First Test Case: Empty String
test('returns 0 for an empty string', () => {
  expect(add('')).toBe(0)
})

// Single Number Input
test('returns the number itself when only one number is provided', () => {
  expect(add('1')).toBe(1)
})

// Handle Two Numbers
test('returns sum of two numbers separated by a comma', () => {
  expect(add('1,5')).toBe(6)
})

// Handle Multiple Numbers
test('returns sum of multiple numbers', () => {
  expect(add('1,2,3,4')).toBe(10)
})

// Handle New Line as Delimiter
test('handles new lines between numbers', () => {
  expect(add('1\n2,3')).toBe(6)
})

// Support Custom Delimiters
test('supports custom delimiter', () => {
  expect(add('//;\n1;2')).toBe(3)
})

// Handle Negative Numbers
test('throws an error for negative numbers', () => {
  expect(() => add('1,-2,3,-4')).toThrow('Negative numbers not allowed: -2, -4')
})
