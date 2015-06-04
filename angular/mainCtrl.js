var app = angular.module('utahrenfaire');

app.controller('mainCtrl', function($scope, $location){
	$scope.go = function(path) {
		console.log(path)
		$location.path(path)
	}
})