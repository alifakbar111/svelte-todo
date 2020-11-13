<script lang="ts">
  import { Alert } from "./components";
  import { Todos } from "./pages";

  import { todos } from "./components/stores";
</script>

<Alert />
<Todos bind:todos={$todos} />
