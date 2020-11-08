<script>
  let todos = [
    { id: 1, name: "Create a svelte started App", completed: true },
    { id: 2, name: "Create your first component", completed: true },
    { id: 3, name: "Complete the rest of the tutorial", completed: false },
    { id: 4, name: "Svelte tutorial from MDN Mozilla", completed: false },
  ];
  let totalTodos = todos.length;
  let completedTodos = todos.filter((todo) => todo.completed).length;
</script>

<section class="section">
  <div class="container">
    <div class="columns is-mobile is-centered">
      <div class="column is-three-fifths">
        <!-- NewTodo -->
        <h2 class="is-size-2">What needs to be done?</h2>
        <div class="field">
          <div class="control"><textarea class="textarea" /></div>
        </div>
        <div class="field">
          <button class="button is-fullwidth is-link">Add</button>
        </div>

        <!-- Filter -->
        <div class="columns">
          <div class="column">
            <a href class="button is-dark is-fullwidth ">All</a>
          </div>
          <div class="column">
            <a href class="button is-dark  is-fullwidth ">Active</a>
          </div>
          <div class="column">
            <a href class="button is-dark is-fullwidth ">Completed</a>
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
          {#each todos as todo, index (todo.id)}
            <br />
            <li>
              <label class="checkbox">
                <input type="checkbox" checked={todo.completed} />
                {index},
                {todo.name}
                (id:
                {todo.id})
              </label>
              <div class="field">
                <div class="columns">
                  <div class="column">
                    <a href class="button is-fullwidth">Edit</a>
                  </div>
                  <div class="column">
                    <a href class="button is-danger is-fullwidth">Delete</a>
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
