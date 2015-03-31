/*
* ng.httpFake
* Simulates the result of a request from the $http AngularJS.
* @autor: Miller Augusto Silva Martins
* @email: miller.augusto@gmail.com
**/
(function(window, document) {
    "use strict";
    (angular.module('ng.httpFake', [ 'ng' ])).factory('$httpFake', [ function() {
	var $httpFake = function(data, isError, sleep) {
	    this.success = function(callback) {
		if (isError) {
		    return new $httpFake(data, false);
		} else {
		    callback({
			objects : data
		    });
		    return {
			success : function() {
			},
			error : function() {
			}
		    }
		}
	    }
	    this.error = function(callback) {
		callback('$httpFake set to Error!!!');
	    };
	};
	return $httpFake;
    } ]);
})(window, document);
