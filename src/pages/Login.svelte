<script>
  import {navBar, mainBar, subTitle, title} from "../stores";
  import Keycloak from 'keycloak-js';

  title.set("Field Service Engineering Solutions");
  subTitle.set("Login");
  navBar.set({
    bar: mainBar
  });


  //keycloak init options
  let initOptions = {
      url: 'http://127.0.0.1:8080/auth', 
      realm: 'field-service-engineering-solutions', 
      clientId: 'svelte', 
      onLoad: 'login-required'
  }

  let keycloak = Keycloak(initOptions);


  keycloak.init({ onLoad: initOptions.onLoad })
  .then((auth) => {

    if (!auth) {
        window.location.reload();
    } else {
        console.info("Authenticated");
    }
  }).catch(error => {
  console.error("Authenticated Failed");
  console.log(error);
  });

</script>
