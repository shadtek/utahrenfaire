angular.module("myAwesomeApp").directive("myDirectiveName", function(){
	return {
		scope:{},
		controller:function(){

		},
		//tempalte:"<div></div>",
		templateURL:"states/home/carousel.html",
		link:function(scope, elem, attrs){
			console.log(elem);
			owl = elem[0];
			
		}
	}
})