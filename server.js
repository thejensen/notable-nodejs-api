const express = require('express');
// MongoClient interacts with the database
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

// initialize the app as an instance of Express, your framework for the API
const app = express();

// the port number your server is using, e.g. localhost:8000 that you access through the browser
const port = 8000;

// ask Express to use the body-parser package to process URL encoded forms (via Postman for example)
app.use(bodyParser.urlencoded({ extended: true}));

// import the note_routes function that we exported via index.js here. Pls note there's no database set up here yet so we're passing app and an empty object.
require('./app/routes')(app, {});

// $ npm run dev in terminal shows 'We are live on 8000' which means the server is live.
app.listen(port, () => {
  console.log('We are live on ' + port);
});

// use Postman to test your API, which mimics a client side making requests. It allows you to make simple HTTP requests with custom bodies and parameters. the request POST localhost:8000/notes sends back the response 'Hello'.
