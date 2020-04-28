# News Evaluation App with NLP

This is the forth project for Udacity's Front End Developer Nanodegree Program, a news evaluation app that uses Natural Language Processing (NLP).
The project utilizes Webpack, Sass styles, Webpack loaders and Plugins and Service workers.

## To get started

- clone project with `https://github.com/susumoa/evaluate-news-nlp.git`
- `cd` into the new `evaluate-news-nlp` folder
- run `npm install`
- run `touch .env`
- add your API ID and API KEY to the `.env` file like this:
  ```
  API_ID="********"
  API_KEY="********************************"
  ```
- run `npm run build-prod`
- start the server with `npm run start`
- open `localhost:8080` in your browser

### If you don't have an API key

First, you will need to go [here](https://developer.aylien.com/signup). Signing up will get you an API key. At this time, the API is free to use for a month.

## About Natural Language Processing

NLPs leverage machine learning and deep learning create a program that can interpret natural human speech. Systems like Alexa, Google Assistant, and many voice interaction programs are well known to us, but understanding human speech is an incredibly difficult task and requires a lot of resources to achieve. Full disclosure, this is the Wikipedia definition, but I found it to be a clear one:

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
> concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
> process and analyze large amounts of natural language data.

You could spend years and get a masters degree focusing on the details of creating NLP systems and algorithms. Typically, NLP programs require far more resources than individuals have access to, but a fairly new API called Aylien has put a public facing API in front of their NLP system.

## How to use

In the input field paste a short text (less than 140 characters) or the URL os an article and click the submit button.

The Aylien API will analyse your input and extract sentiment from it. A piece of text such as a tweet, a review or an article can provide us with valuable insight about the author's emotions and perspective: whether the tone is positive, neutral or negative, and whether the text is subjective (meaning it's reflecting the author's opinion) or objective (meaning it's expressing a fact).

The UI will update according to your input. A short text can provide polarity and subjectivity info, while a URL can only show you the polarity of the article.

Thanks to the service workers the site is available even when you stop your local server.

## Checking the input

We check every user input and alert the user if it's not valid. To validate, we use regular expressions. The input is not valid if it's empty after `.trim()` or if it's longer than 140 characters and not an URL.

Aylien API can provide us information about polarity and subjectivity, depending on the mode (tweet or document), so we check if the input is a text with less than 140 characters or a URL. If it's a text, the mode is set to `tweet`, if it's a URL the mode is set to `document`

---

_Logo is from [Flaticon](https://www.flaticon.com/)_
