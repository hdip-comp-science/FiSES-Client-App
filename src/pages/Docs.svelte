<script>
  import FileUpload from "../components/FileUpload.svelte";
  import DocumentList from "../components/DocumentList.svelte";
  import {navBar, mainBar, subTitle, title} from "../stores"

  title.set("Field Service Engineering Solutions");
  subTitle.set("All Current Documents");
  navBar.set({
    bar: mainBar
  });
</script>

<div class="uk-text-center" uk-grid>
  <div class="uk-flex uk-flex-column uk-width-1-1">
    <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-1-1 ">
      <DocumentList/>
    </div>
    <div class="uk-card uk-card-default uk-card-body">
      <FileUpload />
    </div>   
  </div>
</div>
