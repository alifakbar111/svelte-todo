<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  import { selectOnFocus } from "../../actions";
  import type { TodoType } from "../../types/todo.type";

  export let todo: TodoType;
  let editing = false;
  let editButtonPressed = false;
  let name = todo.name;

  function update(updateTodo: Partial<TodoType>) {
    todo = { ...todo, ...updateTodo };
    dispatch("update", todo);
  }

  function onCancel() {
    name = todo.name;
    editing = false;
  }
  function onSave() {
    update({ name: name });
    editing = false;
  }
  function onRemove() {
    dispatch("remove", todo);
  }
  function onEdit() {
    editButtonPressed = true;
    editing = true;
  }
  function onToggle() {
    update({ completed: !todo.completed });
  }
  const focusOnInit = (node: HTMLElement) =>
    node && typeof node.focus === "function" && node.focus();
  const focusEditButton = (node: HTMLElement) =>
    editButtonPressed && node.focus();
</script>

{#if editing}
  <form
    on:submit|preventDefault={onSave}
    on:keydown={(e) => e.key === 'Escape' && onCancel()}>
    <div class="field">
      <label for="todo-{todo.id}" class="label">New name for '{todo.name}'</label>
      <div class="control">
        <input
          class="input"
          id="todo-{todo.id}"
          type="text"
          bind:value={name}
          use:selectOnFocus
          use:focusOnInit
          autoComplete="off" />
      </div>
    </div>
    <div class="field">
      <div class="columns">
        <div class="column">
          <button
            type="button"
            class="button is-fullwidth"
            on:click={onCancel}>Cancel</button>
        </div>
        <div class="column">
          <button
            class="button is-link is-fullwidth"
            type="submit"
            disabled={!name}>Save</button>
        </div>
      </div>
    </div>
  </form>
{:else}
  <label class="checkbox">
    <input
      type="checkbox"
      id="todo-{todo.id}"
      checked={todo.completed}
      on:click={onToggle} />
    {todo.name}
  </label>
  <div class="field">
    <div class="columns">
      <div class="column">
        <button
          type="button"
          class="button is-fullwidth"
          use:focusEditButton
          on:click={onEdit}>Edit</button>
      </div>
      <div class="column">
        <button
          type="button"
          class="button is-danger is-fullwidth"
          on:click={onRemove}>Delete</button>
      </div>
    </div>
  </div>
{/if}
