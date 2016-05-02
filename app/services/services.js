import { HtmlToString } from './html-to-string';
import angular from 'angular';

export default angular.module('JuUi.services', [])
  .service('HtmlToString', HtmlToString);
