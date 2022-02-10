<script>
  import {title, subTitle, navBar, welcomeBar} from "../stores"
  import fises from "/src/assets/fises.png";
  title.set("Field Service Engineering Solutions");
  subTitle.set("Sign up or Log in");

  navBar.set({
    bar: welcomeBar
  });
</script>

<div uk-grid>
  <div class="uk-width-1-2@m uk-text-center">
    <img width="200" src="{fises}" alt="homer">
    <p> Lets do this thing </p>
  </div>
  <div class="uk-width-1-2@m uk-text-left">
    <div class="uk-width-2xlarge ">
      <h3 class="uk-heading-small uk-flex"> Lorem Ipsum  </h3>
      <p> Our services include Cleanroom Validation, Calibrations (on and offsite), Equipment Sales and Hire. EMS’s customer focus approach ensures innovative solutions are always achieved. <br>

        Our Company offers the latest innovative range of measurement and environmental monitoring products in addition to end-to-end services including onsite calibration across a range of industries.</p>
    </div>
  </div>
</div>
