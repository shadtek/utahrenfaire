var app = angular.module('utahrenfaire');

app.directive('ocDirective', function () {
	return {
		restrict: 'E',
		scope: {},
		templateUrl: 'states/home/oc.html',
		link: function (scope, elem) {
			elem.ready(function () {
				$("#owl-example").owlCarousel();
			});
		}
	}
});