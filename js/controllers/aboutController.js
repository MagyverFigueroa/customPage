angular.module('customPage')
	.controller('aboutController',aboutController);

function aboutController(aboutService, specializationService){
  var vm = this;
  vm.selected = 0;
}
