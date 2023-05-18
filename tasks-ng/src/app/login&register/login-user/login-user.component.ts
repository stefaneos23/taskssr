import {Component} from '@angular/core';
import {LogiuserService} from "../../services/logiuser.service";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {LoginReq} from "../../interfaces/LoginReq";

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {
  loginReq: LoginReq = {};
  serverMessage: string;
  showServerMessage: boolean
  constructor(private loginuserService: LogiuserService, private router:Router, private auhService: AuthenticationService) {
    this.serverMessage = "";
    this.showServerMessage = false;
  }
  userLogin() {
    this.auhService.login(this.loginReq).subscribe((res) => {
      this.auhService.setUsernameAndTokenIntoLocalStorage(res.username, res.token)
      if (res) {
        this.router.navigate(['my-tasks'])
      }
    })
  }
}
