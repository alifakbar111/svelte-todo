"use strict";
exports.__esModule = true;
exports.todos = exports.alert = void 0;
var store_1 = require("svelte/store");
exports.alert = store_1.writable("Welcome to the To-Do-List App");
var initialTodos = [];
exports.todos = store_1.writable(initialTodos);
// export const todos = localStore<TodoType[]>("mdn-svelte-todo", initialTodos);
