import { juSectionsRoutes } from './ju-sections';
import { pagesRoutes } from './pages';
//import { homePageRoutes } from './home-page';
import { listsRoutes } from './lists';
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
  .config(juSectionsRoutes)
  .config(pagesRoutes)
  //.config(homePageRoutes)
  .config(listsRoutes)
  .config(gridRoutes)
  .config(typographyRoutes)
  .config(colorsRoutes)
  .config(formsRoutes)
  .config(buttonsRoutes)
  .config(defaultRoute)
  .config(homeRoutes)
  .config(staticRoutes);
