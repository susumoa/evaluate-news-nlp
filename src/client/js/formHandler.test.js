const { handleSubmit, updateUI } = require('./formHandler');

test('handleSubmit is a function', () => {
  expect(typeof handleSubmit).toBe('function');
});

test('updateUI is a function', () => {
  expect(typeof updateUI).toBe('function');
});

test('updateUi updates polarity element', () => {
  document.body.innerHTML =
    '<section>' +
    '  <div id="polarityElement" hidden>' +
    '    <strong>Aylien says the polarity is:</strong>' +
    '    <div id="polarity"></div>' +
    '  </div>' +
    '</section>';
  updateUI({ polarity: 'positive', subjectivity: 'unknown' });
  expect(document.getElementById('polarity').innerHTML).toEqual('positive');
});

test('updateUi updates polarity element', () => {
  document.body.innerHTML =
    '<section>' +
    '  <div id="polarityElement" hidden>' +
    '    <strong>Aylien says the polarity is:</strong>' +
    '    <div id="polarity"></div>' +
    '  </div>' +
    '  <div id="subjectivityElement" hidden>' +
    '    <strong>Aylien says the subjectivity is:</strong>' +
    '    <div id="subjectivity"></div>' +
    '  </div>' +
    '</section>';
  updateUI({ polarity: 'positive', subjectivity: 'subjective' });
  expect(document.getElementById('polarity').innerHTML).toEqual('positive');
  expect(document.getElementById('subjectivity').innerHTML).toEqual('subjective');
});
