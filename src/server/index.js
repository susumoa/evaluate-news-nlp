require('dotenv').config();
const path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const aylien = require('aylien_textapi');
const bodyParser = require('body-parser');
const cors = require('cors');

const textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
  res.sendFile('dist/index.html');
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log('App listening on port 8080');
});

// POST route
app.post('/test', (req, res) => {
  textapi.sentiment(
    {
      text: req.body.text,
      mode: 'document'
    },
    function (error, response) {
      console.log(response);
      res.send(response);
    }
  );
});
