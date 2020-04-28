const validateInput = require('./inputChecker');

test('whitespace input is not valid', () => {
  expect(validateInput(' ')).toBe('not valid');
});

test('empty input is not valid', () => {
  expect(validateInput('')).toBe('not valid');
});

test('https://www.google.com/ is a document', () => {
  expect(validateInput('https://www.google.com/')).toBe('document');
});

test('62 character input is a tweet', () => {
  expect(validateInput('Jest uses "matchers" to let you test values in different ways.')).toBe('tweet');
});
