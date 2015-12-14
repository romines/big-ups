var app = angular.module('app');


app.controller('homeController', ['$scope', '$filter', 'matchupService', homeController]);


function homeController($scope, $filter, matchupService) {

  getMatchups();

  function getMatchups() {
    matchupService.getMatchups()
git       .then(function(data) {

        $scope.matchUps = data;
      });
  }

  // retrieves the min 'id' of a collection, used for the group ordering.
  //you can use lodash instead. e.g: _.min(arr, 'id')
  $scope.min = function(arr) {
    return $filter('min')
      ($filter('map')(arr, 'burScore'));
  }


  // $scope.timeFilter = '';
  //
  // $scope.max = function(arr) {
  //   return $filter('max')
  //     ($filter('map')(arr, 'burScore'));
  // }

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
