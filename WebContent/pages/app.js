var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider

		.when('/', {
			templateUrl : 'back.html',

			controller  : 'HomeController'
		})

		.when('/mark', {
			templateUrl : 'mark.html',
			controller  : 'MarkController'
		})

		.when('/profile', {
			templateUrl : 'new_profile.html',
			controller  : 'NewProfileController'
		})

		.when('/view_profile', {
			templateUrl : 'view_profile.html',
			controller  : 'ViewProfileController'
		})


		.when('/view_attendance', {
			templateUrl : 'view_attendance.html',
			controller  : 'ViewAttendanceController'
		})


//
//		  .otherwise({redirectTo: '/'});


});



/*app.controller('HomeController', function($scope) {

 $scope.user = 'John Doe';
 $scope.password = 'ccc';

 });*/

/*app.controller('loginControl', function($scope,$http) {



 });*/


app.controller('HomeController', function($scope) {
	$scope.message = 'Welcome!!';
//			  $scope.message = 'This is the Home page';

	/*if(condition)
	 disableLink();
	 else
	 showLink();*/


	/*  function showLink()
	 {
	 document.getElementById('Link1').disabled=false;
	 //assign href dynamically
	 document.getElementById('Link1').href = "somepage.html";
	 document.getElementById("Link1").style.textDecoration = "underline";
	 document.getElementById("Link1").style.cursor = "hand";
	 }*/

	/*  $scope.disableLink=function disableLink()
	 {
	 document.getElementById("p").disabled=true;
	 document.getElementById('p').removeAttribute('href');
	 document.getElementById('p').style.textDecoration = 'none';
	 document.getElementById('p').style.cursor = 'default';
	 };



	 $scope.disableLink();
	 $scope.myCol=true;

	 $scope.addInviteesDisabled=false;

	 $scope.disabled = function() {
	 if($scope.addInviteesDisabled) { return false;}
	 }

	 $scope.disabled(); */

});

app.controller('MarkController', function($scope,$http) {

	$scope.user_in= function(){
		$scope.message_in='Have a nice day !';
		$scope.message_out='';
		$scope.out_time= '';
		$scope.in_date='';
		$scope.in_time='';
		//retrieve timestamp of in time and record in db
		$scope.in_date= Date();
		$scope.in_time= $scope.in_date.slice(0,24);

		var data = {
			in_time: in_time

		};

		/* $http.post('/api/users/post', JSON.stringify(data)).then(function (response) {

		 if (response.data)
		 $scope.msg = "Post Data Submitted Successfully!";
		 }, function (response) {
		 $scope.msg = "Service not Exists";


		 });*/
	};


	$scope.user_out= function(){
		$scope.message_out='Good bye !';
		$scope.message_in='';
		$scope.out_time='';
		//retrieve timestamp of out time and record in db
		//$scope.in_time= Date();
		$scope.out_date= Date();
		$scope.out_time= $scope.out_date.slice(0,24);

		var data ={
			out_time: out_time

		};

		/* $http.post('/api/users/post', JSON.stringify(data)).then(function (response) {

		 if (response.data)
		 $scope.msg = "Post Data Submitted Successfully!";
		 }, function (response) {
		 $scope.msg = "Service not Exists";
		 });*/
	};

});

app.controller('NewProfileController', function($scope,$http) {
	$scope.message = 'Create new profile';
	/*var employee = {
	 firstName:"",
	 lastName:"",
	 designation:"",
	 email:"",
	 phone:"",
	 supervisor:"",
	 company:"",
	 employee_ID:""

	 };*/

	//$scope.employee=employee;
	//$scope.fn=employee.firstName;

	$scope.firstName="";
	$scope.lastName="";
	$scope.designation="";
	$scope.email="";
	$scope.phone="";
	$scope.supervisor="";
	$scope.company="";
	$scope.employee_ID="";

	$scope.emp_data="";

	/*$scope.uploadPic = function(file) {
	 file.upload = Upload.upload({
	 url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
	 data: {username: $scope.username, file: file},
	 });

	 file.upload.then(function (response) {
	 $timeout(function () {
	 file.result = response.data;
	 });
	 }, function (response) {
	 if (response.status > 0)
	 $scope.errorMsg = response.status + ': ' + response.data;
	 }, function (evt) {
	 // Math.min is to fix IE which reports 200% sometimes
	 file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
	 });
	 }*/



	$scope.new_user=function(firstName,lastName,designation,email,phone,supervisor,company,employee_ID){

		var emp_data = {

			firstName: firstName,
			lastName: lastName,
			designation: designation,
			email: email,
			phone: phone,
			supervisor: supervisor,
			company: company,
			employee_ID: employee_ID

		};
		/* $http.post('/api/users/post', JSON.stringify(emp_data)).then(function (response) {

		 if (response.data)
		 $scope.msg = "Post Data Submitted Successfully!";
		 }, function (response) {
		 $scope.msg = "Service not Exists";
		 $scope.statusval = response.status;
		 $scope.statustext = response.statusText;
		 $scope.headers = response.headers();

		 });*/};

});


