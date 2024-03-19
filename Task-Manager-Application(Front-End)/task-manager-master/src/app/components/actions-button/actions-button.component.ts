import { Component, Input } from '@angular/core';
import { Task } from 'src/app/modules/tasks/models/task.model';

@Component({
  selector: 'actions-button',
  templateUrl: './actions-button.component.html',
  styleUrls: ['./actions-button.component.scss']
})
export class ActionsButtonComponent {
  isOpen = false;
  @Input() task!: Task;
  
  public onClick(): void {
    this.isOpen = true;
  }

  public closed(): void {
    this.isOpen = false;
  }
}
