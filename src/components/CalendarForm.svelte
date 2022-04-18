<script>
    async function handleSubmit() {
        console.log("form submitted")
        }
</script>


<form class="uk-form-stacked" on:submit|preventDefault={handleSubmit}>

    <div class="uk-margin">
        <label class="uk-form-label" for="summary">Summary</label>
        <div class="uk-form-controls">
            <input class="uk-input" id="summary" type="text" placeholder="">
        </div>
    </div>
    <div class="uk-margin">
        <label class="uk-form-label" for="description">Description</label>
        <div class="uk-form-controls">
            <textarea class="uk-textarea" rows="3"  id="summary" type="text" placeholder="Booking Description"></textarea>
        </div>
    </div>
    <div class="uk-margin">
        <label class="uk-form-label" for="location">Location</label>
        <div class="uk-form-controls">
            <input class="uk-input" id="location" type="text" placeholder="Location">
        </div>
    </div>
    <div class="uk-margin">
        <label class="uk-form-label" for="start_date">Start date-time</label>
        <div class="uk-form-controls">
            <input class="uk-input" id="start_date" type="datetime-local" placeholder="">
        </div>
    </div>
    <div class="uk-margin">
        <label class="uk-form-label" for="end_date">End date-time</label>
        <div class="uk-form-controls">
            <input class="uk-input" id="end_date" type="datetime-local" placeholder="">
        </div>
    </div>
    <div class="uk-flex uk-flex-column uk-width-1-1">
        <button class="uk-button uk-button-primary" type="submit">Create Booking</button>
        <!-- <button  type="submit" >Create Booking</button> -->
        <!-- <input type="submit" value="Upload file" /> -->
    </div>   
</form>
