import { Injectable } from '@angular/core';
import {AuthenticationService} from "./authentication.service";
import jwtDecode from "jwt-decode";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Task} from "../interfaces/task.model";
import {UserDTO} from "../interfaces/UserDTO";

@Injectable({
  providedIn: 'root'
})
export class UserService {
apiUrl: string = "http://localhost:8080/api/user"
decodedToken?: any;

  constructor(private authService: AuthenticationService, private http: HttpClient) {
    const token = this.authService.getToken();
    if (typeof  token === 'string') {
      this.decodedToken = jwtDecode(token)
    }
  }

  getUsername(): string | null {
    if (this.decodedToken) {
      return this.decodedToken.sub;
      }
    return null;
    }

   getTasks(username: string | undefined): Observable<Task[]> {
    let httOptions = this.authService.httpOptions;
    return this.http.get<Task[]>(`${this.apiUrl}/tasks/${username}`, httOptions)
   }

   getUsernames(): Observable<UserDTO[]> {
    return  this.http.get<UserDTO[]>(`${this.apiUrl}/list-all`, this.authService.httpOptions)
   }
}
