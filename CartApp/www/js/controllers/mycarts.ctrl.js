 (function (){
	'use strict';
	angular
		.module('app')
		.controller('myCartsCtrl', myCartsCtrl);

  
		function myCartsCtrl($scope, $http, foodcartFactory, $ionicModal) {
		
			$http.post('http://localhost/Franchisee/api/getUser.php', {
            'user' : foodcartFactory.getfranchiseeid(), 
            
        	}
    	).then(function (res) {
       	$scope.userFoodcart = res.data;
       	//alert($scope.userFoodcart);
       	console.log($scope.userFoodcart);
    	});

    		

		}
})();