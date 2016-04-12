export /* @ngInject */ function colorsRoutes($stateProvider) {
  $stateProvider

    .state('colors', {
      url: '/colors',
      templateUrl: '/states/colors/colors.html',
      controller: 'ColorsController',
      controllerAs: 'Colors'
    });
}
