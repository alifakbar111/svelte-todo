<script>
  export let todos = [];
  let newTodoName = "";
  let newTodoId;
  $: totalTodos = todos.length;
  $: completedTodos = todos.filter((todo) => todo.completed).length;
  $: {
    if (totalTodos === 0) {
      newTodoId = 1;
    } else {
      newTodoId = Math.max(...todos.map((t) => t.id)) + 1;
    }
  }
  function removeTodo(todo) {
    todos = todos.filter((t) => t.id !== todo.id);
  }
  function addTodo() {
    todos = [...todos, { id: newTodoId, name: newTodoName, completed: false }];
    newTodoName = "";
  }
  let filterAll = "all";
  const filterTodos = (filterAll, todos) =>
    filterAll === "active"
      ? todos.filter((t) => !t.completed)
      : filterAll === "completed"
      ? todos.filter((t) => t.completed)
      : todos;
</script>

<section class="section">
  <div class="container">
    <div class="columns is-mobile is-centered">
      <div class="column is-three-fifths">
        <!-- NewTodo -->
        <h2 class="is-size-2">What needs to be done?</h2>
        <div class="field">
          <div class="control">
            <textarea
              class="textarea"
              bind:value={newTodoName}
              autocomplete="off" />
          </div>
        </div>
        <div class="field">
          <button
            class="button is-fullwidth is-link"
            on:click={addTodo}>Add</button>
        </div>

        <!-- Filter -->
        <div class="columns">
          <div class="column">
            <button
              class="button is-dark is-fullwidth"
              class:is-active={filterAll === 'all'}
              aria-pressed={filterAll === 'all'}
              on:click={() => (filterAll = 'all')}>All</button>
          </div>
          <div class="column">
            <button
              class="button is-dark is-fullwidth"
              class:is-active={filterAll === 'active'}
              aria-pressed={filterAll === 'active'}
              on:click={() => (filterAll = 'active')}>Active</button>
          </div>
          <div class="column">
            <button
              class="button is-dark is-fullwidth"
              class:is-active={filterAll === 'completed'}
              aria-pressed={filterAll === 'completed'}
              on:click={() => (filterAll = 'completed')}>Completed</button>
          </div>
        </div>

        <!-- TodosStatus -->
        <h3 class="is-size-3">
          {completedTodos}
          out of
          {totalTodos}
          items completed
        </h3>

        <!-- Todos -->
        <ul>
          {#each filterTodos(filterAll, todos) as todo (todo.id)}
            <br />
            <li>
              <label class="checkbox">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  on:click={() => (todo.completed = !todo.completed)} />
                {todo.name}
                (id:
                {todo.id})
              </label>
              <div class="field">
                <div class="columns">
                  <div class="column">
                    <button class="button is-fullwidth">Edit</button>
                  </div>
                  <div class="column">
                    <button
                      class="button is-danger is-fullwidth"
                      on:click={() => removeTodo(todo)}>Delete</button>
                  </div>
                </div>
              </div>
            </li>
          {:else}
            <li>
              <h5 class="is-size-">Nothing Todo Here</h5>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</section>
