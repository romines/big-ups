angular.module('app').controller('adminController', ['$scope', 'dataService', adminController]);

function adminController($scope, dataService) {
  $scope.responseData = '';
  $scope.blast = function () {
    // $scope.responseData = 'asdflkjasd';
    dataService.getData()
      .then(function (response) {
        $scope.teams = fpiCleanup(response);
      })
  }

  function fpiCleanup(response) {
    // console.log(response);
    var teams = response.data.results.rankings;
    teams.shift();
    var clean = [];
    for (var i=0; i<teams.length; i++) {
      // console.log(teams[i]);
      clean.push({
        name: teams[i].team.text,
        rank: teams[i].rank,
        wins: teams[i].wins,
        losses: teams[i].losses,
        fpi: teams[i].fpi,
      });
    }
    return clean.filter(function (team) {
      return team.name;
    });;
  }
}
