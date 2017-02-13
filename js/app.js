angular.module('miniRouting',['ui.router']).config(function($stateProvider, $urlRouterProvider){

    $stateProvider

    .state('home', {
        url: '/',
        templateUrl: './js/home/homeTMPL.html',
        controller: 'homeCTRL'
    })
    .state('settings', {
        url: '/settings',
        templateUrl: './js/settings/settingsTMPL.html',
        controller: 'settingsCTRL'
    })
    .state('products', {
        url: "/products/:id",
        templateUrl: './js/products/productsTMPL.html',
        controller: 'productsCTRL'
    })
    
    $urlRouterProvider.otherwise('/');

});