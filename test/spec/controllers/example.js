'use strict';

describe('Controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('seedApp'));

  var exampleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    exampleCtrl = $controller('exampleCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(exampleCtrl.awesomeThings.length).toBe(3);
  });
});
