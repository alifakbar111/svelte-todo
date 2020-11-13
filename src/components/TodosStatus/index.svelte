<script lang="ts">
  import type { TodoType } from "../../types/todo.type";
  export let todos: TodoType[];
  let headingEl: HTMLElement;

  $: totalTodos = todos.length;
  $: completedTodos = todos.filter((todo) => todo.completed).length;
  export function focus() {
    headingEl.focus();
  }
</script>

<h3 class="is-size-3" bind:this={headingEl} tabindex={-1}>
  {completedTodos}
  out of
  {totalTodos}
  items completed
</h3>
