angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'AuthController'	
		})

		.when('/signup', {
			templateUrl: 'views/signup.html',
			controller: 'AuthController'	
		})

		.when('/enterData', {
			templateUrl: 'views/enterData.html',
			controller: 'MainController'	
		})

		.when('/showData', {
			templateUrl: 'views/showData.html',
			controller: 'MainController'	
		});

	$locationProvider.html5Mode(true);

}]);