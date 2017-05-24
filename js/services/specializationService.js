angular.module('customPage')
	.service('specializationService', specializationService);

function specializationService($http, $q) {
	var deferred = $q.defer();
	var service = {
		getText: getText
	};

	return service;

 	function getText(){
 	  var deferred = $q.defer();

      return $http.get('js/json/specializationJson.json').then(getTextComplete);

	  function getTextComplete(response){
	  	 deferred.resolve(response);
	  	return deferred.promise;
	  }
    };
}
