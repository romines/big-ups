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
  date: {
    type: Date
  },
  imgUrl: {
    type: String
  }
});


module.exports = mongoose.model('Matchup', MatchupSchema);
