import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "./services/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task Manager App';
  isMainWindowOn = true;

  constructor(private router: Router, private authService: AuthenticationService) {}

  ngDoCheck(): void {
    let currentRoute = this.router.url;
    this.isMainWindowOn = !(currentRoute == "/login" || currentRoute == "/register");
  }

  handleLogout(): void {
    this.authService.logOut();
    location.reload();
  }
}
