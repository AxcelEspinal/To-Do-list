import { LightningElement, wire } from 'lwc';
import getEvents from '@salesforce/apex/EventController.getEvents';

export default class EventList extends LightningElement {
    @wire(getEvents) events;
}