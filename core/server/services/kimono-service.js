"use strict";
const
  request = require('request'),
  konfig = require('./kimono-config.js');


exports.getKimoData = function (callback, league, kReq) {
  console.log(league, kReq);
  request(konfig.baseUrl + konfig.kID[league][kReq] + konfig.apiKey,
  function(err, response, body) {
    if (err) console.log(err);
    callback(body);
  });
}
