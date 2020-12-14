



myApp.controller('Page2Controller', ["$scope", "$state","$http","sampleFactory","$stateParams",



  function ($scope, $state, $http, sampleFactory, $stateParams) {




  /*  $scope.getPlayer = function (id) {



      var param = { myParameter: id };


      $state.go("page2", param);


    },*/

console.log("id:"+ $state.params.myParameter);



    $http({
      method: 'GET',
      url: 'https://v4.duckhunt.me/api/channels/734880436789968998/player/'+$state.params.myParameter,  
    }).then(function successCallback(response) {
  
      console.log('get1 ok');
      $scope.players = response.data;
      console.log(response.data)
    }, function errorCallback(response) {
  
      console.log('get1 nok');
    });
  









  },



]);