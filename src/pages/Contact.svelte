<script>
  import ContactForm from "../components/ContactForm.svelte";
  import {navBar, mainBar, subTitle, title} from "../stores";

  title.set("Field Service Engineering Solutions");
  subTitle.set("Contact Us");
  navBar.set({
    bar: mainBar
  });
</script>


<div class="uk-child-width-expand@s" uk-grid>
  <div class="uk-grid-item-match">
      <h3>Heading</h3>
      <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
   </div>
  <div>
      <ContactForm />
  </div>
</div>
