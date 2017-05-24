angular.module('customPage')
  .directive('aboutDirective', function(aboutService){
    return {
      restrict: "E",
      templateUrl: 'js/templates/aboutDirective.html',
      controller : function ($scope,$timeout){
        setTimeout(function () {
          jQuery('.post').addClass("hidden-div").viewportChecker({
            classToAdd: 'visible-div animated fadeIn'
          });
        }, 10);
        $scope.aboutList = {};
        var promise = aboutService.getText();
        promise.then(function(data) {
            $scope.aboutList = data.data;
        });
      }
    }
  });
