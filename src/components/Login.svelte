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



<div uk-grid>

  <div class="uk-width-1-2@m uk-text-left">
    {#if auth}
      <AuthGuard manual="true">
          <button slot="not_authed" on:click={login}>Login</button>
          <button slot="authed" on:click={logout}>Logout</button>
      </AuthGuard>
    {/if}
		<pre>{JSON.stringify($userInfo, null,2)}</pre>
		<link rel='icon' type='image/png' href='/favicon.png'>
     <!-- <img width="200" src="{fises}" alt="company-logo">  -->
  </div>
  <div class="uk-width-1-2@m uk-text-left">
    <div class="uk-width-2xlarge ">
      <h3 class="uk-heading-small uk-flex"> Welcome </h3>
      <p> Our services include Cleanroom Validation, Calibrations (on and offsite), Equipment Sales and Hire. EMS’s customer focus approach ensures innovative solutions are always achieved. <br>

        Our Company offers the latest innovative range of measurement and environmental monitoring products in addition to end-to-end services including onsite calibration across a range of industries.</p>
    </div>
  </div>
</div>
