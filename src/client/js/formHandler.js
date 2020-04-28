import 'regenerator-runtime/runtime';

export const handleSubmit = (event) => {
  event.preventDefault();

  document.getElementById('polarityElement').setAttribute('hidden', '');
  document.getElementById('subjectivityElement').setAttribute('hidden', '');
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

export const postData = async function (text = '', sentimentMode = 'tweet') {
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

export const updateUI = (data) => {
  const { polarity, subjectivity } = data;

  document.getElementById('polarityElement').removeAttribute('hidden');
  document.getElementById('polarity').innerHTML = polarity;

  if (subjectivity !== 'unknown') {
    document.getElementById('subjectivityElement').removeAttribute('hidden');
    document.getElementById('subjectivity').innerHTML = subjectivity;
  }
};
