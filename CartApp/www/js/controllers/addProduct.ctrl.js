(function(){
	'use strict';
	angular
		.module('app')
		.controller('addProductCtrl', addProductCtrl);


function addProductCtrl($scope, foodcartFactory, $ionicPopup, $location, $timeout, $http, $ionicModal) {
  
  $scope.data = {};
        foodcartFactory.getProducts().then(function (data){
          $scope.productList = data.data;
        });

    $ionicModal.fromTemplateUrl('templates/cart.html',{
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal){
      $scope.modal = modal;
    });
    $scope.openCart = function(){
      $scope.modal.show();
      
              
    };
    $scope.closeCart = function(){
      $scope.modal.hide();
    };

    $scope.$on('$destroy', function(){
      $scope.modal.remove();
    });

    $scope.$on('modal.hidden', function(){

    });

    $scope.$on('modal.removed', function(){

    });
  
  $scope.showPopup = function() {

  var showPopup = $ionicPopup.show({
    title: 'Choose Payment Type',
    scope: $scope,
    buttons: [
      { text: 'Pick-up',
  		type: 'button-royal',
        onTap: function(){
          var payment = $ionicPopup.show({
            title: 'Choose Payment Method',
            scope: $scope,
            buttons: [
            { text: 'credit card',
              type: 'button-royal',
                onTap: function(){
                  //$scope.products.push(JSON.parse('{"descc":"'+descc+'","prod":"'+prod+'","price":"'+price+'","Quantity":"'+$scope.obj.quantity+'","Payment_Type":"'+pickup+'","Method":"'+creditcard+'"}'));

                  $location.path('/success');
            }

            },
            { text: 'debit card',
              type: 'button-royal',
                onTap: function(){
                  //$scope.products.push(JSON.parse('{"descc":"'+descc+'","prod":"'+prod+'","price":"'+price+'","Quantity":"'+$scope.obj.quantity+'","Payment_Type":"'+pickup+'","Method":"'+debitcard+'"}'));
                  $location.path('/success');
                }
            },
            { text: 'cash',
              type: 'button-royal',
                onTap: function(){
                  //$scope.products.push(JSON.parse('{"descc":"'+descc+'","prod":"'+prod+'","price":"'+price+'","Quantity":"'+$scope.obj.quantity+'","Payment_Type":"'+pickup+'","Method":"'+cash+'"}'));
                  $location.path('/success');
                }
              }
            ]
          })
        }
      },
  	  { text: 'Delivery(COD)',
  		type: 'button-energized',
        onTap: function(){
                  //$scope.products.push(JSON.parse('{"descc":"'+descc+'","prod":"'+prod+'","price":"'+price+'","Quantity":"'+$scope.obj.quantity+'","Payment_Type":"'+Delivery+'","Method":"'+cash+'"}'));
          $location.path('/success');
        }
      }
    ]
  });

  showPopup.then(function() {
    console.log('Tapped!');
  });

  $timeout(function() {
     showPopup.close();
  }, 10000);
 };

 $scope.defineProductQuantity = function(descc, prod, price){
  $scope.obj ={};
  //$scope.products = foodcartFactory.all();

  $http.post('http://localhost/franchisee/api/insertproductorder.php',{
    'descc' : descc,
    'prod' : prod,
    'price' : price
  }).success(function(res, data){
    if(data.status == 1){
      alert("success!");
    }else{
      alert("oops, something went wrong");
    }
  });

  var defineProductQuantity = $ionicPopup.show({
    template: '<input type="number" ng-model="obj.quantity">',
    title: 'Quantity',
    scope: $scope,
    buttons:[
      {
        text: 'Close',
        type: 'button-energized',
        onTap: function(){
          defineProductQuantity.close();
        }
      },
      {
        text: 'Confirm',
        type: 'button-energized',
        onTap: function(e){
          //alert($scope.obj.quantity);
          if(!$scope.obj.quantity){
            alert("Amount should be greater than 1");
            e.preventDefault();
            alert($scope.obj.quantity);
          }else{
            if(!$scope.products){
              $scope.products =  JSON.parse('[{"descc":"'+descc+'","prod":"'+prod+'","price":"'+price+'","Quantity":"'+$scope.obj.quantity+'"}]');
              
              console.log($scope.products);
             
            }else{
             $scope.products.push(JSON.parse('{"descc":"'+descc+'","prod":"'+prod+'","price":"'+price+'","Quantity":"'+$scope.obj.quantity+'"}'));
              console.log($scope.products);

            }
              alert(angular.toJson($scope.products));
          }
        }
      }
    ]
  });
 };
}
})();