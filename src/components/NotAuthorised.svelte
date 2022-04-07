<script>
  import { link } from "svelte-spa-router";

</script>


<div class="uk-child-width-expand@s uk-text-center" uk-grid>
  <div class="uk-card uk-card-default uk-card-body">
    <p>Please login to view the this page.</p>
    <img src="/Please_log_in_image.png" alt="img">
    <a href="/" use:link>
        <h2>Return to Home and Login</h2>
    </a>
  </div>
</div>
