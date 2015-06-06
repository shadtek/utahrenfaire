var app = angular.module('utahrenfaire');

app.service('mainService', function($firebaseArray, $firebaseObject) {

	var url = 'https://utahrenfaire.firebaseio.com/';
	var ref = new Firebase(url);
	var vendors = new Firebase(url + 'vendors');
	// var mainInfo = new Firebase(url + 'mainInfo');

	this.root = $firebaseArray(ref);
	this.vendors = $firebaseArray(vendors);
	// this.mainInfo = $firebaseObject(mainInfo);

	this.getMainInfo = function() {
  	return $firebaseObject(new Firebase(url + 'mainInfo'));
  };

})