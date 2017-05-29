 var myApp = angular.module('myApp', []);

    // create the controller and inject Angular's $scope
 myApp.controller('loginControl', function($scope,$http, $window) {

        // create a message to display in our view
	/*  $scope.user = 'John Doe';
	  $scope.password = 'ccc';*/
	  
	  $scope.login=function(user,password){

          $http({
              method: "POST",
              url: "http://localhost:8080/mark-attendance/rest/auth", //apis/authenticate/"+$scope.loginusername+"/"+$scope.loginpassword+""
			  data : { "username" : user,
						"password" : password
			         }
          }).then(function mySuccess(response){
          	window.resp=response;
              if(response.status === 200){
                  localStorage['token']=response.headers("Authorization");
                  console.log(response.headers("Authorization"));
                  localStorage['userName']=$scope.user;
                  $window.location.href = '/Attendance/WebContent/pages/home.html';
              }

          },function myError(response) {
              if(response.status === 401){
                  alert("Authentication failed. Please Try again later.")
              }
          });
		  
	  };
	  
	  
	  
    });