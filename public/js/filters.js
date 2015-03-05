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
})();