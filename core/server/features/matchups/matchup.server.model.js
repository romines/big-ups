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
  tags: {
    rivalry : {
      type : Boolean,
      default : false
    },
    playoffImplications : {
      type : Boolean,
      default : false
    },
    favorite : {
      type : Boolean,
      default : false
    }
  }
});


module.exports = mongoose.model('Matchup', MatchupSchema);
