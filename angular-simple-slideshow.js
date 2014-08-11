var SlideShow = angular.module('simple-slideshow', ['template/slideshow.html', 'template/slide.html']);

SlideShow.directive('slideshow', function(){
	return {
		scope: {
			
		}, 
		controller: function($scope, $element, $attrs, $transclude) {
			var ctrl = this,
				slides = ctrl.slides = $scope.slides = [];
				
			ctrl.addSlide = function addSlide(slide){
				slides.push(slide);
			};
			
			ctrl.select = function(slide){
				$scope.currentslide = slide;
			};
		},
		controllerAs: 'slideshowCtrl',
		restrict: 'AE',
		templateUrl: 'template/slideshow.html',
		transclude: true,
		link: function($scope, iElm, tAttrs){
			
		}
	};
});

SlideShow.directive('slide', ['$parse', function($parse){
	return {
		require: '^slideshow',
		restrict: 'AE',
		templateUrl: 'template/slide.html',
		transclude: true,
		replace: true,
		compile: function(elm, attrs, transclude){
			return {
				pre: function preLink(scope, elm, attrs, slideshowCtrl){
					elm.on('click', function(elm){
						scope.$apply(scope.select(scope.slide));
					});
					scope.select = function(slide){
						slideshowCtrl.select(slide);
					};
					
					slideshowCtrl.addSlide(scope.slide);
				},
				post: function postLink(scope, elm, attrs, slideshowCtrl){
					slideshowCtrl.select(slideshowCtrl.slides[0]);
				}
			};
		}
	};
}]);

angular.module("template/slideshow.html", []).run(["$templateCache", function($templateCache) {
	$templateCache.put("template/slideshow.html",
		'<div class="navigation-controls">' +
		'<div class="picture-slides-fade-container">' +
		'<div class="picture-slides-image-link"><img class="picture-slides-image" ng-src="{{currentslide.url}}" alt="{{currentslide.name}}" /><p>{{currentslide.name}}</div></div>' +
		'</div>' +
		'<div class="slides-wrap"><ul ng-transclude></ul></div>'
	);
}]);

angular.module("template/slide.html", []).run(["$templateCache", function($templateCache) {
	$templateCache.put("template/slide.html",
		'<li><a href><img ng-src="{{slide.url}}" /></a></li>'
	);
}]);