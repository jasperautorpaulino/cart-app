(function(){
  'use strict';
	angular
		.module('app')
		.controller('homeCtrl', homeCtrl)
			
			function homeCtrl($scope, $stateParams, $ionicModal, foodcartFactory, $http) {
        	
        	foodcartFactory.getAllConcepts().then(function(data){
				$scope.conceptList = data.data.Concepts;
      			console.log($scope.conceptList);        			
        	});
        	
	        foodcartFactory.getAllCarts().then(function(data){
	      
		    $scope.cartList = data.data.Foodcarts;
		    console.log($scope.cartList);
	        });

		    $http.post('http://localhost/Franchisee/api/getFranchiseeInfo.php', {
        
	        'user': foodcartFactory.getid(),  
	        }).then(function (res){
	          $scope.FInfo = res.data;
	          //console.log($scope.FranchiseeInfo);

    		});
    }
})();