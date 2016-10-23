(function(){
  'use strict';
	angular
		.module('app')
		.controller('viewConceptsCtrl', viewConceptsCtrl)
			
			function viewConceptsCtrl($scope, $stateParams, foodcartFactory) {
        	
        	foodcartFactory.getAllConcepts().then(function(data){
				$scope.conceptList = data.data.Concepts;
      			console.log($scope.conceptList);        			
        	});
    }
})();