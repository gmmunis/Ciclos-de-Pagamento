angular.module('primeiraApp').config([
  '$stateProvider',
  '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('dashboard', {
      url: "/dashboard",
      templateURL: "dashboard/dashboard.html"
    }).state('billingCycle', {
      url: "/billingCycles",
      templateURL: "billingCycle/tabs.html"
    });

    $urlRouterProvider.otherwise('/dashboard')
  }
]);