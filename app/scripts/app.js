'use strict';

/**
 * @ngdoc overview
 * @name seedApp
 * @description
 * # seedApp
 *
 * Main module of the application.
 */
angular
  .module('seedApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap',
    'angular-growl',
    'angularMoment'
  ])

  .config(function ($locationProvider) {
    $locationProvider.html5Mode({enabled: false}).hashPrefix('!');
  })

  .config(function ($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
    /* AUTENTICACION */
    //$httpProvider.interceptors.push('checkSessionAliveInjector');
  })

  .config(function (growlProvider) {
    growlProvider.globalTimeToLive(5000);
  })

  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('example',{
        url: '/',
        templateUrl: 'views/example.html',
        controller: 'exampleCtrl'
      }
    );
  });
