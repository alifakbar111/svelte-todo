<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let todos;
  let completed = true;

  const checkAll = () => {
    dispatch("checkAll", completed);
    completed = !completed;
  };
  const removeCompleted = () => dispatch("removeCompleted");
  $: completedTodos = todos.filter((t) => t.completed).length;
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
