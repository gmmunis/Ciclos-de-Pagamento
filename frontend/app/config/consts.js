angular.module('primeiraApp').constant('consts', {
  appName: 'Ciclos de Pagamento',
  version: '1.0',
  owner: 'Guilherme',
  year: '2020',
  site: 'https://github.com/gmmunis/Ciclos-de-Pagamento',
  apiUrl: 'http://localhost:3003/api',
}).run(['$rootScope', 'consts', function ($rootScope, consts) {
  $rootScope.consts = consts
}])