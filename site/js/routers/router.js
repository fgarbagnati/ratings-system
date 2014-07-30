var Router = Backbone.Router.extend({
  routes: {
    '':'home',
    'new': 'addRestaurant'
  }
});

var addRestaurant = new AddRestaurant();

var router = new Router();
router.on('route:home', function() {
  console.log('in index route');
});
router.on('route:addRestaurant', function() {
  addRestaurant.render();
});

Backbone.history.start();
