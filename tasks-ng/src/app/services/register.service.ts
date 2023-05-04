import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import {User} from "../user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseUrl="http://localhost:8080/api/auth";
  constructor(private httpClient: HttpClient) { }

  registerUser(user: User): Observable<Object>{
    console.log(user);
    return this.httpClient.post(`${this.baseUrl}/register`,user, {
      headers: {
        'Access-Control-Allow-Origin': "http://localhost:4200"
      }
    });
  }
}
