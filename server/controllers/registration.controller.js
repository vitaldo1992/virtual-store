var Users = require('../models/users.model.js');

module.exports = function(app, db, nav) {
  app.get( '/registration' , function(req, res) {
      nav.states.registration.active = true;
      res.render('registration.ejs', {
        title: "Registration",
        nav: { states: nav.states },
        errors: []
       });
      res.end('here user details');
      nav.deActiveteMenu()
  } );

  app.post( '/registration' , function(req, res) {
      var user = req.body;
      user.role = 5;
      user.basket = [];
      user._id = db.Types.ObjectId();

      req.checkBody('firstName', 'firstName is required').notEmpty();
      req.checkBody('lastName', 'lastName is required').notEmpty();
      req.checkBody('email', 'email must be wrote correctly').isEmail();
      req.checkBody('phone', 'phone is required').notEmpty();
      req.checkBody('password', 'password is required').notEmpty();
      req.checkBody('confirmed', 'confirmed must match to password').equals(req.body.password);

      var errors = req.validationErrors();
      if (errors) {
          nav.states.registration.active = true;
          return res.render('registration.ejs', {
            title: 'Registration',
            nav: nav,
            errors: errors
          });
      };

      var newUser = new Users(user);
      Users.createUser(newUser, function(err, user) {
        if (err) throw err;
        console.log(user);
        req.flash('success_msg', 'you are register and now can login!');
        res.redirect('/login');
      });
      nav.deActiveteMenu();
  });
}
