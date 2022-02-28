import { writable } from "svelte/store";

export const welcomeBar = [
  {
    title: "Log In",
    icon: "fas fa-user-edit fa-3x",
    colour: "color:green",
    link: "/#/login",
  },
];

export const mainBar = [{
  title: "Documents",
  icon: "fas fa-file",
  colour: "color:rgb(152, 37, 37)",
  link: "/#/documents",
}, {
  title: "ContactUs",
  icon: "fas fa-info-circle",
  colour: "color:rgb(152, 37, 37)",
  link: "/#/contact",
}, {
  title: "FileViewer",
  icon: "fas fa-book-open",
  colour: "color:rgb(152, 37, 37)",
  link: "/#/file",
}];


export const navBar = writable({
  bar: [],
});

export const title = writable("");
export const subTitle = writable("");
