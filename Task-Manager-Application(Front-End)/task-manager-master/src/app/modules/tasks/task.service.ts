import { Injectable } from '@angular/core';
import { Task, TaskDTO } from './models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor() {}

  listAll(): Task[] {
    const tasks = localStorage['tasks']
    return tasks ? JSON.parse(tasks) : [];
  }

  register(task: Task): void {
    const tasks: Task[] = this.listAll();
    const lastId: number | undefined = tasks?.length ? tasks[tasks.length - 1].id : undefined;
    task.id = lastId !== undefined ? lastId + 1 : 0;
    task.status = false;
    tasks.push(TaskDTO.mapperDto(task));
    this.save(tasks);
  }

  get(id: number): Task | undefined {
    const tasks: Task[] = this.listAll();
    return tasks.find((task: Task) => task.id === id);
  }

  update(task: Task): void {
    let tasks: Task[] = this.listAll();
    tasks = tasks.map((element: Task) => {
      if (element.id === task.id) {
        return TaskDTO.mapperDto(task);
      }
      return element
    });
    this.save(tasks)
  }

  updateStatus(id: number): void {
    const task: Task | undefined = this.get(id);

    if (task) {
      task.status = !task.status;
      this.update(task);
    }
  }

  delete(id: number): void {
    const tasks: Task[] = this.listAll();
    const tasksUpdate: Task[] = tasks.filter((task: Task) => task.id !== id);
    this.save(tasksUpdate);
  }

  save(tasks: Task[]): void {
    localStorage['tasks'] = JSON.stringify(tasks)
  }
}
