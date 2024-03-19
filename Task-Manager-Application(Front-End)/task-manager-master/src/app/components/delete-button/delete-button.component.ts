import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/modules/tasks/models/task.model';

@Component({
  selector: 'delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss']
})
export class DeleteButtonComponent {
  @Input() task: Task | undefined = {} as Task
  @Output() click = new EventEmitter;

  public onClick(): void {
    this.click.emit(this.task);
  }
}
