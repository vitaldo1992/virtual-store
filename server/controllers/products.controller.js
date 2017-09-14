var Products = require('../models/products.model.js');

module.exports = function(app, db, nav) {
  app.get( '/products', function(req, res) {
    nav.states.products.active = true;
    Products.find({}, function(err, products) {
      if (err) { console.log(err) }
      else {
        res.render('products.ejs', {
          title: "Products",
          products: products,
          nav: { states: nav.states}
         });
        nav.deActiveteMenu();
      }
      res.end('welcome to products');
    });
  });
}
