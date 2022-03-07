import { writable } from 'svelte/store';


export const welcomeBar = [
  {
    title: "Log In",
    icon: "fas fa-sign-in-alt fa-2x",
    colour: "color:green",
    link: "/#/documents",
  },
  {
    
  },
];

export const mainBar = [{
  title: "Documents",
  icon: "fas fa-file fa-2x",
  colour: "color:rgb(152, 37, 37)",
  link: "/#/documents",
}, {
  title: "ContactUs",
  icon: "fas fa-info-circle fa-2x",
  colour: "color:rgb(152, 37, 37)",
  link: "/#/contact",
}, {
  title: "Log In",
  icon: "fa-solid fa-right-to-bracket fa-2x",
  colour: "color:green",
  link: "/#/login",
}];


export const navBar = writable({
  bar: [],
});

export const title = writable("");
export const subTitle = writable("");

export const userInfo = writable({});
export const authStore = writable(null);