var mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var VerseSchema = new Schema({
    verse     : String
});

var VerseModel = mongoose.model('verses', VerseSchema);

module.exports = VerseModel;
