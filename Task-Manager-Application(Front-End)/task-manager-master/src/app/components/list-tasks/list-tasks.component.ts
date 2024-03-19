import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/modules/tasks/models/task.model';
import { TaskService } from 'src/app/modules/tasks/task.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.scss']
})
export class ListTasksComponent implements OnInit {
  constructor(private readonly service: TaskService) {}

  tasks: Task[] = [] as Task[];

  ngOnInit(): void {
    this.tasks = this.listTasks();
  }

  private listTasks(): Task[] {
    return this.service.listAll();
  }

  public onChangeStatus(id: number): void {
    this.service.updateStatus(id);
    this.tasks = this.listTasks();
  }

  public deleteTask(task: Task): void {
    if (confirm('Do you want to remove this task "' + task.name + '"?') && !!task.id || task.id === 0) {
      this.service.delete(task.id);
      this.tasks = this.listTasks();
    }
  }
}
