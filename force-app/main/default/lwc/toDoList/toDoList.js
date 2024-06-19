import { LightningElement } from 'lwc';

export default class ToDoList extends LightningElement {
    taskDescription;
    taskDate;

    handleDescriptionChange(event) {
        this.taskDescription = event.target.value;
    };

    handleDateChange(event) {
        this.taskDate = event.target.value;
    };

    handleCreate() {

    };

    handleReset(){
        this.taskDate = '';
        this.taskDescription = '';
    };
}