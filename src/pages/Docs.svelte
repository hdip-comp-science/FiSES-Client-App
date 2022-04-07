<script>
  import FileUpload from "../components/FileUpload.svelte";
  import DocumentList from "../components/DocumentList.svelte";
  import {navBar, mainBar, subTitle, title} from "../store";
  import AuthGuard from '../components/AuthGuard.svelte';
  import RoleGuard from '../components/RoleGuard.svelte';
  import NotAuthorised from '../components/NotAuthorised.svelte';
  title.set("Field Service Engineering Solutions");
  subTitle.set("All Current Documents");
  navBar.set({
    bar: mainBar
  });
</script>


<AuthGuard manual={true}>
  <div slot="not_authed">
    <NotAuthorised />
  </div>
  <div slot="authed">
    <div class="uk-text-center" uk-grid>
      <div class="uk-flex uk-flex-column uk-width-1-1">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-1-1 ">
          <DocumentList/>
        </div>
        <div class="uk-card uk-card-default uk-card-body">
          <RoleGuard roles=app-admin>
            <FileUpload />
          </RoleGuard>
        </div> 
      </div>
    </div>
  </div>
</AuthGuard>

<!-- <div slot="authed" class="uk-text-center" uk-grid>
  <div class="uk-flex uk-flex-column uk-width-1-1">
    <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-1-1 ">
      <DocumentList/>
    </div>
    <div class="uk-card uk-card-default uk-card-body">
      
      <RoleGuard roles=app-admin>
        <FileUpload />
      </RoleGuard>
    </div>  

    <AuthGuard manual="{true}">
      <h1 slot="not_authed">This content is only visible to authenticated users :(</h1>
      <h1 slot="authed">Success, you are authenticated.</h1>
    </AuthGuard>
    
  
  </div>
</div> -->
