import {Component} from '@angular/core';
import {User} from "../../user";
import {LogiuserService} from "../../services/logiuser.service";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {

  serverMessage: string;
  showServerMessage: boolean

  user: User = new User();
  constructor(private loginuserService: LogiuserService, private router:Router, private authService: AuthenticationService) {
    this.serverMessage = "";
    this.showServerMessage = false;
  }


  userLogin() {
    console.log(this.user);
    this.router.navigate(['my-tasks'])
  }
}
