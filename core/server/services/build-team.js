var request = require('request');

var base = function(rankings) {
  function getOtherName(urlString, name) {
    var other = urlString.replace('-', ' ')
      .toLowerCase()
      .replace(name, '')
      .split('-')
      .join(' ')
      .replace(/\w\S*/g,
        function(txt){
          return txt.charAt(0)
          .toUpperCase() + txt.substr(1)
          .toLowerCase();
        });
    return other;
  }

  var results = [];
  for (var i = 0; i < rankings.length; i++) {
    var rank = rankings[i];
    var league = rank.url.slice(19,22)
    var chopped = rank.team.href.split('/');

    var team = {
      name: getOtherName(chopped[chopped.length -1], rank.team.text),
      nickname: rank.team.text,
      league: league,
      short: chopped[chopped.length -2],
      rank: Number(rank.rank),
      wins: rank.wins,
      losses: rank.losses,
      imgPath: chopped[3] + '/' + chopped[7] + '.png'
    }
    results.push(team);
  }

  return results;

}

module.exports = {
  // allows league/API specific overides

  nba : function(rankings) {
    return base(rankings);

  },

  nfl : function (rankings) {
    return base(rankings);
  }

}
