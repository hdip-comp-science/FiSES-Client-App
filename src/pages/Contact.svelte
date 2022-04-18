<script>
    import ContactDetails from "../components/ContactDetails.svelte";
    import ContactForm from "../components/ContactForm.svelte";
    import {navBar, mainBar, subTitle, title} from "../store";

    title.set("Field Service Engineering Solutions");
    subTitle.set("Contact Us");
    navBar.set({
    bar: mainBar
    });
</script>


<div class="uk-child-width-expand@s" uk-grid>
        <ContactDetails />  
  <div>
        <ContactForm /> 
  </div>
</div>
