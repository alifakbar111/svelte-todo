<script>
</script>

<section class="section">
  <div class="container">
    <div class="columns is-mobile is-centered">
      <div class="column is-three-fifths">
        <!-- NewTodo -->
        <h2 class="is-size-2">What needs to be done?</h2>
        <div class="field">
          <div class="control"><textarea class="textarea" /></div>
        </div>
        <div class="field">
          <button class="button is-fullwidth is-link">Add</button>
        </div>

        <!-- Filter -->
        <div class="columns">
          <div class="column">
            <a href class="button is-dark is-fullwidth ">All</a>
          </div>
          <div class="column">
            <a href class="button is-dark  is-fullwidth ">Active</a>
          </div>
          <div class="column">
            <a href class="button is-dark is-fullwidth ">Completed</a>
          </div>
        </div>

        <!-- TodosStatus -->
        <h3 class="is-size-3">2 out of 3 items completed</h3>

        <!-- Todos -->

        <ul role="list">
          <li>
            <!-- todo-1 (editing mode) -->
            <div class="field">
              <h5 class="is-size-5">
                New name for 'Create a Svelte starter app'
              </h5>
              <input type="text" class="input" autocomplete="off" />
            </div>
            <div class="field">
              <div class="columns">
                <div class="column">
                  <a href class="button is-fullwidth">Cancle</a>
                </div>
                <div class="column">
                  <a href class="button is-primary is-fullwidth">Save</a>
                </div>
              </div>
            </div>
          </li>
          <br />
          <li>
            <!-- todo-2 -->
            <div class="field">
              <label class="checkbox">
                <input type="checkbox" />
                Create your first component
              </label>
              <div class="field">
                <div class="columns">
                  <div class="column">
                    <a href class="button is-fullwidth">Edit</a>
                  </div>
                  <div class="column">
                    <a href class="button is-danger is-fullwidth">Delete</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <br />
          <li>
            <!-- todo-3 -->
            <div class="field">
              <label class="checkbox">
                <input type="checkbox" />
                Complete the rest of the tutorial
              </label>
              <div class="field">
                <div class="columns">
                  <div class="column">
                    <a href class="button is-fullwidth">Edit</a>
                  </div>
                  <div class="column">
                    <a href class="button is-danger is-fullwidth">Delete</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
