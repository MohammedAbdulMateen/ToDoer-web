(function () {
    'use strict';

    angular
        .module('todoer', ['ngRoute'])
        .config(configFunc);

        configFunc.$inject = ['$routeProvider', '$locationProvider', '$windowProvider'];

        function configFunc($routeProvider, $locationProvider, $windowProvider) {
            var $window = $windowProvider.$get();
            
            if ($window.history && $window.history.pushState) {
                $locationProvider.html5Mode(true);
            }

            $routeProvider.when('/', {
                templateUrl: 'templates/contexts.html',
                controller: 'ContextsController',
                controllerAs: 'vm'
            });

            $routeProvider.when('/todos/:contextId', {
                templateUrl: 'templates/todos.html',
                controller: 'TodosController',
                controllerAs: 'vm'
            });

            $routeProvider.otherwise({
                redirect: '/'
            });
        }
})();