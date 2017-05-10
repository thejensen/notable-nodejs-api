// To create a note, we're building more infrastructure:

//in Express, routes are wrapped in a function, which takes the Express instance (app) and a database (db) as arguments. We export the function via index.js to server.js for use.

module.exports = function(app, db) {
  // your CREATE route goes here:
  // When the app receives a POST request to the /notes path, it will execute the code inside the callback- passing in a request object, which contains the parameters or JSON of the request, and a response object, used to reply.
  // req is request and res is response, the response here being 'Hello'. These must be built-in parameters from the Express library??
  // Test this in Postman
  app.post('/notes', (req, res) => {
    // Unfortunately, Express can’t process URL encoded forms on its own. But you did install that body-parser package… So ask express to use the bodyParser in the server.js file
    const note = { text: req.body.body, title: req.body.title };
    db.collection('notes').insert(note, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};
