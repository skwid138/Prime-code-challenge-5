// DO NOT MODIFY
var express = require('express');
var bodyParser = require('body-parser');
var heroRouter = require('./routes/hero');
require('./modules/db'); // require db module to connect to the database

var app = express();

// middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// routers
app.use('/hero', heroRouter);

// server port set and listen
var serverPort = 3000;

var server = app.listen(serverPort, function() {
  console.log('up and listening on', server.address().port);
});
