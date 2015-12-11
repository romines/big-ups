'use strict';
let Ctrl = require('./team.server.controller');

module.exports = function (app) {
  app.route('/api/teams')
    .get(Ctrl.getTeams);

  app.route('/api/teams')
    .post(Ctrl.postTeams);
};
