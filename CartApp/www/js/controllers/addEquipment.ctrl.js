(function(){
	'use strict';
	angular
		.module('app')
		.controller('addEquipmentCtrl', addEquipmentCtrl);

function addEquipmentCtrl($scope, $ionicPopup, $timeout, $location, $http, $ionicModal) {

   
  $scope.data = {};
        $http.post('http://localhost/Franchisee/api/getEquipments.php', {
          wala: 'wala'}).then(function (res){
          $scope.equipmentList = res.data;
        });

  $ionicModal.fromTemplateUrl('templates/cartEquipments.html',{
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal){
      $scope.modal = modal;
    });
    $scope.openCartEquipments = function(){
      $scope.modal.show();
    };
    $scope.closeCartEquipments = function(){
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

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    title: 'Choose Payment Type',
    scope: $scope,
    buttons: [
      { text: 'Pickup',
        type: 'button-royal',
        onTap: function(){
          var payment = $ionicPopup.show({
            title: 'Choose Payment Method',
            scope: $scope,
            buttons: [
            { text: 'credit card',
              type: 'button-royal',
                onTap: function(){
                  $location.path('/success');
            }

            },
            { text: 'debit card',
              type: 'button-royal',
                onTap: function(){
                  $location.path('/success');
                }
            },
            { text: 'cash',
              type: 'button-royal',
                onTap: function(){
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
          $location.path('/success');
        }
      }
    ]
  });

  myPopup.then(function() {
    console.log('Tapped!');
  });

  $timeout(function() {
     myPopup.close(); //close the popup after 3 seconds for some reason
  }, 10000);
 };

 $scope.defineEquipmentQuantity = function(ID, desc, price){
$scope.obj ={};
  var defineEquipmentQuantity = $ionicPopup.show({
    template: '<input type="number" ng-model="obj.quantity">',
    title: 'Quantity',
    scope: $scope,
    buttons:[
      {
        text: 'Close',
        type: 'button-energized',
        onTap: function(){
          defineEquipmentQuantity.close();
        }
      },
      {
        text: 'Confirm',
        type: 'button-energized',
        onTap: function(e){
          if(!$scope.obj.quantity){
            alert("Amount should be greater than 1");
            e.preventDefault();
            //alert($scope.obj.quantity);
          }else{
            if(!$scope.equipments){
              $scope.equipments = JSON.parse('[{"ID":"'+ID+'","desc":"'+desc+'","price":"'+price+'","Quantity":"'+$scope.obj.quantity+'"}]');
               
            }else{
                $scope.equipments.push(JSON.parse('{"ID":"'+ID+'","desc":"'+desc+'","price":"'+price+'","Quantity":"'+$scope.obj.quantity+'"}'));
                console.log($scope.equipments);
              }
              alert(angular.toJson($scope.equipments));
          }
        }
      }
    ]
  });
 };
}
})();