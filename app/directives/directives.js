import { generateColor } from './generate-color';
import angular from 'angular';
import { ifEnv } from 'directives/if-env';

export default angular.module('JuUi.directives', [])
  .directive('ifEnv', ifEnv)
  .directive('generateColor', generateColor);
