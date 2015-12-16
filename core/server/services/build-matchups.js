"use strict";
var Matchup = require('../features/matchups/matchup.server.model.js');
var Team = require('../features/teams/team.server.model.js');

var ntwks = [
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
  'root'
];

module.exports = function (sched, league, callback) {

  Team.find({league: league}, function (err, mongTeams) {
    if (err) console.log(err);
    var matchups = []
    for (let i of sched) {
      let matchup = {
        league : league,
        date : i.date,
        tv : getTV(i.tv, ntwks),
        time : i.time,
        burScore : 100,
        tags : []
      }
      let bur = 0;
      let away = i.away;
      let home = i.home;
      let foundHome = false;
      let foundAway = false;
      for (let j of mongTeams) {
        // match home, away team name strings to
        // Team nickname property

        if (j.nickname == away) {
          foundAway = true;
          matchup.away = j._id;
          bur += j.rank;
        }
        if (j.nickname == home) {
          foundHome = true;
          matchup.home = j._id;
          bur += j.rank;
        }
      }
      if (!foundAway || !foundHome) {

        for (let h of mongTeams) {
          // match home, away team name strings to
          // Team nickname property
          if (h.othername.toLowerCase() == away.toLowerCase()) {
            foundAway = true;
            matchup.away = h._id;
            bur += h.rank;
          }
          if (h.othername.toLowerCase() == home.toLowerCase()) {
            foundHome = true;
            matchup.home = h._id;
            bur += h.rank;
          }
        }

      }
      if (!foundAway  && away.charAt(2) === ' ') {
        for (let k of mongTeams) {
          if (away.slice(3) === k.nickname || away.slice(3) === k.othername) {
            foundAway = true;
            matchup.away = k._id;
            bur += k.rank;
          }
        }
      }
      if (!foundHome  && home.charAt(2) === ' ') {
        for (let l of mongTeams) {
          if (home.slice(3) === l.nickname || home.slice(3) === l.othername) {
            foundHome = true;
            matchup.home = l._id;
            bur += l.rank;
          }
        }
      }
      matchup.burScore = bur;
      matchups.push(matchup)
    }
    callback(matchups)
  });
};

function getTV(str, ntwks) {
  var tmp = str.toLowerCase()
              .replace(' ','');

  for (var i=0; i<ntwks.length; i++) {
    if (tmp.indexOf(ntwks[i]) > -1) {
      if (ntwks[i] === 'nbc') {
        if (tmp.indexOf('nbcs') > -1) {
          return 'nbcs'
        }
      } else if (tmp.indexOf('espn2') > -1) {
        return 'espn2'
      }
      return ntwks[i];
    }
  }
  return 'regional';
}
