<script>
  import { todos } from "./components/stores";
  import { Todos, Alert } from "./components";
</script>

<Alert />
<Todos bind:todos={$todos} />
