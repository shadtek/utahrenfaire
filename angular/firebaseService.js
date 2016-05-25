var app = angular.module('utahrenfaire');

app.service('firebaseService', function ($firebase, $firebaseObject, $firebaseArray) {
  var firebaseUrl = 'https://utahrenfaire.firebaseio.com/';

  this.getUser = function(userId){
    return $firebaseObject(new Firebase(firebaseUrl + 'users/' + userId));
  };

  this.getMainInfo = function() {
  	return $firebaseObject(new Firebase(firebaseUrl + 'mainInfo'));
  };

  this.getFeatures = function() {
    return $firebaseObject(new Firebase(firebaseUrl + 'features'));
  };

  this.getVendors = function() {
    return $firebaseArray(new Firebase(firebaseUrl + 'vendors'));
  };

  this.getEntertainers = function() {
    return $firebaseArray(new Firebase(firebaseUrl + 'entertainers'));
  };

  this.getGallery = function() {
    return $firebaseArray(new Firebase(firebaseUrl + 'gallery'));
  };

  this.getGuilds = function() {
    return $firebaseArray(new Firebase(firebaseUrl + 'guilds'));
  };


})