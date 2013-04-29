'use strict';

angular.module('yoAngularApp')
  .filter('myCustomFilter', function () {
    return function (input) {
      return input + '' + new Date().getTime();
    };
  });
