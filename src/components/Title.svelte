<script>
  import {title, subTitle} from "../store"
</script>

<div class="uk-width-2-3@m  uk-card uk-card-default uk-padding-small uk-visible@m">
  <div class="uk-grid">
    <div class="uk-width-1-6@m">
      <a href="/"> <img width="200" src="/fises.png" alt="company-logo">
    </div>
    <div class="uk-width-expand@m uk-text-left">
      <div class="title">
        {$title}
      </div>
      <div class="uk-text-muted uk-text-small">
        {$subTitle}
      </div>
    </div>
    <div class="uk-card uk-card-small uk-text-center uk-padding-remove">
      <a target="_blank" href="https://github.com/hdip-comp-science/FiSES-Client-App">
        <div>
          <i class="fab fa-github-square fa-3x" style="color:rgb(95, 96, 173)" title="Source repo" uk-tooltip="Source repo"></i>
        </div>
        <div class="uk-width-expand@m uk-text-left">
          <div class="uk-text-muted uk-text-center" style="font-size:xx-small">FiSES 0.1</div>
        </div>
      </a>
    </div>
  </div>
</div>
