var app = angular.module('utahrenfaire');

app.factory('mainService', function($firebaseArray) {

	var url = 'https://utahrenfaire.firebaseio.com/';
	var ref = new Firebase(url);
	return $firebaseArray(ref)

})