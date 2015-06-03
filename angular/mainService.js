var app = angular.module('utahrenfaire');

app.service('mainService', function($firebaseArray) {

	var url = 'https://utahrenfaire.firebaseio.com/';
	var ref = new Firebase(url);
	var vendors = new Firebase(url + 'vendors');

	this.root = $firebaseArray(ref);
	this.vendors = $firebaseArray(vendors);

})