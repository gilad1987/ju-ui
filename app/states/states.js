import { JuSectionsController } from './ju-sections/ju-sections';
import { PagesController } from './pages/pages';
import { HomePageController } from './home-page/home-page';
import { ListsController } from './lists/lists';
import { GridController } from './grid/grid';
import { TypographyController } from './typography/typography';
import { ColorsController } from './colors/colors';
import { FormsController } from './forms/forms';
import { ButtonsController } from './buttons/buttons';
import angular            from 'angular';
import { HomeController } from 'states/home/home';

export default angular.module('JuUi.controllers', [])
  .controller('HomeController', HomeController)
  .controller('ButtonsController', ButtonsController)
  .controller('FormsController', FormsController)
  .controller('ColorsController', ColorsController)
  .controller('TypographyController', TypographyController)
  .controller('GridController', GridController)
  .controller('ListsController', ListsController)
  .controller('HomePageController', HomePageController)
  .controller('PagesController', PagesController)
  .controller('JuSectionsController', JuSectionsController);
