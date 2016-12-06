var app=angular.module('myResume', ["ui.router"])
    
    app.config(function($stateProvider){
  
    $stateProvider
        .state('main', {
           
            views: {
                "viewA": {
                    templateUrl: "./templates/main.html"
                }
                
            }
        })
        .state('main.about', {
            url: "/about",
            templateUrl: "./templates/about.html"

                
           
        })
        .state('main.about.personalDetails', {
            url: "/PD",
            templateUrl: "./templates/personalDetails.html",
            // controller:"personalDetailsCtrl"
            //controller:personalDetailsCtrl; 
           
        })
        .state('main.about.educationDetails', {
            url: "/education Details",
            templateUrl: "./templates/educationDetails.html"
            // controller:"educationDetailsCtrl"
            //controller:personalDetailsCtrl; 
           
        })
         .state('main.about.achievementsDetails', {
            url: "/achievements Details",
            templateUrl: "./templates/achievementsDetails.html"
            // controller:"achievementDetailsCtrl"
            //controller:personalDetailsCtrl; 
           
        })

         .state('main.about.skillsDetails', {
            url: "/skills Details",
            templateUrl: "./templates/skillsDetails.html"
            // controller:"skillsDetailsCtrl"
            //controller:personalDetailsCtrl; 
           
        })
         .state('main.about.contactDetails', {
            url: "/contact Details",
            templateUrl: "./templates/contactDetails.html"
            // controller:"skillsDetailsCtrl"
            //controller:personalDetailsCtrl; 
           
        })
       

    });

    app.service('jsonService', function($http) {
    this.personalDetails = function(callbackFunc) {
        $http.get('js/resume.json').success(function(data) {
            console.log(data)
            callbackFunc(data);

        }).error(function() {
            console.log("error");
        });
    }
     this.educationDetails = function(callbackFunc) {
        $http.get('js/resume.json').success(function(data) {
            console.log(data)
            callbackFunc(data);

        }).error(function() {
            console.log("error");
        });
    }

    this.achievementsDetails = function(callbackFunc) {
        $http.get('js/resume.json').success(function(data) {
            console.log(data)
            callbackFunc(data);

        }).error(function() {
            console.log("error");
        });
    }
     this.skillsDetails = function(callbackFunc) {
        $http.get('js/resume.json').success(function(data) {
            console.log(data)
            callbackFunc(data);

        }).error(function() {
            console.log("error");
        });
    }

});

app.controller('personalDetailsCtrl', function($scope, jsonService) {
    $scope.clickMe = function() {
        $scope.myData = {};
        jsonService.personalDetails (function(dataResponse) {
            $scope.myData = dataResponse;
            console.log($scope.myData)
        });
    };
    $scope.clickMe();
    

});

app.controller('educationDetailsCtrl', function($scope, jsonService) {
    $scope.clickMe = function() {
        $scope.myData = {};
        jsonService.educationDetails (function(dataResponse) {
            $scope.myData = dataResponse;
            console.log($scope.myData)
        });
    };
    $scope.clickMe();
    

});

app.controller('achievementDetailsCtrl', function($scope, jsonService) {
    $scope.clickMe = function() {
        $scope.myData = {};
        jsonService.achievementsDetails (function(dataResponse) {
            $scope.myData = dataResponse;
            console.log($scope.myData)
        });
    };
    $scope.clickMe();
    

});

app.controller('skillsDetailsCtrl', function($scope, jsonService) {
    $scope.clickMe = function() {
        $scope.myData = {};
        jsonService.skillsDetails(function(dataResponse) {
            $scope.myData = dataResponse;
            console.log($scope.myData)
        });
    };
    $scope.clickMe();
    

});




