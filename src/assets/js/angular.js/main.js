let app = angular.module('myApp', []);
function getURL() {
    let URL = "";
    let protocol = window.location.protocol;
    let hostname = window.location.hostname;
    let port     = window.location.port;
    console.log(hostname)
    if(hostname === "127.0.0.1" || hostname === "localhost") {
        if(port) {
            URL = `${protocol}//${hostname}:${location.port}`;
        } else {
            URL = `${protocol}//${hostname}`;
        }
    } else if(hostname === "brayanesteves.github.io") {
        console.log("ACA 1")
        URL = `https://github.com/brayanesteves/curriculumvitae-brayanesteves`;
    }
    
    return URL;
}
console.log("URL: " + getURL())

app.controller('MenuController', function ($scope, $http) {
    $http.get(`${getURL()}/src/assets/files/json/main.json`).then(function successCallback(response) {
        $scope.main = response.data.menu;
    }, function errorCallback(response) {
        console.error("Unable to perform get request.")
    });
    
});

app.controller('EducationController', function ($scope, $http) {
    $http.get(`${getURL()}/src/assets/files/json/main.json`).then(function successCallback(response) {
        $scope.main = response.data.education;
    }, function errorCallback(response) {
        console.error("Unable to perform get request.")
    });
    
});

app.controller('ExperienceController', function ($scope, $http) {
    $http.get(`${getURL()}/src/assets/files/json/main.json`).then(function successCallback(response) {
        $scope.main = response.data.experiences;
    }, function errorCallback(response) {
        console.error("Unable to perform get request.")
    });
    
});