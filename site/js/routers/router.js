var Router = Backbone.Router.extend({
  routes: {
    '':'home',
    'new': 'editRestaurant'
  }
});

var router = new Router();
router.on('route:home', function() {
  console.log('in index route');
});
router.on('route:editRestaurant', function() {
  console.log('show user form');
});

Backbone.history.start();