export /* @ngInject */ function buttonsRoutes($stateProvider) {
  $stateProvider

    .state('buttons', {
      url: '/buttons',
      templateUrl: '/states/buttons/buttons.html',
      controller: 'ButtonsController',
      controllerAs: 'Buttons'
    });
}
