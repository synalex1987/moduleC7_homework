const reverseString = require('../reverseString');

test('Check string Hello', () => {
  expect(reverseString('Hello')).toBe('olleH');
});

test('Check string AA12345', () => {
  expect(reverseString('AA12345')).toBe('54321AA');
});