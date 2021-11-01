
import './styles.css';

import { Todo, TodoList } from './classes'; // Busca index.js por defecto.
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach( crearTodoHtml );
// Es lo mismo que:
//todoList.todos.forEach( todo => crearTodoHtml(todo) );

todoList.todos[0].imprimirClase();

console.log('todos', todoList.Todo);
