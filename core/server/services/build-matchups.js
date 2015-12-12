"use strict";
var Matchup = require('../features/matchups/matchup.server.model.js');
var Team = require('../features/teams/team.server.model.js');

module.exports = function (sched, league, callback) {
  // console.log('BM says: ', league, sched);

  Team.find({league: league}, function (err, teams) {
    var matchups = []
    if (err) console.log(err);
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
      for (let j of teams) {
        // match home, away team name strings to
        // Team nickname property
        if (j.nickname === away) {
          matchup.away = j._id;
          bur += j.rank;
          // console.log(j.nickname, j.rank);
        }
        if (j.nickname === home) {
          matchup.home = j._id;
          bur += j.rank;
          // console.log(j.nickname, j.rank);
        }
      }
      // console.log(bur);
      matchup.burScore = bur;
      matchups.push(matchup)
    }
    callback(matchups)
  })



}
