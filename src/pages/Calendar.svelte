<script>
    import CalendarList from '../components/CalendarList.svelte';
    import {navBar, mainBar, subTitle, title} from "../store";
    import AuthGuard from '../components/AuthGuard.svelte';
    import NotAuthorised from '../components/NotAuthorised.svelte';
    import CalendarForm from '../components/CalendarForm.svelte';

    title.set("Field Service Engineering Solutions");
    subTitle.set("Calendar Events");
    navBar.set({
    bar: mainBar
    });

  </script>
  

  <AuthGuard manual={true}>
    <div slot="not_authed">
      <NotAuthorised />
    </div>
    <div slot="authed">
      <div class="uk-text-center uk-padding" uk-grid>
        <div class="uk-flex uk-flex-column uk-width-1-1">
          <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-1-1 ">
            <CalendarList/>
          </div>
        </div>
      </div>
      <div class="uk-text-left uk-padding" uk-grid>
        <div class="uk-flex uk-flex-center uk-width-1-1">
          <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-1-2 ">
            <CalendarForm/>
          </div>
        </div>
      </div>
    </div>
  </AuthGuard>
