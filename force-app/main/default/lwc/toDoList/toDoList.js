import { LightningElement } from 'lwc';
import addEvent from '@salesforce/apex/EventController.addEvent';

export default class ToDoList extends LightningElement {
    taskDescription;
    taskDate;

    handleDescriptionChange(event) {
        this.taskDescription = event.target.value;
    };

    handleDateChange(event) {
        this.taskDate = event.target.value;
    };

    async handleCreate() {
        addEvent({ description: this.taskDescription, duedate: this.taskDate });
        alert('Task created.');
        this.handleReset();
    };

    handleReset(){
        this.taskDate = '';
        this.taskDescription = '';
    };
}