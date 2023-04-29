import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";
import { RegisterUserComponent} from "./register-user/register-user.component";
import { LoginUserComponent} from "./login-user/login-user.component";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  { path: 'app-register-user', component: RegisterUserComponent},
  { path: 'app-login-user', component: LoginUserComponent},
  {path: '', redirectTo: '/app-login-user', pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule, HttpClientModule]
})
export class AppRoutingModule { }
