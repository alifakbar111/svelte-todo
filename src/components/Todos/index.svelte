<script>
  import {
    FilterButton,
    Todo,
    MoreAction,
    NewTodo,
    TodoStatus,
  } from "../../components";
  import { alert } from "../stores";

  export let todos = [];
  let newTodoId;
  let filterAll = "all";
  let todoStatus;

  $: newTodoId = todos.length ? Math.max(...todos.map((t) => t.id)) + 1 : 1;

  function removeTodo(todo) {
    todos = todos.filter((t) => t.id !== todo.id);
    todoStatus.focus();
    $alert = `Todo '${todo.name}' has been deleted`;
  }

  function addTodo(name) {
    todos = [...todos, { id: newTodoId, name, completed: false }];
    $alert = `Todo '${name}' has been added`;
  }

  function updateTodo(todo) {
    const i = todos.findIndex((t) => t.id === todo.id);
    if (todos[i].name !== todo.name) {
      $alert = `Todo  '${todo[i].name}' has been renamed to '${todo.name}'`;
    }
    if (todos[i].completed !== todo.completed) {
      $alert = `Todo '${todo[i].name}' marked as ${
        todo.completed ? "completed" : "active"
      }`;
    }
    todos[i] = { ...todos[i], ...todo };
  }

  $: {
    if (filterAll === "all") {
      $alert = "Browsing all todos";
    } else if (filterAll === "active") {
      $alert = "Browsing active todos";
    } else if (filterAll === "completed") {
      $alert = "Browsing completed todos";
    }
  }

  const filterTodos = (filterAll, todos) =>
    filterAll === "active"
      ? todos.filter((t) => !t.completed)
      : filterAll === "completed"
      ? todos.filter((t) => t.completed)
      : todos;

  const checkAllTodos = (completed) => {
    todos = todos.map((t) => ({ ...t, completed }));
    $alert = `${completed ? "Checked" : "Unchecked"} ${todos.length} todos`;
  };

  const removeCompletedTodos = () => {
    $alert = `Removed ${todos.filter((t) => t.completed).length} todos`;
    todos = todos.filter((t) => !t.completed);
  };
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
