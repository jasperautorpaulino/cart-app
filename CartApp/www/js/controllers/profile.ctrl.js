(function(){
  'use strict';
	angular
		.module('app')
		.controller('profileCtrl', profileCtrl);
			
	function profileCtrl($scope, foodcartFactory, $ionicModal, $ionicPopup, $location, $window, $http) {

     $http.post('http://localhost/Franchisee/api/getFranchiseeInfo.php', {
        
        'user' : foodcartFactory.getid(),

        }
        ).then(function (res){
          $scope.FranchiseeInfo[1] = res.data;
          //console.log($scope.FranchiseeInfo);
        });

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

    $scope.showConfirm = function() {
   var confirmPopup = $ionicPopup.confirm({
     title: 'Are you sure?',
      buttons: [
      { text: 'Cancel',
        type: 'button button block button-energized' },
      { text: 'Yes',
      type: 'button button block button-royal',
      onTap: function(e){
        $location.path('/login');
        $window.location.reload(true);
      }
      }
    ]});
};
}

})();