var mongoose = require('mongoose'),
  Schema = mongoose.Schema,

  TeamSchema = new Team({
    name       : String,
    nickname   : String,
    league     : String,
    rank       : Number,
    wins       : Number,
    losses     : Number,
    powerIndex : Number
  });

module.exports = mongoose.model('Team', TeamSchema);
