<script>
    import { setContext} from "svelte";
    import { DocumentService } from "./document-service";
    import Main from  "./pages/Main.svelte";
    import Docs from "./pages/Docs.svelte";
    import NotFound from "./components/NotFound.svelte";
    import Contact from "./pages/Contact.svelte";
    import Navigator from "./components/Navigator.svelte";
    import Router from "svelte-spa-router";
    import Secure from "./pages/Secure.svelte";
    import Footer from "./components/Footer.svelte";
    import Calendar from "./pages/Calendar.svelte";
import { CalendarService } from "./calendar-service";

    // enable the sharing of doc-service obj using context
    setContext("DocumentService", new DocumentService("http://localhost:8010/proxy"));

    setContext("CalendarService", new CalendarService("https://www.googleapis.com/calendar/v3/calendars/a26ul1q011tfv5qmjp9dcnnm04@group.calendar.google.com"));

    let routes = {
        "/" : Main,
        "/documents": Docs,
        "/contact": Contact,
        "/events": Calendar,
        "/secure": Secure,
        "*": NotFound
    }
</script>

<div class="uk-container">
    <Navigator />
    <Router {routes} />
    <Footer/>
</div>
