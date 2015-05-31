var app = angular.module('utahrenfaire');

app.controller('vendorsCtrl', function($scope, mainService) {
	
	mainService.$loaded().then(function(data) {
		console.log(data[1])
		$scope.vendors = data[1]
	})

})