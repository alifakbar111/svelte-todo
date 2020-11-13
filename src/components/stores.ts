import { writable } from "svelte/store";
import { localStore } from "./localStore";
import type { TodoType } from "../types/todo.type";

export let visible = writable(false);
export const alert = writable("Welcome to the To-Do-List App");
const initialTodos: TodoType[] = [
  { id: 1, name: "Visit MDN web docs", completed: true },
  { id: 2, name: "Complete the Svelte Tutorial", completed: false },
];
// export const todos = writable(initialTodos);
export const todos = localStore<TodoType[]>("mdn-svelte-todo", initialTodos);
