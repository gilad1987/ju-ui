import { juDropdown } from './ju-dropdown/ju-dropdown';
import { juUiNavbar } from './ju-ui-navbar/ju-ui-navbar';
import { createButton } from './create-button/create-button';
import angular from 'angular';

export default angular.module('JuUi.components', [])
  .component('createButton', createButton)
  .component('juUiNavbar', juUiNavbar)
  .component('juDropdown', juDropdown);
