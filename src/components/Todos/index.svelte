<script>
  import {
    FilterButton,
    Todo,
    MoreAction,
    NewTodo,
    TodoStatus,
  } from "../../components";

  export let todos = [];
  let newTodoName = "";
  let newTodoId;
  let filterAll;
  let todoStatus;
  
  $: newTodoId = todos.length ? Math.max(...todos.map((t) => t.id)) + 1 : 1;

  function removeTodo(todo) {
    todos = todos.filter((t) => t.id !== todo.id);
    todoStatus.focus();
  }
  function addTodo(name) {
    todos = [...todos, { id: newTodoId, name, completed: false }];
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

  const checkAllTodos = (completed) => {
    todos = todos.map((t) => {
      return { ...t, completed: completed };
    });
  };

  const removeCompletedTodos = () =>
    (todos = todos.filter((t) => !t.completed));
</script>

<section class="section">
  <div class="container">
    <div class="columns is-mobile is-centered">
      <div class="column is-three-fifths">
        <!-- NewTodo -->
        <NewTodo autofocus on:addTodo={(e) => addTodo(e.detail)} />
        <br />
        <!-- Filter -->
        <FilterButton bind:filterAll />

        <!-- TodosStatus -->
        <TodoStatus bind:this={todoStatus} {todos} />

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
        <hr />
        <MoreAction
          {todos}
          on:checkAll={(e) => checkAllTodos(e.detail)}
          on:removeCompleted={removeCompletedTodos} />
      </div>
    </div>
  </div>
</section>
