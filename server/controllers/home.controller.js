module.exports = function(app, db, nav) {

  app.get( '/', function(req, res) {
    nav.states.home.active = true;
    res.render('home.ejs', {
      title: "Welcome to Wine",
      nav: { states: nav.states }
    });
    nav.deActiveteMenu();
  });

}
