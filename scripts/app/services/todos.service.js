(function () {
    'use strict';

    angular
        .module('todoer')
        .factory('todosService', todosService);

        function todosService() {
            var service = {
                get: get,
                add: add,
                update: update
            };

            return service;

            function get(contextId) {
                var temp = getTodos();
                var todos = temp !== null ? JSON.parse(temp) : [];
                if (contextId > 0) {
                    todos = todos.filter(function (todo, index, arr) {
                        return todo.contextId === contextId;
                    });
                }

                return todos;
            }

            function add(contextId, action) {
                var todos = get();
                var id = todos.length + 1;
                todos.push({
                    id: id,
                    contextId: contextId,
                    action: action,
                    done: false
                });

                setTodos(todos);
            }

            function update(id, done) {
                var todos = get();
                var todo = todos.filter(function (todo, index, arr) {
                    return todo.id === id;
                });

                todo[0].done = done;
                setTodos(todos);
            }

            function getTodos() {
                return localStorage.getItem('todos');
            }

            function setTodos(todos) {
                localStorage.setItem('todos', JSON.stringify(todos));
            }
        }
})();