app.controller('ViewProfileController', function($scope,$http) {

	$scope.name="";
	$scope.first_name="";
	$scope.last_name="";
	$scope.data="";

	$scope.emp_det="";
	$scope.show=false;

	$scope.separate=function(name){

		//$scope.employee.firstName=name.split(' ').slice(0, -1).join(' ');
		$scope.first_name=name.split(' ').slice(0, -1).join(' ');
		$scope.last_name=name.split(' ').slice(-1).join(' ');

	};

	$scope.get_details=function(){

		/* var data = {
		 first_name: first_name,
		 last_name: last_name,
		 };*/
		$http.get("http://localhost:8080/rest/employee/Sasini/Madhumali")
		.then(function(response) {
		  $scope.emp_det = response.data;
		  });

		//var emp_det =  { "firstName":"John", "lastName":"Green","designation": "Developer","email": "jg@gmail.com","phone":"0777496482","supervisor":"Mark Phelps","company": "Cyrup","employee_ID":"EX62A" };
		$scope.emp_det=emp_det;
		$scope.show=true;
	};

});

// (function () {
// var app = angular.module('myApp', []);
// 	app.controller("ViewProfileController", ['$scope', '$http', function ($scope, $http)
// 	{
// 		$scope.get_details
// 		{
// 			$http.get("http://localhost:8080/rest/employee/Sasini/Madhumali").then(onUserComplete, onError)
// 	};
// 		var onUserComplete = function (response) {
// 			$scope.employee = response.data;
// 		};
// 		var onError = function (reason) {
// 			$scope.error = "Failed"
// 		};
// 	}]);
//
// }());



app.controller('ViewAttendanceController', function($scope,$http) {

	$scope.name="";
	$scope.first_name="";
	$scope.last_name="";
	$scope.selectedMonth="";
	$scope.att_data="";
	$scope.Date="";
	$scope.In_Time="";
	$scope.Out_Time="";
	$scope.Worked_Hours="";
	$scope.show=false;


	$scope.mymonth="";
	$scope.fun="";
	$scope.my_month="";


	// $scope.details="";
	$scope.employee="";
	/* var employee = {
	 firstName:"",
	 lastName:""
	 };*/

	$scope.separate=function(name){

		//$scope.employee.firstName=name.split(' ').slice(0, -1).join(' ');
		$scope.first_name=name.split(' ').slice(0, -1).join(' ');
		$scope.last_name=name.split(' ').slice(-1).join(' ');

	};

	$scope.months = ["January", "February", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"];

	$scope.get_month=function(month){
		$scope.mymonth=month;

		// $scope.mymonth=month;

	};


	$scope.get_details=function(){



		/*var att_data = {
		 first_name: first_name,
		 last_name: last_name,
		 mymonth: mymonth

		 };*/

		/*  $http.get("https://www.omdbapi.com/?t=" + $scope.att_data + "&tomatoes=true&plot=full")
		 .then(function(response) {
		 $scope.details = response.data;
		 });*/

		var employee = [
			{date: "05/05/2017", in_t: "12:03:34", out_t: "17:50:30",worked_hrs: "8:30" },
			{date: "05/05/2017", in_t: "12:03:34", out_t: "17:50:30",worked_hrs: "8:30" },
			{date: "05/05/2017", in_t: "12:03:34", out_t: "17:50:30",worked_hrs: "8:30" },
			{date: "05/05/2017", in_t: "12:03:34", out_t: "17:50:30",worked_hrs: "8:30" }

		];

		$scope.employee=employee;
		$scope.Date="Date";
		$scope.In_Time="In Time";
		$scope.Out_Time="Out Time";
		$scope.Worked_Hours="Worked Hours";
		$scope.show=true;


		//$scope.my_month=$scope.mymonth;


	};


});






