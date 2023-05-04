import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterUserComponent } from './login&register/register-user/register-user.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { LoginUserComponent } from './login&register/login-user/login-user.component';
import { TaskDetailsComponent } from './tasks/task-details/task-details.component';
import { MyTasksComponent } from './tasks/my-tasks/my-tasks.component';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { AllTasksComponent } from './tasks/all-tasks/all-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    LoginUserComponent,

    TaskDetailsComponent,
     MyTasksComponent,
     AddTaskComponent,
     AllTasksComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
