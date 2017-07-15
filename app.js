var restify = require('restify');
var server = restify.createServer();
var restifyValidator = require('restify-validator');
var setupController = require('./controllers/setupController.js');
var verseController = require('./controllers/verseController.js');

setupController(server, restify, restifyValidator);
verseController(server);

var mongoose = require('mongoose');
mongoose.connect('mongodb://guest:guest@ds028310.mlab.com:28310/mil-trutas');

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
