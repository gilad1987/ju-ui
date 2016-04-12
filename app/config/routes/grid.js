export /* @ngInject */ function gridRoutes($stateProvider) {
  $stateProvider

    .state('grid', {
      url: '/grid',
      templateUrl: '/states/grid/grid.html',
      controller: 'GridController',
      controllerAs: 'Grid'
    });
}
