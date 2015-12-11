var app = angular.module('app');

app.service('dataService', ['$q', '$http', dataService]);

function dataService($q, $http) {
  this.getKimoData = function (league, kReq) {
    return $http.get('/api/data?league=' + league + '&kimo=' + kReq )
      .then(function (response) {
        return response;
      });
  }
  this.postTeams = function (teams) {
    return $http.post('/api/teams', teams)
      .then(function (response) {
        return response;
      })
  }
  this.getMatchups = function () {
    return $http.get('/api/matchups')
      .then(function (response) {
        return response;
      })
  }

}
