import { gridRoutes } from './grid';
import { typographyRoutes } from './typography';
import { colorsRoutes } from './colors';
import { formsRoutes } from './forms';
import { buttonsRoutes } from './buttons';
import angular from 'angular';
import 'angular-ui-router';

import { homeRoutes } from 'config/routes/home';
import { staticRoutes } from 'config/routes/static';

const defaultRoute = /* @ngInject */ ($urlRouterProvider) => {
  //$urlRouterProvider.when('/','/forms');
  $urlRouterProvider.otherwise('/404');
};

export default angular.module('JuUi.routes', ['ui.router'])
  .config(gridRoutes)
  .config(typographyRoutes)
  .config(colorsRoutes)
  .config(formsRoutes)
  .config(buttonsRoutes)
  .config(defaultRoute)
  .config(homeRoutes)
  .config(staticRoutes);
