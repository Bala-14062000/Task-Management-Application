// employer-dashboard.component.ts

import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from './task.model';

@Component({
  selector: 'app-employer-dashboard',
  templateUrl: './employer-dashboard.component.html',
  styleUrls: ['./employer-dashboard.component.css']
})
export class EmployerDashboardComponent implements OnInit {
  newTask: Task = { name: '', description: '', deadline: null, assignedTo: '', status: '', completionDetails: '' };
  employees: string[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.taskService.getEmployees().subscribe(employees => {
      this.employees = employees;
    });
  }

  assignTask(): void {
    this.taskService.assignTask(this.newTask).subscribe(() => {
      // Reset newTask object after task assignment
      this.newTask = { name: '', description: '', deadline: null, assignedTo: '', status: '', completionDetails: '' };
    });
  }
}
