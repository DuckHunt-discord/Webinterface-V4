/*myApp.controller('HomeController', ["$scope", "$state", "$http", "sampleFactory",

  function($scope, $state, $http, sampleFactory) {

    console.log('this is the homecontroller, hi!');

    var getStudents = function() {
      $http({
        method: 'GET',
        url: 'http://localhost:3000/students'
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          console.log('get ok');
          $scope.students = response.data;
      }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          console.log('get nok');
      });
    }


    $scope.addStudent = function() {

      var studentObject = {
        firstname: $scope.forename,
        name: $scope.name
      };

      $http.post('http://localhost:3000/students', studentObject)
      .then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          console.log('add ok');
          getStudents();
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          console.log('add nok');
        });
    }


    $scope.removeStudent = function(i) {

      console.log("i=" + i);
      var id = $scope.students[i].id;
      console.log("id=" + id);

      $http.delete('http://localhost:3000/students/' + id)
      .then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          console.log('delete ok');
          getStudents();
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          console.log('delete nok');
        });


    }

    getStudents();

  }
]);*/


myApp.controller('HomeController', ["$scope", "$state", "$http", "sampleFactory",

  function($scope, $state, $http, sampleFactory) {

    console.log('this is the homecontroller, hi!');


      $http({
        method: 'GET',
        url: 'https://f0dc2044b4e6.ngrok.io/api/channels/734880436789968998/top',

      }).then(function successCallback(response) {
       // response.setHeader("Access-Control-Allow-Origin", "*");
   
  
          // this callback will be called asynchronously
          // when the response is available
          console.log('get ok');
          $scope.students = response.data;
      }, function errorCallback(response) {
       // response.setHeader("Access-Control-Allow-Origin", "*");
   
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          console.log('get nok');
      });
    
  }
]);
