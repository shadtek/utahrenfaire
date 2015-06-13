var app = angular.module('utahrenfaire');

app.controller('entertainerEditsCtrl', function($scope, entertainersRef, firebaseService){
  window.scrollTo(0, 0)

  $scope.entertainers = entertainersRef;

  $scope.addEntertainer = function(item){
    $scope.entertainers.$add(item);
    console.log("Added")
    $scope.item = ""
  }

  $scope.updateEntertainer = function(item){
    $scope.entertainers.$save(item);
    console.log("Updated")
  };

  $scope.toggleEntertainerHide = function(item){
    item.hide = !item.hide;
    $scope.entertainers.$save(item);
    console.log("Hide Toggled")
  };

  $scope.removeEntertainer = function(item){
    $scope.entertainers.$remove(item);
    console.log("Deleted")
  }

});