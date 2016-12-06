 var myapp = angular.module('myRouting', ["ui.router"])
    myapp.config(function($stateProvider){
    $stateProvider
        .state('science', {
            url: "/science",
           
            views: {
                "viewA": {
                    templateUrl: "./templates/science.html"
                }
            }
        })
        .state('science.scienceText', {
            url: "/scienceText",
            templateUrl: "./templates/scienceText.html"
                
           
        })
        .state('nature', {
            url: "/nature",
            views: {
                "viewA": {
                    templateUrl: "./templates/nature.html"
                }
            }
        })
        .state('nature.natureText', {
            url: "/natureText",
            templateUrl: "./templates/natureText.html"
               
            
        })
        .state('technology', {
            url: "/technology",
            views: {
                "viewB": {
                    templateUrl: "./templates/tech.html"
                }
            }
        })
        .state('technology.techText', {
            url: "/technologyText",
            templateUrl: "./templates/techText.html"
               
            
        })
        
    });