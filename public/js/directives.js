'use strict';

/* Directives */

(function() {
	angular.module('indigoDirectives', [])
	
		.directive('indigoHeader', function() {
			return {
				restrict: 'E', 
				templateUrl: 'partials/indigo-header.html'
			}
		})

		.directive('indigoMain', function() {
			return {
				restrict: 'E',
				templateUrl: 'partials/indigo-main.html'
			}
		})
})();