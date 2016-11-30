
var app = angular.module('ajaxApp', []);

app.service('json_Service', function($http) {
this.getData = function(callbackFunc) {
	
    $http.get("employee.json").success(function(data){
    	console.log(data)
        callbackFunc(data);
       
    }).error(function(){
        alert("error");
    });
 }
});

app.controller('emp_detailsCtrl', function($scope, json_Service) {
	$scope.clickMe=function(){
    $scope.myData  = null;
    json_Service.getData(function(dataResponse) {
        $scope.myData = dataResponse;
        console.log($scope.myData)
    });
};

});



// app.controller('emp_detailsCtrl',function($scope, $http){
// 	$scope.clickMe=function(){
// 		console.log("hi");
// 		$http.get("employee.json")
// 	  		.then(function(response) {
	  			
// 	    	  $scope.myData = response.data.employeeDetails;
// 	    	  console.log($scope.myData);
//   });
// };

// });