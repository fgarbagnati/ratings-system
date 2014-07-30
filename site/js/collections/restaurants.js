var app = app || {};

var RestaurantList = Backbone.Collection.extend({
  // Reference to this collection's model
  model: app.Restaurant,
  url: '/'
})