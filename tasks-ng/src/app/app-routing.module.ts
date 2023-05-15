import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {RegisterUserComponent} from "./login&register/register-user/register-user.component";
import {LoginUserComponent} from "./login&register/login-user/login-user.component";
import {HttpClientModule} from "@angular/common/http";
import {LogoutComponent} from "./login&register/logout/logout.component";


const routes: Routes = [
  {path: 'register', component: RegisterUserComponent},
  {path: 'login', component: LoginUserComponent},
  {path: 'logout', component: LogoutComponent},
  {path: '', loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule)}
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule, HttpClientModule]
})
export class AppRoutingModule { }
