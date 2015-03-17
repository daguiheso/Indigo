'use strict';

/* Filters Indigo */

(function(){
	angular.module('indigo.filters', [])
		.filter('normalize', function () {
		    return function (input) {
		    	if (!input) return "";
		    	input = input
	    	         .replace(' ', '');
		        return input.toLowerCase();
		    };
  		})

  		.filter('imageify', ['$filter', function ($filter) {
		    return function (input, ext) {
		      var url = "images/" + $filter('normalize')(input) + "." + ext || "jpg";
		      return url;
		    };
  		}]);
})();