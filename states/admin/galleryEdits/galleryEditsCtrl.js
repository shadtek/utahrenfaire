var app = angular.module('utahrenfaire');

app.controller('galleryEditsCtrl', function($scope, galleryRef, firebaseService){
  window.scrollTo(0, 0)

  $scope.gallery = galleryRef;

  $scope.addGallery = function(item){
    $scope.gallery.$add(item);
    console.log("Added")
    $scope.item = ""
  }

  $scope.updateGallery = function(item){
    $scope.gallery.$save(item);
    console.log("Updated")
  };

  $scope.toggleGalleryHide = function(item){
    item.hide = !item.hide;
    $scope.gallery.$save(item);
    console.log("Hide Toggled")
  };

  $scope.removeGallery = function(item){
    $scope.gallery.$remove(item);
    console.log("Deleted")
  }

});