'use strict';
let Ctrl = require('./team.server.controller');

module.exports = function (app) {
  app.route('/api/teams')
    .get(Ctrl.getTeams)
  // posts teams to Mongo (after building on client)
    .post(Ctrl.postTeams);
};
