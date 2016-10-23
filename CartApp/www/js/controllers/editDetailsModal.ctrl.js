(function(){
  'use strict';
  angular
    .module('app')
    .controller('editDetailsModalCtrl')

function ediDetailsModalCtrl($scope, $stateParams, $ionicModal) {

$ionicModal.fromTemplateUrl('templates/editDetailsModal.html',{
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal){
      $scope.modal = modal;
    });
    $scope.openModalEditDetails = function(){
      $scope.modal.show();
    };
    $scope.closeModalEditDetails = function(){
      $scope.modal.hide();
    };

    $scope.$on('$destroy', function(){
      $scope.modal.remove();
    });

    $scope.$on('modal.hidden', function(){

    });

    $scope.$on('modal.removed', function(){

    });
}
})();