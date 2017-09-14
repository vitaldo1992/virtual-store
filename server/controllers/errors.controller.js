module.exports = function(app, db, nav) {

  app.get( '/errors' , function(req, res) {
      res.render('error-404.ejs', {
        title: "404 error"
       });
      res.end('something was wrong');
      nav.deActiveteMenu();
  });

}
