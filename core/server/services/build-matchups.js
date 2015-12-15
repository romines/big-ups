"use strict";
var Matchup = require('../features/matchups/matchup.server.model.js');
var Team = require('../features/teams/team.server.model.js');

module.exports = function (sched, league, callback) {

  Team.find({league: league}, function (err, mongTeams) {
    if (err) console.log(err);
    var matchups = []
    for (let i of sched) {
      let matchup = {
        league : league,
        date : i.date,
        tv : i.tv,
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
      matchup.burScore = bur;
      matchups.push(matchup)
    }
    callback(matchups)
  });
};
