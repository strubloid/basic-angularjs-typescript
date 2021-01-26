import * as angular from 'angular';

import 'angular-route';
// import 'angular-ui-router/release/angular-ui-router'
import 'angular-ui-router/release/angular-ui-router'

'use strict';

const librariesModules = [
    'ngRoute',
    'ui.router',
];

const componentsModules = [
    'BasicModule',
];

const requiredModulesToLoad = librariesModules.concat(componentsModules);

angular.module('app', requiredModulesToLoad);

