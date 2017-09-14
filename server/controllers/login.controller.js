module.exports = function(app, db, nav) {

  app.get( '/login' , function(req, res) {
      nav.states.login.active = true;
      res.render('login.ejs', {
        title: "Login",
        nav: {states: nav.states }
       });
      res.end('here user details');
      nav.deActiveteMenu()
  } );

  app.post( '/login' , function(req, res) {

  } );

}
