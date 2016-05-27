angular.module('sampleApp', ['ngRoute', 'appRoutes', 'MainCtrl', 'AuthCtrl', 'AuthService'])

.factory('DataEntry', ['$http', function($http) {
	var apiRoot = '/api';
	var requestRoot = apiRoot + '/dataentry';
	var service = {
		fetchData: function(query) {
			return $http.get(requestRoot);
		},
		add: function(request) {
			console.log("request : ", request);
			return $http.put([requestRoot].join('/'), request);
			debugger
		}
	};
	return service;
}]);