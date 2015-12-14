"use strict";
const
  mongoose = require('mongoose'),
  moment = require('moment'),
  Matchup = require('../features/matchups/matchup.server.model'),
  Team = require('../features/teams/team.server.model'),
  nflSched = require('./temp.js');


// module (object) that has cleanup methods for power ranking and
// schedule kimono responses, and ...
//

module.exports = {
  nba: {
    pr: function(response) {
      return base_pr(response);
    },

    sched: function(response) {
      return base_sched(response);
    }
  },
  nhl: {
    pr: function (response) {
      response = JSON.parse(response);
      var teams = response.results.collection1;
      console.log(teams);
      var clean = []
      for (let i of teams) {
        var teamRank = {
          name: i.name1,
          rank: i.rank,
          wins: i.record.split('-')[0],
          losses: i.record.split('-')[1],
        }
        clean.push(teamRank);
      }
      return clean;
    },
    sched: function(response) {
      return base_sched(response);
    }
  },
  nfl: {
    pr : function(response) {
      return base_pr(response);
    },

    sched: function(response) {
      response = nflSched;
      var games = response.results.collection1;
      var clean = [];
      var days = {
        Thu : 4,
        Sun : 7,
        Mon : 8
      };
      for (let i of games) {
        var dateArr = i.dayTime.split(' ');
        clean.push({
          away: i.away2,
          home: i.home2,
          time: dateArr.slice(1).join(' '),
          tv: i.tv,
          date: moment().day(days[dateArr[0]]).format('YYYY-MM-DD')
        })
      }
      return clean;
    }
  },

}

function base_pr(response) {
  response = JSON.parse(response)
  // var kAPI = response.name;
  var teams = response.results.rankings;

  var clean = [];
  for (var i = 0; i < teams.length; i++) {
    var teamRank = {
      name: teams[i].team.text,
      rank: teams[i].rank,
      wins: teams[i].wins,
      losses: teams[i].losses
    }
    // if (kAPI === 'cfb_pr') teamRank.fpi = teams[i].fpi;

    clean.push(teamRank);
  }
  return clean.filter(function(team) {
    return team.name;
  });
}

function base_sched(response) {
  // console.log('response from inside data-mgmt: ', response);
  response = JSON.parse(response);
  var games = response.results.matchups;
  var clean = [];
  var getDate = function(url) {
    var str = url.split('&')[0];
    return str.slice(-10, str.length)
  }

  for (var i = 0; i < games.length; i++) {
    var dateStr = (games[i].url.length > 42) ? getDate(games[i].url) : moment().format('YYYY-MM-DD');
    clean.push({
      away: games[i].away,
      home: games[i].home,
      time: ((games[i].time.slice(-3) === 'EST') ? games[i].time : 'past'),
      tv: games[i].tv,
      date: moment(dateStr).format('YYYY-MM-DD')
    })
  }
  return clean;
}
