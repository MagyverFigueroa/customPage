angular.module('customPage')
  .directive('specializationDirective', specializationDirective);

function specializationDirective(specializationService){
  var directive =  {
    restrict: "E",
    templateUrl: 'js/templates/specializationDirective.html',
    controller : specializationDirectiveController
  };
  return directive;
}


function specializationDirectiveController($scope,$timeout,specializationService){
  var vm = $scope;
  vm.specializationList = {};
  activate();
  
  setTimeout(function () {
    jQuery('.post').addClass("hidden-div").viewportChecker({
      classToAdd: 'visible-div animated fadeIn'
    });
  }, 10);

  function activate(){
    return specializationService.getText().then(function(data) {
      vm.specializationList = data.data;
      return vm.specializationList;
    });
  }
}