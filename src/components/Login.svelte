<script>
  import { onMount } from 'svelte';
  import { authStore } from '../store';
  import AuthGuard from '../components/AuthGuard.svelte';
  import { userInfo } from '../store';
  let unsub;
  let auth;
  onMount(() => {
      unsub = authStore.subscribe(
          (a) => {
              auth = a;
          }
      );
  });

  /*
    $ is a reactive declaration in Svelte. It's valid label statement in JavaScript, which Svelte interprets to mean 're-run this code whenever any of the referenced values change' 
  */
  $: if(auth){ 
      auth.checkParams();
  };
  function login(){
      if(auth){
          auth.login();
      }
  }

  function logout(){
      if(auth){
          auth.logout();
      }
  }
</script>

<div class="uk-width-2@m uk-text-center">
  {#if auth}
    <AuthGuard manual={true}>
        <button class="uk-button-primary uk-button-large uk-margin-top" slot="not_authed" on:click={login}>Login</button>
        <button class="uk-button-primary uk-button-large uk-margin-top" slot="authed" on:click={logout}>Logout</button>
    </AuthGuard>
  {/if}
</div>
<div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
  <div class="uk-flex-last@s uk-card-media-right uk-cover-container">
      <img src="/fises.png" alt="img" >
      <pre>{JSON.stringify($userInfo, null,2)}</pre>
      <canvas width="600" height="300"></canvas>
      
  </div>
  <div>
      <div class="uk-card-body">
        {#if auth}
        <AuthGuard manual={true}>
          <h3 class="uk-card-title" slot="not_authed" >Welcome </h3>
        
          <h3 class="uk-card-title" slot="authed" >Home</h3>
        </AuthGuard>        
        {/if}
          
        <p> Our services include Cleanroom Validation, Calibrations (on and offsite), Equipment Sales and Hire. FiSES’s customer focus approach ensures innovative solutions are always achieved. <br>

        Our Company offers the latest innovative range of measurement and environmental monitoring products in addition to end-to-end services including onsite calibration across a range of industries.</p>
      </div>
  </div>
</div>
