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
  this.getNewMatchups = function () {
    return $http.get('/api/k/matchups')
      .then(function (response) {
        return response;
      })
  }
  this.postNewMatchups = function (matchups) {
    return $http.post('api/matchups', matchups)
      .then(function (response) {
        return response;
      })
  }

}
