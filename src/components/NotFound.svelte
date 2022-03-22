<script>
  import { link } from "svelte-spa-router";

</script>


<div class="uk-child-width-expand@s uk-text-center" uk-grid>
  <div class="uk-card uk-card-default uk-card-body">
    <h1 class="uk-text-uppercase">We are sorry!</h1>
    <p>The page you are looking for does not exist.</p>
    <img src="/404.jpg" alt="img">
    <a href="/" use:link>
        <h2>Take me home →</h2>
    </a>
  </div>
</div>
