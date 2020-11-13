<script lang="ts">
  import type { TodoType } from "../../types/todo.type";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let todos: TodoType[];
  let completed = true;
  let completedTodos: number;

  const checkAll = () => {
    dispatch("checkAll", completed);
    completed = !completed;
  };
  const removeCompleted = () => dispatch("removeCompleted");
  $: completedTodos = todos.filter((t: TodoType) => t.completed).length;
</script>

<div class="field">
  <div class="columns">
    <div class="column">
      <button
        class="button is-fullwidth is-warning"
        disabled={todos.length === 0}
        on:click={checkAll}>{completed ? 'Check' : 'Uncheck'}
        all</button>
    </div>
    <div class="column">
      <button
        class="button is-fullwidth is-warning"
        disabled={completedTodos === 0}
        on:click={removeCompleted}>Remove Completed</button>
    </div>
  </div>
</div>
