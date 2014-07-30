// Module dependencies.
var application_root = __dirname,
  express = require( 'express' ), //Web framework
  path = require( 'path' ), //Utilities for dealing with file paths
  mongoose = require('mongoose'); //MongoDB integration

// Create server
var app = express();

// Configure server
app.configure( function() {
  //parses request body and populates request.body
  app.use( express.bodyParser() );
  //checks request.body for HTTP method overrides
  app.use( express.methodOverride() );
  //perform route lookup based on url and HTTP method
  app.use( app.router );
  //Where to serve static content
  app.use( express.static( path.join( application_root, 'site') ) );
  //Show all errors in development
  app.use( express.errorHandler({ dumpExceptions: true, showStack: true }));
});

// Start server
var port = 4711;
app.listen( port, function() {
  console.log('Express server listening on port %d in %s mode', port, app.settings.env);
});

// Routes
app.get( '/api', function( request, response ) {
  response.send('Library API is running');
});

// Connect to database
mongoose.connect( 'mongodb://localhost/library_database' );

// Schema
var Restaurant = new mongoose.Schema({
  name: String,
  theme: String,
  location: String,
  rating: Number,
  total_rates: Number
});

// Models
var RestaurantModel = mongoose.model( 'Restaurant', Restaurant );

// Get a list of all restaurants
app.get( '/api/restaurants', function( request, response ) {
  return RestaurantModel.find( function( err, restaurants ) {
    if( !err ) {
      return response.send( restaurants );
    } else {
      return console.log( err );
    }
  });
});