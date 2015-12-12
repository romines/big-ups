var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


var MatchupSchema = new Schema({
  away: {
    type: Schema.Types.ObjectId,
    ref: 'Team'
  },
  home: {
    type: Schema.Types.ObjectId,
    ref: 'Team'
  },
  league: String,
  date: {
    type: Date
  },
  burScore: {
    type: Number
  },
  tags: [String]
});


module.exports = mongoose.model('Matchup', MatchupSchema);
