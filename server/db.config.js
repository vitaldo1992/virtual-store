var MongoClient = require('mongodb').MongoClient,
    ObjectId = require('mongodb').ObjectID;
    mongoose = require('mongoose'),
    constants = require('./app.constants.js');

var db = mongoose.connect(constants.databaseUrl);

var connection = mongoose.connection;
    connection.on('error', console.error.bind(console, 'connection error:'));
    connection.once('open', function() {
      console.log('db is safed');
    });

module.exports = db;
