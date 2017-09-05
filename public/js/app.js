var app = angular.module('utahrenfaire', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('main', {
			url: "",
			templateUrl: "views/main.html",
			abstract: true
		})
		.state('main.home', {
			url: "/",
			templateUrl: "views/home/home.html",
			controller: 'homeCtrl'
		})
		.state('main.ticket-info', {
			url: "/ticket-info",
			templateUrl: "views/tickets/ticket-info/ticket-info.html",
			controller: 'ticketInfoCtrl'
		})


		.state('otherwise', {
			url: '*path',
			resolve: {
				redirect: function($location) {
					$location.path("/").replace()
					// console.log("redirecting...")
				}
			}
		});

		$locationProvider.html5Mode(true);

})