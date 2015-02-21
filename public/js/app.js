// 'use strict';

/* App Module */

(function() {
	var app = angular.module('indigo', [
		'ngRoute',
		'indigo.directives'
	]);

	app.config(['$routeProvider',function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/dashboard.html'
			})
	}]);
})();