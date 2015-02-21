'use strict';

/* App Module */

(function() {
	var app = angular.module('indigo', [
		'ngRoute',
		'indigoTemplate',
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
				templateUrl: 'views/dashboard.html'
			}) 

			.when('/inventory', {
				templateUrl: 'views/inventory.html'
			}) 

			.when('/movements', {
				templateUrl: 'views/movements.html'
			}) 

			.when('/cash', {
				templateUrl: 'views/cash.html'
			}) 

			.when('/warrant', {
				templateUrl: 'views/warrant.html'
			}) 

			.when('/wallet', {
				templateUrl: 'views/wallet.html'
			}) 

			.when('/medicalhistory', {
				templateUrl: 'views/medicalhistory.html'
			}) 

			.when('/administration', {
				templateUrl: 'views/administration.html'
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