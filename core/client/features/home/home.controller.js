var app = angular.module('app');


app.controller('homeController', ['$scope', 'matchupService', homeController]);


function homeController($scope, matchupService) {

  getMatchups();

  function getMatchups() {
    matchupService.getMatchups()
      .then(function(data) {

        $scope.matchUps = data;
      });
  }

  $scope.getMatchups = function () {

    getMatchups();

  };


  $scope.getMatchupById = function(id) {

    matchupService.getMatchupById(id)
      .then(function(data) {

        $scope.friend = data;
      });
  };


  // $scope.postNewMatchup = function() {
  //
  //   var newMatchup = {
  //     home: $scope.home,
  //     away: $scope.away,
  //     date: $scope.date,
  //     imgUrl: 'https://cdn2.iconfinder.com/data/icons/social-aquiocons/128/Aquicon-Github.png'
  //   };
  //   matchupService.postNewMatchup(newMatchup)
  //     .then(function() {
  //
  //       $scope.getNewMatchups();
  //     });
  //   $scope.home = "";
  //   $scope.away = "";
  //   $scope.date = "";
  // };
}
