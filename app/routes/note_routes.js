// To create a note:
// Make sure to grab ObjectID from mongodb, apparently. 
const ObjectID = require('mongodb').ObjectID;

//in Express, routes are wrapped in a function, which takes the Express instance (app) and a database (db) as arguments. We export the function via index.js to server.js for use.
module.exports = function(app, db) {
  // Get back the note we just created, using the note/:id route
  app.get('/notes/:id', (req, res) => {
    // Mongodb requires an ObjectID, but it's easy to create from a string, you can get the id from the db, then create a new ObjectID, like so.
    const id = req.params.id;
    const details = { '_id' : new ObjectID(id) };
    db.collection('notes').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      }
    });
  });

  // your CREATE route goes here:
  // When the app receives a POST request to the /notes path, it will execute the code inside the callback - passing in a request object, which contains the parameters or JSON of the request, and a response object, used to reply.
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
