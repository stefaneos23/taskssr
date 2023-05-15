import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import {User} from "../user";
import {Observable} from "rxjs";
import {RegisterReq} from "../interfaces/RegisterReq";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseUrl="http://localhost:8080/api/auth";
  constructor(private httpClient: HttpClient) { }

  registerUser(registerReq:RegisterReq): Observable<any>{
    return this.httpClient.post(`${this.baseUrl}/register`,registerReq, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
