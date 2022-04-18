// import 'dotenv/config'

export class CalendarService {
    calendarEventList = [];

    calendarUrl = "https://www.googleapis.com/calendar/v3/calendars/a26ul1q011tfv5qmjp9dcnnm04@group.calendar.google.com"

    apiKey = import.meta.env.GOOGLE_CALENDAR_API_KEY
    
    constructor(calendarUrl: string) {
        this.calendarUrl = calendarUrl;
    }
    
    async getCalendarEvents() {
        try {
            const response = await fetch(this.calendarUrl + "/events?key="+this.apiKey)
            // console.log(response)
            this.calendarEventList = await response.json();
            console.log(this.calendarEventList)
            return this.calendarEventList;
        } catch (error) {
            return [];
        }
    }
    
}
