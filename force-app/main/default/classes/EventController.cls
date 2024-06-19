public with sharing class EventController {
    @AuraEnabled (cacheable=true)
    public static void addEvent(String description, Datetime duedate) {
        Event ev = new Event (ActivityDate = duedate.date(), Description = description);
        insert ev;
    }

    @AuraEnabled (cacheable=true)
    public static List<Event> getEvents(){
        return [SELECT Id, ActivityDate, Description from EVENT LIMIT 10];
    }
}