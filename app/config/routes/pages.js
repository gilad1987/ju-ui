export /* @ngInject */ function pagesRoutes($stateProvider) {
  $stateProvider

    .state('pages', {
        url: '/pages',
        template: '<ui-view></ui-view>',
        abstract: true
    })
      .state('pages.home-page', {
          url: '/home-page',
          templateUrl: '/states/home-page/home-page.html',
          controller: 'HomePageController',
          controllerAs: 'HomePage'
      });
}
