<script>
  import { link } from "svelte-spa-router";

</script>


<div class="uk-child-width-expand@s uk-text-center" uk-grid>
  <div class="uk-card uk-card-default uk-card-body">
    <p>Sorry, you are not authorised to view this page.</p>
    <img src="/not-authorised.png" alt="img">
    <a href="/" use:link>
        <h2>Return to Home</h2>
    </a>
  </div>
</div>
