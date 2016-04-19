export /* @ngInject */ function listsRoutes($stateProvider) {
  $stateProvider

    .state('lists', {
      url: '/lists',
      templateUrl: '/states/lists/lists.html',
      controller: 'ListsController',
      controllerAs: 'Lists'
    });
}
