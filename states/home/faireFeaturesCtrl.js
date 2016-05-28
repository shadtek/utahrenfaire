var app = angular.module('utahrenfaire');

app.controller('faireFeaturesCtrl', function($scope, featuresRef, firebaseService){
  window.scrollTo(0, 0)

  $scope.features = featuresRef;

  $scope.addFeatures = function(item){
    $scope.features.$add(item);
    console.log("Added");
    $scope.item="";
  };

  $scope.updateFeatures = function(item){
  	if (item.rank2){
      item.rank = item.rank2;
      delete item.rank2;
    }
    $scope.features.$save(item);
    console.log("Updated")
  };

  $scope.toggleFeaturesHide = function(item){
    item.hide = !item.hide;
    $scope.features.$save(item);
    console.log("Hide Toggled")
  };

  $scope.removeFeatures = function(item){
    $scope.features.$remove(item);
    console.log("Deleted")
  }

});