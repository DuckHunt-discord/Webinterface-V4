

myApp.controller('HomeController', ["$scope", "$state", "$http", "sampleFactory", "$stateParams",

  function ($scope, $state, $http, sampleFactory, $stateParams) {




    $scope.getPlayer = function (id) {



      var param = { myParameter: id };


      $state.go("page2", param);


    },



        $http({
          method: 'GET',
          url: 'https://v4.duckhunt.me/api/channels/734880436789968998',

        }).then(function successCallback(response) {
          // response.setHeader("Access-Control-Allow-Origin", "*");


          // this callback will be called asynchronously
          // when the response is available
          console.log('get2 ok');
          $scope.channel_info = response.data;
          console.log(response.data)
        }, function errorCallback(response) {
          // response.setHeader("Access-Control-Allow-Origin", "*");

          // called asynchronously if an error occurs
          // or server returns response with an error status.
          console.log('get2 nok');
        });



      $http({
        method: 'GET',
        url: 'https://v4.duckhunt.me/api/channels/734880436789968998/top',

      }).then(function successCallback(response) {

        console.log('get1 ok');
        $scope.players = response.data;
        console.log(response.data);
      }, function errorCallback(response) {

        console.log('get1 nok');
      });









  },



]);