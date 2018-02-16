'use strict';

/**
 * @ngdoc overview
 * @name seedApp
 * @description
 * # seedApp
 *
 * Bootstrap code of the application.
 */

var moduleName = 'seedApp';

/* AUTENTICACION */
//var userInfo, privilegeList;

$.ajax({
  type: 'GET',
  url: 'config/environment.json',
  success: function (environmentData) {
    if(!$.isEmptyObject(environmentData)){
      angular.module(moduleName).constant(environmentData);
    }

    /* AUTENTICACION */
    //var jwtLoginUrl = environmentData.URLs.loginJwt;

    $.ajax({
      type: 'GET',
      url: 'config/parameters.json',
      success: function (parametersData) {
        if(!$.isEmptyObject(parametersData)){
          angular.module(moduleName).constant(parametersData);
        }

        /* INICIO DE APLICACION */
        angular.bootstrap($(document).find('#app'), [moduleName]);
      },
      error: function () {
        $('body').text('FAIL: parameters not present');
      }
    });

    /* AUTENTICACION */
    /*
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
    */
  },
  error: function () {
    $('body').text('FAIL: environment configuration not present');
  }
});/**
 * Created by fcasals on 6/2/17.
 */
