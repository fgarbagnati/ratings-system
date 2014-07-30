var Router = Backbone.Router.extend({
  routes: {
    '':'home',
    'new': 'editRestaurant'
  }
});

var addRestaurant = new AddRestaurant();

var router = new Router();
router.on('route:home', function() {
  console.log('in index route');
});
router.on('route:editRestaurant', function() {
  addRestaurant.render();
});

Backbone.history.start();
