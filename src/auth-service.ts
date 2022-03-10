import { writable } from 'svelte/store';

export class AuthService {
  
  logged_in = null;
  kc: any;
  initialised: any;
  initOptions: any

  constructor(config: {}) {
    //@ts-ignore
    this.kc = Keycloak(config);
    this.initialised = writable(false);
  }

  private init(initOptions: {}) {
    this.kc
    .init(initOptions)
    .then((auth) => {
      this.logged_in=auth;
      if(auth) {
        this.logged_in=true;

        localStorage.setItem("svelte-token", this.kc.token);
    	  localStorage.setItem("svelte-refresh-token", this.kc.refreshToken);


        setTimeout(() => {
          this.kc.updateToken(5).then((refreshed) => {
              if (refreshed) {
                  console.info('Token was successfully refreshed');
                  console.debug('Token refreshed' + refreshed);
                  console.info('Token refreshed' + refreshed);
              } else {
                  console.info('Token is still valid');
                  console.warn('Token not refreshed, valid for '
                      + Math.round(this.kc.tokenParsed.exp + this.kc.timeSkew - new Date().getTime() / 1000) + ' seconds');
              }
          }).catch(() => {
              console.error('Failed to refresh token, or the session has expired');
          });
        }, 10000)
        console.info("Authenticated");
      }
    })
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
  }

  public refresh() {
      this.init(this.buildInitParams());
  }

  public logout() {
      localStorage.removeItem(this.kc.access_token);
      localStorage.removeItem(this.kc.refresh_token);
      localStorage.removeItem(this.kc.exp);
      this.kc.logout();
  }

  //Checks whether there is the back redirect from auth server 
  public checkParams(){
      let params = (new URL(document.location.href.replace("#", "?"))).searchParams;
      if(params.get("state") && params.get("session_state") && params.get("code")){
          this.init(this.buildInitParams());
      }
  }

}
