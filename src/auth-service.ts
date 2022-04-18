import Keycloak, { KeycloakInitOptions } from "keycloak-js";
import { writable } from 'svelte/store';
import { User } from "../src/components/User.class";
import { userInfo } from './store';
import {title, subTitle, navBar, welcomeBar, mainBar} from "./store"

title.set("Field Service Engineering Solutions");
navBar.set({
  bar: welcomeBar
});

// local storage mapping template
 export type localStorageMapping = {"access_token": string, "refresh_token": string, "exp": string};

export class AuthService {
  
  logged_in: boolean;
  // Declaring keycloak connector
  private kc: any;
  //This keeps track whether Auth and Role guards can call buildUser method 
  private initialized: any;
  // 
  private localStorageMapping: localStorageMapping;

  initOptions: KeycloakInitOptions = { onLoad: "login-required", checkLoginIframe: false };

  //This class builds the actual User from access token
  public buildUser(): User {
    let parsed = this.kc.tokenParsed;
    if(!parsed){
        return null;
    }
    //If you also want the resource roles, just concat them here
    return new User(parsed["sub"], parsed["preferred_username"], parsed["given_name"], parsed["family_name"], parsed["realm_access"]["roles"]);
  };


  public constructor(config: {}, localStorageMapping?: localStorageMapping) {
    // const instance = {
    //   url: "http://127.0.0.1:8080/auth",
    //   realm: "field-service-engineering-solutions",
    //   clientId: "svelte",
    // };
    
    //@ts-ignore
    this.kc = new Keycloak(config);

    this.initialized = writable(false);
    this.logged_in = null;

    if(localStorageMapping){
      this.localStorageMapping = localStorageMapping;
    }else{
      this.localStorageMapping = {
          "access_token": "access_token",
          "refresh_token": "refresh_token",
          "exp": "exp"
      };
    }

    //Check, if user is authenticated
    if (localStorage.getItem(this.kc.token) !== null) {
      this.refresh();
    }
  }

  public isInitialized(): any{
    return this.initialized;
  }

  private init(initOptions: {}) {
    this.kc
    .init(initOptions)
    .then((auth) => {
      this.logged_in=auth;
      if(auth) {
        this.logged_in=true;
        auth = true;

        localStorage.setItem(this.localStorageMapping.access_token, this.kc.token);
    	  localStorage.setItem(this.localStorageMapping.refresh_token, this.kc.refreshToken);
        localStorage.setItem(this.localStorageMapping.exp, this.kc.tokenParsed["exp"]);

        // Set the token refresh update. Not most efficient use of server resources. Look at check token when making api calls using (updateToken)
        setTimeout(() => {
          this.kc.updateToken(5).then((refreshed) => {
              if (refreshed) {
                localStorage.setItem(this.localStorageMapping.access_token, this.kc.token);
                localStorage.setItem(this.localStorageMapping.refresh_token, this.kc.refreshToken);
                localStorage.setItem(this.localStorageMapping.exp, this.kc.tokenParsed["exp"]);
                console.info('Token was successfully refreshed');
                console.debug('Token refreshed' + refreshed);
                  
              } else {
                console.info('Token is still valid');
                console.warn('Token not refreshed, valid for '
                    + Math.round(this.kc.tokenParsed["exp"] + this.kc.timeSkew - new Date().getTime() / 1000) + ' seconds');
              }
          }).catch(() => {
              console.error('Failed to refresh token, or the session has expired');
          });
        }, 10000)
        console.info("Authenticated");
        subTitle.set(`Currently Logged in as: ${this.kc.tokenParsed?.preferred_username} `);
        navBar.set({
          bar: mainBar
        });

        this.kc.loadUserInfo().then((user) => {
          user.token = this.kc.idToken
          userInfo.set(user)
        });
      }
      this.initialized.set(true);
    }).catch ((error) => {
      // window.location.reload();
      console.error('Error:', error);
    });
  }

  private buildInitParams(onLoad: string = "login-required", silentCheckSsoRedirectUri?: string): any {
    return {
        onLoad,
        token: localStorage.getItem(this.kc.access_token),
        refreshToken: localStorage.getItem(this.kc.refresh_token),
        silentCheckSsoRedirectUri
    };
  }

  public login() {
    this.init(this.buildInitParams());
    // this.init(this.initOptions);

  }

  public refresh() {
      this.init(this.buildInitParams());
  }

  public logout() {
    localStorage.removeItem(this.localStorageMapping.access_token);
    localStorage.removeItem(this.localStorageMapping.refresh_token);
    localStorage.removeItem(this.localStorageMapping.exp);
    this.kc.logout();
  }

  //Checks whether there is the back redirect from auth server 
  public checkParams(){
    let params = (new URL(document.location.href.replace("#", "?"))).searchParams;
    if(params.get("state") && params.get("session_state") && params.get("code")){
      // this.init(this.buildInitParams());
    }
  }

}
