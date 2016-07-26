var app = angular.module('utahrenfaire');

app.controller('mainCtrl', function($scope, $location, $anchorScroll){
	$scope.go = function(path) {
		$location.path(path)
	}
	
	$scope.scrollTo = function (scrollLocation) {
		$location.hash(scrollLocation);
		$anchorScroll();
		var header = $('#-header');
		header.addClass('navbar-fixed-top -animated slideInDown');
	}

})