angular.module('customPage')
  .directive('specializationDirective', function(specializationService){
    return {
      restrict: "E",
      templateUrl: 'js/templates/specializationDirective.html',
      controller : function ($scope,$timeout){
        setTimeout(function () {
          jQuery('.post').addClass("hidden-div").viewportChecker({
            classToAdd: 'visible-div animated fadeIn'
          });
        }, 10);
        $scope.specializationList = {};
        var promise = specializationService.getText();
        promise.then(function(data) {
            $scope.specializationList = data.data;
        });
      }
    }
  });
