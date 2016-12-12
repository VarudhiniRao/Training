 var app = angular.module('myApp', []);


    app.service('promiseService',function($http,$q){

         this.getResume=function(url){

          var getData=$q.defer();

          $http.get(url).success(getData.resolve)

          .error(getData.reject);

          return getData.promise;

        console.log(getData.promise);
     }

    });

         app.controller('appCtrl',function($scope,promiseService){
         // alert('hi');

              promiseService.getResume('js/resumeNew.json').then(function(dataResponse){
               $scope.myData=dataResponse;
               console.log($scope.myData);

              });

         });
