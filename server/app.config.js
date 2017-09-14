var constants = require('./app.constants.js');

var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    app = express(),
    expressValidator = require('express-validator'),
    flash = require('connect-flash'),
    session = require('express-session'),
    passport = require('passport'),
    LocalStrategy = require('passport-local');

app.use( express.static(__dirname + '/public'));

app.use( bodyParser.urlencoded( {extended: true} ) );
app.use( cookieParser() );
app.use( session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}) );

app.use(function (err, req, res, next) {
  console.log(err);
});

app.engine('ejs', require('ejs-locals'));
app.set('views', __dirname + '/views');
app.use( bodyParser.json() );
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', constants.appBaseUrl);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// Passport init
app.use(passport.initialize());
app.use(passport.session());

app.use( expressValidator({
  errorFormatter: function(param, msg, value) {
    var namespace = param.split('.')
    , root = namespace.shift()
    , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param: formParam,
      msg: msg,
      value: value
    };
  }
}) );

app.use( flash() );
app.use( function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
} );

app.listen( 3000, function() {
  console.log('Connection is safed');
});

module.exports = app;
