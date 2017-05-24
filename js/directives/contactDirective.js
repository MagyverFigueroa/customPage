angular.module('customPage')
	.directive('contactDirective', contactDirective);

function contactDirective(){
  var directive =  {
    restrict: "E",
    templateUrl: 'js/templates/contactDirective.html'
  }
  return directive;
}
