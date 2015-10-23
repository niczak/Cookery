import config from './index.config';
import routerConfig from './index.route';
import runBlock from './index.run';

import { MainController } from './main/main.controller';
import { SearchService } from './main/search.service';

angular
  .module('cookery', ['ngResource', 'ui.router', 'ui.bootstrap'])
  .config(routerConfig)
  .controller('MainController', MainController)
  .service('SearchService', SearchService);
