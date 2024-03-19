import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TitleButton } from 'src/app/common/enum/titleButton.enum';
import { Task } from 'src/app/modules/tasks/models/task.model';
import { TaskService } from 'src/app/modules/tasks/task.service';

type NewType = Task;

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  constructor(
    private readonly service: TaskService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}


  task: Task = {} as Task;
  title: string = TitleButton.update;
  @ViewChild("formTask", { static: true }) formTask!: NgForm;

  public ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.task = this.service.get(id) || {};
  }

  public onChange(task: Task): void {
    this.task = task;
  }

  public updateTask(): void {
    if (this.formTask.form.valid) {
      this.service.update(this.task);
      this.router.navigate(['/tasks']);
    }
  }
}
