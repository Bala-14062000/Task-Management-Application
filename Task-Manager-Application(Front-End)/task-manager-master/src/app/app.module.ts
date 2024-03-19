import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DeleteButtonComponent } from './components/delete-button/delete-button.component';
import { EditButtonComponent } from './components/edit-button/edit-button.component';
import { HeaderComponent } from './components/header/header.component';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';
import { RegisterComponent } from './components/register/register.component';
import { TasksModule } from './modules/tasks/tasks.module';
import { RegisterButtonComponent } from './components/register-button/register-button.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { FormsModule } from '@angular/forms';
import { InputTextComponent } from './components/input-text/input-text.component';
import { EditComponent } from './components/edit/edit.component';
import { ActionsMobileComponent } from './components/actions-mobile/actions-mobile.component';
import { ActionsButtonComponent } from './components/actions-button/actions-button.component';
import { EmployerDashboardComponent } from './employer-dashboard/employer-dashboard.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListTasksComponent,
    AddButtonComponent,
    DeleteButtonComponent,
    EditButtonComponent,
    CheckboxComponent,
    RegisterComponent,
    RegisterButtonComponent,
    BackButtonComponent,
    InputTextComponent,
    EditComponent,
    ActionsMobileComponent,
    ActionsButtonComponent,
    EmployerDashboardComponent,
    EmployeeDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TasksModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
