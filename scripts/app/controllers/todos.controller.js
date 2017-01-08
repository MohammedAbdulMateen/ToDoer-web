(function () {
    'use strict';

    angular
        .module('todoer')
        .controller('TodosController', TodosController);

        TodosController.$inject = ['$routeParams', 'todosService'];

        function TodosController($routeParams, todosService) {
            var vm = this;
            var contextId = parseInt($routeParams.contextId);
            vm.todos = [];
            vm.addTodo = addTodo;
            vm.updateTodo = updateTodo;

            getTodos(contextId);

            function getTodos(contextId) {
                vm.todos = todosService.get(contextId);
            }

            function addTodo(action, todoForm) {
                todosService.add(contextId, action);
                getTodos(contextId);
                vm.action = '';
                todoForm.$setPristine();
            }

            function updateTodo(id, done) {
                todosService.update(id, done);
            }
        }
})();