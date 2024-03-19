import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/modules/tasks/models/task.model';

@Component({
  selector: 'input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent {
  placeholder = "Enter your task here..."
  @Input() task: Task = {} as Task;
  @Output() onChange = new EventEmitter;
  
  public onChangeValue(): void {    
    this.onChange.emit(this.task);
  }
}
