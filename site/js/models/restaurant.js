// js/models/restaurant.js

var app = app || {};

// Restaurant
// ----------
// id
// name : string
// theme : string
// location : string
// rating : num
// total_rates: num

app.Restaurant = Backbone.Model.extend({
  defaults: {
    // name: '',
    // theme: '',
    // location: '',
    rating: 0,
    total_rates: 0
  },
  initialize: function() {
    console.log( 'model is created' );
  }
})