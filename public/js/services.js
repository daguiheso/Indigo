'use strict';

/* Services Indigo */

(function(){
	angular.module('indigo.services',[])
		.factory('indigoDashboardService', ['$http', '$q', function ($http, $q) {

			function allMain() {
				var deferred = $q.defer(); //metodo defer me permite interactuar con la promise
				$http.get('/items.json') //esto me devuelve los datos en una promesa, la promesa recibe una function que se llama callback
					.success(function(data) { //esta variable data contiene los datos del array del product obtenido del servidor
						deferred.resolve(data)
					});

				return deferred.promise;
			}
			
			function allDashboard() {
				var deferred = $q.defer(); //metodo defer me permite interactuar con la promise
				$http.get('/dashboard.json') //esto me devuelve los datos en una promesa, la promesa recibe una function que se llama callback
					.success(function(data) { //esta variable data contiene los datos del array del product obtenido del servidor
						deferred.resolve(data)
					});

				return deferred.promise;
			}
			return {
				allMain : allMain,
				allDashboard : allDashboard
			}
		}])
})();