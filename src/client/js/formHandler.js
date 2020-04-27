import 'regenerator-runtime/runtime';

export const handleSubmit = (event) => {
  event.preventDefault();

  const text = document.getElementById('article').value;

  if (Client.validateInput(text) !== 'not valid') {
    const sentimentMode = Client.validateInput(text);
    postData(text, sentimentMode).then((data) => {
      console.log(data);
      updateUI(data);
    });
  } else {
    alert('Please use a valid URL or a short text');
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
  document.getElementById('polarity').innerHTML = polarity;
  document.getElementById('subjectivity').innerHTML = subjectivity;
};
