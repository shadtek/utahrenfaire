var app = angular.module('utahrenfaire');

app.controller('aboutCtrl', function($scope, entertainersRef, firebaseService){
  window.scrollTo(0, 0)

  $scope.entertainers = entertainersRef;

  $scope.$parent.userIsAdmin = "child sees admin";

  $scope.addEntertainer = function(item){
    $scope.entertainers.$add(item);
    console.log("Added")
    $scope.item = ""
  }

  $scope.updateEntertainer = function(item){
  	if (item.position2){
      item.position = item.position2;
      delete item.position2;
    }
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