var app = angular.module('utahrenfaire');

app.directive('owlDirective', function() {
	return {
		templateUrl: 'states/home/carousel.html',
		restrict: 'E',
		link: function(scope, elem, attrs) {
			console.log("omg");
			$(document).ready(function() {
    
		    var owl = $('.owl-carousel');

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
		        nav: true,
		        dots: true,
		        autoHeight: true,
		        smartSpeed: 500,
		        autoplay: true,
		      autoplayTimeout: 5000,
		      autoplayHoverPause: true,
		        navText: [  
		          "<i class='icon-arrow-left2 owl-direction'></i>",
		          "<i class='icon-arrow-right2 owl-direction'></i>"
		        ]
		    });
		    
		  });
		}
	}
})