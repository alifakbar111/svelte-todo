import { writable } from "svelte/store";
import { localStore } from "../components/localStore";

export let visible = writable(false);
export const alert = writable("Welcome to the To-Do-List App");
const initialTodos = [
  { id: 1, name: "Visit MDN web docs", completed: true },
  { id: 2, name: "Complete the Svelte Tutorial", completed: false },
];
// export const todos = writable(initialTodos);
export const todos = localStore("mdn-svelte-todo", initialTodos);
