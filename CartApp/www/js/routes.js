angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    

  .state('tabsController.home', {
    url: '/Home',
    cache: false,
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      },
      'tab3': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.myCarts', {
    url: '/MyCart',
    cache: false,
    views: {
      'tab2': {
        templateUrl: 'templates/myCarts.html',
        controller: 'myCartsCtrl'
      }
    }
  })

  .state('tabsController.CartConcept',{
    url: '/CartConcept',
    cache: false,
    views: {
      'tab2':{
        templateUrl: 'templates/CartConcept.html',
        controller: 'cartConceptCtrl'
      }
    }
  })

  .state('tabsController.profile', {
    url: '/Profile',
    cache: false,
    views: {
      'tab3': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.orders', {
    url: '/Orders',
    cache: false,
    views: {
      'tab4': {
        templateUrl: 'templates/orders.html',
        controller: 'ordersCtrl'
      }
    }
  })

  .state('login', {
    url: '/Login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('tabsController.addProduct', {
    url: '/addProduct',
    cache: false,
    views: {
      'tab4': {
        templateUrl: 'templates/addProduct.html',
        controller: 'addProductCtrl'
      }
    }
  })

  .state('tabsController.addEquipment', {
    url: '/addEquipment',
    cache: false,
    views: {
      'tab4': {
        templateUrl: 'templates/addEquipment.html',
        controller: 'addEquipmentCtrl'
      }
    }
  })

  .state('tabsController.viewCarts', {
    url: '/viewCarts',
    cache: false,
    views: {
      'tab1': {
        templateUrl: 'templates/viewCarts.html',
        controller: 'viewCartsCtrl'
      },
      'tab3': {
        templateUrl: 'templates/viewCarts.html',
        controller: 'viewCartsCtrl'
      }
    }
  })
  
  .state('tabsController.viewConcepts', {
    url: '/viewConcepts',
    cache: false,
    views: {
      'tab1': {
        templateUrl: 'templates/viewConcepts.html',
        controller: 'viewConceptsCtrl'
      },
      'tab3': {
        templateUrl: 'templates/viewConcepts.html',
        controller: 'viewConceptsCtrl'
      }
    }
  })

  .state('orderSuccessful', {
    url: '/success',
    cache: false,
    templateUrl: 'templates/orderSuccessful.html',
    controller: 'orderSuccessfulCtrl'
  })

  .state('delivery', {
    url: '/Delivery',
    cache: false,
    templateUrl: 'templates/delivery.html',
    controller: 'deliveryCtrl'
  })

  .state('tabsController.changePassword', {
    url: '/changePassword',
    cache: false,
    views: {
      'tab3': {
        templateUrl: 'templates/changePasswordModal.html',
        controller: 'changePasswordCtrl'
      }
    }
  })

  .state('tabsController.editDetailsModal', {
    url: '/editDetailsModal',
    cache: false,
    views: {
      'tab3': {
        templateUrl: 'templates/editDetailsModal.html',
        controller: 'editDetailsModalCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/Login')

  

});