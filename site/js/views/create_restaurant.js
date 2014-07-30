var AddRestaurant = Backbone.View.extend({
  el: '.page',
  render: function() {
    var template = _.template($('#add-restaurant-template').html(), {});
    this.$el.html(template);
    }
  });
