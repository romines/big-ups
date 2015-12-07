var app = angular.module('app');

app.controller('adminController', ['$scope', 'cfbService', adminController]);

function adminController($scope, cfbService) {
  $scope.test = 'test from adminController';
}
