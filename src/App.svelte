<script>
  import { setContext} from "svelte";
  import { DocumentService } from "./document-service";
  import Main from  "./pages/Main.svelte";
  import Docs from "./pages/Docs.svelte";
  import FileViewer from "./pages/FileViewer.svelte";
  import NotFound from "./components/NotFound.svelte";
  import Contact from "./pages/Contact.svelte";
  import Navigator from "./components/Navigator.svelte";
  import Router from "svelte-spa-router";
  import Secure from "./pages/Secure.svelte";
import Footer from "./components/Footer.svelte";

  // enable the sharing of doc-service obj using context
  setContext("DocumentService", new DocumentService("http://localhost:8010/proxy"));

  let routes = {
    "/" : Main,
    "/documents": Docs,
    "/contact": Contact,
    "/file": FileViewer,
    "/secure": Secure,
    "*": NotFound
  }
</script>

<div class="uk-container">
  <Navigator />
  <Router {routes} />
  <Footer/>
</div>
