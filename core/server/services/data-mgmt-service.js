"use strict";
const
  mongoose = require('mongoose'),
  Matchup = require('../features/matchUps/matchup.server.model'),
  Team = require('../features/teams/team.server.model'),
  kimoService = require('./kimono-service.js');




let getKimoData = function (league, kReq) {

  kimoService.getKimoData(league, kReq)
    .then(function (response) {

      let rows = handleResponse[kReq](response);
      let props = Object.keys(rows[0]);

    });
}

let handleResponse = {
  pr : function (response) {
      var kAPI = response.data.name;
      var teams = response.data.results.rankings;

      var clean = [];
      for (var i=0; i<teams.length; i++) {
        var teamRank = {
          name   : teams[i].team.text,
          rank   : teams[i].rank,
          wins   : teams[i].wins,
          losses : teams[i].losses
        }
        if (kAPI === 'cfb_pr') teamRank.fpi = teams[i].fpi;

        clean.push(teamRank);
      }
      return clean.filter(function (team) {
        return team.name;
      });
    },

  sched : function (response) {
      var games = response.data.results.matchups;
      var clean = [];
      var getDate = function (url) {
        var str =  url.split('&')[0];
        return str.slice(-10, str.length)
      }

      for (var i=0; i<games.length; i++) {
        var dateStr = (games[i].url.length > 42) ? getDate(games[i].url) : moment().format('YYYY-MM-DD');
        clean.push({
          away : games[i].away,
          home : games[i].home,
          time : ((games[i].time.slice(-3) === 'EST') ? games[i].time : 'past'),
          tv   : games[i].tv,
          date : dateStr
        })
      }
      return clean;
    }
}
