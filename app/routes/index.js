// export the module.exports = function(app, db) function from note_routes.js here:
const noteRoutes = require('./note_routes)');

module.exports = function(app, db) {
  noteRoutes(app, db) {
    //other route groups could go here, in the future.
  }
}
