var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
require('./config/passport'); //Authentication config 

//Import routers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const apiRouter = require('./routes/api');
const authRouter = require('./routes/auth');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cookieSession({
	maxAge: 30 * 24 * 60 * 60 * 1000,
	keys: ['HUHUHUHUHUHUHAHHAHA']
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

//Connect MongoDB
mongoose.connect('mongodb+srv://sgtpsibin:AOSteam1102!@quanganh-acdyo.mongodb.net/foodies'
, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to mongodb');
});

//Routing
app.use(cors({origin:'https://react-foodies.herokuapp.com/'}));
// app.use('/', indexRouter);

app.use('/users', usersRouter);
app.use('/api', apiRouter);
app.use('/auth',authRouter);
app.get('/',app.use(express.static(path.join(__dirname,'client','build'))), function(req, res, next) {
  
  res.sendFile('index.html');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
