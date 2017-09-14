//basic
var app = require('./app.config.js');
var db = require('./db.config.js');

//nav config
var nav = require('./controllers/nav.controller.js');

var controllers = [
  require('./controllers/home.controller.js'),
  require('./controllers/registration.controller.js'),
  require('./controllers/login.controller.js'),
  require('./controllers/users.controller.js'),
  require('./controllers/user-details.controller.js'),
  require('./controllers/products.controller.js'),
  require('./controllers/show-products.controller.js'),
  require('./controllers/errors.controller.js')
  ]
  .forEach(function(controller) {
    controller(app, db, nav);
  });
