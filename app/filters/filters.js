import { range } from './range';
import angular from 'angular';

export default angular.module('JuUi.filters', [])
  .filter('range', range);
