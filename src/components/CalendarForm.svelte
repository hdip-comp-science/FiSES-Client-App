<script>
    async function handleSubmit() {
        console.log("form submitted")
        }
</script>


<form class="uk-form-stacked" on:submit|preventDefault={handleSubmit}>

    <div class="uk-margin">
        <label class="uk-form-label" for="event_tilte">Event Title</label>
        <div class="uk-form-controls">
            <input class="uk-input" id="event_tilte" type="text" placeholder="Booking Description">
        </div>
    </div>
    <div class="uk-margin">
        <label class="uk-form-label" for="event_date">Event Date</label>
        <div class="uk-form-controls">
            <input class="uk-input" id="event_date" type="date" placeholder="Some text...">
        </div>
    </div>
    <div class="uk-flex uk-flex-center">
        <button  type="submit" >Create Booking</button>
        <!-- <input type="submit" value="Upload file" /> -->
    </div>
   
</form>
