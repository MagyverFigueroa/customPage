angular.module('customPage')
  .directive('aboutDirective', aboutDirective);

function aboutDirective(aboutService){
  var directive =  {
    restrict: "E",
    templateUrl: 'js/templates/aboutDirective.html',
    controller : aboutDirectiveController
  };
  return directive;
}


function aboutDirectiveController($scope,$timeout,aboutService){
  var vm = $scope;
  vm.aboutList = {};
  activate();
  
  setTimeout(function () {
    jQuery('.post').addClass("hidden-div").viewportChecker({
      classToAdd: 'visible-div animated fadeIn'
    });
  }, 10);

  function activate(){
    return aboutService.getText().then(function(data) {
      vm.aboutList = data.data;
      return vm.aboutList;
    });
  }
}