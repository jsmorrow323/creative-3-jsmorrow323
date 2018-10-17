// create the module
var joeApp = angular.module('joeApp', ['ngRoute']);
var value = 0;

// configure routes
joeApp.config(function($routeProvider) {
	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'pages/home.html',
			controller  : 'mainController'
		})

		// route for the about page
		.when('/about', {
			templateUrl : 'pages/about.html',
			controller  : 'aboutController'
		})

		// route for the contact page
		.when('/contact', {
			templateUrl : 'pages/contact.html',
			controller  : 'contactController'
		})
		
		// route for the contact page
		.when('/dice', {
			templateUrl : 'pages/dice.html',
			controller  : 'diceController'
		});
});

// create the controller and inject Angular's $scope
joeApp.controller('mainController', function($scope) {
	// create a message to display
	$scope.message = 'This site will walk you through Dungeons and Dragons 5th Edition Character Creation.';
});

joeApp.controller('aboutController', function($scope) {
	$scope.message = 'A Hero is Forged, not Created.';
	
});

joeApp.controller('contactController', function($scope) {
	$scope.message = '';
});

joeApp.controller('diceController', function($scope) {
	$scope.message = 'Select a die size and click roll.';
});

function getRandomInt() {
    var e = document.getElementById("options");
    var max = e.options[e.selectedIndex].text;
    value = Math.floor(Math.random() * Math.floor(max) + 1);
    var display = value;
    
    document.getElementById('number').innerHTML = display;
}