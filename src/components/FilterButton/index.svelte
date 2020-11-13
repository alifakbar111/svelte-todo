<script lang="ts">
  export let filterAll = "all";
</script>

<div class="columns">
  <div class="column">
    <button
      class="button is-dark is-fullwidth"
      class:is-active={filterAll === 'all'}
      aria-pressed={filterAll === 'all'}
      on:click={() => (filterAll = 'all')}>All</button>
  </div>
  <div class="column">
    <button
      class="button is-dark is-fullwidth"
      class:is-active={filterAll === 'active'}
      aria-pressed={filterAll === 'active'}
      on:click={() => (filterAll = 'active')}>Active</button>
  </div>
  <div class="column">
    <button
      class="button is-dark is-fullwidth"
      class:is-active={filterAll === 'completed'}
      aria-pressed={filterAll === 'completed'}
      on:click={() => (filterAll = 'completed')}>Completed</button>
  </div>
</div>
