var Products = require('../models/products.model.js');

module.exports = function(app, db, nav) {
  app.get( '/show-products/:id' , function(req, res) {
    var id = req.params.id;
    Products.find({'addedBy': id}, function(err, products){
      if (err) { return console.log(err) }
      else {
        res.send(products);
        res.end('here user details');
      };
    });
  });
}
