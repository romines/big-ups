"use strict";
const
  request = require('request');

exports.getData = function (callback) {
  request("https://www.kimonolabs.com/api/cb7yt6n8?apikey=Vj1A7atUmZq8lM7vE0pBvqE4Dnw40G9R",
  function(err, response, body) {
    if (err) console.log(err);
    callback(body);
  });
}
