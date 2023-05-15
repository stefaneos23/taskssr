import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {RegisterUserComponent} from './login&register/register-user/register-user.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {LoginUserComponent} from './login&register/login-user/login-user.component';
import {LogoutComponent} from './login&register/logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    LoginUserComponent,
    LogoutComponent,
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
