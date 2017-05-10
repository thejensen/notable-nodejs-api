const express = require('express');
// MongoClient interacts with the database
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

// initialize the app as an instance of Express, your framework for the API
const app = express();

const port = 8000;


// $ npm run dev in terminal shows 'We are live on 8000' which means the server is live.
app.listen(port, () => {
  console.log('We are live on ' + port);
});

// use Postman to test your API, which mimics a client side making requests. It allows you to make simple HTTP requests with custom bodies and parameters.
