import { Component } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrl: './parent-component.component.css',
})
export class ParentComponentComponent {
  taskName: string;
  taskDescription: string;
  notificationMessage: string = '';
  tasks: Task[] = [];

  onCreateTask() {
    if (!this.taskName && !this.taskDescription) return;
    this.tasks.push(new Task(this.taskName, this.taskDescription));
    this.taskName = '';
    this.taskDescription = '';
  }

  recieveNotification(event: any) {
    this.notificationMessage = event;
  }
}
