// Create web server
var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');

// Create web server
var app = express();

// Set port
app.set('port', process.env.PORT || 3000);

// Set views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Use middleware
app.use(bodyParser.urlencoded({extended: false}));

// Set routes
app.use('/', require('./routes/home'));
app.use('/comments', require('./routes/comments'));

// Set static directory
app.use(express.static(path.join(__dirname, 'public')));

// Create server
var server = app.listen(app.get('port'), function() {
  console.log('Server started on port ' + app.get('port'));
});