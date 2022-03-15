import { writable } from "svelte/store";

export const welcomeBar = [
  {
    title: "Secure",
    icon: "fas fa-sign-in-alt fa-2x",
    colour: "color:green",
    link: "/#/secure",
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
  title: "Home",
  icon: "fas fa-home fa-2x",
  colour: "color:rgb(152, 37, 37)",
  link: "/",
  
}, {
  title: "Secure",
  icon: "fas fa-sign-in-alt fa-2x",
  colour: "color:green",
  link: "/#/secure",
}];


export const navBar = writable({
  bar: [],
});

export const title = writable("");
export const subTitle = writable("");

export const userInfo = writable({});
export const authStore = writable(null);
