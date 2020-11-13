"use strict";
exports.__esModule = true;
exports.todos = exports.alert = exports.visible = void 0;
var store_1 = require("svelte/store");
var localStore_1 = require("./localStore");
exports.visible = store_1.writable(false);
exports.alert = store_1.writable("Welcome to the To-Do-List App");
var initialTodos = [
    { id: 1, name: "Visit MDN web docs", completed: true },
    { id: 2, name: "Complete the Svelte Tutorial", completed: false },
];
// export const todos = writable(initialTodos);
exports.todos = localStore_1.localStore("mdn-svelte-todo", initialTodos);
