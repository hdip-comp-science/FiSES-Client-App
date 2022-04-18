<script>
  import AuthGuard from '../components/AuthGuard.svelte';
  import RoleGuard from '../components/RoleGuard.svelte';
  import { link } from "svelte-spa-router";


</script>
<AuthGuard  manual="{true}">
  <h1 slot="not_authed">This content is only visible to authenticated users</h1>
  <h1 slot="authed">Success, you are authenticated.</h1>
</AuthGuard>
<RoleGuard roles=user,app-admin>
  <h2>You have user and admin roles!</h2>
</RoleGuard>

<RoleGuard roles=app-customer>
  <h2>You have customer role!</h2>
</RoleGuard>


<RoleGuard manual={true} roles=app-admin>
  <h2 slot=role>You have admin role!</h2>
  <h2 slot=no_role>You don't have admin role!</h2>
</RoleGuard>

<RoleGuard manual={true} roles=app-engineer>
  <h2 slot=role>You have an engineering role!</h2>
</RoleGuard>

<div class="uk-child-width-expand@s uk-text-center" uk-grid>
    <a href="http://localhost:3000/" use:link>
        <h2>Return to home</h2>
    </a>
</div>
