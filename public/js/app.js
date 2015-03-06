'use strict';

/* App Module */

(function() {

	var app = angular.module('indigo', [
		'ngRoute',
		'indigo.controllers',
		'indigo.directives',
		'indigo.services',
		'indigo.filters',
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
			.when('/tablero', {templateUrl: 'views/dashboard.html',	controller: 'DashboardController'}) 
			.when('/inventario', {templateUrl: 'modules/inventory/views/inventory.html'}) 
			.when('/movimientos', {templateUrl: 'modules/movements/views/movements.html'}) 
			.when('/caja', {templateUrl: 'modules/cash/views/cash.html'}) 
			.when('/garantias', {templateUrl: 'modules/warrant/views/warrant.html'}) 
			.when('/cartera', {templateUrl: 'modules/wallet/views/wallet.html'}) 
			.when('/historiasclinicas', {templateUrl: 'modules/medicalhistory/views/medicalhistory.html'}) 
			.when('/administracion', {templateUrl: 'modules/administration/views/administration.html'})
			.otherwise({redirectTo: '/tablero'});
	}]);

})();