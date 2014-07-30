var Router = Backbone.Router.extend({
  routes: {
    '':'home',
    'new': 'addRestaurant'
  }
});

var restaurantsList = new RestaurantsList();
var addRestaurant = new AddRestaurant();

var router = new Router();
router.on('route:home', function() {
  console.log('in index route');
  restaurantsList.render();
});
router.on('route:addRestaurant', function() {
  addRestaurant.render();
});

Backbone.history.start();
