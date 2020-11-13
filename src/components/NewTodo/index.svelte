<script lang="ts">
  import { onMount, createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let autofocus = false;
  let name = "";
  let nameEl;

  onMount(() => autofocus && nameEl.focus());

  const addTodo = () => {
    dispatch("addTodo", name);
    name = "";
    nameEl.focus();
  };
  const onCancel = () => {
    name = "";
    nameEl.focus();
  };
</script>

<form
  on:submit|preventDefault={addTodo}
  on:keydown={(e) => e.key === 'Escape' && onCancel()}>
  <h2 class="is-size-2">What needs to be done?</h2>
  <div class="field">
    <div class="control">
      <textarea
        class="textarea"
        bind:this={nameEl}
        bind:value={name}
        autocomplete="off" />
    </div>
  </div>
  <div class="field">
    <button
      type="submit"
      class="button is-fullwidth is-link"
      on:click={addTodo}
      disabled={!name}>Add</button>
  </div>
</form>
