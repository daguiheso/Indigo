'use strict';

/* Inventory */

(function() {
	angular.module('indigo.inventory', [])
		.controller('TabsController', ['$scope', function ($scope) {
			$scope.tab = 1;
   	        $scope.show = false;

			$scope.selectTab = function (tab) {
				$scope.tab = tab;
	   	        $scope.show = !$scope.show;
			};

			$scope.isActive = function (tab) {
				return tab === $scope.tab;
			}

		    // $scope.toggle = function () {
		    // 	$scope.show = !$scope.show;
		    // };
		}]); 
})();