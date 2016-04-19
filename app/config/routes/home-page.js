export /* @ngInject */ function homePageRoutes($stateProvider) {
  $stateProvider

    .state('home-page', {
      url: '/home-page',
      templateUrl: '/states/home-page/home-page.html',
      controller: 'HomePageController',
      controllerAs: 'HomePage'
    });
}
