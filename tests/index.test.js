const os = require('../umd/ordinal-suffix.js');

test('Test ordinalSuffix for 1', () => {
  expect(os(1)).toBe('1st');
});

test('Test ordinalSuffix for 2', () => {
  expect(os(2)).toBe('2nd');
});

test('Test ordinalSuffix for 3', () => {
  expect(os(3)).toBe('3rd');
});

test('Test ordinalSuffix for 4', () => {
  expect(os(4)).toBe('4th');
});

test('Test ordinalSuffix for 11', () => {
  expect(os(11)).toBe('11th');
});

test('Test ordinalSuffix for 502', () => {
  expect(os(502)).toBe('502nd');
});

test('Test ordinalSuffix for 1001', () => {
  expect(os(1001)).toBe('1001st');
});

test('Test ordinalSuffix for 433', () => {
  expect(os(433)).toBe('433rd');
});
