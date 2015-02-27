'use strict';

/* Controllers Indigo */

(function() {
	angular.module('indigo.controllers', [])

	.controller('MainController', ['$scope', 'indigoService', function ($scope, indigoService) {

		indigoService.all().then(function (data) {
			console.log(data );
			$scope.maint = data;
		})

	}])

	.controller('MainTabsController', ['$scope', function ($scope) {
		$scope.tab = 1;

		$scope.selectTab = function (tab) {
			$scope.tab = tab;
		}

		$scope.isActive = function (tab) {
			return tab === $scope.tab;
		};
	}]);
})();