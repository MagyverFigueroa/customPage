angular.module('customPage')
	.service('specializationService', function($http, $q) {
	  var deferred = $q.defer();
	  $http.get('js/json/specializationJson.json').then(function(data) {
	      deferred.resolve(data);
	  });
	  this.getText = function(){
	      return deferred.promise;
	  };

	});
