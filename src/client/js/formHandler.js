import 'regenerator-runtime/runtime';

const polarityElement = document.getElementById('polarityElement');
const subjectivityElement = document.getElementById('subjectivityElement');

export const handleSubmit = (event) => {
  event.preventDefault();

  polarityElement.setAttribute('hidden', '');
  subjectivityElement.setAttribute('hidden', '');
  const text = document.getElementById('article').value;

  if (Client.validateInput(text) !== 'not valid') {
    const sentimentMode = Client.validateInput(text);
    postData(text, sentimentMode).then((data) => {
      console.log(data);
      updateUI(data);
    });
  } else {
    alert('Please use a valid URL or a text shorter then 140 characters');
  }
};

const postData = async function (text = '', sentimentMode = 'tweet') {
  const response = await fetch('http://localhost:8080/test', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text: text, mode: sentimentMode })
  });

  try {
    const newData = await response.json();
    return newData;
  } catch (err) {
    console.log('Error: ', err);
  }
};

const updateUI = (data) => {
  const { polarity, subjectivity } = data;

  polarityElement.removeAttribute('hidden');
  document.getElementById('polarity').innerHTML = polarity;

  if (subjectivity !== 'unknown') {
    subjectivityElement.removeAttribute('hidden');
    document.getElementById('subjectivity').innerHTML = subjectivity;
  }
};
