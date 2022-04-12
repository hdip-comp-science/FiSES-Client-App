<script>
    import {getContext, onMount} from 'svelte'

    const calendarService = getContext("CalendarService");

    let calendarEventList;
    onMount(async () => {
    calendarEventList = await calendarService.getCalendarEvents()
    })
    
    console.log("events: " + calendarEventList)

</script>


<h3 class="uk-heading-divider">
    Calendar Events 
  </h3>
  <div class="uk-table uk-table-striped">
    <table class="uk-table">
      <thead>
        <th>
            <b style="color: black;">Event</b>
        </th>
        <th>
            <b style="color: black;">Start Time</b>
        </th>
        <th>
            <b style="color: black;">finish Time</b>
        </th>
        <th>
            <b style="color: black;">Email</b>
        </th>
      </thead>
      <tbody class="uk-text-left">
        <!-- {@debug calendarEventList} -->
        {#if calendarEventList}
          {#each calendarEventList.items as event}
            <tr>
                <td>{event.summary}</td>
                <td>{event.start.dateTime}</td>
                <td>{event.end.dateTime}</td>
                <td>{event.creator.email}</td>
            </tr>
            <!-- {@debug calendarEventList} -->
          {/each}
        {/if}
      </tbody>
    </table>
  </div>
  