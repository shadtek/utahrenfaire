var app = angular.module('utahrenfaire');

app.controller('galleryCtrl', function($scope, firebaseService, galleryRef, Lightbox) {
	window.scrollTo(0, 0)

	$scope.gallery = galleryRef;

	$scope.openLightboxModal = function (index) {
    Lightbox.openModal($scope.images, index);
  };

})