<!-- This component will check whether the user has right roles -->
<script>
    import { onMount } from "svelte";
    import { authStore } from '../store';
    let auth;
    let unsub;

    let initialized;
    $: if(auth) {
        auth.initialized.subscribe(i => {
            initialized = i;
        });
    };
    $: user = (initialized) ? auth.buildUser() : null;
    let roles;
    let actualRoles = roles.split(",");
    let manual = false;
    export {
        roles,
        manual
    }

    onMount(() => {
        unsub = authStore.subscribe((value) => {
            auth = value;
        });
    });
</script>

{#if user}
    {#if user.hasRole(actualRoles) && manual}
        <slot name="role"></slot>
    {:else if !user.hasRole(actualRoles) && manual}
        <slot name="no_role"></slot>
    {:else if user.hasRole(actualRoles) && !manual}
        <slot></slot>
    {/if}
{/if}
