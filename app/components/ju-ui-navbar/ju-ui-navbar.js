class juUiNavbarController {
  // @ngInject
  constructor($log, $element, $state) {
    this.states = $state.get();
  }
}

export const juUiNavbar = {
  bindings: {},
  templateUrl: '/components/ju-ui-navbar/ju-ui-navbar.html',
  controller: juUiNavbarController,
  controllerAs: 'juUiNavbar'
};
