var app = angular.module("musicApp", []);

app.controller("MusicListCtrl", function($scope, $http) { 
    $http.get("https://freemusicarchive.org/recent.json")
	.success(function(response) {
	    $scope.tracks = response.aTracks;
	});
});

app.controller("SongPageCtrl", function($scope, $http, $log, $location) {
    $http.get("https://freemusicarchive.org/recent.json")
	.success(function(response) {
	    $scope.tracks = response.aTracks;
	    $log.log(response)
	});
    
    $scope.index = $location.search().index
});