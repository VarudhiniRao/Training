var app = angular.module('channelApp', []);

app.controller('channelCtrl',function($scope)
{
  $scope.channel="";
$scope.view=[];
  var jsonObj={
    "Channels": [
      {
        "Disney": [
          {
            "Hannah-montana": "9:00pm"
          },
          {
            "Spider-Man": "8:30pm"
          },
          {
            "Wizards of Waverly Places": "9:30pm"
          }
        ]
      },
      {
        "Cartoon Network": [
          {
            "Ben Ten": "6:00pm"
          },
          {
            "Cinderalla": "7:00pm"
          },
          {
            "Bablade": "8:15pm"
          }
        ]
      },
      {
        "Mtv": [
          {
            "Coke Studio": "10:00pm"
          },
          {
            "Roadies": "6:30pm"
          },
          {
            "Diaries": "3:00pm"
          }
        ]
      }
    ]
  }
console.log(jsonObj.Channels)
  $scope.clickMe=function(){
//console.log(jsonObj);

    for(var i=0;i<jsonObj.Channels.length;i++){

        if($scope.channel in jsonObj.Channels[i]){
          $scope.view=[];
          for(var j=0;j<jsonObj.Channels[i][$scope.channel].length;j++){

            $scope.view.push(jsonObj.Channels[i][$scope.channel][j]);


            //console.log(view);
          }



    }
  }
console.log($scope.view);

};
});
