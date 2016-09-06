# angular-simple-slideshow 
[![NPM version](https://badge.fury.io/js/angular-simple-slideshow.svg)](http://badge.fury.io/js/angular-simple-slideshow)
[![Bower version](https://badge.fury.io/bo/angular-simple-slideshow.svg)](http://badge.fury.io/bo/angular-simple-slideshow)
[![Github version](https://badge.fury.io/gh/angular-simple-slideshow.svg)](http://badge.fury.io/gh/angular-simple-slideshow)

A simple set of directives that creates a customizable slideshow.

## Demo
[http://devlab2425.github.io/angular-simple-slideshow/example/slideshow-example.html](http://devlab2425.github.io/angular-simple-slideshow/example/slideshow-example.html)

## Installation

Download [angular-simple-slideshow.js](https://raw.githubusercontent.com/DevLab2425/angular-simple-slideshow/master/angular-simple-slideshow.js) or install with bower
	
```BASH
$ bower install angular-simple-slideshow --save
```

Load `angular-simple-slideshow.js`, then add the `simple-slideshow` module to your application.

```javascript
angular.module('yourApp', ['simple-slideshow']);
```
	
## Usage
### HTML
```html
<body ng-app="slideShowExample">
	<div ng-controller="slideShowCtrl">
		<div slideshow>
			<div slide ng-repeat="slide in slides"></div>
		</div>
	</div>
</body>
```

### JavaScript
```javascript
angular.module('slideShowExample', ['simple-slideshow'])
	.controller('slideShowCtrl', ['$scope', function($scope){
		$scope.slides = [
			{name: 'Not my cat.', url: 'https://farm2.staticflickr.com/1318/5114665665_e55b2c2169_n.jpg'},
			{name: 'Again, not my cat.', url: 'https://farm2.staticflickr.com/1079/901626554_8bc51ec160_n.jpg'}
		];
	}]);
```

## Development

Testing is done using Karma Test Runner.

```BASH
$ grunt test
```
	
## Build
Will validate then minimize the JS, as well as copy to the example directory. 

```BASH
$ grunt build
```
