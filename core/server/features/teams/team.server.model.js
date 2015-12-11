var mongoose = require('mongoose'),
  Schema = mongoose.Schema,

  TeamSchema = new Schema({
    name     : String,
    nickname : String,
    league   : String,
    rank     : Number,
    wins     : Number,
    losses   : Number,
    imgPath  : String
  });

module.exports = mongoose.model('Team', TeamSchema);
