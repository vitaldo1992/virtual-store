var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductsModel = new Schema({
  _id: Schema.ObjectId,
  name : String,
  color : Number,
  type : Number,
  year : Number,
  old : Number,
  sortOfgrape : String,
  placeOfgrape : {
    country : String,
    town : String
  },
  madeInLocation : {
    country : String,
    town : String
  },
  addedBy : Schema.ObjectId
});

module.exports = mongoose.model('products', ProductsModel);
