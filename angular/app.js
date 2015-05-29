var app = angular.module('utahrenfaire', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  //
  // For any unmatched url, redirect to /

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "home.html"
    })
    .state('about', {
      url: "/about",
      templateUrl: "about/about.html",
      abstract: true
    })
    .state('about.feast', {
      url: "/feast",
      templateUrl: "about/feast.html"
    })
    .state('about.tickets', {
      url: "/tickets",
      templateUrl: "about/tickets.html"
    })
    .state('about.map', {
      url: "/map",
      templateUrl: "about/map.html"
    })
    .state('about.registration', {
      url: "/registration",
      templateUrl: "about/registration.html"
    })
    .state('about.contact', {
      url: "/contact",
      templateUrl: "about/contact.html"
    })
    .state('otherwise', {
    url: '*path',
    resolve: {
      redirect: function($location) {
        $location.path("/").replace()
        console.log("redirecting...")
      }
    }
    });

    $locationProvider.html5Mode(true);

});
