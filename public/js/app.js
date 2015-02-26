'use strict';

/* App Module */

(function() {
	var app = angular.module('indigo', [
		'ngRoute',
		'indigoDirectives',
		'indigoDashboard',
		'indigoInventory',
		'indigoMovements',
		'indigoCash',
		'indigoWarrant',
		'indigoWallet',
		'indigoMedicalHistory',
		'indigoAdministration'
	]);

	app.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/dashboard', {
				templateUrl: 'modules/dashboard/views/dashboard.html'
			}) 

			.when('/inventory', {
				templateUrl: 'modules/inventory/views/inventory.html'
			}) 

			.when('/movements', {
				templateUrl: 'modules/movements/views/movements.html'
			}) 

			.when('/cash', {
				templateUrl: 'modules/cash/views/cash.html'
			}) 

			.when('/warrant', {
				templateUrl: 'modules/warrant/views/warrant.html'
			}) 

			.when('/wallet', {
				templateUrl: 'modules/wallet/views/wallet.html'
			}) 

			.when('/medicalhistory', {
				templateUrl: 'modules/medicalhistory/views/medicalhistory.html'
			}) 

			.when('/administration', {
				templateUrl: 'modules/administration/views/administration.html'
			}) 

			.otherwise({
				redirectTo: '/dashboard'
			});
	}]);

	app.controller('MainTabsController', ['$scope', function ($scope) {
		$scope.tab = 1;

		$scope.selectTab = function (tab) {
			$scope.tab = tab;
		}

		$scope.isActive = function (tab) {
			return tab === $scope.tab;
		};
	}]);

})();