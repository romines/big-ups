var app = angular.module('app');


app.service('matchupService', ['$q', '$http', matchupService]);


function matchupService($q, $http) {

  this.getMatchups = function() {

    return $http.get('/api/matchups')
      .then(function(response) {
        return response.data;
      });
  };


  this.getMatchupById = function(id) {

    return $http.get('/api/matchups/' + id)
      .then(function(response) {

        console.log(response);
        return response.data;
      }, function(error) {

        console.log(error);
        return "sorry, there is nobody by that id";
      });
  };


  this.postNewMatchup = function(friend) {

    return $http.post('/api/matchups', friend)
      .then(function(response) {

        console.log(response);
        return "friend added!";
      }, function(error) {
        console.log(error);
        return error;
      });
  };

}
