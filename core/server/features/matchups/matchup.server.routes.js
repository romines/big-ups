var Ctrl = require('./matchup.server.controller');

module.exports = function (app) {

    app.route('/api/matchups')
        .post(Ctrl.postMatchups)
        .get(Ctrl.getMatchups);

    app.route('/api/matchups/:id')
        .get(Ctrl.getOneMatchup)
        .put(Ctrl.putMatchup)
        .delete(Ctrl.deleteMatchup);
};
