<script>
  import { FilterButton, Todo } from "../../components";

  export let todos = [];
  let newTodoName = "";
  let newTodoId;
  let filterAll;

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
  function updateTodo(todo) {
    const i = todos.findIndex((t) => t.id === todo.id);
    todos[i] = { ...todos[i], ...todo };
  }
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
            on:click={addTodo}
            disabled={!newTodoName}>Add</button>
        </div>

        <!-- Filter -->
        <FilterButton bind:filterAll />

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
              <Todo
                {todo}
                on:remove={(e) => removeTodo(e.detail)}
                on:update={(e) => updateTodo(e.detail)} />
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
