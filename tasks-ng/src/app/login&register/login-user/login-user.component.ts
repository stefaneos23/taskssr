import {Component} from '@angular/core';
import {User} from "../../user";
import {LogiuserService} from "../../services/logiuser.service";

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {

  user: User = new User();
  constructor(private loginuserService: LogiuserService) { }

  userLogin() {
    console.log(this.user);
    this.loginuserService.loginUser(this.user).subscribe(data=> {
      alert("Login Successfully!")
    }, error=> alert("Sorry, please enter correct id and password"));
  }
}
