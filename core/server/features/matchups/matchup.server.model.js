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
    type: String
  },
  time: {
    String
  },
  burScore: {
    type: Number
  },
  tv: {
    type: String,
    enum: [
      'espn',
      'espn2',
      'nbc',
      'nbcs',
      'nbatv',
      'abc',
      'fox',
      'cbs',
      'foxsports',
      'fs1',
      'tnt',
      'tbs',
      'root',
      'regional'
    ],
    default : ' '
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
