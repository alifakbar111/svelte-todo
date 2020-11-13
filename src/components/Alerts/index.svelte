<script lang="ts">
  import { alert } from "../../stores";
  import { onDestroy } from "svelte";

  export let ms = 3000;
  let visible: boolean;
  let timeout: number;

  const onMessageChange = (message: string, ms: number) => {
    clearTimeout(timeout);
    if (!message) {
      visible = false;
    } else {
      visible = true;
      if (ms > 0) {
        timeout = setTimeout(() => (visible = false), ms);
      }
    }
  };
  $: onMessageChange($alert, ms);
  onDestroy(() => clearTimeout(timeout));
</script>

{#if $alert}
  <div class="modal" class:is-active={visible}>
    <div class="modal-background" on:click={() => (visible = false)} />
    <div class="notification is-primary">
      <button
        class="delete"
        aria-label="close"
        on:click={() => (visible = false)} />
      <strong>{$alert}</strong>
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      on:click={() => (visible = false)} />
  </div>
{/if}
