'use strict';

angular.module('yoAngularApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.names = "";
    
    var names = $http.get("/API/names.json",{
    	headers: {
        	"Content-Type": "application/json"
    	}
	});

      $scope.loadMore = function () {
      	
	    names = $http.get("/API/allNames.json",{
	    	headers: {
	        	"Content-Type": "application/json"
	    	}
		}).success(function(names, status) {
        $scope.names = names;
      })
      }

      names.success(function(names, status) {
        $scope.names = names;
      }).
      error(function(names, status) {
        $scope.names = names || "Request failed";
    });

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
