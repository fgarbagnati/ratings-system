var app = app || {};

var RestaurantList = Backbone.Collection.extend({
  // Reference to this collection's model
  model: app.Restaurant,
  localStorage: new Backbone.LocalStorage('restaurants-backbone'),
  url: '/'
})