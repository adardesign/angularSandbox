'use strict';

describe('Controller: MyControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('yoAngularApp'));

  var MyControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyControllerCtrl = $controller('MyControllerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
