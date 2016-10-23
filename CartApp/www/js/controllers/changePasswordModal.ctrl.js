(function(){
  'use strict';
	angular
		.module('app')
		.controller('changePasswordModalCtrl', changePasswordModalCtrl);
			
	function changePasswordModalCtrl($scope, $stateParams, $ionicModal) {

$ionicModal.fromTemplateUrl('templates/changePasswordModal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openChangePasswordModal = function() {
    $scope.modal.show();
  };
  $scope.closeChangePasswordModal = function() {
    $scope.modal.hide();
  };
  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });

}
})();