var app = angular.module('utahrenfaire');

app.controller('mainCtrl', function($scope, $location){
	$scope.go = function(path) {
		$location.path(path)
	}

})