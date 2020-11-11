<script>
  import { createEventDispatcher, tick } from "svelte";
  import { selectOnFocus } from "../actions";
  export let todo;
  let editing = false;
  let name = todo.name;
  let nameEl;
  let editButtonPressed = false;

  const dispatch = createEventDispatcher();

  function update(updateTodo) {
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
  const focusOnInit = (node) =>
    node && typeof node.focus === "function" && node.focus();
  const focusEditButton = (node) => editButtonPressed && node.focus();
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
          bind:this={nameEl}
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
      checked={todo.completed}
      on:click={() => (todo.completed = !todo.completed)} />
    {todo.name}
    (id:
    {todo.id})
  </label>
  <div class="field">
    <div class="columns">
      <div class="column">
        <button
          class="button is-fullwidth"
          use:focusEditButton
          on:click={onEdit}>Edit</button>
      </div>
      <div class="column">
        <button
          class="button is-danger is-fullwidth"
          on:click={() => dispatch('remove', todo)}>Delete</button>
      </div>
    </div>
  </div>
{/if}
