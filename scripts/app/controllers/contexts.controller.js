(function () {
    'use strict';

    angular
        .module('todoer')
        .controller('ContextsController', ContextsController);

        ContextsController.$inject = ['contextsService'];

        function ContextsController(contextsService) {
            var vm = this;
            vm.contexts = [];
            vm.addContext = addContext;
            
            getContexts();

            function getContexts() {
                vm.contexts = contextsService.get();
            }

            function addContext(contextName, contextForm) {
                contextsService.add(contextName);
                getContexts();
                vm.contextName = '';
                contextForm.$setPristine();
            }
        }
})();