angular.module('customPage')
	.service('aboutService', function($http, $q) {
	  var deferred = $q.defer();
	  $http.get('js/json/aboutJson.json').then(function(data) {
	      deferred.resolve(data);
	  });
	  this.getText = function(){
	      return deferred.promise;
	  };

	});
