(function(){
	'use strict';
	angular
		.module('app')
		.factory('foodcartFactory', foodcartFactory);
		var user = {};
		function foodcartFactory ($http){
			return{
				getEquipments: function (){
					return $http.get('http://localhost/Franchisee/api/getEquipments.php').then(function(data){
						return data;
					});
				},
				getProducts: function() {
					return $http.get('http://localhost/Franchisee/api/getProducts.php').then(function(data){
						return data;
					});
				},
				getFoodcartConcept: function(){
					return $http.get('http://localhost/Franchisee/api/getFoodcartConcept.php').then(function(data){
  						return data; 
					});
				},
				
				getAllCarts: function(){
					return $http.get('http://localhost/Franchisee/api/getAllCarts.php').then(function(data){
						return data;
					});
				},
				getAllConcepts: function(){
					return $http.get('http://localhost/Franchisee/api/getConcepts.php').then(function(data){
						return data;
					});
				},
				getAccount: function(){
					return $http.get('http://localhost/Franchisee/api/getAccount.php').then(function(data){
						return data;
					});
				},
				getFranchiseeInfo: function(){
					return $http.get('http://localhost/Franchisee/api/getFranchiseeInfo.php').then(function(data){
						return data;
					});
				},
				getFoodcartID: function(){
					return $http.get('http://localhost/Franchisee/api/getFoodcartID.php').then(function(data){
						return data;
					});
				},
				setfranchiseeid: function(franchiseeid){
				   user.id = franchiseeid;
				},
				getfranchiseeid : function(franchiseeid){
				 return   user.id;
				},
				setid: function(franchiseeid){
					user.id = franchiseeid;
				},
				getid : function(franchiseeid){
					return user.id;
				},
				save: function(products){
					window.localStorage['products'] = angular.toJson(products);
				},
				all: function(){
					var productString = window.localStorage['products'];
					if(productString){
						return angular.fromJson(productString);
					}
				}
			}
		}
})();