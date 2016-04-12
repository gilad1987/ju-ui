class juDropdownController {
  // @ngInject
  constructor($log, $element) {
    let current = {};
  }

  onOptionChecked(){

  }

  onSelectClick(){

  }
}

export const juDropdown = {
  bindings: {
    options:'='
  },
  templateUrl: '/components/ju-dropdown/ju-dropdown.html',
  controller: juDropdownController,
  controllerAs: 'juDropdown'
};
