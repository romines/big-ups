// var app = angular.module('app');
//
// app.controller('adminController', ['$scope', 'cfbService', adminController]);
//
// function adminController($scope, cfbService) {
//   $scope.test = 'test from adminController';
// }
angular.module('app').controller('adminController', function ($scope) {
  $scope.singleModel = 1;

  $scope.radioModel = 'Middle';

  $scope.checkModel = {
    left: false,
    middle: true,
    right: false
  };

  $scope.checkResults = [];

  $scope.$watchCollection('checkModel', function () {
    $scope.checkResults = [];
    angular.forEach($scope.checkModel, function (value, key) {
      if (value) {
        $scope.checkResults.push(key);
      }
    });
  });
});
