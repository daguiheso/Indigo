'use strict';

/* Controllers Indigo */

(function() {
	angular.module('indigo.controllers', [])

	.controller('DashboardController', ['$scope', 'indigoDashboardService', function ($scope, indigoDashboardService) {

		indigoDashboardService.all().then(function (data) {
			$scope.maint = data;
		})

		$scope.tab = 1;

		$scope.selectTab = function (tab) {
			$scope.tab = tab;
		}

		$scope.isActive = function (tab) {
			return tab === $scope.tab;
		};

	}])
})();