// employee-dashboard.component.ts

import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from './task.model';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.loadAssignedTasks();
  }

  loadAssignedTasks(): void {
    this.taskService.getAssignedTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  updateTaskStatus(task: Task): void {
    this.taskService.updateTaskStatus(task).subscribe(() => {
      // Reload assigned tasks after status update
      this.loadAssignedTasks();
    });
  }

  submitCompletionDetails(task: Task): void {
    this.taskService.submitCompletionDetails(task).subscribe(() => {
      // Reload assigned tasks after completion details submission
      this.loadAssignedTasks();
    });
  }
}
