let app = angular.module('myApp', []);
function getURL() {
    if(window.location.port) {
        return `${window.location.protocol}//${window.location.hostname}:${window.location.port}`;
    }
    return `${window.location.protocol}//${window.location.hostname}`;
}

app.controller('MenuController', function ($scope, $http) {
    $http.get(`${getURL()}/src/assets/files/json/main.json`).then(function successCallback(response) {
        $scope.main = response.data.menu;
        console.log($scope.main);
    }, function errorCallback(response) {
        console.error("Unable to perform get request.")
    });
    
});

app.controller('EducationController', function ($scope, $http) {
    $http.get(`${getURL()}/src/assets/files/json/main.json`).then(function successCallback(response) {
        $scope.main = response.data.education;
        console.log($scope.main);
    }, function errorCallback(response) {
        console.error("Unable to perform get request.")
    });
    
});

app.controller('ExperienceController', function ($scope, $http) {
    $http.get(`${getURL()}/src/assets/files/json/main.json`).then(function successCallback(response) {
        $scope.main = response.data.experiences;
        console.log($scope.main);
    }, function errorCallback(response) {
        console.error("Unable to perform get request.")
    });
    
});