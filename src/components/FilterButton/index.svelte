<script lang="ts">
  import { Filter } from "../../types/filter.enum";
  export let filterAll: Filter = Filter.ALL;
</script>

<div class="columns">
  <div class="column">
    <button
      class="button is-dark is-fullwidth"
      class:is-active={filterAll === Filter.ALL}
      aria-pressed={filterAll === Filter.ALL}
      on:click={() => (filterAll = Filter.ALL)}>All</button>
  </div>
  <div class="column">
    <button
      class="button is-dark is-fullwidth"
      class:is-active={filterAll === Filter.ACTIVE}
      aria-pressed={filterAll === Filter.ACTIVE}
      on:click={() => (filterAll = Filter.ACTIVE)}>Active</button>
  </div>
  <div class="column">
    <button
      class="button is-dark is-fullwidth"
      class:is-active={filterAll === Filter.COMPLETED}
      aria-pressed={filterAll === Filter.COMPLETED}
      on:click={() => (filterAll = Filter.COMPLETED)}>Completed</button>
  </div>
</div>
