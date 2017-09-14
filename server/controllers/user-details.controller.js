var Users = require('../models/users.model.js');

module.exports = function(app, db, nav) {
  app.get( '/user-details/:id' , function(req, res) {
    nav.states.users.active = true;
    var id = req.params.id;
    Users.findOne({'_id' : id }, function(err, user) {
      if (err) { return console.log(err) }
      else {
          res.render('user-details.ejs', {
            title: "User details",
            user: user,
            nav: { states: nav.states }
           });
          nav.deActiveteMenu();
      };
      res.end('here user details');
    });
  } );
}
