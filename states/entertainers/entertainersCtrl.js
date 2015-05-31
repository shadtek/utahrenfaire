var app = angular.module('utahrenfaire');

app.controller('entertainersCtrl', function($scope, mainService) {
	
	mainService.$loaded().then(function(data) {
		console.log(data[0])
		$scope.entertainers = data[0]
	})

})