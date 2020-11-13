<script lang="ts">
  import {
    FilterButton,
    Todo,
    MoreAction,
    NewTodo,
    TodoStatus,
  } from "../../components";
  import { alert } from "../../stores";
  import { Filter } from "../../types/filter.enum";
  import type { TodoType } from "../../types/todo.type";

  export let todos: TodoType[] = [];
  let filter: Filter = Filter.ALL;
  let todoStatus: TodoStatus;

  $: newTodoId = todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1;

  function addTodo(name: string) {
    todos = [...todos, { id: newTodoId, name, completed: false }];
    $alert = `Todo '${name}' has been added`;
  }

  function removeTodo(todo: TodoType) {
    todos = todos.filter((t) => t.id !== todo.id);
    todoStatus.focus();
    $alert = `Todo '${todo.name}' has been deleted`;
  }

  function updateTodo(todo: TodoType) {
    const i = todos.findIndex((t) => t.id === todo.id);
    if (todos[i].name !== todo.name) {
      $alert = `Todo '${todos[i].name}' has been renamed to '${todo.name}'`;
    }
    if (todos[i].completed !== todo.completed) {
      $alert = `Todo '${todos[i].name}' marked as ${
        todo.completed ? "completed" : "active"
      }`;
    }
    todos[i] = { ...todos[i], ...todo };
  }

  const filterTodos = (filter: Filter, todos: TodoType[]) =>
    filter === Filter.ACTIVE
      ? todos.filter((t) => !t.completed)
      : filter === Filter.COMPLETED
      ? todos.filter((t) => t.completed)
      : todos;

  $: {
    if (filter === Filter.ALL) {
      $alert = "Browsing all todos";
    } else if (filter === Filter.ACTIVE) {
      $alert = "Browsing active todos";
    } else if (filter === Filter.COMPLETED) {
      $alert = "Browsing completed todos";
    }
  }

  const checkAllTodos = (completed: boolean) => {
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
        <FilterButton bind:filter />

        <!-- TodosStatus -->
        <TodoStatus bind:this={todoStatus} {todos} />

        <!-- Todos -->
        <ul>
          {#each filterTodos(filter, todos) as todo (todo.id)}
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
