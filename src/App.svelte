<script>
  import { setContext } from "svelte";
  import {DocumentService} from "./document-service";
  import Main from  "./pages/Main.svelte";
  import Docs from "./pages/Docs.svelte";
  import FileViewer from "./pages/FileViewer.svelte";
  import Contact from "./pages/Contact.svelte";
  import Navigator from "./components/Navigator.svelte";
  import Router from "svelte-spa-router";
  import Login from "./pages/Login.svelte";

  // enable the sharing of doc-service obj using context
  setContext("DocumentService", new DocumentService("http://localhost:4000"));


  let routes = {
    "/" : Main,
    "/documents": Docs,
    "/contact": Contact,
    "/login": Login,
    "/file": FileViewer,
  }
</script>

<div class="uk-container">
  <Navigator />
  <Router {routes} />
</div>
