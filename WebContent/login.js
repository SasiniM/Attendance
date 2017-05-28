 var myApp = angular.module('myApp', []);

    // create the controller and inject Angular's $scope
 myApp.controller('loginControl', function($scope,$http) {

        // create a message to display in our view
	  $scope.user = 'John Doe';
	  $scope.password = 'ccc';
	  
	  $scope.login=function(user,password){
		  
		  
		  
	  };
	  
	  
	  
    });