<script>
	import { userInfo } from '../store';
	import {title, subTitle, navBar, welcomeBar, mainBar} from "../store"
  // import fises from "/fises.png";
  title.set("Field Service Engineering Solutions");
 

  navBar.set({
    bar: welcomeBar
  });

	import Keycloak from "keycloak-js";
	let kc = new Keycloak("/keycloak.json");

	let logged_in = null;


	kc.init({ onLoad: "check-sso" }).then((auth) => {
		
		logged_in = auth;
		if (auth) {
			logged_in = true;

			localStorage.setItem("svelte-token", kc.token);
    	localStorage.setItem("svelte-refresh-token", kc.refreshToken);

			setTimeout(() => {
        kc.updateToken(70).success((refreshed) => {
            if (refreshed) {
                console.debug('Token refreshed' + refreshed);
								console.info('Token refreshed' + refreshed);
            } else {
                console.warn('Token not refreshed, valid for '
                    + Math.round(kc.tokenParsed.exp + kc.timeSkew - new Date().getTime() / 1000) + ' seconds');
            }
        }).error(() => {
            console.error('Failed to refresh token');
        });
    	}, 60000)
			console.info("Authenticated");

			subTitle.set(`Currently Logged in as: ${kc.tokenParsed?.preferred_username} `);
			navBar.set({
				bar: mainBar
			});

			kc.loadUserInfo().then((user) => {
				user.token = kc.idToken
				userInfo.set(user)
			});
		} else {
			subTitle.set("Login");
			navBar.set({
				bar: welcomeBar
			});
			console.info("Not Authenticated");
		}
	});

</script>

<div uk-grid>
  <div class="uk-width-1-2@m uk-text-left">
		{#if logged_in && $userInfo.preferred_username}
		<p> You are logged in as {$userInfo.preferred_username} </p>

		<pre>{JSON.stringify($userInfo, null,2)}</pre>

		<button
			on:click={() => {
				kc.logout();
			}}>Logout</button
		>

		{/if}

		{#if logged_in == false}
			You are not logged in
			<button
				on:click={() => {
					kc.login();
				}}>Login</button
			>
		{/if}
		<link rel='icon' type='image/png' href='/favicon.png'>
    <!-- <img width="200" src="{fises}" alt="company-logo"> -->
  </div>
  <div class="uk-width-1-2@m uk-text-left">
    <div class="uk-width-2xlarge ">
      <h3 class="uk-heading-small uk-flex"> Welcome </h3>
      <p> Our services include Cleanroom Validation, Calibrations (on and offsite), Equipment Sales and Hire. EMS’s customer focus approach ensures innovative solutions are always achieved. <br>

        Our Company offers the latest innovative range of measurement and environmental monitoring products in addition to end-to-end services including onsite calibration across a range of industries.</p>
    </div>
  </div>
</div>
