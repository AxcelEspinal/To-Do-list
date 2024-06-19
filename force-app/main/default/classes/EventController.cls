public with sharing class EventController {
    @AuraEnabled (cacheable=false)
    public static void addEvent(String description, Date duedate) {
        Event ev = new Event (ActivityDate = duedate, Description = description, DurationInMinutes = 0, ActivityDateTime = datetime.now());
        insert ev;
    }

    @AuraEnabled (cacheable=true)
    public static List<Event> getEvents(){
        return [SELECT Id, ActivityDate, Description from EVENT ORDER BY CreatedDate DESC LIMIT 10];
    }
}