var app = angular.module('myApp', []);

app.service('dataService', function($http) {
    this.getData = function(callbackFunc) {
        $http.get('js/document.json').success(function(data) {
            console.log(data)
            callbackFunc(data);

        }).error(function() {
            console.log("error");
        });
    }
});

app.controller('getDataCtrl', function($scope, dataService) {
    //$scope.click = function() {
    $scope.myData = {};
    dataService.getData(function(dataResponse) {
        $scope.myData = dataResponse.AlphaNumeric;
        console.log($scope.myData)
    });

    //};




});



app.directive('jsonTemplate', function() {

    return {
        restrict: 'EA',
        scope: {
            vm: "="
        },
        link: function($scope) {
            console.log($scope.vm);
            $scope.propertyName = 'alpha';
            $scope.reverse = true;
            // $scope.myData = myData;

            $scope.sortBy = function() {
                $scope.sortBy = function(propertyName) {
                    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
                    $scope.propertyName = propertyName;
                };

            }
        },
        templateUrl: "./Template/template.html"

    };

});
