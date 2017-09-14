var Users = require('../models/users.model.js');

module.exports = function(app, db, nav) {
  app.get( '/users', function(req, res) {
    nav.states.users.active = true;
    Users.find({}, function(err, Allusers) {
      if (err) {
        res.send(err);
      } else {
        res.render('users.ejs', {
          title: "users",
          users: Allusers,
          nav: { states: nav.states }
        });
        nav.deActiveteMenu();
      }
    });
  });
};
