import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LogiuserService {
  private baseUrl = "http://localhost:8080/api/auth"
  constructor(private httpClient: HttpClient) { }

  loginUser(user: User): Observable<any>{
    console.log(user);
    return this.httpClient.post(`${this.baseUrl}/login`, user);
  }
}
