<script lang="ts">

	import { onMount } from "svelte";
  	import { authStore } from '../store';
	import { AuthService } from "../auth-service";
	import Login from '../components/Login.svelte';

	onMount(() => {
		authStore.set( new AuthService("/keycloak.json"));
	});	

</script>

<Login />
