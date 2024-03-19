import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/modules/tasks/models/task.model';
import { TaskService } from 'src/app/modules/tasks/task.service';

@Component({
  selector: 'actions-mobile',
  templateUrl: './actions-mobile.component.html',
  styleUrls: ['./actions-mobile.component.scss']
})
export class ActionsMobileComponent {

  constructor(private service: TaskService) {}

  @Input() isOpen = false;
  @Input() task!: Task;
  @Output() changed = new EventEmitter;

  public close(): void {
    this.isOpen = false;
    this.changed.emit();
  }

  public deleteTask(): void {
    if (!this.task) return;

    if (confirm('Do you want to remove this task "' + this.task.name + '"?') && !!this.task.id || this.task.id === 0) {
      this.service.delete(this.task.id);
      window.location.reload();
    }
  }
}
