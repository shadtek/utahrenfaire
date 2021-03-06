var app = angular.module('utahrenfaire');

app.controller('carouselCtrl', function($scope, carouselRef, firebaseService){

  $scope.carousel = carouselRef.$loaded(function(data){
  	$scope.carousel = data;
  	setTimeout(initCarosel, 100);
  });

  $scope.item = {};

  $scope.addCarousel = function(item){
    $scope.carousel.$add(item);
    console.log("Added and form cleared");
    $scope.item = {};
  };

  $scope.updateCarousel = function(item){
  	if (item.rank2){
      item.rank = item.rank2;
      delete item.rank2;
    }
    $scope.carousel.$save(item);
    console.log("Updated")
  };

  $scope.toggleCarouselHide = function(item){
    item.hide = !item.hide;
    $scope.carousel.$save(item);
    console.log("Hide toggled")
  };

  $scope.removeCarousel = function(item){
    $scope.carousel.$remove(item);
    console.log("Deleted")
  }
 
});

app.directive('owlDirective', function() {
	return {
		templateUrl: 'states/home/carousel.html',
		restrict: 'E',
		link: function(scope, elem, attrs) {
			$(document).ready(function() {
		  });
		}
	}
})


function initCarosel(){

  var owl = angular.element('.owl-carousel');

  owl.on('initialized.owl.carousel change.owl.carousel',function(elem){
    var current = elem.item.index;
    $(elem.target).find(".owl-item").eq(current).find(".to-animate").removeClass('fadeInUp animated');
    $(elem.target).find(".owl-item").eq(current).find(".to-animate-2").removeClass('fadeInUp animated');
  
  });
  owl.on('initialized.owl.carousel changed.owl.carousel',function(elem){
    setTimeout(function(){
      var current = elem.item.index;
      $(elem.target).find(".owl-item").eq(current).find(".to-animate").addClass('fadeInUp animated');
    }, 700);
    setTimeout(function(){
      var current = elem.item.index;
      $(elem.target).find(".owl-item").eq(current).find(".to-animate-2").addClass('fadeInUp animated');
    }, 900);
  });

  owl.owlCarousel({
    items: 1,
      loop: true,
      margin: 0,
      responsiveClass: true,
      // nav: true,
      // dots: true,
      nav: false,
      dots: false,
      autoHeight: true,
      smartSpeed: 500,
      autoplay: true,
    autoplayTimeout: 8000,
    autoplayHoverPause: false
    // ,
      // navText: [  
      //   "<i class='icon-arrow-left2 owl-direction'></i>",
      //   "<i class='icon-arrow-right2 owl-direction'></i>"
      // ]
  });
}