(function () {
    'use strict';

    angular
        .module('todoer')
        .factory('contextsService', contextsService);

        function contextsService() {
            var service = {
                get: get,
                add: add
            };

            return service;

            function get() {
                var temp = getContexts();
                var contexts = temp !== null ? JSON.parse(temp) : [];

                return contexts;
            }

            function add(contextName) {
                var contexts = get();
                var id = contexts.length + 1;
                contexts.push({
                    id: id,
                    name: contextName
                });

                setContexts(contexts);
            }

            function getContexts() {
                return localStorage.getItem('contexts');
            }

            function setContexts(contexts) {
                localStorage.setItem('contexts', JSON.stringify(contexts));
            }
        }
})();