var RestaurantsList = Backbone.View.extend({
  el: '.page',
  render: function() {
    var that = this;
    var restaurants = new Restaurant();
    restaurants.fetch({
      success: function(restaurants) {
        var template = _.template($('#restaurant-list-template').html(), {restaurants: restaurants.models});
        that.$el.html(template);
      }
    });
  }
});