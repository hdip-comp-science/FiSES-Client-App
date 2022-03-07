
# svelte-client-app

This svelte application is one part of a project submission for Higher Diploma in Computer Science. It is aimed to conosolodate common tools required by the service engineering industry into a single application. It is integrated with keycloak (open source identity and access management). 

## config

    npm install

    configured keycloak client (protocol: openid-connect, access type: public )

    update your keycloak client redirect URIs and Web origins to http://localhost:5000/* and http://localhost:5000/
       
    save keycloak.json to /public (get json contents from your keycloak admin console.  client -> installation tab -> Keycloak OIDC json)

## run dev server

    npm run dev

    (see svelte starter template docs for more options)


## JWT token

the jwt token from keycloak is stored in the `userInfo` store under token.

your backend should validate this, either by consuming the `/protocol/openid-connect/certs` endpoint or storing the public key/cert from keycloak.


## References
[1] [Svelte Documentation](https://svelte.dev/docs)<br>
[2] [JavaScript Adapter](https://github.com/keycloak/keycloak-documentation/blob/main/securing_apps/topics/oidc/javascript-adapter.adoc)<br>
[3] [Svelte App with Keycloak - Medium](https://medium.com/keycloak/securing-a-svelte-app-golang-service-with-keycloak-e095774e5a03)<br>
[4] [Mathew Huie | svelte-keycloak](https://github.com/mphuie/svelte-keycloak)<br>
[5] [Uploading a File](https://dev.to/brunooliveira/uploading-a-file-svelte-form-and-springboot-backend-18m6) <br>
[6] [Form Submit](https://formsubmit.co/) <br>
[7] [Font Awesome Icons](https://fontawesome.com/start) <br>
[8] [UIKit](https://getuikit.com/docs/introduction) <br>
[9] [Keycloak Guide to Securing Applications](https://www.keycloak.org/securing-apps/vue) <br>
