export /* @ngInject */ function typographyRoutes($stateProvider) {
  $stateProvider

    .state('typography', {
      url: '/typography',
      templateUrl: '/states/typography/typography.html',
      controller: 'TypographyController',
      controllerAs: 'Typography'
    });
}
