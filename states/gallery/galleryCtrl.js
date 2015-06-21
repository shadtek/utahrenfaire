var app = angular.module('utahrenfaire');

app.controller('galleryCtrl', function($scope, firebaseService, galleryRef) {
	window.scrollTo(0, 0)

	$scope.gallery = galleryRef;

})