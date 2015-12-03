var Ctrl = require('./friend.server.controller');

module.exports = function (app) {

    app.route('/api/friends')
        .post(Ctrl.postMatchup)
        .get(Ctrl.getMatchups);

    app.route('/api/friends/:id')
        .get(Ctrl.getOneMatchup)
        .put(Ctrl.putMatchup)
        .delete(Ctrl.deleteMatchup);
};