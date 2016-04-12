export /* @ngInject */ function formsRoutes($stateProvider) {
  $stateProvider

    .state('forms', {
      url: '/forms',
      templateUrl: '/states/forms/forms.html',
      controller: 'FormsController',
      controllerAs: 'Forms'
    });
}
