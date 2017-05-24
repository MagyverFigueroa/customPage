angular.module('customPage')
	.service('aboutService', aboutService);

function aboutService($http, $q) {
	var deferred = $q.defer();
	var service = {
		getText: getText
	};

	return service;

 	function getText(){
 	  var deferred = $q.defer();

      return $http.get('js/json/aboutJson.json').then(getTextComplete);

	  function getTextComplete(response){
	  	 deferred.resolve(response);
	  	return deferred.promise;
	  }
    };
}
