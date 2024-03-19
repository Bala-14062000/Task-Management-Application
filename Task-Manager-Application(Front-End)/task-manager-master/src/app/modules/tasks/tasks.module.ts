import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TaskService } from './task.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [TaskService]
})
export class TasksModule {}
