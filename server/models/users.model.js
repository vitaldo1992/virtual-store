var mongoose = require('mongoose'),
    bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

var UsersModel = new Schema({
  _id: Schema.ObjectId,
  email : String,
  firstName : String,
  lastName : String,
  phone : String,
  role : Number,
  basket : Array,
  password : String,
  location : String
});

module.exports = mongoose.model('users', UsersModel);
module.exports.createUser = function(newUser, callback) {
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("B4c0/\/", salt, function(err, hash) {
        // Store hash in your password DB.
        newUser.password = hash;
        newUser.save(callback);
    });
});
}
