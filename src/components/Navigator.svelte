<script>
  import Title from "./Title.svelte";
</script>

<div class="uk-flex uk-flex-center uk-flex-middle uk-text-center uk-grid-small" uk-grid>
  <Title title="Field Services Engineering Solutions" subTitle="Welcome" />
  <div>
    <ul class="uk-iconnav uk-margin-left uk-margin-right">
      <a href="/#/documents" class="uk-card uk-card-small uk-card-hover uk-padding-small">
        <i class="fas fa-file" style="color:rgb(152, 37, 37)" title="Documents" uk-tooltip> Documents</i>
      </a>
      <a href="/#/contact" class="uk-card uk-card-small uk-card-hover uk-padding-small">
        <i class="fas fa-info-circle" style="color:rgb(152, 37, 37)" title="ContactUs" uk-tooltip> contactUs</i>
      </a>
    </ul>
  </div>
</div>
