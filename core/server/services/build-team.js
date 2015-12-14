"use strict";
var request = require('request');

var base = function(data) {
  var rankings = data.results.rankings

  function getOtherName(urlString, name) {
    var other = urlString.replace('-', ' ')
      .toLowerCase()
      .replace(name, '')
      .split('-')
      .join(' ')
      .replace(/\w\S*/g,
        function(txt) {
          return txt.charAt(0)
            .toUpperCase() + txt.substr(1)
            .toLowerCase();
        });
    return other;
  }

  var results = [];
  for (var i = 0; i < rankings.length; i++) {
    var rank = rankings[i];
    var league = rank.url.slice(19, 22)
    var chopped = rank.team.href.split('/');

    var team = {
      name: getOtherName(chopped[chopped.length - 1], rank.team.text),
      nickname: rank.team.text,
      league: league,
      short: chopped[chopped.length - 2],
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

  nba: function(data) {
    return base(data);

  },

  nfl: function(data) {
    return base(data);
  },

  nhl: function(data) {



    request("https://www.kimonolabs.com/api/2jklw5lu?apikey=Vj1A7atUmZq8lM7vE0pBvqE4Dnw40G9R",
      function(err, response, body) {

        var rankings = data.results.rankings;
        var results = [];
        for (let i of rankings) {
          var team = {
            name: i.name1 + ' ' + i.name2,
            nickname: i.name2,
            league: 'nhl',
            short: i.name1.slice(0, 2) + i.name2.slice(0, 1),
            rank: Number(i.rank),
            wins: i.record.split('-')[0],
            losses: i.record.split('-')[1],
          }
          results.push(team)
        }


        var parsed = JSON.parse(body)
        var teams = parsed.results.collection1;
        for (let team of teams) {
          let arr = team.property1.src.split('/');
          let short = arr[arr.length-1];
          for (let result of results) {

            // console.log(result.name.text, team.name, (result.name.text == team.name));
            if (result.name == team.name.text) {
              result.short = short;
            }
          }
        }
        return results;
      });

  }

}
