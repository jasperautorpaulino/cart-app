(function(){
	'use strict';	
	angular
		.module('app')
		.controller('cartConceptCtrl', cartConceptCtrl);

function cartConceptCtrl($scope, $stateParams, $ionicModal, foodcartFactory, $http){
		
		$http.post('http://localhost/Franchisee/api/getFoodcartConcept.php', {
            'user' : foodcartFactory.getfranchiseeid(), 
            
        	}
    	).then(function (res) {
       	$scope.foodcartconcept = res.data;
       	//alert($scope.foodcartconcept);
       	console.log($scope.foodcartconcept);
    	});

    

}
})();