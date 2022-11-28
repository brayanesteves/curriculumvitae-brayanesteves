var app = angular.module('myApp', []);

app.controller('MenuController', function ($scope, $http) {
    $scope.home = "This is the homepage";
    $http.get('http://localhost:5500/src/assets/files/json/main.json').then(function successCallback(response) {
        $scope.main = response.data.menu;
        console.log($scope.main);
    }, function errorCallback(response) {
        console.error("Unable to perform get request.")
    });
    
});

app.controller('EducationController', function ($scope, $http) {
    $scope.home = "This is the homepage";
    $http.get('http://localhost:5500/src/assets/files/json/main.json').then(function successCallback(response) {
        $scope.main = response.data.education;
        console.log($scope.main);
    }, function errorCallback(response) {
        console.error("Unable to perform get request.")
    });
    
});

app.controller('ExperienceController', function ($scope, $http) {
    $scope.home = "This is the homepage";
    $http.get('http://localhost:5500/src/assets/files/json/main.json').then(function successCallback(response) {
        $scope.main = response.data.experiences;
        console.log($scope.main);
    }, function errorCallback(response) {
        console.error("Unable to perform get request.")
    });
    
});