var app = angular.module('app');


app.controller('homeController', ['$scope', 'friendService', homeController]);


function homeController($scope, friendService) {
  friendService.getMatchups()
    .then(function(data) {

      $scope.matchUps = data;
    });
  // $scope.getMatchups = function () {
  //
  //
  // };


  $scope.getMatchupById = function(id) {

    friendService.getMatchupById(id)
      .then(function(data) {

        $scope.friend = data;
      });
  };


  $scope.postNewMatchup = function() {

    var newMatchup = {
      home: $scope.home,
      away: $scope.away,
      date: $scope.date
    };
    friendService.postNewMatchup(newMatchup)
      .then(function(data) {

        $scope.flash = data;
      });
    $scope.home = "";
    $scope.away = "";
    $scope.date = "";


  };
}
