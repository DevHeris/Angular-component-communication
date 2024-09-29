import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.css',
})
export class ChildComponentComponent {
  @Input() tasks: Task[];
  @Output() taskCompleted = new EventEmitter<string>();

  updateStatus(
    event: any,
    task: { taskName: string; taskDescription: string; taskStatus: string }
  ) {
    task.taskStatus = event.target.checked ? 'completed' : 'pending';
    if (task.taskStatus === 'completed') {
      this.taskCompleted.emit(`Task "${task.taskName}" has been completed!`);
    }
  }
}
