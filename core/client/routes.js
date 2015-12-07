var app = angular.module('app');

app.config(['$stateProvider', '$urlRouterProvider', routing]);

function routing($stateProvider, $urlRouterProvider) {

  $urlRouterProvider
    .otherwise('/');


  $stateProvider
    .state('home', {
      url: '/',
      views: {
        main: {
          templateUrl: 'features/home/home.template.html',
          controller: 'homeController'
        }
      }
    })
    .state('admin', {
      url: '/admin',
      views: {
        main: {
          templateUrl: 'features/admin/admin.template.html',
          controller: 'adminController'
        }
      }
    });
}
