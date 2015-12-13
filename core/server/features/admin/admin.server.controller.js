var kimoService = require('../../services/kimono-service');
var buildTeam = require('../../services/build-team.js');
var buildMatchups = require('../../services/build-matchups.js');
var teamCtrl = require('../teams/team.server.controller.js');
var matchupCtrl = require('../matchups/matchup.server.controller.js');
var moment = require('moment');

// Handles request to uri like '/api/data?league=nba&kimo=pr'
// Given two params, league and 'kimo' (full team data, power
// rankings or schedule APIs)
//
exports.getFromKimo = function(req, res, next) {
  var league = req.query.league;
  var kReq = req.query.kimo;
  var task = req.query.task;
  // Build teams from Kimono response and send back to client
  if (kReq === 'teams') {

    kimoService.promiseTeamsRaw(league)
      .then(function (data) {
        var teams = buildTeam[league](data);
        res.status(200).send(teams)
      })
      .catch(function (error) {
        console.log('Error getting raw rankings data: ', error);
      });

  // Build matchups from Kimono (+ teams from Mongo)
  } else if (kReq === 'matchups'){
    kimoService.getKimoData(function (sched) {
      buildMatchups(sched, league, function (matchups) {
        res.status(200).send(matchups);
      });
    }, league, 'sched');
  } else {
    // Just return power rankings or schedule data
    kimoService.getKimoData(function (data) {
      res.status(200).send(data);
    }, league, kReq);
  }
}

exports.adminMethods = function (req, res, next) {

  matchupCtrl.saveMatchups([
    {
      league: nba,
      date:	moment(2015-12-13),
      tv:	"ESPN, CSCH, CSNE",
      burScore: 13,
      tags:	[],
      away:	"566b7892d4f0413d110f8537",
      home:	"566b7892d4f0413d110f8532"
    },{
      league: nba,
      date:	moment(2015-12-13),
      tv:	"CSMA, C+ D",
      burScore: 42,
      tags:	[],
      home:	"566b7892d4f0413d110f8540",
      away:	"566b7892d4f0413d110f8546"
    }
  ])

  res.status(200).send('adminMethods fn fired')
}
