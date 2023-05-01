import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {RegisterUserComponent} from "./login&register/register-user/register-user.component";
import {LoginUserComponent} from "./login&register/login-user/login-user.component";
import {HttpClientModule} from "@angular/common/http";
import {MyTasksComponent} from "./tasks/my-tasks/my-tasks.component";
import {TaskDetailsComponent} from "./tasks/task-details/task-details.component";
import {AddTaskComponent} from "./tasks/add-task/add-task.component";

const routes: Routes = [
  { path: 'app-register-user', component: RegisterUserComponent},
  { path: 'app-login-user', component: LoginUserComponent},
  {path: '', redirectTo: '/app-login-user', pathMatch: 'full'},
  {path: 'tasks', component: MyTasksComponent},
  {path: 'tasks/:id', component: TaskDetailsComponent},
  {path: 'add', component: AddTaskComponent}
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule, HttpClientModule]
})
export class AppRoutingModule { }
