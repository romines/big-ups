var Ctrl = require('./admin.server.controller');

module.exports = function(app) {

  app.route('/api/data')
    .get(Ctrl.getFromKimo);

};
