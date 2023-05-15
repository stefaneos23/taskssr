import {Component, OnInit} from '@angular/core';
import {RegisterService} from "../../services/register.service";
import {RegisterReq} from "../../interfaces/RegisterReq";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  registerReq:RegisterReq={
    username:"",
    password:""
  }

  constructor(private registerService: RegisterService) {}

  ngOnInit(): void {
  }

  userRegister() {
    this.registerService.registerUser(this.registerReq).subscribe({
      next:(data) => {
        console.log(data)
      }
    });
  }
}
