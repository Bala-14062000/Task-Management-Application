import { Routes } from "@angular/router";
import { EditComponent } from "src/app/components/edit/edit.component";
import { ListTasksComponent } from "src/app/components/list-tasks/list-tasks.component";
import { RegisterComponent } from "src/app/components/register/register.component";

export const TaskRoutes: Routes = [
    {
        path: 'tasks',
        redirectTo: 'tasks/list'
    },
    {
        path: 'tasks/list',
        component: ListTasksComponent
    },
    {
        path: 'tasks/register',
        component: RegisterComponent
    },
    {
        path: 'tasks/edit/:id',
        component: EditComponent
    }
];
