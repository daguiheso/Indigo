'use strict';

/* Directives Indigo */

(function() {
	angular.module('indigo.directives', [])
	
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