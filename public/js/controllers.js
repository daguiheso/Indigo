'use strict';

/* Controllers Indigo */

(function() {
	angular.module('indigo.controllers', [])

	.controller('DashboardController', ['$scope', 'indigoDashboardService', function ($scope, indigoDashboardService) {

		indigoDashboardService.allMain().then(function (data) {
			$scope.main = data;
		})

		indigoDashboardService.allDashboard().then(function (data) {
			$scope.dash = data;
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