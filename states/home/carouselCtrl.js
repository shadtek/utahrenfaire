var app = angular.module('utahrenfaire');

app.controller('carouselCtrl', function($scope, featuresRef, firebaseService){

  $scope.carousel = carouselRef;
  $scope.item = {};

  $scope.addCarousel = function(item){
    $scope.carousel.$add(item);
    console.log("Added and form cleared");
    $scope.item = {};
  };

  $scope.updateCarousel = function(item){
  	if (item.rank2){
      item.rank = item.rank2;
      delete item.rank2;
    }
    $scope.carousel.$save(item);
    console.log("Updated")
  };

  $scope.toggleCarouselHide = function(item){
    item.hide = !item.hide;
    $scope.carousel.$save(item);
    console.log("Hide toggled")
  };

  $scope.removeCarousel = function(item){
    $scope.carousel.$remove(item);
    console.log("Deleted")
  }

});