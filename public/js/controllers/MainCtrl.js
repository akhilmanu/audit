angular.module('MainCtrl', []).controller('MainController', function($scope, DataEntry) {

	$scope.tagline = 'To the moon and back!';
	$scope.enterData = function(audit) {
		DataEntry.add(audit);
	}

	$scope.showData = function() {
		DataEntry.fetchData().then(function(resp){
			$scope.fullAuditData = resp;
		});
	}

});