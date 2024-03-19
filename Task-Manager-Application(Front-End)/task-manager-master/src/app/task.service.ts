// task.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = 'http://your-api-base-url/tasks';

  constructor(private http: HttpClient) {}

  // Fetch assigned tasks for the current employee
  getAssignedTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUrl}/assigned`);
  }

  // Update the status of a task
  updateTaskStatus(task: Task): Observable<any> {
    return this.http.put(`${this.baseUrl}/${task.id}/status`, { status: task.status });
  }

  // Submit completion details for a task
  submitCompletionDetails(task: Task): Observable<any> {
    return this.http.put(`${this.baseUrl}/${task.id}/completion-details`, { completionDetails: task.completionDetails });
  }
}
