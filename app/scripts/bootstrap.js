'use strict';

/**
 * @ngdoc overview
 * @name minsalSigteApp
 * @description
 * # minsalSigteApp
 *
 * Bootstrap code of the application.
 */

var moduleName = 'seedApp';

var userInfo, privilegeList;

$.ajax({
  type: 'GET',
  url: '/config/environment.json',
  success: function (environmentData) {
    angular.module(moduleName).constant(environmentData);

    //var jwtLoginUrl = environmentData.URLs.loginJwt;

    $.ajax({
      type: 'GET',
      url: '/config/parameters.json',
      success: function (parametersData) {
        angular.module(moduleName).constant(parametersData);
      },
      error: function () {
        document.write('FAIL: parameters not present');
      }
    });

    $.ajax({
      type: 'GET',
      url: jwtLoginUrl + 'autenticacion/refresh',
      xhrFields: {withCredentials: true},
      dataType: 'json',
      success: function (response) {
        userInfo = response;
        $.ajax({
          type: 'GET',
          url: jwtLoginUrl + 'privilegios/list',
          xhrFields: {withCredentials: true},
          dataType: 'json',
          success: function (response) {
            privilegeList = response;
            angular.bootstrap($(document).find('#app'), [moduleName]);
          }
        });
      },
      error: function () {
        console.info('El usuario no se encuentra autenticado');
        angular.bootstrap($(document).find('#app'), [moduleName]);
      }
    });
  },
  error: function () {
    document.write('FAIL: environment configuration not present');
  }
});/**
 * Created by fcasals on 6/2/17.
 */
