/**
 * Instatiation du module todoApp. C'est ici que angular cherchera le code a exécuter
 *  pour notre application todoApp puisque c'est le nom qu'on lui a donné dans notre directive
 */
var todoApp = angular.module('todoApp', []);

/**
 * Chainage du controller au module avec le même nom qu'on lui a donné dans notre vue.
 */
todoApp.controller('TodoListController', function($scope) {

    //Instanciation du todoList avec la valeur $scope
    var todoList = $scope;

    // Ajout de la propriété todos à todoList
    // Le todos est un tableau contenant des objets todos
    todoList.todos = [
        {
            text : 'Learn javascript',
            done : false
        },
        {
            text : 'Learn angular',
            done : false
        }
    ];

    todoList.addTodo = function() {
        // On rajoute dans le tableau todoList.todos le nouveau todo avec par défaut la valeur de done à false
        todoList.todos.push({
            text: todoList.formNewTodo,
            done: false
        });
        // Ensuite on vide le champ
        todoList.formNewTodo = '';
    };

    /**
     * La fonction archive est exécuter lorsqu'on click sur le lien archive
     */
    todoList.archive = function() {
        // On récupère la liste des todos fait ou pas
        var oldTodos = todoList.todos;
        // on vide le tableau des todos
        todoList.todos = [];
        // On parcours la liste des todos qu'on avait récupérer
        angular.forEach(oldTodos, function(todo) {
            // On vérifie si le todo est fait, sinon on le met dans le tableau des todos
            if (!todo.done) todoList.todos.push(todo);
        });
    };
});