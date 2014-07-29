// js/models/restaurant.js

var app = app || {};

// Restaurant
// ----------
// id
// name : string
// theme : string
// location : string
// rating : num

app.Restaurant = Backbone.Model.extend({
  defaults: {
    name: '',
    theme: '',
    location: '',
    rating: 0
  }
})