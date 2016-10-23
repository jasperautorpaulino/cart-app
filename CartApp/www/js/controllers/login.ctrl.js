(function(){
	'use strict';

	angular
		.module('app')
		.controller('loginCtrl', loginCtrl);

		
	function loginCtrl($scope, foodcartFactory, $ionicPopup, $http, $location) {

		/*foodcartFactory.getAccount().then(function(data){
  
		$scope.accountInfo = data.data.Account;
		console.log($scope.accountInfo);
		});*/	

		$scope.login = function(){
         
    // fields in key-value pairs
    	$http.post('http://localhost/Franchisee/api/login.php', {
            'user' : $scope.user, 
            'password' : $scope.password
        	}
    	).success (function (data, status, headers, config) {
        // tell the user new product was created
        if(data.status== 1){
        	$scope.user= '';
        	 $scope.password=''; 
        	foodcartFactory.setfranchiseeid(data.userid);
        	foodcartFactory.setid(data.userid);
        	
        	$scope.id = foodcartFactory.getid();
        	
        		$scope.franchiseeid = foodcartFactory.getfranchiseeid();
        		//toastr.info($scope.franchiseeid);
        	
        	toastr.clear();
        	//toastr.info('success');
        	$location.url('/page1/tab1/Home');
        	//$window.location.reload(true);
        }
        else{
        	toastr.clear();
			toastr.error('check your credentials');
								
        }
    	});
		}

		$scope.enterIP = function(){
		$scope.data = {};

		var enterIP = $ionicPopup.show({
		    template: '<input type="text" ng-model="data.wifi">',
		    title: 'Enter your IP Address: ',
		    subTitle: 'Hint: open cmd and type "ipconfig" ',
		    scope: $scope,
		    buttons:[
		    
		    { text: 'Cancel',
		      type: "button button block button-assertive"},
		      { text: 'Save',
		      type: "button button block button-energized",
		      onTap: function(c){
		        if (!$scope.data.wifi){
		          c.preventDefault();
		        } else{
		          return $scope.data.wifi;
		        }
		      } 
		    }]
		  })
		}

		$scope.loginEmployee = function(){
		$scope.obj = {};

		$http.post('http://localhost/Franchisee/api/loginEmployee.php', {
            'empid' : $scope.obj.empid
        	}
    	).success (function (data, status, headers, config) {
        // tell the user new product was created
        if(data.status== 1){
        	$scope.empid= '';
        	
        		//toastr.info($scope.franchiseeid);
        	
        	toastr.clear();
        	//toastr.info('success');
        	$location.url('/Delivery');
        	//$window.location.reload(true);
        }
        else{
        	toastr.clear();
			toastr.error('check your credentials');
								
        }
    	});

		var loginEmployee = $ionicPopup.show({
		    template: '<input type="text" ng-model="obj.empid">',
		    title: 'Enter Employee ID: ',
		    scope: $scope,
		    buttons:[
		    
		    { text: 'Cancel',
		      type: "button button block button-assertive"},
		      { text: 'Confirm',
		      type: "button button block button-energized",
		      onTap: function(c){
		        if (!$scope.obj.empid){
		          c.preventDefault();
		        } else{
		          $location.path('/Delivery');
		        }
		      } 
		    }]
		  })
		}
}

})();