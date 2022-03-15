<script lang="ts">
	// import Auth from "../components/Auth.svelte";
	import {  onMount } from "svelte";
  import { authStore } from '../store';
	import { AuthService } from "../auth-service";
	import Login from '../components/Login.svelte';
	
	let unsub;
	let auth;

	onMount(() => {
		authStore.set( new AuthService("/keycloak.json"));
	});	

</script>

<!-- <Auth /> -->

<Login />
