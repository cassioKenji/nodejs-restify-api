var helpers = require('../config/helperFunctions.js');
var VerseModel = require('../models/VerseModel.js');

module.exports = function(server) {

	server.get("/verses", function(req, res, next) {
    VerseModel.find({}, function(err, verses) {
        if (!err){
          // console.log('Succesfully retrieved verses');
          helpers.success(res, verses, next);
        } else {throw err;
          // console.log('Error trying to fetch verses');
          helpers.failure(res, next, errors[0], 500);
        }
    });
	});

  server.get("/new/:verse", function(req, res, next) {
    var newVerse = new VerseModel({ verse: req.params.verse});
    newVerse.save(function (err, newVerse) {
    if (err) return handleError(err);
      helpers.success(res, newVerse, next);
    })
  });

}
