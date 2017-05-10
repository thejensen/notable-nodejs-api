// To create a note, we're building more infrastructure:

//in Express, routes are wrapped in a function, which takes the Express instance (app) and a database (db) as arguments. We export the function via index.js to server.js for use.

module.exports = function(app, db) {
  // your CREATE route goes here:
  // When the app receives a POST request to the /notes path, it will execute the code inside the callback- passing in a request object, which contains the parameters or JSON of the request, and a response object, used to reply.
  // Test this in Postman
  app.post('/notes', (req, res) => {
    // create note here:
    res.send('Hello')
  });
};