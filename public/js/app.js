'use strict';

/* App Module */

(function() {

	var app = angular.module('indigo', [
		'ngRoute',
		'indigo.controllers',
		'indigo.directives',
		'indigo.services',
		'indigo.inventory',
		'indigo.movements',
		'indigo.cash',
		'indigo.warrant',
		'indigo.wallet',
		'indigo.medicalHistory',
		'indigo.administration'
	]);

	app.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/dashboard', {templateUrl: 'views/dashboard.html',	controller: 'MainController'}) 
			.when('/inventory', {templateUrl: 'modules/inventory/views/inventory.html'}) 
			.when('/movements', {templateUrl: 'modules/movements/views/movements.html'}) 
			.when('/cash', {templateUrl: 'modules/cash/views/cash.html'}) 
			.when('/warrant', {templateUrl: 'modules/warrant/views/warrant.html'}) 
			.when('/wallet', {templateUrl: 'modules/wallet/views/wallet.html'}) 
			.when('/medicalhistory', {templateUrl: 'modules/medicalhistory/views/medicalhistory.html'}) 
			.when('/administration', {templateUrl: 'modules/administration/views/administration.html'}) 
			.otherwise({redirectTo: '/dashboard'});
	}]);

})();