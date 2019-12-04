let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
const corsHeaders = require('./middleware/cors-headers');
let indexRouter = require('./routes/index');
let cors = require('cors');
let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());

// Handle preflight OPTIONS request
const corsOptions = {
  origin: true
};

app.options('*', cors(corsOptions)); // preflight OPTIONS;

// import environmental variables from our variables.env file
require('dotenv').config({
  path: 'variables.env'
});

// addition of CORS headers
app.use(corsHeaders);

// get reference to the client build directory
const staticFiles = express.static(path.join(__dirname, '../../client/build'))
// pass the static files (react app) to the express app. 
app.use(staticFiles);

app.use('/', indexRouter);

app.use('/*', staticFiles);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
