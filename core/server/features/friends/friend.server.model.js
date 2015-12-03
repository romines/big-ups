var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


var MatchupSchema = new Schema({
  home: {
    type: String
  },
  away: {
    type: String
  },
  date: {
    type: String
  }
});


module.exports = mongoose.model('Matchup', MatchupSchema);
