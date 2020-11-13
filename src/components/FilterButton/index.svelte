<script lang="ts">
  import { Filter } from "../../types/filter.enum";
  export let filter: Filter = Filter.ALL;
</script>

<div class="columns">
  <div class="column">
    <button
      class="button is-dark is-fullwidth"
      class:is-active={filter === Filter.ALL}
      aria-pressed={filter === Filter.ALL}
      on:click={() => (filter = Filter.ALL)}>All</button>
  </div>
  <div class="column">
    <button
      class="button is-dark is-fullwidth"
      class:is-active={filter === Filter.ACTIVE}
      aria-pressed={filter === Filter.ACTIVE}
      on:click={() => (filter = Filter.ACTIVE)}>Active</button>
  </div>
  <div class="column">
    <button
      class="button is-dark is-fullwidth"
      class:is-active={filter === Filter.COMPLETED}
      aria-pressed={filter === Filter.COMPLETED}
      on:click={() => (filter = Filter.COMPLETED)}>Completed</button>
  </div>
</div>
