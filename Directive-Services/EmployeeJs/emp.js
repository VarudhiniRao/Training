var app = angular.module('myApp', []);

app.service('jsonService', function($http) {
    this.SearchEmployeeDetails = function(callbackFunc) {
        $http.get('EmployeeJs/employe.json').success(function(data) {
            console.log(data)
            callbackFunc(data);

        }).error(function() {
            console.log("error");
        });
    }
     this.SearchEmployeeLocations = function(callbackFunc) {
        $http.get('EmployeeJs/employeeLocation.json').success(function(data) {
            console.log(data)
            callbackFunc(data);

        }).error(function() {
            console.log("error");
        });
    }

});

app.controller('empdetailsCtrl', function($scope, jsonService) {
    $scope.clickMe = function() {
        $scope.myData = {};
        jsonService.SearchEmployeeDetails(function(dataResponse) {
            $scope.myData = dataResponse;
            console.log($scope.myData)
        });
    };

    $scope.delete=function(index){
        $scope.myData.employeeDetails.splice(index,1);

    }

});

app.controller('empLocationCtrl', function($scope, jsonService) {
    $scope.click = function() {
        $scope.myData = {};
        jsonService.SearchEmployeeLocations(function(dataResponse) {
            $scope.myData = dataResponse.employeeLocations;
            console.log($scope.myData)
        });
    };

    $scope.delete=function(index){
        $scope.myData.splice(index,1);

    };


});

app.directive('employeeDetailsCard',function(){

    return{
        restrict:'EA',
        scope:{
            delete:'&'
        },
        templateUrl:"./Template/button.html"

    };

});