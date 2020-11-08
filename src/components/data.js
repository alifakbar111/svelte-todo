import { writable } from "svelte/store";

let todosData = writable([
  { id: 1, name: "Create a svelte started App", completed: true },
  { id: 2, name: "Create your first component", completed: false },
  { id: 3, name: "Complete the rest of the tutorial", completed: false },
]);

export { todosData };
