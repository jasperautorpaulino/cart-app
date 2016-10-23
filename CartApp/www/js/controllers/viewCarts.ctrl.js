(function(){
  'use strict';
	angular
		.module('app')
		.controller('viewCartsCtrl', viewCartsCtrl)
		
		function viewCartsCtrl($scope, $stateParams, $ionicModal, foodcartFactory) {



    foodcartFactory.getAllCarts().then(function(data){
      
      $scope.cartList = data.data.Foodcarts;
      console.log($scope.cartList);
    });
  }
})();